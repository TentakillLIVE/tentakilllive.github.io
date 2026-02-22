# StreamCanvas — Collaborative Stream Overlay Editor

A real-time collaborative overlay tool that lets authorized users draw, add text, and place images on a streamer's broadcast through OBS.

## How It Works

```
┌─────────────┐          ┌──────────────┐          ┌─────────────┐
│  Editor(s)  │ ──────── │   Firebase   │ ──────── │  OBS Overlay │
│  (browser)  │  writes  │  Realtime DB │  reads   │  (browser    │
│             │  ──────→ │              │ ──────→  │   source)    │
└─────────────┘          └──────────────┘          └─────────────┘
```

- **Editor** (`editor.html`): Web app where collaborators draw/edit with tools
- **Overlay** (`overlay.html`): Transparent page that OBS loads as a browser source
- **Firebase**: Free real-time database that syncs changes instantly between all clients

---

## Step-by-Step Setup

### Step 1: Create a Firebase Project (Free)

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **"Create a project"** (or "Add project")
3. Name it anything (e.g., `stream-overlay`)
4. Disable Google Analytics (not needed) → Click **Create Project**
5. Wait for it to finish, then click **Continue**

### Step 2: Enable Realtime Database

1. In your Firebase project, click **"Build"** in the left sidebar → **"Realtime Database"**
2. Click **"Create Database"**
3. Choose a location (pick the closest to you)
4. Select **"Start in test mode"** → Click **Enable**
   - ⚠️ Test mode allows open read/write for 30 days. We'll set up proper rules later.

### Step 3: Get Your Firebase Config

1. In your Firebase project, click the **gear icon** ⚙️ (top-left, next to "Project Overview")
2. Click **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the web icon **`</>`** to add a web app
5. Give it a nickname (e.g., `stream-overlay`) → Click **Register app**
6. You'll see a code block with `firebaseConfig`. **Copy these values.**

### Step 4: Configure the Project

Open `firebase-config.js` in a text editor and replace the placeholder values:

```javascript
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyD...",                                      // Your actual API key
  authDomain: "stream-overlay-xxxxx.firebaseapp.com",        // Your auth domain
  databaseURL: "https://stream-overlay-xxxxx-default-rtdb.firebaseio.com",  // Your DB URL
  projectId: "stream-overlay-xxxxx",                         // Your project ID
  storageBucket: "stream-overlay-xxxxx.appspot.com",         // Your storage bucket
  messagingSenderId: "123456789",                             // Your sender ID
  appId: "1:123456789:web:abc123..."                         // Your app ID
};
```

Save the file.

### Step 5: Choose How to Host

You have several options. Pick the one that works best for you:

#### Option A: Local / Simple File Server (Fastest for Testing)

If you just want to test locally:

```bash
# Using Python (most systems have this)
cd /path/to/stream-overlay
python3 -m http.server 8080

# Or using Node.js
npx serve .
```

Then open `http://localhost:8080/editor.html` in your browser.

#### Option B: GitHub Pages (Free, Public)

1. Create a new GitHub repository
2. Push all 4 files to the repo (`editor.html`, `overlay.html`, `firebase-config.js`, `README.md`)
3. Go to repo **Settings** → **Pages**
4. Set Source to **"Deploy from a branch"** → select `main` branch, `/ (root)` folder
5. Click **Save**
6. Your site will be available at `https://yourusername.github.io/repo-name/`

> ⚠️ **Note**: Your Firebase config (API key) will be publicly visible. This is fine — Firebase API keys are designed to be public. Security comes from Firebase Security Rules (see Step 7).

#### Option C: Firebase Hosting (Free Tier, Recommended)

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Log in
firebase login

# In your project folder:
firebase init hosting
# → Select your project
# → Public directory: . (current directory)
# → Single-page app: No
# → Overwrite index.html: No

# Deploy
firebase deploy --only hosting
```

Your site will be at `https://your-project.web.app/`

### Step 6: Set Up OBS

1. Open **OBS Studio**
2. In your scene, click **"+"** under Sources → **"Browser"**
3. Name it "Stream Overlay" → Click **OK**
4. Set the **URL** to your overlay page:
   - Local: `http://localhost:8080/overlay.html?room=my-room`
   - GitHub Pages: `https://yourusername.github.io/repo-name/overlay.html?room=my-room`
   - Firebase: `https://your-project.web.app/overlay.html?room=my-room`
5. Set **Width** and **Height** to match your canvas (e.g., `1920` × `1080`)
6. ✅ Check **"Shutdown source when not visible"**
7. Add this **Custom CSS** (OBS setting for the browser source):
   ```css
   body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }
   ```
8. Click **OK**

> 💡 **Tip**: The `?room=my-room` parameter must match the room name you enter in the editor. You can also get the exact URL by clicking "📋 OBS URL" in the editor.

### Step 7: Secure Your Database (Important!)

After testing, replace the default rules in Firebase Console → Realtime Database → Rules:

```json
{
  "rules": {
    "rooms": {
      "$roomId": {
        "objects": {
          ".read": true,
          ".write": true
        },
        "presence": {
          ".read": true,
          "$userId": {
            ".write": true
          }
        },
        "canvasSize": {
          ".read": true,
          ".write": true
        }
      }
    }
  }
}
```

For **stricter access** (only authenticated users can edit), you can enable Firebase Authentication and update the rules to require `auth !== null` on `.write`. For a basic setup, the above rules work fine.

---

## Usage

### For the Streamer
1. Open `editor.html` in your browser
2. Enter a **Room Name** (e.g., `my-stream`)
3. Optionally paste your **Twitch/YouTube stream URL** to see the stream behind the canvas
4. Click **"📋 OBS URL"** in the top bar to get the overlay URL
5. Add that URL as a Browser Source in OBS
6. Share the editor URL + room name with trusted collaborators

### For Collaborators
1. Open the editor URL in their browser
2. Enter the **same Room Name** as the streamer
3. Start drawing, adding text, or placing images
4. Changes appear on the OBS overlay in real time

### Tools Available
| Key | Tool | Description |
|-----|------|-------------|
| V | Select | Move, resize, rotate objects |
| B | Draw | Freehand drawing |
| L | Line | Draw straight lines |
| R | Rectangle | Draw rectangles |
| C | Circle | Draw ellipses/circles |
| T | Text | Add text labels |
| I | Image | Upload or paste image URLs |
| E | Eraser | Click objects to delete them |
| Del | Delete | Remove selected object |
| Ctrl+Z | Undo | Remove last object |

---

## Project Structure

```
stream-overlay/
├── editor.html          # Collaborative editor UI (what users open)
├── overlay.html         # Transparent overlay (what OBS loads)
├── firebase-config.js   # Your Firebase credentials (edit this!)
└── README.md            # This file
```

---

## Troubleshooting

**Overlay is not transparent in OBS**
→ Make sure you added the Custom CSS in the OBS browser source settings (Step 6.7). Also ensure the browser source width/height is set correctly.

**Changes don't sync between editor and overlay**
→ Check that the room name matches exactly (case-sensitive). Open browser DevTools (F12) → Console to check for Firebase errors.

**"Firebase not configured" message**
→ You haven't edited `firebase-config.js` yet. Follow Steps 1-4.

**Images don't appear on overlay**
→ Images uploaded as files are encoded as data URLs and should work. External image URLs must support CORS. Try re-uploading the image as a file instead.

**Twitch embed doesn't load**
→ Twitch requires the `parent` parameter to match your domain. If using localhost, it should work automatically. On a deployed site, the editor sets this from `window.location.hostname`.

---

## Future Improvements

- **Authentication**: Add Firebase Auth with invite codes so only authorized users can edit
- **Per-user cursors**: Show each collaborator's cursor position in real time
- **Asset library**: Pre-loaded stickers, emotes, and overlays
- **Undo/redo stack**: Full undo history per user
- **Animation support**: Animate objects (fade, bounce, slide)
- **Sound alerts**: Trigger sounds when objects are added
- **Mobile editor**: Touch-optimized interface for phone/tablet
