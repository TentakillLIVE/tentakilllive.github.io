import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, set, get, onValue, update, push, remove, onDisconnect } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// ============================================
// Firebase Configuration
// ============================================
const firebaseConfig = {
    apiKey: "AIzaSyCTPGCgKWTE2-EFXC5dKoaenVdux5Bsf_0",
    authDomain: "watch-party-1ef2d.firebaseapp.com",
    databaseURL: "https://watch-party-1ef2d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "watch-party-1ef2d",
    storageBucket: "watch-party-1ef2d.firebasestorage.app",
    messagingSenderId: "297160888481",
    appId: "1:297160888481:web:68e3248aca6d102ca9e0e0"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ============================================
// State Variables
// ============================================
let player = null;
let currentUser = null;
let currentRoom = null;
let ytApiReady = false;

// Sync state
let syncState = {
    isPlaying: false,
    currentTime: 0,
    videoId: null,
    lastUpdate: 0,
    updatedBy: null
};
let ignorePlayerEvents = false;
let pendingPlayState = null; // Used to apply play state after video is cued

// Queue state
let videoQueue = [];
let historyQueue = [];

// Progress update interval
let progressInterval = null;

// Presence and idle state
let heartbeatInterval = null;
let idleCheckInterval = null;
let idlePromptTimeout = null;
let idleCountdownInterval = null;
let titleFlashInterval = null;
let faviconFlashInterval = null;
let originalTitle = '';
let lastActivityTime = Date.now();
const HEARTBEAT_INTERVAL = 5 * 60 * 1000;      // 5 minutes - ping to confirm still connected
const IDLE_PROMPT_TIME = 60 * 60 * 1000;       // 1 hour - show "still there?" prompt
const IDLE_PROMPT_TIMEOUT = 60 * 1000;         // 60 seconds - time to respond to prompt
const USER_TIMEOUT = 10 * 60 * 1000;           // 10 minutes - consider disconnected if no heartbeat
const ROOM_CLEANUP_TIME = 60 * 60 * 1000;      // 60 minutes - delete room if no users

// ============================================
// DOM Elements
// ============================================
const loginPanel = document.getElementById('login-panel');
const watchRoom = document.getElementById('watch-room');
const usernameInput = document.getElementById('username-input');
const roomInput = document.getElementById('room-input');
const joinRoomBtn = document.getElementById('join-room-btn');
const roomNameDisplay = document.getElementById('room-name-display');
const usernameDisplay = document.getElementById('username-display');
const userAvatar = document.getElementById('user-avatar');
const shareBtn = document.getElementById('share-btn');
const shareModal = document.getElementById('share-modal');
const closeModal = document.getElementById('close-modal');
const shareLink = document.getElementById('share-link');
const copyLinkBtn = document.getElementById('copy-link-btn');
const videoUrlInput = document.getElementById('video-url-input');
const addVideoBtn = document.getElementById('add-video-btn');
const historyQueueEl = document.getElementById('history-queue');
const upcomingQueueEl = document.getElementById('upcoming-queue');
const currentVideoThumb = document.getElementById('current-video-thumb');
const currentVideoTooltip = document.getElementById('current-video-tooltip');
const activityFeed = document.getElementById('activity-feed');
const usersCount = document.getElementById('users-count');
const playerOverlay = document.getElementById('player-overlay');
const toastContainer = document.getElementById('toast-container');

// Custom controls
const ctrlPlay = document.getElementById('ctrl-play');
const ctrlPrev = document.getElementById('ctrl-prev');
const ctrlNext = document.getElementById('ctrl-next');
const ctrlRewind = document.getElementById('ctrl-rewind');
const ctrlForward = document.getElementById('ctrl-forward');
const ctrlMute = document.getElementById('ctrl-mute');
const volumeSlider = document.getElementById('volume-slider');
const progressContainer = document.getElementById('progress-container');
const progressFill = document.getElementById('progress-fill');
const progressThumb = document.getElementById('progress-thumb');
const progressHoverTime = document.getElementById('progress-hover-time');
const timeCurrent = document.getElementById('ctrl-time-current');
const timeTotal = document.getElementById('ctrl-time-total');
const iconPlay = document.getElementById('icon-play');
const iconPause = document.getElementById('icon-pause');
const iconVolume = document.getElementById('icon-volume');
const iconMuted = document.getElementById('icon-muted');
const playerClickBlocker = document.getElementById('player-click-blocker');

// ============================================
// YouTube API
// ============================================
window.onYouTubeIframeAPIReady = () => {
    console.log('YouTube API Ready');
    ytApiReady = true;
    
    // Check if we can auto-join (have both room and user in URL)
    if (urlRoom && urlUser) {
        joinRoom(urlRoom, urlUser);
    }
};

setTimeout(() => {
    if (typeof YT !== 'undefined' && YT.Player && !ytApiReady) {
        console.log('YouTube API was already loaded');
        ytApiReady = true;
        
        // Check if we can auto-join
        if (urlRoom && urlUser) {
            joinRoom(urlRoom, urlUser);
        }
    }
}, 100);

// ============================================
// URL Handling & Auto-Join
// ============================================
const urlParams = new URLSearchParams(window.location.search);
const urlRoom = urlParams.get('room');
const urlUser = urlParams.get('user');

function checkAutoJoin() {
    // If we have both room and user in URL, auto-join
    if (urlRoom && urlUser && ytApiReady) {
        joinRoom(urlRoom, urlUser);
        return;
    }
    
    // If we have room but no user, pre-fill room and ask for username
    if (urlRoom) {
        roomInput.value = urlRoom;
        roomInput.disabled = true;
        document.querySelector('.input-group:has(#room-input) label').textContent = 'Joining Room';
    }
    
    // If we have user from a previous session, pre-fill it
    if (urlUser) {
        usernameInput.value = urlUser;
    }
}

checkAutoJoin();

// ============================================
// Utility Functions
// ============================================
function extractVideoId(url) {
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([^&\n?#]+)/,
        /^([a-zA-Z0-9_-]{11})$/
    ];
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
    }
    return null;
}

function getVideoThumbnail(videoId) {
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
}

function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function generateUserId() {
    return 'user_' + Math.random().toString(36).substring(2, 9);
}

function getTimeAgo(timestamp) {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return 'just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
}

// ============================================
// Activity Feed
// ============================================
function addActivity(type, username, detail = '') {
    const activityRef = ref(db, `rooms/${currentRoom}/activity`);
    
    // Check for refresh pattern (leave + join within 1 second)
    if (type === 'join') {
        get(activityRef).then(snapshot => {
            const activities = snapshot.val();
            if (activities) {
                const activityList = Object.entries(activities)
                    .map(([key, val]) => ({ ...val, key }))
                    .filter(a => a.username === username)
                    .sort((a, b) => b.timestamp - a.timestamp);
                
                const lastActivity = activityList[0];
                
                // If the last activity was a "leave" within 1 second, replace with "refresh"
                if (lastActivity && 
                    lastActivity.type === 'leave' && 
                    (Date.now() - lastActivity.timestamp) < 1000) {
                    // Remove the leave activity and add refresh instead
                    remove(ref(db, `rooms/${currentRoom}/activity/${lastActivity.key}`));
                    push(activityRef, {
                        type: 'refresh',
                        username,
                        detail,
                        timestamp: Date.now()
                    });
                    return;
                }
            }
            
            // Normal join
            push(activityRef, {
                type,
                username,
                detail,
                timestamp: Date.now()
            });
        });
    } else {
        push(activityRef, {
            type,
            username,
            detail,
            timestamp: Date.now()
        });
    }
}

function renderActivity(activities) {
    if (!activities || Object.keys(activities).length === 0) {
        activityFeed.innerHTML = '<div class="activity-empty"><p>Activity will appear here</p></div>';
        return;
    }
    
    const items = Object.entries(activities)
        .map(([key, val]) => ({ ...val, id: key }))
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 50);
    
    const icons = {
        play: '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
        pause: '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>',
        seek: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
        video: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/></svg>',
        join: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>',
        leave: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
        queue: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/></svg>',
        refresh: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>'
    };
    
    const messages = {
        play: 'resumed playback',
        pause: 'paused the video',
        seek: `jumped to`,
        video: 'started a new video',
        join: 'joined the room',
        leave: 'left the room',
        queue: 'added to queue',
        refresh: 'refreshed the page'
    };
    
    activityFeed.innerHTML = items.map(item => `
        <div class="activity-item">
            <div class="activity-icon ${item.type}">${icons[item.type] || ''}</div>
            <div class="activity-content">
                <div><strong>${item.username}</strong> <span>${messages[item.type]}${item.detail ? ' ' + item.detail : ''}</span></div>
                <div class="activity-time">${getTimeAgo(item.timestamp)}</div>
            </div>
        </div>
    `).join('');
}

// ============================================
// Queue Management
// ============================================
function renderQueues() {
    // Render history queue
    if (historyQueue.length > 0) {
        historyQueueEl.innerHTML = historyQueue.map((video, index) => `
            <div class="queue-item" data-index="${index}" data-type="history" data-video-id="${video.videoId}">
                <img src="${getVideoThumbnail(video.videoId)}" alt="Video thumbnail">
            </div>
        `).join('');
    } else {
        historyQueueEl.innerHTML = '';
    }
    
    // Render upcoming queue
    if (videoQueue.length > 0) {
        upcomingQueueEl.innerHTML = videoQueue.map((video, index) => `
            <div class="queue-item" data-index="${index}" data-type="upcoming" data-video-id="${video.videoId}">
                <img src="${getVideoThumbnail(video.videoId)}" alt="Video thumbnail">
                <button class="remove-btn" data-index="${index}">×</button>
            </div>
        `).join('');
    } else {
        upcomingQueueEl.innerHTML = '';
    }
    
    // Event listeners for upcoming queue
    upcomingQueueEl.querySelectorAll('.queue-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-btn')) return;
            playFromQueue(parseInt(item.dataset.index));
        });
        
        // Tooltip on hover
        item.addEventListener('mouseenter', showQueueTooltip);
        item.addEventListener('mouseleave', hideGlobalTooltip);
    });
    
    upcomingQueueEl.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeFromQueue(parseInt(btn.dataset.index));
        });
    });
    
    historyQueueEl.querySelectorAll('.queue-item').forEach(item => {
        item.addEventListener('click', () => {
            playFromHistory(parseInt(item.dataset.index));
        });
        
        // Tooltip on hover
        item.addEventListener('mouseenter', showQueueTooltip);
        item.addEventListener('mouseleave', hideGlobalTooltip);
    });
}

// Global tooltip element
const globalTooltip = document.getElementById('global-tooltip');

function showQueueTooltip(e) {
    const item = e.currentTarget;
    const videoId = item.dataset.videoId;
    if (!videoId) return;
    
    // Check cache first, show immediately if available
    if (videoTitleCache[videoId]) {
        positionAndShowTooltip(item, videoTitleCache[videoId]);
    } else {
        // Fetch title and show when ready
        fetchVideoTitle(videoId).then(title => {
            if (title && item.matches(':hover')) {
                positionAndShowTooltip(item, title);
            }
        });
    }
}

function positionAndShowTooltip(item, text) {
    globalTooltip.textContent = text;
    globalTooltip.classList.add('visible');
    
    // Need to wait a frame for the tooltip to render so we can measure it
    requestAnimationFrame(() => {
        const itemRect = item.getBoundingClientRect();
        const tooltipRect = globalTooltip.getBoundingClientRect();
        
        // Find the now-playing tooltip position for vertical alignment
        const nowPlayingTooltip = document.getElementById('current-video-tooltip');
        const nowPlayingThumb = document.getElementById('current-video-thumb');
        let top;
        
        if (nowPlayingThumb) {
            const thumbRect = nowPlayingThumb.getBoundingClientRect();
            // Position at same level as Now Playing tooltip (below the thumbnail)
            top = thumbRect.bottom + 8;
        } else {
            // Fallback: position below the item
            top = itemRect.bottom + 8;
        }
        
        // Center horizontally on the item
        let left = itemRect.left + (itemRect.width / 2) - (tooltipRect.width / 2);
        
        // Keep within viewport horizontally
        if (left < 8) left = 8;
        if (left + tooltipRect.width > window.innerWidth - 8) {
            left = window.innerWidth - tooltipRect.width - 8;
        }
        
        globalTooltip.style.left = `${left}px`;
        globalTooltip.style.top = `${top}px`;
    });
}

function hideGlobalTooltip() {
    globalTooltip.classList.remove('visible');
}

// Video title cache
const videoTitleCache = {};

async function fetchVideoTitle(videoId) {
    // Check cache first
    if (videoTitleCache[videoId]) {
        return videoTitleCache[videoId];
    }
    
    try {
        // Use YouTube oEmbed API (no API key required)
        const response = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
        if (response.ok) {
            const data = await response.json();
            const fullTitle = `${data.author_name} - ${data.title}`;
            videoTitleCache[videoId] = fullTitle;
            return fullTitle;
        }
    } catch (e) {
        console.log('Could not fetch video title:', e);
    }
    return null;
}

function updateCurrentVideoThumb(videoId) {
    if (videoId) {
        currentVideoThumb.innerHTML = `<img src="${getVideoThumbnail(videoId)}" alt="Current video">`;
        playerOverlay.classList.add('hidden');
        
        // Fetch and display video title
        fetchVideoTitle(videoId).then(title => {
            if (title) {
                currentVideoTooltip.textContent = title;
            } else {
                currentVideoTooltip.textContent = '';
            }
        });
    } else {
        currentVideoThumb.innerHTML = '<div class="empty-state">No video</div>';
        currentVideoTooltip.textContent = '';
        playerOverlay.classList.remove('hidden');
    }
}

function getCurrentVideoId() {
    return syncState.videoId;
}

function addToQueue(videoId) {
    get(ref(db, `rooms/${currentRoom}`)).then(snapshot => {
        const data = snapshot.val() || {};
        
        if (!data.sync || !data.sync.videoId) {
            // No current video, load it but don't autoplay
            broadcastSync({
                videoId: videoId,
                isPlaying: false,
                currentTime: 0
            });
            addActivity('video', currentUser.name);
        } else {
            // Add to queue
            const queue = data.queue || [];
            queue.push({ videoId, addedBy: currentUser.name, addedAt: Date.now() });
            update(ref(db, `rooms/${currentRoom}`), { queue });
            addActivity('queue', currentUser.name);
            showToast('Added to queue');
        }
    });
}

function playFromQueue(index) {
    if (index < 0 || index >= videoQueue.length) return;
    
    const video = videoQueue[index];
    const currentVideoId = getCurrentVideoId();
    
    // Move current to history
    if (currentVideoId) {
        historyQueue.push({ videoId: currentVideoId });
    }
    
    // Remove played videos from queue
    videoQueue.splice(0, index + 1);
    
    // Update Firebase
    update(ref(db, `rooms/${currentRoom}`), {
        queue: videoQueue.length > 0 ? videoQueue : null,
        history: historyQueue
    });
    
    // Load new video but don't autoplay
    broadcastSync({
        videoId: video.videoId,
        isPlaying: false,
        currentTime: 0
    });
    
    addActivity('video', currentUser.name);
}

function playFromHistory(index) {
    if (index < 0 || index >= historyQueue.length) return;
    
    const video = historyQueue[index];
    const currentVideoId = getCurrentVideoId();
    
    // Move current to queue front
    if (currentVideoId) {
        videoQueue.unshift({ videoId: currentVideoId });
    }
    
    historyQueue.splice(index, 1);
    
    update(ref(db, `rooms/${currentRoom}`), {
        queue: videoQueue.length > 0 ? videoQueue : null,
        history: historyQueue.length > 0 ? historyQueue : null
    });
    
    // Load new video but don't autoplay
    broadcastSync({
        videoId: video.videoId,
        isPlaying: false,
        currentTime: 0
    });
    
    addActivity('video', currentUser.name);
}

function removeFromQueue(index) {
    videoQueue.splice(index, 1);
    update(ref(db, `rooms/${currentRoom}/queue`), videoQueue.length > 0 ? videoQueue : null);
    showToast('Removed from queue');
}

function playNextInQueue() {
    if (videoQueue.length === 0) {
        // No more videos, just stop
        broadcastSync({
            videoId: syncState.videoId,
            isPlaying: false,
            currentTime: 0
        });
        return;
    }
    
    const currentVideoId = getCurrentVideoId();
    if (currentVideoId) {
        historyQueue.push({ videoId: currentVideoId });
    }
    
    const nextVideo = videoQueue.shift();
    
    update(ref(db, `rooms/${currentRoom}`), {
        queue: videoQueue.length > 0 ? videoQueue : null,
        history: historyQueue
    });
    
    // Load next video but don't autoplay - wait for user to start it
    broadcastSync({
        videoId: nextVideo.videoId,
        isPlaying: false,
        currentTime: 0
    });
}

// ============================================
// Sync System - Firebase Communication
// ============================================
function broadcastSync(changes) {
    // Send to Firebase - ALL users (including this one) will receive via onValue listener
    const newState = {
        ...syncState,
        ...changes,
        lastUpdate: Date.now(),
        updatedBy: currentUser.id
    };
    
    update(ref(db, `rooms/${currentRoom}/sync`), newState);
}

function applySync(newSync) {
    // Skip if this is an older or same update we've already processed
    if (newSync.lastUpdate <= syncState.lastUpdate) {
        return;
    }
    
    console.log('Applying sync:', newSync);
    
    // Update local state
    syncState = { ...newSync };
    
    // Apply to player
    if (!player || typeof player.cueVideoById !== 'function') {
        updateControlsUI();
        return;
    }
    
    ignorePlayerEvents = true;
    
    const currentPlayerVideoId = player.getVideoData()?.video_id;
    
    // Load new video if needed
    if (newSync.videoId && newSync.videoId !== currentPlayerVideoId) {
        // Always cue the video first (never auto-play)
        player.cueVideoById({
            videoId: newSync.videoId,
            startSeconds: newSync.currentTime
        });
        
        // Store pending play state to apply after video is cued
        pendingPlayState = newSync.isPlaying;
        
        updateControlsUI();
        setTimeout(() => { ignorePlayerEvents = false; }, 500);
    } else if (newSync.videoId) {
        // Same video, sync time and state
        const currentTime = player.getCurrentTime() || 0;
        const timeDiff = Math.abs(currentTime - newSync.currentTime);
        
        // Seek if time difference > 1 second
        if (timeDiff > 1) {
            player.seekTo(newSync.currentTime, true);
        }
        
        // Sync play state
        const currentState = player.getPlayerState();
        if (newSync.isPlaying && currentState !== YT.PlayerState.PLAYING) {
            player.playVideo();
        } else if (!newSync.isPlaying && currentState !== YT.PlayerState.PAUSED) {
            player.pauseVideo();
        }
        
        updateControlsUI();
        setTimeout(() => { ignorePlayerEvents = false; }, 300);
    } else {
        updateControlsUI();
        ignorePlayerEvents = false;
    }
}

// ============================================
// Custom Controls - Sync Through Firebase
// ============================================
function handlePlayPause() {
    if (!syncState.videoId) return;
    
    const newIsPlaying = !syncState.isPlaying;
    const currentTime = player ? player.getCurrentTime() : syncState.currentTime;
    
    broadcastSync({
        isPlaying: newIsPlaying,
        currentTime: currentTime
    });
    
    addActivity(newIsPlaying ? 'play' : 'pause', currentUser.name);
}

function handleSeek(time) {
    if (!syncState.videoId) return;
    
    broadcastSync({
        currentTime: time,
        isPlaying: syncState.isPlaying
    });
    
    addActivity('seek', currentUser.name, formatTime(time));
}

function handleRewind() {
    if (!player) return;
    const currentTime = player.getCurrentTime() || 0;
    const newTime = Math.max(0, currentTime - 10);
    handleSeek(newTime);
}

function handleForward() {
    if (!player) return;
    const currentTime = player.getCurrentTime() || 0;
    const duration = player.getDuration() || 0;
    const newTime = Math.min(duration, currentTime + 10);
    handleSeek(newTime);
}

function handlePrevious() {
    if (historyQueue.length > 0) {
        playFromHistory(historyQueue.length - 1);
    }
}

function handleNext() {
    playNextInQueue();
}

function updateControlsUI() {
    // Play/Pause icon
    if (syncState.isPlaying) {
        iconPlay.classList.add('hidden');
        iconPause.classList.remove('hidden');
    } else {
        iconPlay.classList.remove('hidden');
        iconPause.classList.add('hidden');
    }
}

function updateProgress() {
    if (!player || typeof player.getCurrentTime !== 'function') return;
    
    // Don't update while dragging
    if (isDragging) return;
    
    const currentTime = player.getCurrentTime() || 0;
    const duration = player.getDuration() || 0;
    
    timeCurrent.textContent = formatTime(currentTime);
    timeTotal.textContent = formatTime(duration);
    
    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
    progressFill.style.width = `${progress}%`;
    progressThumb.style.left = `${progress}%`;
}

// Progress bar - hover timestamp
progressContainer.addEventListener('mousemove', (e) => {
    if (!player) return;
    
    const rect = progressContainer.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = x / rect.width;
    const duration = player.getDuration() || 0;
    const hoverTime = percentage * duration;
    
    progressHoverTime.textContent = formatTime(hoverTime);
    progressHoverTime.style.left = `${x}px`;
});

// Progress bar - drag and drop seeking
let isDragging = false;
let dragStartX = 0;

function getSeekTimeFromEvent(e) {
    const rect = progressContainer.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = x / rect.width;
    const duration = player.getDuration() || 0;
    return percentage * duration;
}

function updateDragPosition(e) {
    const rect = progressContainer.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    progressFill.style.width = `${percentage}%`;
    progressThumb.style.left = `${percentage}%`;
    
    const duration = player.getDuration() || 0;
    const seekTime = (percentage / 100) * duration;
    progressHoverTime.textContent = formatTime(seekTime);
    progressHoverTime.style.left = `${x}px`;
    timeCurrent.textContent = formatTime(seekTime);
}

progressContainer.addEventListener('mousedown', (e) => {
    if (!player || !syncState.videoId) return;
    
    isDragging = true;
    dragStartX = e.clientX;
    progressContainer.classList.add('dragging');
    
    updateDragPosition(e);
    
    e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateDragPosition(e);
});

document.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    
    isDragging = false;
    progressContainer.classList.remove('dragging');
    
    // Seek to the final position
    const seekTime = getSeekTimeFromEvent(e);
    handleSeek(seekTime);
});

// Prevent drag from selecting text
progressContainer.addEventListener('dragstart', (e) => e.preventDefault());

// Control button events
ctrlPlay.addEventListener('click', handlePlayPause);
ctrlRewind.addEventListener('click', handleRewind);
ctrlForward.addEventListener('click', handleForward);
ctrlPrev.addEventListener('click', handlePrevious);
ctrlNext.addEventListener('click', handleNext);

// Click on video to play/pause (through our sync system)
playerClickBlocker.addEventListener('click', handlePlayPause);

// Volume controls (local only, not synced)
let isMuted = false;
let savedVolume = 100;

ctrlMute.addEventListener('click', () => {
    if (!player) return;
    
    isMuted = !isMuted;
    if (isMuted) {
        savedVolume = player.getVolume();
        player.mute();
        iconVolume.classList.add('hidden');
        iconMuted.classList.remove('hidden');
    } else {
        player.unMute();
        player.setVolume(savedVolume);
        iconVolume.classList.remove('hidden');
        iconMuted.classList.add('hidden');
    }
});

volumeSlider.addEventListener('input', (e) => {
    if (!player) return;
    const volume = parseInt(e.target.value);
    player.setVolume(volume);
    if (volume === 0) {
        iconVolume.classList.add('hidden');
        iconMuted.classList.remove('hidden');
    } else {
        iconVolume.classList.remove('hidden');
        iconMuted.classList.add('hidden');
        isMuted = false;
    }
});

// ============================================
// Room Management
// ============================================
function joinRoom(roomName, username) {
    currentRoom = roomName.toLowerCase().replace(/[^a-z0-9-]/g, '-');
    currentUser = {
        id: generateUserId(),
        name: username
    };
    
    // Update URL with both room and user (for refresh persistence)
    const fullUrl = `${window.location.origin}${window.location.pathname}?room=${currentRoom}&user=${encodeURIComponent(username)}`;
    window.history.pushState({ room: currentRoom, user: username }, '', fullUrl);
    
    // Generate share link with only room (no username)
    const shareUrl = `${window.location.origin}${window.location.pathname}?room=${currentRoom}`;
    
    loginPanel.classList.add('hidden');
    watchRoom.classList.remove('hidden');
    
    roomNameDisplay.textContent = currentRoom;
    usernameDisplay.textContent = username;
    userAvatar.textContent = getInitials(username);
    shareLink.value = shareUrl;  // Share link only has room, not username
    
    // Register presence with heartbeat timestamp
    const userRef = ref(db, `rooms/${currentRoom}/users/${currentUser.id}`);
    set(userRef, {
        name: currentUser.name,
        joinedAt: Date.now(),
        lastHeartbeat: Date.now()
    });
    onDisconnect(userRef).remove();
    
    // Update room's last activity timestamp
    update(ref(db, `rooms/${currentRoom}`), {
        lastActivity: Date.now()
    });
    
    addActivity('join', currentUser.name);
    
    initializePlayer();
    listenToRoom();
    
    // Start progress update interval
    progressInterval = setInterval(updateProgress, 250);
    
    // Start presence system
    startPresenceSystem();
}

function initializePlayer() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        playerVars: {
            playsinline: 1,
            autoplay: 0,
            controls: 0,  // Hide YouTube controls
            disablekb: 1, // Disable keyboard controls
            modestbranding: 1,
            rel: 0,
            origin: window.location.origin
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
            onError: onPlayerError
        }
    });
}

function listenToRoom() {
    const roomRef = ref(db, `rooms/${currentRoom}`);
    
    onValue(roomRef, (snapshot) => {
        const data = snapshot.val() || {};
        
        // Update queues
        videoQueue = data.queue || [];
        historyQueue = data.history || [];
        renderQueues();
        
        // Update users count (only count users with recent heartbeats)
        const users = data.users || {};
        const now = Date.now();
        const activeUsers = Object.values(users).filter(u => 
            !u.lastHeartbeat || (now - u.lastHeartbeat) < USER_TIMEOUT
        );
        usersCount.textContent = activeUsers.length;
        
        // Render activity
        renderActivity(data.activity);
        
        // Apply sync state from Firebase - this is the single source of truth
        if (data.sync) {
            updateCurrentVideoThumb(data.sync.videoId);
            applySync(data.sync);
        } else {
            updateCurrentVideoThumb(null);
        }
    });
}

// ============================================
// Player Event Handlers
// ============================================
function onPlayerReady(event) {
    console.log('Player ready');
}

function onPlayerStateChange(event) {
    const state = event.data;
    
    // When video is cued (state 5), apply pending play state if any
    if (state === YT.PlayerState.CUED && pendingPlayState !== null) {
        if (pendingPlayState === true) {
            ignorePlayerEvents = true;
            player.playVideo();
            setTimeout(() => { ignorePlayerEvents = false; }, 300);
        }
        pendingPlayState = null;
        return;
    }
    
    if (ignorePlayerEvents) return;
    
    // Handle video ended
    if (state === YT.PlayerState.ENDED) {
        playNextInQueue();
    }
}

function onPlayerError(event) {
    console.error('Player error:', event.data);
    const messages = {
        2: 'Invalid video ID',
        5: 'HTML5 player error',
        100: 'Video not found',
        101: 'Embedding not allowed',
        150: 'Embedding not allowed'
    };
    showToast('Error: ' + (messages[event.data] || 'Unknown error'));
}

// ============================================
// Event Listeners
// ============================================
joinRoomBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    const roomName = roomInput.value.trim();
    
    if (!username) {
        showToast('Please enter your name');
        usernameInput.focus();
        return;
    }
    
    if (!roomName) {
        showToast('Please enter a room name');
        roomInput.focus();
        return;
    }
    
    if (!ytApiReady) {
        showToast('Loading player, please wait...');
        return;
    }
    
    joinRoom(roomName, username);
});

usernameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') roomInput.focus();
});

roomInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') joinRoomBtn.click();
});

addVideoBtn.addEventListener('click', () => {
    const url = videoUrlInput.value.trim();
    const videoId = extractVideoId(url);
    
    if (!videoId) {
        showToast('Please enter a valid YouTube URL');
        return;
    }
    
    addToQueue(videoId);
    videoUrlInput.value = '';
});

videoUrlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addVideoBtn.click();
});

shareBtn.addEventListener('click', () => {
    shareModal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    shareModal.classList.add('hidden');
});

shareModal.querySelector('.modal-backdrop').addEventListener('click', () => {
    shareModal.classList.add('hidden');
});

copyLinkBtn.addEventListener('click', () => {
    shareLink.select();
    navigator.clipboard.writeText(shareLink.value);
    copyLinkBtn.textContent = 'Copied!';
    setTimeout(() => { copyLinkBtn.textContent = 'Copy'; }, 2000);
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Don't trigger if typing in an input
    if (e.target.tagName === 'INPUT') return;
    
    switch (e.code) {
        case 'Space':
            e.preventDefault();
            handlePlayPause();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            handleRewind();
            break;
        case 'ArrowRight':
            e.preventDefault();
            handleForward();
            break;
        case 'KeyM':
            ctrlMute.click();
            break;
    }
});

// Handle page unload
window.addEventListener('beforeunload', () => {
    if (currentRoom && currentUser) {
        addActivity('leave', currentUser.name);
    }
    stopPresenceSystem();
});

// ============================================
// Presence and Idle System
// ============================================
const idleModal = document.getElementById('idle-modal');
const idleConfirmBtn = document.getElementById('idle-confirm-btn');
const idleCountdownEl = document.getElementById('idle-countdown');

function startPresenceSystem() {
    lastActivityTime = Date.now();
    
    // Send heartbeat every 5 minutes
    heartbeatInterval = setInterval(sendHeartbeat, HEARTBEAT_INTERVAL);
    
    // Check for idle every minute
    idleCheckInterval = setInterval(checkIdle, 60 * 1000);
    
    // Clean up stale users every minute
    setInterval(cleanupStaleUsers, 60 * 1000);
    
    // Track user activity
    document.addEventListener('mousemove', recordActivity);
    document.addEventListener('keydown', recordActivity);
    document.addEventListener('click', recordActivity);
    document.addEventListener('touchstart', recordActivity);
    
    // Send initial heartbeat
    sendHeartbeat();
}

function stopPresenceSystem() {
    if (heartbeatInterval) clearInterval(heartbeatInterval);
    if (idleCheckInterval) clearInterval(idleCheckInterval);
    if (idlePromptTimeout) clearTimeout(idlePromptTimeout);
    if (progressInterval) clearInterval(progressInterval);
    
    document.removeEventListener('mousemove', recordActivity);
    document.removeEventListener('keydown', recordActivity);
    document.removeEventListener('click', recordActivity);
    document.removeEventListener('touchstart', recordActivity);
}

function recordActivity() {
    lastActivityTime = Date.now();
    
    // If idle modal is showing, this counts as confirmation
    if (!idleModal.classList.contains('hidden')) {
        confirmStillHere();
    }
}

function sendHeartbeat() {
    if (!currentRoom || !currentUser) return;
    
    const userRef = ref(db, `rooms/${currentRoom}/users/${currentUser.id}`);
    update(userRef, {
        lastHeartbeat: Date.now()
    });
    
    // Also update room's last activity
    update(ref(db, `rooms/${currentRoom}`), {
        lastActivity: Date.now()
    });
}

function checkIdle() {
    if (!currentRoom || !currentUser) return;
    
    const timeSinceActivity = Date.now() - lastActivityTime;
    
    // If idle for 1 hour, show prompt
    if (timeSinceActivity >= IDLE_PROMPT_TIME && idleModal.classList.contains('hidden')) {
        showIdlePrompt();
    }
}

function showIdlePrompt() {
    idleModal.classList.remove('hidden');
    
    // Play notification sound
    playNotificationSound();
    
    // Flash taskbar / get attention
    flashWindow();
    
    // Update page title
    originalTitle = document.title;
    titleFlashInterval = setInterval(() => {
        document.title = document.title === '⚠️ Are you still watching?' 
            ? '🎬 EightEyes Watch Party' 
            : '⚠️ Are you still watching?';
    }, 1000);
    
    let countdown = 60;
    idleCountdownEl.textContent = countdown;
    
    // Update countdown every second
    const countdownInterval = setInterval(() => {
        countdown--;
        idleCountdownEl.textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
    
    // Store interval reference for cleanup
    idleCountdownInterval = countdownInterval;
    
    // Set timeout to kick user after 60 seconds
    idlePromptTimeout = setTimeout(() => {
        clearInterval(countdownInterval);
        kickToLogin();
    }, IDLE_PROMPT_TIMEOUT);
}

function playNotificationSound() {
    // Create a gentle notification sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Play two gentle tones
        const playTone = (frequency, startTime, duration) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = 'sine';
            
            // Gentle fade in and out
            gainNode.gain.setValueAtTime(0, audioContext.currentTime + startTime);
            gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + startTime + 0.1);
            gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + startTime + duration);
            
            oscillator.start(audioContext.currentTime + startTime);
            oscillator.stop(audioContext.currentTime + startTime + duration);
        };
        
        // Two gentle ascending tones
        playTone(440, 0, 0.3);      // A4
        playTone(523.25, 0.2, 0.4); // C5
    } catch (e) {
        console.log('Could not play notification sound:', e);
    }
}

function flashWindow() {
    // Try to get user's attention
    
    // 1. Use Notification API to flash taskbar (if permitted)
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('EightEyes Watch Party', {
            body: 'Are you still watching?',
            icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🎬</text></svg>',
            tag: 'idle-check',
            requireInteraction: false
        });
    } else if ('Notification' in window && Notification.permission === 'default') {
        // Request permission for future use
        Notification.requestPermission();
    }
    
    // 2. Try to use window.focus() to flash taskbar
    window.focus();
    
    // 3. Briefly change favicon to draw attention
    flashFavicon();
}

function flashFavicon() {
    // Create a flashing favicon effect
    const originalFavicon = document.querySelector('link[rel="icon"]');
    const originalHref = originalFavicon?.href;
    
    // Create a warning favicon
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    
    let isWarning = true;
    faviconFlashInterval = setInterval(() => {
        if (isWarning) {
            // Orange warning circle
            ctx.fillStyle = '#f95a1f';
            ctx.beginPath();
            ctx.arc(16, 16, 14, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = 'white';
            ctx.font = 'bold 20px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('!', 16, 16);
        } else {
            // Normal state
            ctx.fillStyle = '#18181b';
            ctx.fillRect(0, 0, 32, 32);
            ctx.fillStyle = '#f95a1f';
            ctx.font = 'bold 24px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('8E', 16, 16);
        }
        
        // Update favicon
        let favicon = document.querySelector('link[rel="icon"]');
        if (!favicon) {
            favicon = document.createElement('link');
            favicon.rel = 'icon';
            document.head.appendChild(favicon);
        }
        favicon.href = canvas.toDataURL();
        
        isWarning = !isWarning;
    }, 500);
}

function confirmStillHere() {
    // Hide modal
    idleModal.classList.add('hidden');
    
    // Clear timeout
    if (idlePromptTimeout) {
        clearTimeout(idlePromptTimeout);
        idlePromptTimeout = null;
    }
    
    // Clear countdown interval
    if (idleCountdownInterval) {
        clearInterval(idleCountdownInterval);
        idleCountdownInterval = null;
    }
    
    // Stop title flashing and restore original
    if (titleFlashInterval) {
        clearInterval(titleFlashInterval);
        titleFlashInterval = null;
        document.title = originalTitle || 'EightEyes Watch Party';
    }
    
    // Stop favicon flashing
    if (faviconFlashInterval) {
        clearInterval(faviconFlashInterval);
        faviconFlashInterval = null;
        // Remove custom favicon to use default
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) favicon.remove();
    }
    
    // Reset activity time
    lastActivityTime = Date.now();
    
    // Send heartbeat
    sendHeartbeat();
    
    showToast('Welcome back!');
}

function kickToLogin() {
    // Stop presence system
    stopPresenceSystem();
    
    // Stop title flashing
    if (titleFlashInterval) {
        clearInterval(titleFlashInterval);
        titleFlashInterval = null;
    }
    
    // Stop favicon flashing
    if (faviconFlashInterval) {
        clearInterval(faviconFlashInterval);
        faviconFlashInterval = null;
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) favicon.remove();
    }
    
    // Stop countdown interval
    if (idleCountdownInterval) {
        clearInterval(idleCountdownInterval);
        idleCountdownInterval = null;
    }
    
    // Restore title
    document.title = 'EightEyes Watch Party';
    
    // Remove user from room
    if (currentRoom && currentUser) {
        const userRef = ref(db, `rooms/${currentRoom}/users/${currentUser.id}`);
        remove(userRef);
        addActivity('leave', currentUser.name);
    }
    
    // Store room and username for prefill
    const roomToRejoin = currentRoom;
    const usernameToRejoin = currentUser?.name;
    
    // Reset state
    currentRoom = null;
    currentUser = null;
    player = null;
    
    // Hide modal and watch room
    idleModal.classList.add('hidden');
    watchRoom.classList.add('hidden');
    loginPanel.classList.remove('hidden');
    
    // Prefill login form
    if (roomToRejoin) {
        roomInput.value = roomToRejoin;
        roomInput.disabled = false;
    }
    if (usernameToRejoin) {
        usernameInput.value = usernameToRejoin;
    }
    
    // Update URL to just room (no user, since they're logged out)
    const newUrl = `${window.location.origin}${window.location.pathname}?room=${roomToRejoin}`;
    window.history.pushState({}, '', newUrl);
    
    showToast('You were disconnected due to inactivity');
}

function cleanupStaleUsers() {
    if (!currentRoom) return;
    
    const usersRef = ref(db, `rooms/${currentRoom}/users`);
    get(usersRef).then(snapshot => {
        const users = snapshot.val();
        if (!users) return;
        
        const now = Date.now();
        
        Object.entries(users).forEach(([odellId, userData]) => {
            // Skip self
            if (currentUser && odellId === currentUser.id) return;
            
            // If no heartbeat for 10 minutes, remove user
            if (userData.lastHeartbeat && (now - userData.lastHeartbeat) > USER_TIMEOUT) {
                remove(ref(db, `rooms/${currentRoom}/users/${odellId}`));
                // Add leave activity for stale user
                push(ref(db, `rooms/${currentRoom}/activity`), {
                    type: 'leave',
                    username: userData.name,
                    detail: '(timed out)',
                    timestamp: now
                });
            }
        });
        
        // Check if room should be deleted (no users for 60 minutes)
        checkRoomCleanup();
    });
}

function checkRoomCleanup() {
    if (!currentRoom) return;
    
    const roomRef = ref(db, `rooms/${currentRoom}`);
    get(roomRef).then(snapshot => {
        const roomData = snapshot.val();
        if (!roomData) return;
        
        const users = roomData.users || {};
        const userCount = Object.keys(users).length;
        const lastActivity = roomData.lastActivity || 0;
        const now = Date.now();
        
        // If no users and last activity was more than 60 minutes ago, delete room
        if (userCount === 0 && (now - lastActivity) > ROOM_CLEANUP_TIME) {
            remove(roomRef);
            console.log(`Room ${currentRoom} deleted due to inactivity`);
        }
    });
}

// Idle confirm button
idleConfirmBtn.addEventListener('click', confirmStillHere);

// Also confirm if clicking backdrop
idleModal.querySelector('.modal-backdrop').addEventListener('click', confirmStillHere);