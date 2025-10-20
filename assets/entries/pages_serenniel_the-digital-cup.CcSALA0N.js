import{r as u,R as qe,j as c,k as po,l as go,m as G,n as wo,d as vo,e as H,g as S,h as an,i as Ne,a as Gt,c as bo}from"../chunks/chunk-CcJfGDRi.js";import{y as Nt,n as M,c as oe,u as ce,b as Ee,d as Z,e as bt,g as De,h as yt,i as Tt,j as Re,S as xo,D as yo,l as jo,m as ko,p as Co,C as No,x as fe,A as wt,I as sn,s as F,P as q,k as ln,f as vt,a as Ro}from"../chunks/chunk-BCjmZ-Oc.js";/* empty css                      */var Po={grad:.9,turn:360,rad:360/(2*Math.PI)},it=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},L=function(t,e,n){return e===void 0&&(e=0),n===void 0&&(n=Math.pow(10,e)),Math.round(n*t)/n+0},K=function(t,e,n){return e===void 0&&(e=0),n===void 0&&(n=1),t>n?n:t>e?t:e},Wn=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},dn=function(t){return{r:K(t.r,0,255),g:K(t.g,0,255),b:K(t.b,0,255),a:K(t.a)}},he=function(t){return{r:L(t.r),g:L(t.g),b:L(t.b),a:L(t.a,3)}},Ao=/^#([0-9a-f]{3,8})$/i,Vt=function(t){var e=t.toString(16);return e.length<2?"0"+e:e},Un=function(t){var e=t.r,n=t.g,r=t.b,o=t.a,i=Math.max(e,n,r),a=i-Math.min(e,n,r),s=a?i===e?(n-r)/a:i===n?2+(r-e)/a:4+(e-n)/a:0;return{h:60*(s<0?s+6:s),s:i?a/i*100:0,v:i/255*100,a:o}},Yn=function(t){var e=t.h,n=t.s,r=t.v,o=t.a;e=e/360*6,n/=100,r/=100;var i=Math.floor(e),a=r*(1-n),s=r*(1-(e-i)*n),l=r*(1-(1-e+i)*n),d=i%6;return{r:255*[r,s,a,a,l,r][d],g:255*[l,r,r,s,a,a][d],b:255*[a,a,l,r,r,s][d],a:o}},un=function(t){return{h:Wn(t.h),s:K(t.s,0,100),l:K(t.l,0,100),a:K(t.a)}},fn=function(t){return{h:L(t.h),s:L(t.s),l:L(t.l),a:L(t.a,3)}},hn=function(t){return Yn((n=(e=t).s,{h:e.h,s:(n*=((r=e.l)<50?r:100-r)/100)>0?2*n/(r+n)*100:0,v:r+n,a:e.a}));var e,n,r},Dt=function(t){return{h:(e=Un(t)).h,s:(o=(200-(n=e.s))*(r=e.v)/100)>0&&o<200?n*r/100/(o<=100?o:200-o)*100:0,l:o/2,a:e.a};var e,n,r,o},zo=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,So=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,_o=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,qo=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,mn={string:[[function(t){var e=Ao.exec(t);return e?(t=e[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?L(parseInt(t[3]+t[3],16)/255,2):1}:t.length===6||t.length===8?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:t.length===8?L(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var e=_o.exec(t)||qo.exec(t);return e?e[2]!==e[4]||e[4]!==e[6]?null:dn({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(t){var e=zo.exec(t)||So.exec(t);if(!e)return null;var n,r,o=un({h:(n=e[1],r=e[2],r===void 0&&(r="deg"),Number(n)*(Po[r]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return hn(o)},"hsl"]],object:[[function(t){var e=t.r,n=t.g,r=t.b,o=t.a,i=o===void 0?1:o;return it(e)&&it(n)&&it(r)?dn({r:Number(e),g:Number(n),b:Number(r),a:Number(i)}):null},"rgb"],[function(t){var e=t.h,n=t.s,r=t.l,o=t.a,i=o===void 0?1:o;if(!it(e)||!it(n)||!it(r))return null;var a=un({h:Number(e),s:Number(n),l:Number(r),a:Number(i)});return hn(a)},"hsl"],[function(t){var e=t.h,n=t.s,r=t.v,o=t.a,i=o===void 0?1:o;if(!it(e)||!it(n)||!it(r))return null;var a=function(s){return{h:Wn(s.h),s:K(s.s,0,100),v:K(s.v,0,100),a:K(s.a)}}({h:Number(e),s:Number(n),v:Number(r),a:Number(i)});return Yn(a)},"hsv"]]},pn=function(t,e){for(var n=0;n<e.length;n++){var r=e[n][0](t);if(r)return[r,e[n][1]]}return[null,void 0]},Eo=function(t){return typeof t=="string"?pn(t.trim(),mn.string):typeof t=="object"&&t!==null?pn(t,mn.object):[null,void 0]},me=function(t,e){var n=Dt(t);return{h:n.h,s:K(n.s+100*e,0,100),l:n.l,a:n.a}},pe=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},gn=function(t,e){var n=Dt(t);return{h:n.h,s:n.s,l:K(n.l+100*e,0,100),a:n.a}},wn=function(){function t(e){this.parsed=Eo(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return this.parsed!==null},t.prototype.brightness=function(){return L(pe(this.rgba),2)},t.prototype.isDark=function(){return pe(this.rgba)<.5},t.prototype.isLight=function(){return pe(this.rgba)>=.5},t.prototype.toHex=function(){return e=he(this.rgba),n=e.r,r=e.g,o=e.b,a=(i=e.a)<1?Vt(L(255*i)):"","#"+Vt(n)+Vt(r)+Vt(o)+a;var e,n,r,o,i,a},t.prototype.toRgb=function(){return he(this.rgba)},t.prototype.toRgbString=function(){return e=he(this.rgba),n=e.r,r=e.g,o=e.b,(i=e.a)<1?"rgba("+n+", "+r+", "+o+", "+i+")":"rgb("+n+", "+r+", "+o+")";var e,n,r,o,i},t.prototype.toHsl=function(){return fn(Dt(this.rgba))},t.prototype.toHslString=function(){return e=fn(Dt(this.rgba)),n=e.h,r=e.s,o=e.l,(i=e.a)<1?"hsla("+n+", "+r+"%, "+o+"%, "+i+")":"hsl("+n+", "+r+"%, "+o+"%)";var e,n,r,o,i},t.prototype.toHsv=function(){return e=Un(this.rgba),{h:L(e.h),s:L(e.s),v:L(e.v),a:L(e.a,3)};var e},t.prototype.invert=function(){return J({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},t.prototype.saturate=function(e){return e===void 0&&(e=.1),J(me(this.rgba,e))},t.prototype.desaturate=function(e){return e===void 0&&(e=.1),J(me(this.rgba,-e))},t.prototype.grayscale=function(){return J(me(this.rgba,-1))},t.prototype.lighten=function(e){return e===void 0&&(e=.1),J(gn(this.rgba,e))},t.prototype.darken=function(e){return e===void 0&&(e=.1),J(gn(this.rgba,-e))},t.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},t.prototype.alpha=function(e){return typeof e=="number"?J({r:(n=this.rgba).r,g:n.g,b:n.b,a:e}):L(this.rgba.a,3);var n},t.prototype.hue=function(e){var n=Dt(this.rgba);return typeof e=="number"?J({h:e,s:n.s,l:n.l,a:n.a}):L(n.h)},t.prototype.isEqual=function(e){return this.toHex()===J(e).toHex()},t}(),J=function(t){return t instanceof wn?t:new wn(t)};const Do=t=>{if(t.url===void 0)return;let e;try{const o=new URL(t.url);e=new URL(Kn),e.pathname=`/video${o.pathname}`}catch{}if(e===void 0)return;const n={showPortrait:"portrait",showByline:"byline",showTitle:"title",controlsColor:"color",showControls:"controls",interactiveParams:"interactive_params",backgroundMode:"background",doNotTrack:"dnt"};let r;for(r in t){const o=t[r];if(r==="url"||o===void 0)continue;const i=n[r]??r;e.searchParams.append(i,o.toString())}if(e.searchParams.set("autoplay","true"),typeof t.controlsColor=="string"){const o=J(t.controlsColor).toHex().replace("#","");e.searchParams.set("color",o)}return t.showPortrait&&e.searchParams.set("title","true"),t.showByline&&(e.searchParams.set("portrait","true"),e.searchParams.set("title","true")),e.toString()},ge=t=>{const e=document.createElement("link");e.rel="preconnect",e.href=t,e.crossOrigin="true",document.head.appendChild(e)};let vn=!1;const To="https://f.vimeocdn.com",Kn="https://player.vimeo.com",Gn="https://i.vimeocdn.com",Oo=()=>{vn||window.matchMedia("(hover: none)").matches||(ge(To),ge(Kn),ge(Gn),vn=!0)},Lo=t=>{try{const e=new URL(t).pathname.split("/")[2];return e===""||e==null?void 0:e}catch{}},Fo=async t=>{const e=`https://vimeo.com/api/v2/video/${Lo(t)}.json`,n=(await(await fetch(e)).json())[0].thumbnail_large,r=n.substr(n.lastIndexOf("/")+1).split("_")[0],o=new URL(Gn);return o.pathname=`/video/${r}.webp`,o.searchParams.append("mw","1100"),o.searchParams.append("mh","619"),o.searchParams.append("q","70"),o},Io=()=>c.jsx("div",{style:{display:"flex",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",fontSize:"1.2em"},children:'Open the "Settings" panel and paste a video URL, e.g. https://vimeo.com/831343124.'}),Mo=({title:t,status:e,loading:n,videoUrl:r,previewImageUrl:o,autoplay:i,renderer:a,showPreview:s,onStatusChange:l,onPreviewImageUrlChange:d})=>{const[m,f]=u.useState(0);if(u.useEffect(()=>{i&&a!=="canvas"&&e==="initial"&&l("loading")},[i,e,a,l]),u.useEffect(()=>{a!=="canvas"&&Oo()},[a]),u.useEffect(()=>{if(r!==void 0){if(s===!1){d(void 0);return}o===void 0&&Fo(r).then(d).catch(()=>{console.error(`Could not load preview image for ${r}`)})}},[d,s,r,o]),!(a==="canvas"||e==="initial"))return c.jsx("iframe",{title:t,src:r,loading:n,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;",allowFullScreen:!0,style:{position:"absolute",width:"100%",height:"100%",opacity:m,transition:"opacity 1s",border:"none"},onLoad:()=>{l("ready"),f(1)}})},Ft=u.createContext({onInitPlayer:()=>{},status:"initial"}),$o=u.forwardRef(({url:t,loading:e="lazy",autoplay:n=!1,autopause:r=!0,showByline:o=!1,showControls:i=!0,doNotTrack:a=!1,keyboard:s=!0,loop:l=!1,muted:d=!1,pip:m=!1,playsinline:f=!0,showPortrait:g=!0,quality:p="auto",responsive:b=!0,speed:h=!1,showTitle:w=!1,transparent:v=!0,showPreview:x=!1,autopip:y,controlsColor:j,interactiveParams:k,texttrack:C,children:N,...P},A)=>{const[D,T]=u.useState("initial"),[_,I]=u.useState(),{renderer:E}=u.useContext(qe),z=Do({url:t,autoplay:n,autopause:r,showControls:i,controlsColor:j,doNotTrack:a,interactiveParams:k,keyboard:s,loop:l,muted:d,pip:m,playsinline:f,quality:p,responsive:b,speed:h,texttrack:C,showTitle:w,transparent:v,showPortrait:g,autopip:y});return c.jsx(Ft.Provider,{value:{status:D,previewImageUrl:_,onInitPlayer(){E!=="canvas"&&T("loading")}},children:c.jsx("div",{...P,ref:O=>{A!==null&&(typeof A=="function"?A(O):A.current=O)},children:z===void 0?c.jsx(Io,{}):c.jsxs(c.Fragment,{children:[N,c.jsx(Mo,{title:P.title,autoplay:n,videoUrl:z,previewImageUrl:_,loading:e,showPreview:x,renderer:E,status:D,onStatusChange:T,onPreviewImageUrlChange:I})]})})})});$o.displayName="Vimeo";const Bo="https://www.youtube-nocookie.com",Vo="https://www.youtube.com",Zn="https://img.youtube.com",Xn=t=>{if(t)try{const e=new URL(t);return e.pathname==="/embed"?void 0:e.hostname==="youtu.be"?e.pathname.slice(1):e.searchParams.get("v")||e.pathname.split("/").pop()}catch{return t}},Ho=(t,e)=>{var n,r;const o=Xn(t.url),i=new URL(e);if(o)i.pathname=`/embed/${o}`;else if(t.url)try{const l=new URL(t.url);i.pathname=l.pathname,i.search=l.search}catch{}const a=Object.keys(t),s={};for(const l of a)switch(l){case"autoplay":s.autoplay=t.autoplay?"1":"0",t.autoplay&&t.muted===void 0&&(s.mute="1");break;case"muted":s.mute=t.muted?"1":"0";break;case"showControls":s.controls=t.showControls?"1":"0";break;case"showRelatedVideos":s.rel=t.showRelatedVideos?"1":"0";break;case"keyboard":s.keyboard=t.keyboard?"1":"0";break;case"loop":s.loop=t.loop?"1":"0",t.loop&&(t.playlist??"").trim()===""&&(s.playlist=o);break;case"inline":s.playsinline=t.inline?"1":"0";break;case"allowFullscreen":s.fs=t.allowFullscreen?"1":"0";break;case"captionLanguage":s.cc_lang_pref=t.captionLanguage;break;case"showCaptions":s.cc_load_policy=t.showCaptions?"1":"0";break;case"showAnnotations":s.iv_load_policy=t.showAnnotations?"1":"3";break;case"startTime":s.start=(n=t.startTime)==null?void 0:n.toString();break;case"endTime":s.end=(r=t.endTime)==null?void 0:r.toString();break;case"disableKeyboard":s.disablekb=t.disableKeyboard?"1":"0";break;case"language":s.hl=t.language;break;case"listId":s.list=t.listId;break;case"listType":s.listType=t.listType;break;case"color":s.color=t.color;break;case"origin":s.origin=t.origin;break;case"referrer":s.widget_referrer=t.referrer;break;case"playlist":s.playlist=t.playlist;break}return Object.entries(s).forEach(([l,d])=>{d!==void 0&&i.searchParams.append(l,d.toString())}),i.toString()},bn=t=>{const e=document.createElement("link");e.rel="preconnect",e.href=t,e.crossOrigin="true",document.head.appendChild(e)};let xn=!1;const Wo=t=>{if(!(xn||window.matchMedia("(hover: none)").matches)){try{const e=new URL(t);bn(e.origin)}catch{}bn(Zn),xn=!0}},Uo=t=>new URL(`${Zn}/vi/${t}/maxresdefault.jpg`),Yo=()=>c.jsx("div",{className:"flex w-full h-full items-center justify-center text-lg",children:'Open the "Settings" panel and paste a video URL, e.g. https://youtube.com/watch?v=dQw4w9WgXcQ'}),Ko=({title:t,status:e,loading:n,videoUrl:r,previewImageUrl:o,autoplay:i,renderer:a,showPreview:s,onStatusChange:l,onPreviewImageUrlChange:d})=>{const[m,f]=u.useState(0);return u.useEffect(()=>{i&&a!=="canvas"&&e==="initial"&&l("loading")},[i,e,a,l]),u.useEffect(()=>{a!=="canvas"&&Wo(r)},[a,r]),u.useEffect(()=>{const g=Xn(r);if(!g||!s){d(void 0);return}o||d(Uo(g))},[d,s,r,o]),a==="canvas"||e==="initial"?null:c.jsx("iframe",{title:t,src:r,loading:n,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",width:"100%",height:"100%",opacity:m,transition:"opacity 1s",border:"none"},onLoad:()=>{l("ready"),f(1)}})},at=u.forwardRef(({url:t,loading:e="lazy",autoplay:n,showPreview:r,children:o,privacyEnhancedMode:i,...a},s)=>{const[l,d]=u.useState("initial"),[m,f]=u.useState(),{renderer:g}=u.useContext(qe),p=i??!0?Bo:Vo,b=Ho({...a,url:t,autoplay:!0},p);return c.jsx(Ft.Provider,{value:{status:l,previewImageUrl:m,onInitPlayer(){g!=="canvas"&&d("loading")}},children:c.jsx("div",{...a,ref:s,children:b?c.jsxs(c.Fragment,{children:[o,c.jsx(Ko,{title:a.title,autoplay:n,videoUrl:b,previewImageUrl:m,loading:e,showPreview:r,renderer:g,status:l,onStatusChange:d,onPreviewImageUrlChange:f})]}):c.jsx(Yo,{})})})});at.displayName="YouTube";const Go="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkOAMAANIAzr59FiYAAAAASUVORK5CYII=",st=u.forwardRef(({src:t,...e},n)=>{const r=u.useContext(Ft);return c.jsx(Nt,{...e,src:String(r.previewImageUrl??t??Go),ref:n})});st.displayName="VimeoPreviewImage";function Zo(){return new Promise(t=>{setTimeout(t,100),requestAnimationFrame(()=>{setTimeout(t,0)})})}const lt=u.forwardRef((t,e)=>{const n=u.useContext(Ft),r=u.useCallback(async()=>{await Zo(),n.onInitPlayer()},[n]);if(n.status==="initial")return c.jsx(M,{...t,onClick:r,ref:e})});lt.displayName="VimeoPlayButton";const dt=u.forwardRef((t,e)=>{if(u.useContext(Ft).status==="loading")return c.jsx("div",{...t,ref:e})});dt.displayName="VimeoSpinner";var Te="Collapsible",[Xo,Qn]=oe(Te),[Qo,Oe]=Xo(Te),Jn=u.forwardRef((t,e)=>{const{__scopeCollapsible:n,open:r,defaultOpen:o,disabled:i,onOpenChange:a,...s}=t,[l=!1,d]=ce({prop:r,defaultProp:o,onChange:a});return c.jsx(Qo,{scope:n,disabled:i,contentId:Ee(),open:l,onOpenToggle:u.useCallback(()=>d(m=>!m),[d]),children:c.jsx(Z.div,{"data-state":Fe(l),"data-disabled":i?"":void 0,...s,ref:e})})});Jn.displayName=Te;var tr="CollapsibleTrigger",er=u.forwardRef((t,e)=>{const{__scopeCollapsible:n,...r}=t,o=Oe(tr,n);return c.jsx(Z.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":Fe(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...r,ref:e,onClick:bt(t.onClick,o.onOpenToggle)})});er.displayName=tr;var Le="CollapsibleContent",nr=u.forwardRef((t,e)=>{const{forceMount:n,...r}=t,o=Oe(Le,t.__scopeCollapsible);return c.jsx(De,{present:n||o.open,children:({present:i})=>c.jsx(Jo,{...r,ref:e,present:i})})});nr.displayName=Le;var Jo=u.forwardRef((t,e)=>{const{__scopeCollapsible:n,present:r,children:o,...i}=t,a=Oe(Le,n),[s,l]=u.useState(r),d=u.useRef(null),m=yt(e,d),f=u.useRef(0),g=f.current,p=u.useRef(0),b=p.current,h=a.open||s,w=u.useRef(h),v=u.useRef(void 0);return u.useEffect(()=>{const x=requestAnimationFrame(()=>w.current=!1);return()=>cancelAnimationFrame(x)},[]),Tt(()=>{const x=d.current;if(x){v.current=v.current||{transitionDuration:x.style.transitionDuration,animationName:x.style.animationName},x.style.transitionDuration="0s",x.style.animationName="none";const y=x.getBoundingClientRect();f.current=y.height,p.current=y.width,w.current||(x.style.transitionDuration=v.current.transitionDuration,x.style.animationName=v.current.animationName),l(r)}},[a.open,r]),c.jsx(Z.div,{"data-state":Fe(a.open),"data-disabled":a.disabled?"":void 0,id:a.contentId,hidden:!h,...i,ref:m,style:{"--radix-collapsible-content-height":g?`${g}px`:void 0,"--radix-collapsible-content-width":b?`${b}px`:void 0,...t.style},children:h&&o})});function Fe(t){return t?"open":"closed"}var tc=Jn,ec=er,nc=nr,we="focusScope.autoFocusOnMount",ve="focusScope.autoFocusOnUnmount",yn={bubbles:!1,cancelable:!0},rc="FocusScope",rr=u.forwardRef((t,e)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...a}=t,[s,l]=u.useState(null),d=Re(o),m=Re(i),f=u.useRef(null),g=yt(e,h=>l(h)),p=u.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;u.useEffect(()=>{if(r){let h=function(y){if(p.paused||!s)return;const j=y.target;s.contains(j)?f.current=j:mt(f.current,{select:!0})},w=function(y){if(p.paused||!s)return;const j=y.relatedTarget;j!==null&&(s.contains(j)||mt(f.current,{select:!0}))},v=function(y){if(document.activeElement===document.body)for(const k of y)k.removedNodes.length>0&&mt(s)};document.addEventListener("focusin",h),document.addEventListener("focusout",w);const x=new MutationObserver(v);return s&&x.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",h),document.removeEventListener("focusout",w),x.disconnect()}}},[r,s,p.paused]),u.useEffect(()=>{if(s){kn.add(p);const h=document.activeElement;if(!s.contains(h)){const v=new CustomEvent(we,yn);s.addEventListener(we,d),s.dispatchEvent(v),v.defaultPrevented||(oc(lc(or(s)),{select:!0}),document.activeElement===h&&mt(s))}return()=>{s.removeEventListener(we,d),setTimeout(()=>{const v=new CustomEvent(ve,yn);s.addEventListener(ve,m),s.dispatchEvent(v),v.defaultPrevented||mt(h??document.body,{select:!0}),s.removeEventListener(ve,m),kn.remove(p)},0)}}},[s,d,m,p]);const b=u.useCallback(h=>{if(!n&&!r||p.paused)return;const w=h.key==="Tab"&&!h.altKey&&!h.ctrlKey&&!h.metaKey,v=document.activeElement;if(w&&v){const x=h.currentTarget,[y,j]=cc(x);y&&j?!h.shiftKey&&v===j?(h.preventDefault(),n&&mt(y,{select:!0})):h.shiftKey&&v===y&&(h.preventDefault(),n&&mt(j,{select:!0})):v===x&&h.preventDefault()}},[n,r,p.paused]);return c.jsx(Z.div,{tabIndex:-1,...a,ref:g,onKeyDown:b})});rr.displayName=rc;function oc(t,{select:e=!1}={}){const n=document.activeElement;for(const r of t)if(mt(r,{select:e}),document.activeElement!==n)return}function cc(t){const e=or(t),n=jn(e,t),r=jn(e.reverse(),t);return[n,r]}function or(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function jn(t,e){for(const n of t)if(!ic(n,{upTo:e}))return n}function ic(t,{upTo:e}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(e!==void 0&&t===e)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}function ac(t){return t instanceof HTMLInputElement&&"select"in t}function mt(t,{select:e=!1}={}){if(t&&t.focus){const n=document.activeElement;t.focus({preventScroll:!0}),t!==n&&ac(t)&&e&&t.select()}}var kn=sc();function sc(){let t=[];return{add(e){const n=t[0];e!==n&&(n==null||n.pause()),t=Cn(t,e),t.unshift(e)},remove(e){var n;t=Cn(t,e),(n=t[0])==null||n.resume()}}}function Cn(t,e){const n=[...t],r=n.indexOf(e);return r!==-1&&n.splice(r,1),n}function lc(t){return t.filter(e=>e.tagName!=="A")}var dc="Portal",cr=u.forwardRef((t,e)=>{var s;const{container:n,...r}=t,[o,i]=u.useState(!1);Tt(()=>i(!0),[]);const a=n||o&&((s=globalThis==null?void 0:globalThis.document)==null?void 0:s.body);return a?po.createPortal(c.jsx(Z.div,{...r,ref:e}),a):null});cr.displayName=dc;var be=0;function uc(){u.useEffect(()=>{const t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",t[0]??Nn()),document.body.insertAdjacentElement("beforeend",t[1]??Nn()),be++,()=>{be===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),be--}},[])}function Nn(){const t=document.createElement("span");return t.setAttribute("data-radix-focus-guard",""),t.tabIndex=0,t.style.outline="none",t.style.opacity="0",t.style.position="fixed",t.style.pointerEvents="none",t}var tt=function(){return tt=Object.assign||function(e){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},tt.apply(this,arguments)};function ir(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n}function fc(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}var Zt="right-scroll-bar-position",Xt="width-before-scroll-bar",hc="with-scroll-bars-hidden",mc="--removed-body-scroll-bar-size";function xe(t,e){return typeof t=="function"?t(e):t&&(t.current=e),t}function pc(t,e){var n=u.useState(function(){return{value:t,callback:e,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=e,n.facade}var gc=typeof window<"u"?u.useLayoutEffect:u.useEffect,Rn=new WeakMap;function wc(t,e){var n=pc(null,function(r){return t.forEach(function(o){return xe(o,r)})});return gc(function(){var r=Rn.get(n);if(r){var o=new Set(r),i=new Set(t),a=n.current;o.forEach(function(s){i.has(s)||xe(s,null)}),i.forEach(function(s){o.has(s)||xe(s,a)})}Rn.set(n,t)},[t]),n}function vc(t){return t}function bc(t,e){e===void 0&&(e=vc);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:t},useMedium:function(i){var a=e(i,r);return n.push(a),function(){n=n.filter(function(s){return s!==a})}},assignSyncMedium:function(i){for(r=!0;n.length;){var a=n;n=[],a.forEach(i)}n={push:function(s){return i(s)},filter:function(){return n}}},assignMedium:function(i){r=!0;var a=[];if(n.length){var s=n;n=[],s.forEach(i),a=n}var l=function(){var m=a;a=[],m.forEach(i)},d=function(){return Promise.resolve().then(l)};d(),n={push:function(m){a.push(m),d()},filter:function(m){return a=a.filter(m),n}}}};return o}function xc(t){t===void 0&&(t={});var e=bc(null);return e.options=tt({async:!0,ssr:!1},t),e}var ar=function(t){var e=t.sideCar,n=ir(t,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=e.read();if(!r)throw new Error("Sidecar medium not found");return u.createElement(r,tt({},n))};ar.isSideCarExport=!0;function yc(t,e){return t.useMedium(e),ar}var sr=xc(),ye=function(){},ie=u.forwardRef(function(t,e){var n=u.useRef(null),r=u.useState({onScrollCapture:ye,onWheelCapture:ye,onTouchMoveCapture:ye}),o=r[0],i=r[1],a=t.forwardProps,s=t.children,l=t.className,d=t.removeScrollBar,m=t.enabled,f=t.shards,g=t.sideCar,p=t.noIsolation,b=t.inert,h=t.allowPinchZoom,w=t.as,v=w===void 0?"div":w,x=t.gapMode,y=ir(t,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),j=g,k=wc([n,e]),C=tt(tt({},y),o);return u.createElement(u.Fragment,null,m&&u.createElement(j,{sideCar:sr,removeScrollBar:d,shards:f,noIsolation:p,inert:b,setCallbacks:i,allowPinchZoom:!!h,lockRef:n,gapMode:x}),a?u.cloneElement(u.Children.only(s),tt(tt({},C),{ref:k})):u.createElement(v,tt({},C,{className:l,ref:k}),s))});ie.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ie.classNames={fullWidth:Xt,zeroRight:Zt};var jc=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function kc(){if(!document)return null;var t=document.createElement("style");t.type="text/css";var e=jc();return e&&t.setAttribute("nonce",e),t}function Cc(t,e){t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}function Nc(t){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(t)}var Rc=function(){var t=0,e=null;return{add:function(n){t==0&&(e=kc())&&(Cc(e,n),Nc(e)),t++},remove:function(){t--,!t&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},Pc=function(){var t=Rc();return function(e,n){u.useEffect(function(){return t.add(e),function(){t.remove()}},[e&&n])}},lr=function(){var t=Pc(),e=function(n){var r=n.styles,o=n.dynamic;return t(r,o),null};return e},Ac={left:0,top:0,right:0,gap:0},je=function(t){return parseInt(t||"",10)||0},zc=function(t){var e=window.getComputedStyle(document.body),n=e[t==="padding"?"paddingLeft":"marginLeft"],r=e[t==="padding"?"paddingTop":"marginTop"],o=e[t==="padding"?"paddingRight":"marginRight"];return[je(n),je(r),je(o)]},Sc=function(t){if(t===void 0&&(t="margin"),typeof window>"u")return Ac;var e=zc(t),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-n+e[2]-e[0])}},_c=lr(),Rt="data-scroll-locked",qc=function(t,e,n,r){var o=t.left,i=t.top,a=t.right,s=t.gap;return n===void 0&&(n="margin"),`
  .`.concat(hc,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body[`).concat(Rt,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(a,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Zt,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(Xt,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(Zt," .").concat(Zt,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Xt," .").concat(Xt,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(Rt,`] {
    `).concat(mc,": ").concat(s,`px;
  }
`)},Pn=function(){var t=parseInt(document.body.getAttribute(Rt)||"0",10);return isFinite(t)?t:0},Ec=function(){u.useEffect(function(){return document.body.setAttribute(Rt,(Pn()+1).toString()),function(){var t=Pn()-1;t<=0?document.body.removeAttribute(Rt):document.body.setAttribute(Rt,t.toString())}},[])},Dc=function(t){var e=t.noRelative,n=t.noImportant,r=t.gapMode,o=r===void 0?"margin":r;Ec();var i=u.useMemo(function(){return Sc(o)},[o]);return u.createElement(_c,{styles:qc(i,!e,o,n?"":"!important")})},Pe=!1;if(typeof window<"u")try{var Ht=Object.defineProperty({},"passive",{get:function(){return Pe=!0,!0}});window.addEventListener("test",Ht,Ht),window.removeEventListener("test",Ht,Ht)}catch{Pe=!1}var jt=Pe?{passive:!1}:!1,Tc=function(t){return t.tagName==="TEXTAREA"},dr=function(t,e){if(!(t instanceof Element))return!1;var n=window.getComputedStyle(t);return n[e]!=="hidden"&&!(n.overflowY===n.overflowX&&!Tc(t)&&n[e]==="visible")},Oc=function(t){return dr(t,"overflowY")},Lc=function(t){return dr(t,"overflowX")},An=function(t,e){var n=e.ownerDocument,r=e;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=ur(t,r);if(o){var i=fr(t,r),a=i[1],s=i[2];if(a>s)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Fc=function(t){var e=t.scrollTop,n=t.scrollHeight,r=t.clientHeight;return[e,n,r]},Ic=function(t){var e=t.scrollLeft,n=t.scrollWidth,r=t.clientWidth;return[e,n,r]},ur=function(t,e){return t==="v"?Oc(e):Lc(e)},fr=function(t,e){return t==="v"?Fc(e):Ic(e)},Mc=function(t,e){return t==="h"&&e==="rtl"?-1:1},$c=function(t,e,n,r,o){var i=Mc(t,window.getComputedStyle(e).direction),a=i*r,s=n.target,l=e.contains(s),d=!1,m=a>0,f=0,g=0;do{var p=fr(t,s),b=p[0],h=p[1],w=p[2],v=h-w-i*b;(b||v)&&ur(t,s)&&(f+=v,g+=b),s instanceof ShadowRoot?s=s.host:s=s.parentNode}while(!l&&s!==document.body||l&&(e.contains(s)||e===s));return(m&&(Math.abs(f)<1||!o)||!m&&(Math.abs(g)<1||!o))&&(d=!0),d},Wt=function(t){return"changedTouches"in t?[t.changedTouches[0].clientX,t.changedTouches[0].clientY]:[0,0]},zn=function(t){return[t.deltaX,t.deltaY]},Sn=function(t){return t&&"current"in t?t.current:t},Bc=function(t,e){return t[0]===e[0]&&t[1]===e[1]},Vc=function(t){return`
  .block-interactivity-`.concat(t,` {pointer-events: none;}
  .allow-interactivity-`).concat(t,` {pointer-events: all;}
`)},Hc=0,kt=[];function Wc(t){var e=u.useRef([]),n=u.useRef([0,0]),r=u.useRef(),o=u.useState(Hc++)[0],i=u.useState(lr)[0],a=u.useRef(t);u.useEffect(function(){a.current=t},[t]),u.useEffect(function(){if(t.inert){document.body.classList.add("block-interactivity-".concat(o));var h=fc([t.lockRef.current],(t.shards||[]).map(Sn),!0).filter(Boolean);return h.forEach(function(w){return w.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),h.forEach(function(w){return w.classList.remove("allow-interactivity-".concat(o))})}}},[t.inert,t.lockRef.current,t.shards]);var s=u.useCallback(function(h,w){if("touches"in h&&h.touches.length===2||h.type==="wheel"&&h.ctrlKey)return!a.current.allowPinchZoom;var v=Wt(h),x=n.current,y="deltaX"in h?h.deltaX:x[0]-v[0],j="deltaY"in h?h.deltaY:x[1]-v[1],k,C=h.target,N=Math.abs(y)>Math.abs(j)?"h":"v";if("touches"in h&&N==="h"&&C.type==="range")return!1;var P=An(N,C);if(!P)return!0;if(P?k=N:(k=N==="v"?"h":"v",P=An(N,C)),!P)return!1;if(!r.current&&"changedTouches"in h&&(y||j)&&(r.current=k),!k)return!0;var A=r.current||k;return $c(A,w,h,A==="h"?y:j,!0)},[]),l=u.useCallback(function(h){var w=h;if(!(!kt.length||kt[kt.length-1]!==i)){var v="deltaY"in w?zn(w):Wt(w),x=e.current.filter(function(k){return k.name===w.type&&(k.target===w.target||w.target===k.shadowParent)&&Bc(k.delta,v)})[0];if(x&&x.should){w.cancelable&&w.preventDefault();return}if(!x){var y=(a.current.shards||[]).map(Sn).filter(Boolean).filter(function(k){return k.contains(w.target)}),j=y.length>0?s(w,y[0]):!a.current.noIsolation;j&&w.cancelable&&w.preventDefault()}}},[]),d=u.useCallback(function(h,w,v,x){var y={name:h,delta:w,target:v,should:x,shadowParent:Uc(v)};e.current.push(y),setTimeout(function(){e.current=e.current.filter(function(j){return j!==y})},1)},[]),m=u.useCallback(function(h){n.current=Wt(h),r.current=void 0},[]),f=u.useCallback(function(h){d(h.type,zn(h),h.target,s(h,t.lockRef.current))},[]),g=u.useCallback(function(h){d(h.type,Wt(h),h.target,s(h,t.lockRef.current))},[]);u.useEffect(function(){return kt.push(i),t.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:g}),document.addEventListener("wheel",l,jt),document.addEventListener("touchmove",l,jt),document.addEventListener("touchstart",m,jt),function(){kt=kt.filter(function(h){return h!==i}),document.removeEventListener("wheel",l,jt),document.removeEventListener("touchmove",l,jt),document.removeEventListener("touchstart",m,jt)}},[]);var p=t.removeScrollBar,b=t.inert;return u.createElement(u.Fragment,null,b?u.createElement(i,{styles:Vc(o)}):null,p?u.createElement(Dc,{gapMode:t.gapMode}):null)}function Uc(t){for(var e=null;t!==null;)t instanceof ShadowRoot&&(e=t.host,t=t.host),t=t.parentNode;return e}const Yc=yc(sr,Wc);var hr=u.forwardRef(function(t,e){return u.createElement(ie,tt({},t,{ref:e,sideCar:Yc}))});hr.classNames=ie.classNames;var Kc=function(t){if(typeof document>"u")return null;var e=Array.isArray(t)?t[0]:t;return e.ownerDocument.body},Ct=new WeakMap,Ut=new WeakMap,Yt={},ke=0,mr=function(t){return t&&(t.host||mr(t.parentNode))},Gc=function(t,e){return e.map(function(n){if(t.contains(n))return n;var r=mr(n);return r&&t.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",t,". Doing nothing"),null)}).filter(function(n){return!!n})},Zc=function(t,e,n,r){var o=Gc(e,Array.isArray(t)?t:[t]);Yt[n]||(Yt[n]=new WeakMap);var i=Yt[n],a=[],s=new Set,l=new Set(o),d=function(f){!f||s.has(f)||(s.add(f),d(f.parentNode))};o.forEach(d);var m=function(f){!f||l.has(f)||Array.prototype.forEach.call(f.children,function(g){if(s.has(g))m(g);else try{var p=g.getAttribute(r),b=p!==null&&p!=="false",h=(Ct.get(g)||0)+1,w=(i.get(g)||0)+1;Ct.set(g,h),i.set(g,w),a.push(g),h===1&&b&&Ut.set(g,!0),w===1&&g.setAttribute(n,"true"),b||g.setAttribute(r,"true")}catch(v){console.error("aria-hidden: cannot operate on ",g,v)}})};return m(e),s.clear(),ke++,function(){a.forEach(function(f){var g=Ct.get(f)-1,p=i.get(f)-1;Ct.set(f,g),i.set(f,p),g||(Ut.has(f)||f.removeAttribute(r),Ut.delete(f)),p||f.removeAttribute(n)}),ke--,ke||(Ct=new WeakMap,Ct=new WeakMap,Ut=new WeakMap,Yt={})}},Xc=function(t,e,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(t)?t:[t]),o=Kc(t);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),Zc(r,o,n,"aria-hidden")):function(){return null}};const Qc=["top","right","bottom","left"],et=Math.min,B=Math.max,Jt=Math.round,Kt=Math.floor,nt=t=>({x:t,y:t}),Jc={left:"right",right:"left",bottom:"top",top:"bottom"},ti={start:"end",end:"start"};function Ae(t,e,n){return B(t,et(e,n))}function ut(t,e){return typeof t=="function"?t(e):t}function ft(t){return t.split("-")[0]}function St(t){return t.split("-")[1]}function Ie(t){return t==="x"?"y":"x"}function Me(t){return t==="y"?"height":"width"}function _t(t){return["top","bottom"].includes(ft(t))?"y":"x"}function $e(t){return Ie(_t(t))}function ei(t,e,n){n===void 0&&(n=!1);const r=St(t),o=$e(t),i=Me(o);let a=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(a=te(a)),[a,te(a)]}function ni(t){const e=te(t);return[ze(t),e,ze(e)]}function ze(t){return t.replace(/start|end/g,e=>ti[e])}function ri(t,e,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return n?e?o:r:e?r:o;case"left":case"right":return e?i:a;default:return[]}}function oi(t,e,n,r){const o=St(t);let i=ri(ft(t),n==="start",r);return o&&(i=i.map(a=>a+"-"+o),e&&(i=i.concat(i.map(ze)))),i}function te(t){return t.replace(/left|right|bottom|top/g,e=>Jc[e])}function ci(t){return{top:0,right:0,bottom:0,left:0,...t}}function pr(t){return typeof t!="number"?ci(t):{top:t,right:t,bottom:t,left:t}}function ee(t){const{x:e,y:n,width:r,height:o}=t;return{width:r,height:o,top:n,left:e,right:e+r,bottom:n+o,x:e,y:n}}function _n(t,e,n){let{reference:r,floating:o}=t;const i=_t(e),a=$e(e),s=Me(a),l=ft(e),d=i==="y",m=r.x+r.width/2-o.width/2,f=r.y+r.height/2-o.height/2,g=r[s]/2-o[s]/2;let p;switch(l){case"top":p={x:m,y:r.y-o.height};break;case"bottom":p={x:m,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:f};break;case"left":p={x:r.x-o.width,y:f};break;default:p={x:r.x,y:r.y}}switch(St(e)){case"start":p[a]-=g*(n&&d?-1:1);break;case"end":p[a]+=g*(n&&d?-1:1);break}return p}const ii=async(t,e,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(e));let d=await a.getElementRects({reference:t,floating:e,strategy:o}),{x:m,y:f}=_n(d,r,l),g=r,p={},b=0;for(let h=0;h<s.length;h++){const{name:w,fn:v}=s[h],{x,y,data:j,reset:k}=await v({x:m,y:f,initialPlacement:r,placement:g,strategy:o,middlewareData:p,rects:d,platform:a,elements:{reference:t,floating:e}});m=x??m,f=y??f,p={...p,[w]:{...p[w],...j}},k&&b<=50&&(b++,typeof k=="object"&&(k.placement&&(g=k.placement),k.rects&&(d=k.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:o}):k.rects),{x:m,y:f}=_n(d,g,l)),h=-1)}return{x:m,y:f,placement:g,strategy:o,middlewareData:p}};async function Ot(t,e){var n;e===void 0&&(e={});const{x:r,y:o,platform:i,rects:a,elements:s,strategy:l}=t,{boundary:d="clippingAncestors",rootBoundary:m="viewport",elementContext:f="floating",altBoundary:g=!1,padding:p=0}=ut(e,t),b=pr(p),w=s[g?f==="floating"?"reference":"floating":f],v=ee(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(w)))==null||n?w:w.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:d,rootBoundary:m,strategy:l})),x=f==="floating"?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,y=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),j=await(i.isElement==null?void 0:i.isElement(y))?await(i.getScale==null?void 0:i.getScale(y))||{x:1,y:1}:{x:1,y:1},k=ee(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:x,offsetParent:y,strategy:l}):x);return{top:(v.top-k.top+b.top)/j.y,bottom:(k.bottom-v.bottom+b.bottom)/j.y,left:(v.left-k.left+b.left)/j.x,right:(k.right-v.right+b.right)/j.x}}const ai=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:r,placement:o,rects:i,platform:a,elements:s,middlewareData:l}=e,{element:d,padding:m=0}=ut(t,e)||{};if(d==null)return{};const f=pr(m),g={x:n,y:r},p=$e(o),b=Me(p),h=await a.getDimensions(d),w=p==="y",v=w?"top":"left",x=w?"bottom":"right",y=w?"clientHeight":"clientWidth",j=i.reference[b]+i.reference[p]-g[p]-i.floating[b],k=g[p]-i.reference[p],C=await(a.getOffsetParent==null?void 0:a.getOffsetParent(d));let N=C?C[y]:0;(!N||!await(a.isElement==null?void 0:a.isElement(C)))&&(N=s.floating[y]||i.floating[b]);const P=j/2-k/2,A=N/2-h[b]/2-1,D=et(f[v],A),T=et(f[x],A),_=D,I=N-h[b]-T,E=N/2-h[b]/2+P,z=Ae(_,E,I),O=!l.arrow&&St(o)!=null&&E!==z&&i.reference[b]/2-(E<_?D:T)-h[b]/2<0,R=O?E<_?E-_:E-I:0;return{[p]:g[p]+R,data:{[p]:z,centerOffset:E-z-R,...O&&{alignmentOffset:R}},reset:O}}}),si=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:s,platform:l,elements:d}=e,{mainAxis:m=!0,crossAxis:f=!0,fallbackPlacements:g,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:h=!0,...w}=ut(t,e);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const v=ft(o),x=ft(s)===s,y=await(l.isRTL==null?void 0:l.isRTL(d.floating)),j=g||(x||!h?[te(s)]:ni(s));!g&&b!=="none"&&j.push(...oi(s,h,b,y));const k=[s,...j],C=await Ot(e,w),N=[];let P=((r=i.flip)==null?void 0:r.overflows)||[];if(m&&N.push(C[v]),f){const _=ei(o,a,y);N.push(C[_[0]],C[_[1]])}if(P=[...P,{placement:o,overflows:N}],!N.every(_=>_<=0)){var A,D;const _=(((A=i.flip)==null?void 0:A.index)||0)+1,I=k[_];if(I)return{data:{index:_,overflows:P},reset:{placement:I}};let E=(D=P.filter(z=>z.overflows[0]<=0).sort((z,O)=>z.overflows[1]-O.overflows[1])[0])==null?void 0:D.placement;if(!E)switch(p){case"bestFit":{var T;const z=(T=P.map(O=>[O.placement,O.overflows.filter(R=>R>0).reduce((R,$)=>R+$,0)]).sort((O,R)=>O[1]-R[1])[0])==null?void 0:T[0];z&&(E=z);break}case"initialPlacement":E=s;break}if(o!==E)return{reset:{placement:E}}}return{}}}};function qn(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function En(t){return Qc.some(e=>t[e]>=0)}const li=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:r="referenceHidden",...o}=ut(t,e);switch(r){case"referenceHidden":{const i=await Ot(e,{...o,elementContext:"reference"}),a=qn(i,n.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:En(a)}}}case"escaped":{const i=await Ot(e,{...o,altBoundary:!0}),a=qn(i,n.floating);return{data:{escapedOffsets:a,escaped:En(a)}}}default:return{}}}}};async function di(t,e){const{placement:n,platform:r,elements:o}=t,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),a=ft(n),s=St(n),l=_t(n)==="y",d=["left","top"].includes(a)?-1:1,m=i&&l?-1:1,f=ut(e,t);let{mainAxis:g,crossAxis:p,alignmentAxis:b}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return s&&typeof b=="number"&&(p=s==="end"?b*-1:b),l?{x:p*m,y:g*d}:{x:g*d,y:p*m}}const ui=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,r;const{x:o,y:i,placement:a,middlewareData:s}=e,l=await di(e,t);return a===((n=s.offset)==null?void 0:n.placement)&&(r=s.arrow)!=null&&r.alignmentOffset?{}:{x:o+l.x,y:i+l.y,data:{...l,placement:a}}}}},fi=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:r,placement:o}=e,{mainAxis:i=!0,crossAxis:a=!1,limiter:s={fn:w=>{let{x:v,y:x}=w;return{x:v,y:x}}},...l}=ut(t,e),d={x:n,y:r},m=await Ot(e,l),f=_t(ft(o)),g=Ie(f);let p=d[g],b=d[f];if(i){const w=g==="y"?"top":"left",v=g==="y"?"bottom":"right",x=p+m[w],y=p-m[v];p=Ae(x,p,y)}if(a){const w=f==="y"?"top":"left",v=f==="y"?"bottom":"right",x=b+m[w],y=b-m[v];b=Ae(x,b,y)}const h=s.fn({...e,[g]:p,[f]:b});return{...h,data:{x:h.x-n,y:h.y-r}}}}},hi=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=e,{offset:s=0,mainAxis:l=!0,crossAxis:d=!0}=ut(t,e),m={x:n,y:r},f=_t(o),g=Ie(f);let p=m[g],b=m[f];const h=ut(s,e),w=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(l){const y=g==="y"?"height":"width",j=i.reference[g]-i.floating[y]+w.mainAxis,k=i.reference[g]+i.reference[y]-w.mainAxis;p<j?p=j:p>k&&(p=k)}if(d){var v,x;const y=g==="y"?"width":"height",j=["top","left"].includes(ft(o)),k=i.reference[f]-i.floating[y]+(j&&((v=a.offset)==null?void 0:v[f])||0)+(j?0:w.crossAxis),C=i.reference[f]+i.reference[y]+(j?0:((x=a.offset)==null?void 0:x[f])||0)-(j?w.crossAxis:0);b<k?b=k:b>C&&(b=C)}return{[g]:p,[f]:b}}}},mi=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:r,platform:o,elements:i}=e,{apply:a=()=>{},...s}=ut(t,e),l=await Ot(e,s),d=ft(n),m=St(n),f=_t(n)==="y",{width:g,height:p}=r.floating;let b,h;d==="top"||d==="bottom"?(b=d,h=m===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(h=d,b=m==="end"?"top":"bottom");const w=p-l.top-l.bottom,v=g-l.left-l.right,x=et(p-l[b],w),y=et(g-l[h],v),j=!e.middlewareData.shift;let k=x,C=y;if(f?C=m||j?et(y,v):v:k=m||j?et(x,w):w,j&&!m){const P=B(l.left,0),A=B(l.right,0),D=B(l.top,0),T=B(l.bottom,0);f?C=g-2*(P!==0||A!==0?P+A:B(l.left,l.right)):k=p-2*(D!==0||T!==0?D+T:B(l.top,l.bottom))}await a({...e,availableWidth:C,availableHeight:k});const N=await o.getDimensions(i.floating);return g!==N.width||p!==N.height?{reset:{rects:!0}}:{}}}};function ae(){return typeof window<"u"}function qt(t){return gr(t)?(t.nodeName||"").toLowerCase():"#document"}function V(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function ot(t){var e;return(e=(gr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function gr(t){return ae()?t instanceof Node||t instanceof V(t).Node:!1}function X(t){return ae()?t instanceof Element||t instanceof V(t).Element:!1}function rt(t){return ae()?t instanceof HTMLElement||t instanceof V(t).HTMLElement:!1}function Dn(t){return!ae()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof V(t).ShadowRoot}function It(t){const{overflow:e,overflowX:n,overflowY:r,display:o}=Q(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(o)}function pi(t){return["table","td","th"].includes(qt(t))}function se(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Be(t){const e=Ve(),n=X(t)?Q(t):t;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function gi(t){let e=pt(t);for(;rt(e)&&!At(e);){if(Be(e))return e;if(se(e))return null;e=pt(e)}return null}function Ve(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function At(t){return["html","body","#document"].includes(qt(t))}function Q(t){return V(t).getComputedStyle(t)}function le(t){return X(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function pt(t){if(qt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Dn(t)&&t.host||ot(t);return Dn(e)?e.host:e}function wr(t){const e=pt(t);return At(e)?t.ownerDocument?t.ownerDocument.body:t.body:rt(e)&&It(e)?e:wr(e)}function Lt(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const o=wr(t),i=o===((r=t.ownerDocument)==null?void 0:r.body),a=V(o);if(i){const s=Se(a);return e.concat(a,a.visualViewport||[],It(o)?o:[],s&&n?Lt(s):[])}return e.concat(o,Lt(o,[],n))}function Se(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function vr(t){const e=Q(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const o=rt(t),i=o?t.offsetWidth:n,a=o?t.offsetHeight:r,s=Jt(n)!==i||Jt(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function He(t){return X(t)?t:t.contextElement}function Pt(t){const e=He(t);if(!rt(e))return nt(1);const n=e.getBoundingClientRect(),{width:r,height:o,$:i}=vr(e);let a=(i?Jt(n.width):n.width)/r,s=(i?Jt(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!s||!Number.isFinite(s))&&(s=1),{x:a,y:s}}const wi=nt(0);function br(t){const e=V(t);return!Ve()||!e.visualViewport?wi:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function vi(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==V(t)?!1:e}function xt(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const o=t.getBoundingClientRect(),i=He(t);let a=nt(1);e&&(r?X(r)&&(a=Pt(r)):a=Pt(t));const s=vi(i,n,r)?br(i):nt(0);let l=(o.left+s.x)/a.x,d=(o.top+s.y)/a.y,m=o.width/a.x,f=o.height/a.y;if(i){const g=V(i),p=r&&X(r)?V(r):r;let b=g,h=Se(b);for(;h&&r&&p!==b;){const w=Pt(h),v=h.getBoundingClientRect(),x=Q(h),y=v.left+(h.clientLeft+parseFloat(x.paddingLeft))*w.x,j=v.top+(h.clientTop+parseFloat(x.paddingTop))*w.y;l*=w.x,d*=w.y,m*=w.x,f*=w.y,l+=y,d+=j,b=V(h),h=Se(b)}}return ee({width:m,height:f,x:l,y:d})}function We(t,e){const n=le(t).scrollLeft;return e?e.left+n:xt(ot(t)).left+n}function xr(t,e,n){n===void 0&&(n=!1);const r=t.getBoundingClientRect(),o=r.left+e.scrollLeft-(n?0:We(t,r)),i=r.top+e.scrollTop;return{x:o,y:i}}function bi(t){let{elements:e,rect:n,offsetParent:r,strategy:o}=t;const i=o==="fixed",a=ot(r),s=e?se(e.floating):!1;if(r===a||s&&i)return n;let l={scrollLeft:0,scrollTop:0},d=nt(1);const m=nt(0),f=rt(r);if((f||!f&&!i)&&((qt(r)!=="body"||It(a))&&(l=le(r)),rt(r))){const p=xt(r);d=Pt(r),m.x=p.x+r.clientLeft,m.y=p.y+r.clientTop}const g=a&&!f&&!i?xr(a,l,!0):nt(0);return{width:n.width*d.x,height:n.height*d.y,x:n.x*d.x-l.scrollLeft*d.x+m.x+g.x,y:n.y*d.y-l.scrollTop*d.y+m.y+g.y}}function xi(t){return Array.from(t.getClientRects())}function yi(t){const e=ot(t),n=le(t),r=t.ownerDocument.body,o=B(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),i=B(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+We(t);const s=-n.scrollTop;return Q(r).direction==="rtl"&&(a+=B(e.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}function ji(t,e){const n=V(t),r=ot(t),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;const d=Ve();(!d||d&&e==="fixed")&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s,y:l}}function ki(t,e){const n=xt(t,!0,e==="fixed"),r=n.top+t.clientTop,o=n.left+t.clientLeft,i=rt(t)?Pt(t):nt(1),a=t.clientWidth*i.x,s=t.clientHeight*i.y,l=o*i.x,d=r*i.y;return{width:a,height:s,x:l,y:d}}function Tn(t,e,n){let r;if(e==="viewport")r=ji(t,n);else if(e==="document")r=yi(ot(t));else if(X(e))r=ki(e,n);else{const o=br(t);r={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return ee(r)}function yr(t,e){const n=pt(t);return n===e||!X(n)||At(n)?!1:Q(n).position==="fixed"||yr(n,e)}function Ci(t,e){const n=e.get(t);if(n)return n;let r=Lt(t,[],!1).filter(s=>X(s)&&qt(s)!=="body"),o=null;const i=Q(t).position==="fixed";let a=i?pt(t):t;for(;X(a)&&!At(a);){const s=Q(a),l=Be(a);!l&&s.position==="fixed"&&(o=null),(i?!l&&!o:!l&&s.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||It(a)&&!l&&yr(t,a))?r=r.filter(m=>m!==a):o=s,a=pt(a)}return e.set(t,r),r}function Ni(t){let{element:e,boundary:n,rootBoundary:r,strategy:o}=t;const a=[...n==="clippingAncestors"?se(e)?[]:Ci(e,this._c):[].concat(n),r],s=a[0],l=a.reduce((d,m)=>{const f=Tn(e,m,o);return d.top=B(f.top,d.top),d.right=et(f.right,d.right),d.bottom=et(f.bottom,d.bottom),d.left=B(f.left,d.left),d},Tn(e,s,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ri(t){const{width:e,height:n}=vr(t);return{width:e,height:n}}function Pi(t,e,n){const r=rt(e),o=ot(e),i=n==="fixed",a=xt(t,!0,i,e);let s={scrollLeft:0,scrollTop:0};const l=nt(0);if(r||!r&&!i)if((qt(e)!=="body"||It(o))&&(s=le(e)),r){const g=xt(e,!0,i,e);l.x=g.x+e.clientLeft,l.y=g.y+e.clientTop}else o&&(l.x=We(o));const d=o&&!r&&!i?xr(o,s):nt(0),m=a.left+s.scrollLeft-l.x-d.x,f=a.top+s.scrollTop-l.y-d.y;return{x:m,y:f,width:a.width,height:a.height}}function Ce(t){return Q(t).position==="static"}function On(t,e){if(!rt(t)||Q(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return ot(t)===n&&(n=n.ownerDocument.body),n}function jr(t,e){const n=V(t);if(se(t))return n;if(!rt(t)){let o=pt(t);for(;o&&!At(o);){if(X(o)&&!Ce(o))return o;o=pt(o)}return n}let r=On(t,e);for(;r&&pi(r)&&Ce(r);)r=On(r,e);return r&&At(r)&&Ce(r)&&!Be(r)?n:r||gi(t)||n}const Ai=async function(t){const e=this.getOffsetParent||jr,n=this.getDimensions,r=await n(t.floating);return{reference:Pi(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function zi(t){return Q(t).direction==="rtl"}const Si={convertOffsetParentRelativeRectToViewportRelativeRect:bi,getDocumentElement:ot,getClippingRect:Ni,getOffsetParent:jr,getElementRects:Ai,getClientRects:xi,getDimensions:Ri,getScale:Pt,isElement:X,isRTL:zi};function kr(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function _i(t,e){let n=null,r;const o=ot(t);function i(){var s;clearTimeout(r),(s=n)==null||s.disconnect(),n=null}function a(s,l){s===void 0&&(s=!1),l===void 0&&(l=1),i();const d=t.getBoundingClientRect(),{left:m,top:f,width:g,height:p}=d;if(s||e(),!g||!p)return;const b=Kt(f),h=Kt(o.clientWidth-(m+g)),w=Kt(o.clientHeight-(f+p)),v=Kt(m),y={rootMargin:-b+"px "+-h+"px "+-w+"px "+-v+"px",threshold:B(0,et(1,l))||1};let j=!0;function k(C){const N=C[0].intersectionRatio;if(N!==l){if(!j)return a();N?a(!1,N):r=setTimeout(()=>{a(!1,1e-7)},1e3)}N===1&&!kr(d,t.getBoundingClientRect())&&a(),j=!1}try{n=new IntersectionObserver(k,{...y,root:o.ownerDocument})}catch{n=new IntersectionObserver(k,y)}n.observe(t)}return a(!0),i}function qi(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,d=He(t),m=o||i?[...d?Lt(d):[],...Lt(e)]:[];m.forEach(v=>{o&&v.addEventListener("scroll",n,{passive:!0}),i&&v.addEventListener("resize",n)});const f=d&&s?_i(d,n):null;let g=-1,p=null;a&&(p=new ResizeObserver(v=>{let[x]=v;x&&x.target===d&&p&&(p.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var y;(y=p)==null||y.observe(e)})),n()}),d&&!l&&p.observe(d),p.observe(e));let b,h=l?xt(t):null;l&&w();function w(){const v=xt(t);h&&!kr(h,v)&&n(),h=v,b=requestAnimationFrame(w)}return n(),()=>{var v;m.forEach(x=>{o&&x.removeEventListener("scroll",n),i&&x.removeEventListener("resize",n)}),f==null||f(),(v=p)==null||v.disconnect(),p=null,l&&cancelAnimationFrame(b)}}const Ei=ui,Di=fi,Ti=si,Oi=mi,Li=li,Ln=ai,Fi=hi,Ii=(t,e,n)=>{const r=new Map,o={platform:Si,...n},i={...o.platform,_c:r};return ii(t,e,{...o,platform:i})};var Qt=typeof document<"u"?u.useLayoutEffect:u.useEffect;function ne(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,r,o;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(!ne(t[r],e[r]))return!1;return!0}if(o=Object.keys(t),n=o.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(e,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&t.$$typeof)&&!ne(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function Cr(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Fn(t,e){const n=Cr(t);return Math.round(e*n)/n}function In(t){const e=u.useRef(t);return Qt(()=>{e.current=t}),e}function Mi(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:a}={},transform:s=!0,whileElementsMounted:l,open:d}=t,[m,f]=u.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[g,p]=u.useState(r);ne(g,r)||p(r);const[b,h]=u.useState(null),[w,v]=u.useState(null),x=u.useCallback(R=>{R!==C.current&&(C.current=R,h(R))},[]),y=u.useCallback(R=>{R!==N.current&&(N.current=R,v(R))},[]),j=i||b,k=a||w,C=u.useRef(null),N=u.useRef(null),P=u.useRef(m),A=l!=null,D=In(l),T=In(o),_=u.useCallback(()=>{if(!C.current||!N.current)return;const R={placement:e,strategy:n,middleware:g};T.current&&(R.platform=T.current),Ii(C.current,N.current,R).then($=>{const ct={...$,isPositioned:!0};I.current&&!ne(P.current,ct)&&(P.current=ct,go.flushSync(()=>{f(ct)}))})},[g,e,n,T]);Qt(()=>{d===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,f(R=>({...R,isPositioned:!1})))},[d]);const I=u.useRef(!1);Qt(()=>(I.current=!0,()=>{I.current=!1}),[]),Qt(()=>{if(j&&(C.current=j),k&&(N.current=k),j&&k){if(D.current)return D.current(j,k,_);_()}},[j,k,_,D,A]);const E=u.useMemo(()=>({reference:C,floating:N,setReference:x,setFloating:y}),[x,y]),z=u.useMemo(()=>({reference:j,floating:k}),[j,k]),O=u.useMemo(()=>{const R={position:n,left:0,top:0};if(!z.floating)return R;const $=Fn(z.floating,m.x),ct=Fn(z.floating,m.y);return s?{...R,transform:"translate("+$+"px, "+ct+"px)",...Cr(z.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:$,top:ct}},[n,s,z.floating,m.x,m.y]);return u.useMemo(()=>({...m,update:_,refs:E,elements:z,floatingStyles:O}),[m,_,E,z,O])}const $i=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:r,padding:o}=typeof t=="function"?t(n):t;return r&&e(r)?r.current!=null?Ln({element:r.current,padding:o}).fn(n):{}:r?Ln({element:r,padding:o}).fn(n):{}}}},Bi=(t,e)=>({...Ei(t),options:[t,e]}),Vi=(t,e)=>({...Di(t),options:[t,e]}),Hi=(t,e)=>({...Fi(t),options:[t,e]}),Wi=(t,e)=>({...Ti(t),options:[t,e]}),Ui=(t,e)=>({...Oi(t),options:[t,e]}),Yi=(t,e)=>({...Li(t),options:[t,e]}),Ki=(t,e)=>({...$i(t),options:[t,e]});var Gi="Arrow",Nr=u.forwardRef((t,e)=>{const{children:n,width:r=10,height:o=5,...i}=t;return c.jsx(Z.svg,{...i,ref:e,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:c.jsx("polygon",{points:"0,0 30,0 15,10"})})});Nr.displayName=Gi;var Zi=Nr;function Xi(t){const[e,n]=u.useState(void 0);return Tt(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let a,s;if("borderBoxSize"in i){const l=i.borderBoxSize,d=Array.isArray(l)?l[0]:l;a=d.inlineSize,s=d.blockSize}else a=t.offsetWidth,s=t.offsetHeight;n({width:a,height:s})});return r.observe(t,{box:"border-box"}),()=>r.unobserve(t)}else n(void 0)},[t]),e}var Ue="Popper",[Rr,Pr]=oe(Ue),[Qi,Ar]=Rr(Ue),zr=t=>{const{__scopePopper:e,children:n}=t,[r,o]=u.useState(null);return c.jsx(Qi,{scope:e,anchor:r,onAnchorChange:o,children:n})};zr.displayName=Ue;var Sr="PopperAnchor",_r=u.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:r,...o}=t,i=Ar(Sr,n),a=u.useRef(null),s=yt(e,a);return u.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||a.current)}),r?null:c.jsx(Z.div,{...o,ref:s})});_r.displayName=Sr;var Ye="PopperContent",[Ji,ta]=Rr(Ye),qr=u.forwardRef((t,e)=>{var Je,tn,en,nn,rn,on;const{__scopePopper:n,side:r="bottom",sideOffset:o=0,align:i="center",alignOffset:a=0,arrowPadding:s=0,avoidCollisions:l=!0,collisionBoundary:d=[],collisionPadding:m=0,sticky:f="partial",hideWhenDetached:g=!1,updatePositionStrategy:p="optimized",onPlaced:b,...h}=t,w=Ar(Ye,n),[v,x]=u.useState(null),y=yt(e,Et=>x(Et)),[j,k]=u.useState(null),C=Xi(j),N=(C==null?void 0:C.width)??0,P=(C==null?void 0:C.height)??0,A=r+(i!=="center"?"-"+i:""),D=typeof m=="number"?m:{top:0,right:0,bottom:0,left:0,...m},T=Array.isArray(d)?d:[d],_=T.length>0,I={padding:D,boundary:T.filter(na),altBoundary:_},{refs:E,floatingStyles:z,placement:O,isPositioned:R,middlewareData:$}=Mi({strategy:"fixed",placement:A,whileElementsMounted:(...Et)=>qi(...Et,{animationFrame:p==="always"}),elements:{reference:w.anchor},middleware:[Bi({mainAxis:o+P,alignmentAxis:a}),l&&Vi({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?Hi():void 0,...I}),l&&Wi({...I}),Ui({...I,apply:({elements:Et,rects:cn,availableWidth:uo,availableHeight:fo})=>{const{width:ho,height:mo}=cn.reference,Bt=Et.floating.style;Bt.setProperty("--radix-popper-available-width",`${uo}px`),Bt.setProperty("--radix-popper-available-height",`${fo}px`),Bt.setProperty("--radix-popper-anchor-width",`${ho}px`),Bt.setProperty("--radix-popper-anchor-height",`${mo}px`)}}),j&&Ki({element:j,padding:s}),ra({arrowWidth:N,arrowHeight:P}),g&&Yi({strategy:"referenceHidden",...I})]}),[ct,oo]=Tr(O),$t=Re(b);Tt(()=>{R&&($t==null||$t())},[R,$t]);const co=(Je=$.arrow)==null?void 0:Je.x,io=(tn=$.arrow)==null?void 0:tn.y,ao=((en=$.arrow)==null?void 0:en.centerOffset)!==0,[so,lo]=u.useState();return Tt(()=>{v&&lo(window.getComputedStyle(v).zIndex)},[v]),c.jsx("div",{ref:E.setFloating,"data-radix-popper-content-wrapper":"",style:{...z,transform:R?z.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:so,"--radix-popper-transform-origin":[(nn=$.transformOrigin)==null?void 0:nn.x,(rn=$.transformOrigin)==null?void 0:rn.y].join(" "),...((on=$.hide)==null?void 0:on.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:c.jsx(Ji,{scope:n,placedSide:ct,onArrowChange:k,arrowX:co,arrowY:io,shouldHideArrow:ao,children:c.jsx(Z.div,{"data-side":ct,"data-align":oo,...h,ref:y,style:{...h.style,animation:R?void 0:"none"}})})})});qr.displayName=Ye;var Er="PopperArrow",ea={top:"bottom",right:"left",bottom:"top",left:"right"},Dr=u.forwardRef(function(e,n){const{__scopePopper:r,...o}=e,i=ta(Er,r),a=ea[i.placedSide];return c.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:c.jsx(Zi,{...o,ref:n,style:{...o.style,display:"block"}})})});Dr.displayName=Er;function na(t){return t!==null}var ra=t=>({name:"transformOrigin",options:t,fn(e){var w,v,x;const{placement:n,rects:r,middlewareData:o}=e,a=((w=o.arrow)==null?void 0:w.centerOffset)!==0,s=a?0:t.arrowWidth,l=a?0:t.arrowHeight,[d,m]=Tr(n),f={start:"0%",center:"50%",end:"100%"}[m],g=(((v=o.arrow)==null?void 0:v.x)??0)+s/2,p=(((x=o.arrow)==null?void 0:x.y)??0)+l/2;let b="",h="";return d==="bottom"?(b=a?f:`${g}px`,h=`${-l}px`):d==="top"?(b=a?f:`${g}px`,h=`${r.floating.height+l}px`):d==="right"?(b=`${-l}px`,h=a?f:`${p}px`):d==="left"&&(b=`${r.floating.width+l}px`,h=a?f:`${p}px`),{data:{x:b,y:h}}}});function Tr(t){const[e,n="center"]=t.split("-");return[e,n]}var oa=zr,Or=_r,ca=qr,ia=Dr,Ke="Popover",[Lr,Ua]=oe(Ke,[Pr]),Mt=Pr(),[aa,gt]=Lr(Ke),Fr=t=>{const{__scopePopover:e,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:a=!1}=t,s=Mt(e),l=u.useRef(null),[d,m]=u.useState(!1),[f=!1,g]=ce({prop:r,defaultProp:o,onChange:i});return c.jsx(oa,{...s,children:c.jsx(aa,{scope:e,contentId:Ee(),triggerRef:l,open:f,onOpenChange:g,onOpenToggle:u.useCallback(()=>g(p=>!p),[g]),hasCustomAnchor:d,onCustomAnchorAdd:u.useCallback(()=>m(!0),[]),onCustomAnchorRemove:u.useCallback(()=>m(!1),[]),modal:a,children:n})})};Fr.displayName=Ke;var Ir="PopoverAnchor",sa=u.forwardRef((t,e)=>{const{__scopePopover:n,...r}=t,o=gt(Ir,n),i=Mt(n),{onCustomAnchorAdd:a,onCustomAnchorRemove:s}=o;return u.useEffect(()=>(a(),()=>s()),[a,s]),c.jsx(Or,{...i,...r,ref:e})});sa.displayName=Ir;var Mr="PopoverTrigger",$r=u.forwardRef((t,e)=>{const{__scopePopover:n,...r}=t,o=gt(Mr,n),i=Mt(n),a=yt(e,o.triggerRef),s=c.jsx(Z.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":Ur(o.open),...r,ref:a,onClick:bt(t.onClick,o.onOpenToggle)});return o.hasCustomAnchor?s:c.jsx(Or,{asChild:!0,...i,children:s})});$r.displayName=Mr;var Ge="PopoverPortal",[la,da]=Lr(Ge,{forceMount:void 0}),Br=t=>{const{__scopePopover:e,forceMount:n,children:r,container:o}=t,i=gt(Ge,e);return c.jsx(la,{scope:e,forceMount:n,children:c.jsx(De,{present:n||i.open,children:c.jsx(cr,{asChild:!0,container:o,children:r})})})};Br.displayName=Ge;var zt="PopoverContent",Vr=u.forwardRef((t,e)=>{const n=da(zt,t.__scopePopover),{forceMount:r=n.forceMount,...o}=t,i=gt(zt,t.__scopePopover);return c.jsx(De,{present:r||i.open,children:i.modal?c.jsx(ua,{...o,ref:e}):c.jsx(fa,{...o,ref:e})})});Vr.displayName=zt;var ua=u.forwardRef((t,e)=>{const n=gt(zt,t.__scopePopover),r=u.useRef(null),o=yt(e,r),i=u.useRef(!1);return u.useEffect(()=>{const a=r.current;if(a)return Xc(a)},[]),c.jsx(hr,{as:xo,allowPinchZoom:!0,children:c.jsx(Hr,{...t,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:bt(t.onCloseAutoFocus,a=>{var s;a.preventDefault(),i.current||(s=n.triggerRef.current)==null||s.focus()}),onPointerDownOutside:bt(t.onPointerDownOutside,a=>{const s=a.detail.originalEvent,l=s.button===0&&s.ctrlKey===!0,d=s.button===2||l;i.current=d},{checkForDefaultPrevented:!1}),onFocusOutside:bt(t.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1})})})}),fa=u.forwardRef((t,e)=>{const n=gt(zt,t.__scopePopover),r=u.useRef(!1),o=u.useRef(!1);return c.jsx(Hr,{...t,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var a,s;(a=t.onCloseAutoFocus)==null||a.call(t,i),i.defaultPrevented||(r.current||(s=n.triggerRef.current)==null||s.focus(),i.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:i=>{var l,d;(l=t.onInteractOutside)==null||l.call(t,i),i.defaultPrevented||(r.current=!0,i.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const a=i.target;((d=n.triggerRef.current)==null?void 0:d.contains(a))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&o.current&&i.preventDefault()}})}),Hr=u.forwardRef((t,e)=>{const{__scopePopover:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,disableOutsidePointerEvents:a,onEscapeKeyDown:s,onPointerDownOutside:l,onFocusOutside:d,onInteractOutside:m,...f}=t,g=gt(zt,n),p=Mt(n);return uc(),c.jsx(rr,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i,children:c.jsx(yo,{asChild:!0,disableOutsidePointerEvents:a,onInteractOutside:m,onEscapeKeyDown:s,onPointerDownOutside:l,onFocusOutside:d,onDismiss:()=>g.onOpenChange(!1),children:c.jsx(ca,{"data-state":Ur(g.open),role:"dialog",id:g.contentId,...p,...f,ref:e,style:{...f.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),Wr="PopoverClose",ha=u.forwardRef((t,e)=>{const{__scopePopover:n,...r}=t,o=gt(Wr,n);return c.jsx(Z.button,{type:"button",...r,ref:e,onClick:bt(t.onClick,()=>o.onOpenChange(!1))})});ha.displayName=Wr;var ma="PopoverArrow",pa=u.forwardRef((t,e)=>{const{__scopePopover:n,...r}=t,o=Mt(n);return c.jsx(ia,{...o,...r,ref:e})});pa.displayName=ma;function Ur(t){return t?"open":"closed"}var ga=Fr,wa=$r,va=Br,ba=Vr;const W=u.forwardRef((t,e)=>c.jsx(ga,{...t})),U=u.forwardRef(({children:t,...e},n)=>{const r=u.Children.toArray(t)[0];return c.jsx(wa,{asChild:!0,ref:n,...e,children:r??c.jsx("button",{children:"Add button or link"})})}),Y=u.forwardRef(({sideOffset:t=4,align:e="center",hideWhenDetached:n=!0,...r},o)=>c.jsx(va,{children:c.jsx(ba,{ref:o,align:"center",sideOffset:t,hideWhenDetached:n,...r})}));var ht="Accordion",xa=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[Ze,ya,ja]=jo(ht),[de,Ya]=oe(ht,[ja,Qn]),Xe=Qn(),Yr=G.forwardRef((t,e)=>{const{type:n,...r}=t,o=r,i=r;return c.jsx(Ze.Provider,{scope:t.__scopeAccordion,children:n==="multiple"?c.jsx(Ra,{...i,ref:e}):c.jsx(Na,{...o,ref:e})})});Yr.displayName=ht;var[Kr,ka]=de(ht),[Gr,Ca]=de(ht,{collapsible:!1}),Na=G.forwardRef((t,e)=>{const{value:n,defaultValue:r,onValueChange:o=()=>{},collapsible:i=!1,...a}=t,[s,l]=ce({prop:n,defaultProp:r,onChange:o});return c.jsx(Kr,{scope:t.__scopeAccordion,value:s?[s]:[],onItemOpen:l,onItemClose:G.useCallback(()=>i&&l(""),[i,l]),children:c.jsx(Gr,{scope:t.__scopeAccordion,collapsible:i,children:c.jsx(Zr,{...a,ref:e})})})}),Ra=G.forwardRef((t,e)=>{const{value:n,defaultValue:r,onValueChange:o=()=>{},...i}=t,[a=[],s]=ce({prop:n,defaultProp:r,onChange:o}),l=G.useCallback(m=>s((f=[])=>[...f,m]),[s]),d=G.useCallback(m=>s((f=[])=>f.filter(g=>g!==m)),[s]);return c.jsx(Kr,{scope:t.__scopeAccordion,value:a,onItemOpen:l,onItemClose:d,children:c.jsx(Gr,{scope:t.__scopeAccordion,collapsible:!0,children:c.jsx(Zr,{...i,ref:e})})})}),[Pa,ue]=de(ht),Zr=G.forwardRef((t,e)=>{const{__scopeAccordion:n,disabled:r,dir:o,orientation:i="vertical",...a}=t,s=G.useRef(null),l=yt(s,e),d=ya(n),f=ko(o)==="ltr",g=bt(t.onKeyDown,p=>{var P;if(!xa.includes(p.key))return;const b=p.target,h=d().filter(A=>{var D;return!((D=A.ref.current)!=null&&D.disabled)}),w=h.findIndex(A=>A.ref.current===b),v=h.length;if(w===-1)return;p.preventDefault();let x=w;const y=0,j=v-1,k=()=>{x=w+1,x>j&&(x=y)},C=()=>{x=w-1,x<y&&(x=j)};switch(p.key){case"Home":x=y;break;case"End":x=j;break;case"ArrowRight":i==="horizontal"&&(f?k():C());break;case"ArrowDown":i==="vertical"&&k();break;case"ArrowLeft":i==="horizontal"&&(f?C():k());break;case"ArrowUp":i==="vertical"&&C();break}const N=x%v;(P=h[N].ref.current)==null||P.focus()});return c.jsx(Pa,{scope:n,disabled:r,direction:o,orientation:i,children:c.jsx(Ze.Slot,{scope:n,children:c.jsx(Z.div,{...a,"data-orientation":i,ref:l,onKeyDown:r?void 0:g})})})}),re="AccordionItem",[Aa,Qe]=de(re),Xr=G.forwardRef((t,e)=>{const{__scopeAccordion:n,value:r,...o}=t,i=ue(re,n),a=ka(re,n),s=Xe(n),l=Ee(),d=r&&a.value.includes(r)||!1,m=i.disabled||t.disabled;return c.jsx(Aa,{scope:n,open:d,disabled:m,triggerId:l,children:c.jsx(tc,{"data-orientation":i.orientation,"data-state":ro(d),...s,...o,ref:e,disabled:m,open:d,onOpenChange:f=>{f?a.onItemOpen(r):a.onItemClose(r)}})})});Xr.displayName=re;var Qr="AccordionHeader",Jr=G.forwardRef((t,e)=>{const{__scopeAccordion:n,...r}=t,o=ue(ht,n),i=Qe(Qr,n);return c.jsx(Z.h3,{"data-orientation":o.orientation,"data-state":ro(i.open),"data-disabled":i.disabled?"":void 0,...r,ref:e})});Jr.displayName=Qr;var _e="AccordionTrigger",to=G.forwardRef((t,e)=>{const{__scopeAccordion:n,...r}=t,o=ue(ht,n),i=Qe(_e,n),a=Ca(_e,n),s=Xe(n);return c.jsx(Ze.ItemSlot,{scope:n,children:c.jsx(ec,{"aria-disabled":i.open&&!a.collapsible||void 0,"data-orientation":o.orientation,id:i.triggerId,...s,...r,ref:e})})});to.displayName=_e;var eo="AccordionContent",no=G.forwardRef((t,e)=>{const{__scopeAccordion:n,...r}=t,o=ue(ht,n),i=Qe(eo,n),a=Xe(n);return c.jsx(nc,{role:"region","aria-labelledby":i.triggerId,"data-orientation":o.orientation,...a,...r,ref:e,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...t.style}})});no.displayName=eo;function ro(t){return t?"open":"closed"}var za=Yr,Sa=Xr,_a=Jr,qa=to,Ea=no;const Da=u.forwardRef((t,e)=>c.jsx(za,{ref:e,type:"single",...t})),Mn=u.forwardRef(({value:t,...e},n)=>{const r=wo(e);return c.jsx(Sa,{ref:n,value:t??r??"",...e})}),$n=_a,Bn=qa,Vn=Ea,Hn=void 0,Ta="favicon_4Ymrn22WsHyUfYUAcphu2.ico",Oa=["AtkinsonHyperlegibleNext-VariableFont_wght_KDkHYNwnWPG0I9l4zd_rU.ttf"],La=[],Fa=t=>c.jsxs(vo,{className:"w-body cmnf0rl c5w3q1j c92r2w9 cl0lbld",children:[c.jsxs(Co,{className:"w-navigation-menu cavd3zn c1cqu2xh",children:[c.jsxs(No,{className:"w-menu-list cry9bxc c1fhkm63 cqeb86t c1asmb9r c34dwh1 c1qyy4dh ct02u4h ckr6thb czokz6d cgbme5g c1cf1dh7",children:[c.jsx(fe,{"data-ws-index":"0",className:"w-menu-item",children:c.jsx(wt,{children:c.jsx(H,{className:"w-link csru8nn c1qyy4dh ct02u4h c1e7helk c9dia3q chby825 cj9cgi3 cmrkua2 chxr8al clh6saz cy1haag c1l1g1t0 c1pzicie c3whby9 c1dfajq9 c1yqh07t c135vpv5 cv81o44 chmyy6m cdtbwtz c1x2i9s7 c1q0jf93 cff9lwm cdoj399 cl3j0y4 c12043fe",children:"Home"})})}),c.jsxs(fe,{"data-ws-index":"1",className:"w-menu-item chbpk1 c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c1szyaw7 c93at1n c1mz5ev9 cf189jz chjyh7x c10jxkhw ckzqjx9 c1e72s5c",children:[c.jsx(sn,{children:c.jsxs(M,{className:"w-button csru8nn c1qyy4dh ct02u4h c1e7helk c9dia3q chby825 cj9cgi3 cmrkua2 chxr8al clh6saz cy1haag c1l1g1t0 c1pzicie c3whby9 c1dfajq9 c1yqh07t ch11gwv chmyy6m cdtbwtz c1x2i9s7 c1q0jf93 cff9lwm cdoj399 cl3j0y4 c12043fe cgtgvco",children:[c.jsx(F,{className:"w-text crx2j5q c6pfkur c1dy2bb2",children:"Socials"}),c.jsx(S,{className:"w-box c1d96gso c7ewoh2 c1y0z7zr cgu8egy clv8gve clkfa1i c1ovbu2i c1uc70qy crcvfbt c13zjl4p",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 6 4 4 4-4"/></svg>',className:"w-html-embed c6pfkur"})})]})}),c.jsx(ln,{"data-ws-index":"0",className:"w-menu-content c1j77jp8 c1k8g20r cdaty2u ci33z0 cckz8kx",children:c.jsxs(S,{className:"w-box cry9bxc cd159xo c9xslfs",children:[c.jsxs(S,{className:"w-box c1awitij cry9bxc cd159xo c9xslfs c1lfjoq7",children:[c.jsx(wt,{children:c.jsxs(H,{href:"https://twitch.tv/Sarah_Digitally",target:"_blank",className:"w-link c1wax6if cry9bxc c1lfjoq7 c13dem6u ckr6thb czokz6d c9dia3q chby825 cj9cgi3 cmrkua2 c1nk3tgl c135vpv5 c7w6ovy c142n8sd cl3j0y4 c12043fe c19q478p c1w4kvta",children:[c.jsx(F,{className:"w-text chxr8al cy1haag c1nk3tgl",children:"Twitch"}),c.jsx(vt,{className:"w-paragraph cdtylqg chmjof8 c1e4118f c13gyygq ccgil3r chxr8al c1nihkbc cxvkybb cgbme5g",children:"twitch.tv/Sarah_Digitally"})]})}),c.jsx(wt,{children:c.jsxs(H,{href:"https://sarah.tentakill.com/discord",target:"_blank",className:"w-link c1wax6if cry9bxc c1lfjoq7 c13dem6u ckr6thb czokz6d c9dia3q chby825 cj9cgi3 cmrkua2 c1nk3tgl c135vpv5 c7w6ovy c142n8sd cl3j0y4 c12043fe c19q478p c1w4kvta",children:[c.jsx(F,{className:"w-text chxr8al cy1haag c1nk3tgl",children:"Discord"}),c.jsx(vt,{className:"w-paragraph cdtylqg chmjof8 c1e4118f c13gyygq ccgil3r chxr8al c1nihkbc cxvkybb cgbme5g",children:"sarah.tentakill.com/discord"})]})}),c.jsx(wt,{children:c.jsxs(H,{href:"https://twitter.com/sarah_digitally",target:"_blank",className:"w-link c1wax6if cry9bxc c1lfjoq7 c13dem6u ckr6thb czokz6d c9dia3q chby825 cj9cgi3 cmrkua2 c1nk3tgl c135vpv5 c7w6ovy c142n8sd cl3j0y4 c12043fe c19q478p c1w4kvta",children:[c.jsx(F,{className:"w-text chxr8al cy1haag c1nk3tgl",children:"Twitter"}),c.jsx(vt,{className:"w-paragraph cdtylqg chmjof8 c1e4118f c13gyygq ccgil3r chxr8al c1nihkbc cxvkybb cgbme5g",children:"twitter.com/sarah_digitally"})]})})]}),c.jsxs(S,{className:"w-box c1awitij cry9bxc cd159xo c9xslfs c1lfjoq7",children:[c.jsx(wt,{children:c.jsxs(H,{href:"https://www.youtube.com/@Sarah_Digitally",target:"_blank",className:"w-link c1wax6if cry9bxc c1lfjoq7 c13dem6u ckr6thb czokz6d c9dia3q chby825 cj9cgi3 cmrkua2 c1nk3tgl c135vpv5 c7w6ovy c142n8sd cl3j0y4 c12043fe c19q478p c1w4kvta",children:[c.jsx(F,{className:"w-text chxr8al cy1haag c1nk3tgl",children:"YouTube"}),c.jsx(vt,{className:"w-paragraph cdtylqg chmjof8 c1e4118f c13gyygq ccgil3r chxr8al c1nihkbc cxvkybb cgbme5g",children:"youtube.com/@Sarah_Digitally"})]})}),c.jsx(wt,{children:c.jsxs(H,{href:"https://bsky.app/profile/sarah.tentakill.com",target:"_blank",className:"w-link c1wax6if cry9bxc c1lfjoq7 c13dem6u ckr6thb czokz6d c9dia3q chby825 cj9cgi3 cmrkua2 c1nk3tgl c135vpv5 c7w6ovy c142n8sd cl3j0y4 c12043fe c19q478p c1w4kvta",children:[c.jsx(F,{className:"w-text chxr8al cy1haag c1nk3tgl",children:"Bluesky"}),c.jsx(vt,{className:"w-paragraph cdtylqg chmjof8 c1e4118f c13gyygq ccgil3r chxr8al c1nihkbc cxvkybb cgbme5g",children:"bsky.app/profile/sarah.tentakill.com"})]})})]})]})})]}),c.jsxs(fe,{"data-ws-index":"2",className:"w-menu-item",children:[c.jsx(sn,{children:c.jsxs(M,{className:"w-button csru8nn c1qyy4dh ct02u4h c1e7helk c9dia3q chby825 cj9cgi3 cmrkua2 chxr8al clh6saz cy1haag c1l1g1t0 c1pzicie c3whby9 c1dfajq9 c1yqh07t ch11gwv chmyy6m cdtbwtz c1x2i9s7 c1q0jf93 cff9lwm cdoj399 cl3j0y4 c12043fe cgtgvco",children:[c.jsx(F,{className:"w-text c6pfkur c1dy2bb2",children:"Events"}),c.jsx(S,{className:"w-box c1d96gso c7ewoh2 c1y0z7zr cgu8egy clv8gve clkfa1i c1ovbu2i c1uc70qy crcvfbt c13zjl4p",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 6 4 4 4-4"/></svg>',className:"w-html-embed c6pfkur"})})]})}),c.jsx(ln,{"data-ws-index":"1",className:"w-menu-content c1j77jp8 c1k8g20r cdaty2u ci33z0 cckz8kx",children:c.jsxs(S,{className:"w-box cry9bxc cd159xo c9xslfs cqf79v5",children:[c.jsx(S,{className:"w-box cqo47g3 c10nq66c c9dia3q chby825 cj9cgi3 cmrkua2 c17xb2s8 c1cf1dh7",children:c.jsx(Nt,{src:"https://tentakill.com/sarah/images/events.png",className:"w-image c10xthuw c1ybnmrz cqc07y9 c1zwfbe cur5frm cqz2kx6"})}),c.jsx(S,{className:"w-box c1awitij cry9bxc cd159xo c9xslfs c1lfjoq7 c5m8ase cqeb86t",children:c.jsx(wt,{children:c.jsxs(H,{href:"/sarah/the-digital-cup",target:"_self",className:"w-link c1wax6if cry9bxc c1lfjoq7 c13dem6u ckr6thb czokz6d c9dia3q chby825 cj9cgi3 cmrkua2 c1nk3tgl c135vpv5 cx84glk c1fhkm63 clv8gve c7w6ovy c142n8sd cl3j0y4 c12043fe c19q478p c1w4kvta",children:[c.jsx(F,{className:"w-text chxr8al cy1haag c1nk3tgl",children:"The Digital Cup"}),c.jsx(vt,{className:"w-paragraph cdtylqg chmjof8 c1e4118f c13gyygq ccgil3r chxr8al c1nihkbc cxvkybb c1fhkm63 clv8gve cgbme5g",children:"A recurring Retail Racing event, open to all, typically consisting of a single track/car combo."})]})})})]})})]})]}),c.jsx(S,{className:"w-box cdwd3jx c1j77jp8 c1lzcxwg cry9bxc ct02u4h",children:c.jsx(Ro,{className:"w-menu-viewport cavd3zn c122j17v cdtylqg chmjof8 c9dia3q chby825 cj9cgi3 cmrkua2 c1allln7 ci548q0 c162u1o2 cfugi66 ceu30e1 c17z6119"})})]}),c.jsxs(S,{className:"w-box c1qom380 cn3qe2k",children:[c.jsx(an,{className:"w-heading c1qom380",children:c.jsx(F,{tag:"span",className:"w-text",children:c.jsxs(F,{tag:"span",className:"w-text c1dy2bb2 c3pidkv c1qc49wt cx29jdf",children:["Interested in participating in future events for The Digital Cup?","",c.jsx("br",{}),"","Join us on ",c.jsx(H,{href:"https://sarah.tentakill.com/discord",className:"w-rich-text-link c6pfkur",children:"Discord"}),"!"]})})}),c.jsx(S,{className:"w-box c1qom380 c57idyp cp04lvg cir85gx c4p0wt5 c1oj4qw c183qt6d c1twgu0n c5r7m82",children:c.jsxs(vt,{className:"w-paragraph c6awm87 cblpe2z c1qom380 c1dy2bb2 c1jzkxpo c138vb52 c1tsrmvk",children:[c.jsx(an,{className:"w-heading",children:"Stay tuned for The Digital Cup #003!"}),c.jsx(F,{className:"w-text c1fo9lv5 cx84glk",children:"See Discord for more information"})]})})]}),c.jsxs(Da,{collapsible:!0,defaultValue:"0",className:"w-accordion c1hh2zqv ck814aq",children:[c.jsxs(Mn,{"data-ws-index":"0",className:"w-item c1wshqp0",children:[c.jsx($n,{className:"w-item-header cry9bxc",children:c.jsxs(Bn,{className:"w-item-trigger cry9bxc c1fhkm63 cqeb86t c1asmb9r c1qyy4dh ceg4bzk c1p5dms8 c138vb52 cq4mlzy cuseo3b cy1haag cf64rkw c16ndgv7 c1dnzb6d",children:[c.jsx(F,{className:"w-text c6pfkur c1dy2bb2 c1qc49wt",children:"The Digital Cup #002 - Saturday, March 1st, 2025 - Vorschlaghammer on VIG Velox Agris"}),c.jsx(S,{className:"w-box c1fe8q31 c1y0z7zr cgu8egy clv8gve clkfa1i c1ovbu2i c1uc70qy crcvfbt c13zjl4p",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 6 4 4 4-4"/></svg>',className:"w-html-embed"})})]})}),c.jsxs(Vn,{className:"w-item-content cdtylqg chmjof8 chxr8al clh6saz clkfa1i c1w4hmcv c1uc70qy crcvfbt c13zjl4p cq4mlzy",children:[c.jsx(q,{code:`<style>
body {
    font-family: sans-serif;
    color: black;
}

table {
    border-collapse: collapse;
    width: 100%;
    margin: 20px 0;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
}

th, td {
    padding: 12px 15px;
    text-align: left;
}

th {
    background-color: #6c7ae0;
    color: #ffffff;
    cursor: pointer;
}

tr {
    background-color: #f8f8f8;
    border-bottom: 1px solid #dddddd;
}

tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

tr:last-of-type {
    border-bottom: 2px solid #6c7ae0;
}
</style>
<script>
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.querySelector("table.dataframe");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
<\/script>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th onclick="sortTable(0)">Discord Name</th>
      <th onclick="sortTable(1)">GTA Online Name</th>
      <th onclick="sortTable(2)">Qualifying Time</th>
      <th onclick="sortTable(3)">Div</th>
      <th onclick="sortTable(4)">Race Position</th>
      <th onclick="sortTable(5)">Best Lap</th>
      <th onclick="sortTable(6)">Total Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>hawk</td>
      <td>Yung-Bright-Hawk</td>
      <td>07:10.119</td>
      <td>Div 1</td>
      <td>1</td>
      <td>02:31.531</td>
      <td>53:16.835</td>
    </tr>
    <tr>
      <td>Questicles</td>
      <td>Questicless</td>
      <td>07:11.775</td>
      <td>Div 1</td>
      <td>2</td>
      <td>02:31.301</td>
      <td>53:21.537</td>
    </tr>
    <tr>
      <td>streetdog</td>
      <td>-StreetD0G-</td>
      <td>07:09.219</td>
      <td>Div 1</td>
      <td>3</td>
      <td>02:31.337</td>
      <td>53:29.787</td>
    </tr>
    <tr>
      <td>Hxrry</td>
      <td>Ovinko</td>
      <td>07:12.040</td>
      <td>Div 1</td>
      <td>4</td>
      <td>02:32.230</td>
      <td>53:46.226</td>
    </tr>
    <tr>
      <td>Lama</td>
      <td>--Lama--</td>
      <td>07:18.259</td>
      <td>Div 1</td>
      <td>5</td>
      <td>02:32.877</td>
      <td>54:17.052</td>
    </tr>
    <tr>
      <td>.a</td>
      <td>adam10603</td>
      <td>07:13.889</td>
      <td>Div 1</td>
      <td>6</td>
      <td>02:33.253</td>
      <td>54:18.388</td>
    </tr>
    <tr>
      <td>rell___</td>
      <td>-Sykosa-</td>
      <td>DNF</td>
      <td>Div 1</td>
      <td>7</td>
      <td>02:33.253</td>
      <td>54:31.942</td>
    </tr>
    <tr>
      <td>Freezekid</td>
      <td>freezekid</td>
      <td>07:16.249</td>
      <td>Div 1</td>
      <td>8</td>
      <td>02:33.564</td>
      <td>54:32.804</td>
    </tr>
    <tr>
      <td>KeroDion</td>
      <td>KeroDion</td>
      <td>07:16.707</td>
      <td>Div 1</td>
      <td>9</td>
      <td>02:34.322</td>
      <td>54:36.611</td>
    </tr>
    <tr>
      <td>L2</td>
      <td>I2rs10I</td>
      <td>07:19.832</td>
      <td>Div 1</td>
      <td>10</td>
      <td>02:35.697</td>
      <td>54:46.910</td>
    </tr>
    <tr>
      <td>Hannes</td>
      <td>HansHannes</td>
      <td>07:12.123</td>
      <td>Div 1</td>
      <td>DNF</td>
      <td>02:32.585</td>
      <td>DNF</td>
    </tr>
    <tr>
      <td>Tommy_H</td>
      <td>Tommy-Yangs</td>
      <td>07:18.331</td>
      <td>Div 1</td>
      <td>DNF</td>
      <td>02:32.790</td>
      <td>DNF</td>
    </tr>
    <tr>
      <td>beta</td>
      <td>beta1hit</td>
      <td>07:36.489</td>
      <td>Div 1</td>
      <td>DNF</td>
      <td>02:35.642</td>
      <td>DNF</td>
    </tr>
    <tr>
      <td>Gorenc</td>
      <td>Gorenc92</td>
      <td>07:19.778</td>
      <td>Div 1</td>
      <td>DNF</td>
      <td>02:35.878</td>
      <td>DNF</td>
    </tr>
    <tr>
      <td>A1RWALK1NG</td>
      <td>A1RWALK1NG</td>
      <td>07:23.503</td>
      <td>Div 1</td>
      <td>DNF</td>
      <td>02:35.921</td>
      <td>DNF</td>
    </tr>
    <tr>
      <td>Nebula</td>
      <td>-Nebulas-</td>
      <td>DNF</td>
      <td>Div 1</td>
      <td>DNF</td>
      <td>02:39.949</td>
      <td>DNF</td>
    </tr>
    <tr>
      <td>Prrevil</td>
      <td>prrevil</td>
      <td>07:39.632</td>
      <td>Div 1</td>
      <td>DNF</td>
      <td>02:40.847</td>
      <td>DNF</td>
    </tr>
  </tbody>
</table>`,executeScriptOnCanvas:!1,className:"w-html-embed c10f4a9d c1tyafo0 c1qsamf5 c1scvm48 c3i1jg3 cb5hkfg"}),c.jsxs(S,{className:"w-box c1qom380 cn3qe2k",children:[c.jsxs(W,{children:[c.jsx(U,{children:c.jsx(M,{className:"w-button csru8nn c1qyy4dh ct02u4h c1allln7 c9dia3q chby825 cj9cgi3 cmrkua2 chxr8al clh6saz cy1haag c6xd4vr c1hs666a crbkh5v c12j6c4j c44qnp4 c1l5hqju c17cupsi c17z6119 cdtbwtz c1x2i9s7 c1q0jf93 cff9lwm cdoj399 cl3j0y4 c12043fe",children:"Benjo (Host POV)"})}),c.jsx(Y,{className:"w-popover-content c3o13 ccmv6d1 c9dia3q chby825 cj9cgi3 cmrkua2 c1allln7 ci548q0 cj7l28j c7w6ovy c17z6119 cckz8kx",children:c.jsxs(at,{url:"https://www.youtube.com/watch?v=rzR1a2PBtGA",showPreview:!0,showAnnotations:!1,showRelatedVideos:!1,color:"white",className:"w-you-tube cavd3zn cu0rr2h czr2pxy",children:[c.jsx(st,{alt:"YouTube video preview image",sizes:"100vw",optimize:!0,className:"w-preview-image cdwd3jx c1gxuxwl ckydi4m czr2pxy c1bkqfhr c1w14gb3 c7ylbzb c1h5pqsu c5u7r4m"}),c.jsx(dt,{className:"w-spinner cdwd3jx cuf9c1i cd1rb50 c8xup6y c57y1nl c9rhxl3 c1b6bgqp",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),c.jsx(lt,{"aria-label":"Play button",className:"w-play-button cdwd3jx c18rhfd1 ctsl3ob cuf9c1i cd1rb50 c1wjejkh c15znked cry9bxc c1qyy4dh ct02u4h c1l0vha7 csyy8v5 c17r8x7j c1bc2i7x c1szyaw7 c93at1n cf189jz c1mz5ev9 cxbr3c5 c1k6cp6t cuccfz7 c62906y",children:c.jsx(S,{"aria-hidden":!0,className:"w-box c1ifg8z5 c1bhscy3",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 2 9.333 6L4 14V2Z"/></svg>',className:"w-html-embed"})})})]})})]}),c.jsxs(W,{children:[c.jsx(U,{children:c.jsx(M,{className:"w-button csru8nn c1qyy4dh ct02u4h c1allln7 c9dia3q chby825 cj9cgi3 cmrkua2 chxr8al clh6saz cy1haag c6xd4vr c1hs666a crbkh5v c12j6c4j c44qnp4 c17cupsi c1l5hqju c17z6119 cdtbwtz c1x2i9s7 c1q0jf93 cff9lwm cdoj399 cl3j0y4 c12043fe",children:"Questicles (Div 1 P2 POV)"})}),c.jsx(Y,{sideOffset:4,side:"top",className:"w-popover-content c3o13 ccmv6d1 c9dia3q chby825 cj9cgi3 cmrkua2 c1allln7 ci548q0 cj7l28j c1qom380 c7w6ovy c17z6119 cckz8kx",children:c.jsxs(H,{href:"https://www.twitch.tv/videos/2394557138?t=00h28m29s",target:"_blank",className:"w-link c6pfkur c1qom380",children:[c.jsx(F,{tag:"span",className:"w-text",children:"View on Twitch"}),c.jsx(Nt,{src:"https://tentakill.com/sarah/images/questicles-twitch-002.jpg",className:"w-image c1oj4qw c183qt6d c1twgu0n c5r7m82"})]})})]}),c.jsxs(W,{children:[c.jsx(U,{children:c.jsx(M,{className:"w-button csru8nn c1qyy4dh ct02u4h c1allln7 c9dia3q chby825 cj9cgi3 cmrkua2 chxr8al clh6saz cy1haag c6xd4vr c1hs666a crbkh5v c12j6c4j c44qnp4 c17cupsi c1l5hqju c17z6119 cdtbwtz c1x2i9s7 c1q0jf93 cff9lwm cdoj399 cl3j0y4 c12043fe",children:"StreetD0G (Div 1 P3 POV)"})}),c.jsx(Y,{sideOffset:4,side:"top",className:"w-popover-content c3o13 ccmv6d1 c9dia3q chby825 cj9cgi3 cmrkua2 c1allln7 ci548q0 cj7l28j c1qom380 c7w6ovy c17z6119 cckz8kx",children:c.jsxs(H,{href:"https://www.twitch.tv/videos/2394549907?t=0h30m55s",target:"_blank",className:"w-link c6pfkur c1qom380",children:[c.jsx(F,{tag:"span",className:"w-text",children:"View on Twitch"}),c.jsx(Nt,{src:"https://tentakill.com/sarah/images/streetd0g-twitch-002.jpg",className:"w-image c1oj4qw c183qt6d c1twgu0n c5r7m82"})]})})]}),c.jsxs(W,{children:[c.jsx(U,{children:c.jsx(M,{className:"w-button csru8nn c1qyy4dh ct02u4h c1allln7 c9dia3q chby825 cj9cgi3 cmrkua2 chxr8al clh6saz cy1haag c6xd4vr c1hs666a crbkh5v c12j6c4j c44qnp4 c17cupsi c1l5hqju c17z6119 cdtbwtz c1x2i9s7 c1q0jf93 cff9lwm cdoj399 cl3j0y4 c12043fe",children:"Lama (Div 1 P5 POV)"})}),c.jsx(Y,{sideOffset:4,side:"top",className:"w-popover-content c3o13 ccmv6d1 c9dia3q chby825 cj9cgi3 cmrkua2 c1allln7 ci548q0 cj7l28j c1qom380 c7w6ovy c17z6119 cckz8kx",children:c.jsxs(H,{href:"https://www.twitch.tv/videos/2394548223?t=0h33m43s",target:"_blank",className:"w-link c6pfkur c1qom380",children:[c.jsx(F,{tag:"span",className:"w-text",children:"View on Twitch"}),c.jsx(Nt,{src:"https://tentakill.com/sarah/images/lama-twitch-002.jpg",className:"w-image c1oj4qw c183qt6d c1twgu0n c5r7m82"})]})})]}),c.jsxs(W,{children:[c.jsx(U,{children:c.jsx(M,{className:"w-button csru8nn c1qyy4dh ct02u4h c1allln7 c9dia3q chby825 cj9cgi3 cmrkua2 chxr8al clh6saz cy1haag c6xd4vr c1hs666a crbkh5v c12j6c4j c44qnp4 c1l5hqju c17cupsi c17z6119 cdtbwtz c1x2i9s7 c1q0jf93 cff9lwm cdoj399 cl3j0y4 c12043fe",children:"adam10603 (Div 1 P6 POV)"})}),c.jsx(Y,{className:"w-popover-content c3o13 ccmv6d1 c9dia3q chby825 cj9cgi3 cmrkua2 c1allln7 ci548q0 cj7l28j c7w6ovy c17z6119 cckz8kx",children:c.jsxs(at,{url:"https://youtu.be/OTlLECKDVxs?t=2985",showPreview:!0,showAnnotations:!1,showRelatedVideos:!1,color:"white",className:"w-you-tube cavd3zn cu0rr2h czr2pxy",children:[c.jsx(st,{alt:"YouTube video preview image",sizes:"100vw",optimize:!0,className:"w-preview-image cdwd3jx c1gxuxwl ckydi4m czr2pxy c1bkqfhr c1w14gb3 c7ylbzb c1h5pqsu c5u7r4m"}),c.jsx(dt,{className:"w-spinner cdwd3jx cuf9c1i cd1rb50 c8xup6y c57y1nl c9rhxl3 c1b6bgqp",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),c.jsx(lt,{"aria-label":"Play button",className:"w-play-button cdwd3jx c18rhfd1 ctsl3ob cuf9c1i cd1rb50 c1wjejkh c15znked cry9bxc c1qyy4dh ct02u4h c1l0vha7 csyy8v5 c17r8x7j c1bc2i7x c1szyaw7 c93at1n cf189jz c1mz5ev9 cxbr3c5 c1k6cp6t cuccfz7 c62906y",children:c.jsx(S,{"aria-hidden":!0,className:"w-box c1ifg8z5 c1bhscy3",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 2 9.333 6L4 14V2Z"/></svg>',className:"w-html-embed"})})})]})})]}),c.jsxs(W,{children:[c.jsx(U,{children:c.jsx(M,{className:"w-button csru8nn c1qyy4dh ct02u4h c1allln7 c9dia3q chby825 cj9cgi3 cmrkua2 chxr8al clh6saz cy1haag c6xd4vr c1hs666a crbkh5v c12j6c4j c44qnp4 c1l5hqju c17cupsi c17z6119 cdtbwtz c1x2i9s7 c1q0jf93 cff9lwm cdoj399 cl3j0y4 c12043fe",children:"A1RWALK1NG (Div 1 POV)"})}),c.jsx(Y,{className:"w-popover-content c3o13 ccmv6d1 c9dia3q chby825 cj9cgi3 cmrkua2 c1allln7 ci548q0 cj7l28j c7w6ovy c17z6119 cckz8kx",children:c.jsxs(at,{url:"https://youtu.be/XasrBMTST9w?si=xU5FKNwRPU2q_TDS",showPreview:!0,showAnnotations:!1,showRelatedVideos:!1,color:"white",className:"w-you-tube cavd3zn cu0rr2h czr2pxy",children:[c.jsx(st,{alt:"YouTube video preview image",sizes:"100vw",optimize:!0,className:"w-preview-image cdwd3jx c1gxuxwl ckydi4m czr2pxy c1bkqfhr c1w14gb3 c7ylbzb c1h5pqsu c5u7r4m"}),c.jsx(dt,{className:"w-spinner cdwd3jx cuf9c1i cd1rb50 c8xup6y c57y1nl c9rhxl3 c1b6bgqp",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),c.jsx(lt,{"aria-label":"Play button",className:"w-play-button cdwd3jx c18rhfd1 ctsl3ob cuf9c1i cd1rb50 c1wjejkh c15znked cry9bxc c1qyy4dh ct02u4h c1l0vha7 csyy8v5 c17r8x7j c1bc2i7x c1szyaw7 c93at1n cf189jz c1mz5ev9 cxbr3c5 c1k6cp6t cuccfz7 c62906y",children:c.jsx(S,{"aria-hidden":!0,className:"w-box c1ifg8z5 c1bhscy3",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 2 9.333 6L4 14V2Z"/></svg>',className:"w-html-embed"})})})]})})]})]})]})]}),c.jsxs(Mn,{"data-ws-index":"1",className:"w-item c1wshqp0",children:[c.jsx($n,{className:"w-item-header cry9bxc",children:c.jsxs(Bn,{className:"w-item-trigger cry9bxc c1fhkm63 cqeb86t c1asmb9r c1qyy4dh ceg4bzk c1p5dms8 c138vb52 cq4mlzy cuseo3b cy1haag cf64rkw c1qc49wt c16ndgv7 c1dnzb6d",children:[c.jsx(F,{className:"w-text c6pfkur c1dy2bb2",children:"The Digital Cup #001 - Saturday, February 15th, 2025 - Banshee GTS on Vinewood Peak"}),c.jsx(S,{className:"w-box c1fe8q31 c1y0z7zr cgu8egy clv8gve clkfa1i c1ovbu2i c1uc70qy crcvfbt c13zjl4p",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 6 4 4 4-4"/></svg>',className:"w-html-embed"})})]})}),c.jsxs(Vn,{className:"w-item-content cdtylqg chmjof8 chxr8al clh6saz clkfa1i c1w4hmcv c1uc70qy crcvfbt c13zjl4p cq4mlzy",children:[c.jsx(q,{code:`


<title>The Digital Cup - #001 - Feb, 15th 2025</title>
<style>
body {
    font-family: sans-serif;

}

table {
    border-collapse: collapse;
    width: 100%;
    margin: 20px 0;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 10px; /* Add border radius to all corners */
}

th, td {
    padding: 12px 15px;
    text-align: left;
    color: black; /* Set font color to black */
}

th {
    background-color: #6c7ae0;
    color: #ffffff;
    cursor: pointer;
}

tr {
    background-color: #f8f8f8;
    border-bottom: 1px solid #dddddd;
}

tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

tr:last-of-type {
    border-bottom: 2px solid #6c7ae0;
}
</style>
<script>
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.querySelector("table.dataframe");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
<\/script>


<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th onclick="sortTable(0)">Discord Name</th>
      <th onclick="sortTable(1)">GTA Online Name</th>
      <th onclick="sortTable(2)">Qualifying Time</th>
      <th onclick="sortTable(3)">Div</th>
      <th onclick="sortTable(4)">Race Position</th>
      <th onclick="sortTable(5)">Best Lap</th>
      <th onclick="sortTable(6)">Total Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>streetdog</td>
      <td>-StreetD0G-</td>
      <td>06:52.414</td>
      <td>Div 1</td>
      <td>1</td>
      <td>02:22.646</td>
      <td>47:50.648</td>
    </tr>
    <tr>
      <td>Questicles</td>
      <td>Questicless</td>
      <td>06:51.408</td>
      <td>Div 1</td>
      <td>2</td>
      <td>02:23.194</td>
      <td>48:04.917</td>
    </tr>
    <tr>
      <td>rell___.</td>
      <td>-Sykosa-</td>
      <td>DNF</td>
      <td>Div 1</td>
      <td>3</td>
      <td>02:23.923</td>
      <td>48:36.305</td>
    </tr>
    <tr>
      <td>Hannes</td>
      <td>HansHannes</td>
      <td>06:53.587</td>
      <td>Div 1</td>
      <td>4</td>
      <td>02:24.297</td>
      <td>48:37.384</td>
    </tr>
    <tr>
      <td>Lama</td>
      <td>—Lama—</td>
      <td>06:56.977</td>
      <td>Div 1</td>
      <td>5</td>
      <td>02:24.716</td>
      <td>48:49.982</td>
    </tr>
    <tr>
      <td>bigmanni16</td>
      <td>bigmanni16</td>
      <td>DNF</td>
      <td>Div 1</td>
      <td>6</td>
      <td>02:24.264</td>
      <td>49:04.753</td>
    </tr>
    <tr>
      <td>AlexHonix</td>
      <td>AlexHonix</td>
      <td>06:57.115</td>
      <td>Div 1</td>
      <td>7</td>
      <td>02:25.704</td>
      <td>49:15.541</td>
    </tr>
    <tr>
      <td>GrizzlyDust7222</td>
      <td>GrizzlyDust7222</td>
      <td>06:58.459</td>
      <td>Div 1</td>
      <td>8</td>
      <td>02:25.438</td>
      <td>49:15.888</td>
    </tr>
    <tr>
      <td>stappen</td>
      <td>LANCE_STROLL18</td>
      <td>06:57.577</td>
      <td>Div 1</td>
      <td>9</td>
      <td>02:25.759</td>
      <td>49:17.363</td>
    </tr>
    <tr>
      <td>Panimioul</td>
      <td>Panimioul</td>
      <td>06:57.434</td>
      <td>Div 1</td>
      <td>10</td>
      <td>02:24.753</td>
      <td>49:17.580</td>
    </tr>
    <tr>
      <td>a.</td>
      <td>adam10603</td>
      <td>06:59.740</td>
      <td>Div 1</td>
      <td>11</td>
      <td>02:26.509</td>
      <td>49:22.185</td>
    </tr>
    <tr>
      <td>CYBERSHARK</td>
      <td>CYBER5HARK</td>
      <td>06:58.054</td>
      <td>Div 1</td>
      <td>12</td>
      <td>02:25.553</td>
      <td>49:34.728</td>
    </tr>
    <tr>
      <td>Zakariapanther</td>
      <td>Zakariapanther</td>
      <td>06:58.753</td>
      <td>Div 1</td>
      <td>13</td>
      <td>02:26.551</td>
      <td>49:35.752</td>
    </tr>
    <tr>
      <td>Tęd</td>
      <td>TedReady</td>
      <td>06:55.096</td>
      <td>Div 1</td>
      <td>DNF</td>
      <td>DNF</td>
      <td>DNF</td>
    </tr>
    <tr>
      <td>kru</td>
      <td>Kru---</td>
      <td>06:55.871</td>
      <td>Div 1</td>
      <td>DNF</td>
      <td>DNF</td>
      <td>DNF</td>
    </tr>
    <tr>
      <td>Hxrry</td>
      <td>0vinko</td>
      <td>06:57.135</td>
      <td>Div 1</td>
      <td>DNF</td>
      <td>DNF</td>
      <td>DNF</td>
    </tr>
    <tr>
      <td>rick.</td>
      <td>killedbyrickk</td>
      <td>07:03.827</td>
      <td>Div 2</td>
      <td>1</td>
      <td>02:25.413</td>
      <td>49:05.172</td>
    </tr>
    <tr>
      <td>Ztenbritt</td>
      <td>Ztenbritt</td>
      <td>07:02.667</td>
      <td>Div 2</td>
      <td>2</td>
      <td>02:25.325</td>
      <td>49:05.172</td>
    </tr>
    <tr>
      <td>KeroDion</td>
      <td>KeroDion</td>
      <td>07:02.010</td>
      <td>Div 2</td>
      <td>3</td>
      <td>02:26.215</td>
      <td>49:16.503</td>
    </tr>
    <tr>
      <td>Gorenc</td>
      <td>Gorenc92</td>
      <td>07:00.772</td>
      <td>Div 2</td>
      <td>4</td>
      <td>02:27.355</td>
      <td>49:40.027</td>
    </tr>
    <tr>
      <td>Kalev</td>
      <td>Kalev10</td>
      <td>07:03.908</td>
      <td>Div 2</td>
      <td>5</td>
      <td>02:27.916</td>
      <td>49:52.065</td>
    </tr>
    <tr>
      <td>L2</td>
      <td>I2rs10I</td>
      <td>07:05.272</td>
      <td>Div 2</td>
      <td>6</td>
      <td>02:27.860</td>
      <td>49:57.655</td>
    </tr>
    <tr>
      <td>Benjo</td>
      <td>Benjo411</td>
      <td>07:01.405</td>
      <td>Div 2</td>
      <td>7</td>
      <td>02:27.348</td>
      <td>50:06.031</td>
    </tr>
    <tr>
      <td>TurdleShell</td>
      <td>TurdleShell</td>
      <td>07:05.391</td>
      <td>Div 2</td>
      <td>8</td>
      <td>02:28.503</td>
      <td>50:07.299</td>
    </tr>
    <tr>
      <td>SteveJEWBZ</td>
      <td>SteveJEVVBZ</td>
      <td>07:09.064</td>
      <td>Div 2</td>
      <td>9</td>
      <td>02:28.616</td>
      <td>50:25.050</td>
    </tr>
    <tr>
      <td>Nebula</td>
      <td>-Nebulas-</td>
      <td>07:03.541</td>
      <td>Div 2</td>
      <td>DNF</td>
      <td>DNF</td>
      <td>DNF</td>
    </tr>
    <tr>
      <td>A1RWALK1NG</td>
      <td>A1RWALK1NG</td>
      <td>07:08.386</td>
      <td>Div 2</td>
      <td>DNF</td>
      <td>DNF</td>
      <td>DNF</td>
    </tr>
    <tr>
      <td>Prrevil</td>
      <td>prrevil</td>
      <td>07:17.933</td>
      <td>Div 2</td>
      <td>DNF</td>
      <td>DNF</td>
      <td>DNF</td>
    </tr>
    <tr>
      <td>S0ze-</td>
      <td>S0ze47</td>
      <td>07:27.316</td>
      <td>Div 2</td>
      <td>DNF</td>
      <td>DNF</td>
      <td>DNF</td>
    </tr>
    <tr>
      <td>beta</td>
      <td>beta1hit</td>
      <td>DNF</td>
      <td>Div 2</td>
      <td>DNF</td>
      <td>DNF</td>
      <td>DNF</td>
    </tr>
    <tr>
      <td>niksrof</td>
      <td>niksrof</td>
      <td>07:07.132</td>
      <td>Div 2</td>
      <td>DNF</td>
      <td>DNF</td>
      <td>DNF</td>
    </tr>
  </tbody>
</table>

`,executeScriptOnCanvas:!1,className:"w-html-embed c10f4a9d c1tyafo0 c1qsamf5 c1scvm48 c3i1jg3 cb5hkfg"}),c.jsxs(S,{className:"w-box c1qom380 cn3qe2k",children:[c.jsxs(W,{children:[c.jsx(U,{children:c.jsx(M,{className:"w-button csru8nn c1qyy4dh ct02u4h c1allln7 c9dia3q chby825 cj9cgi3 cmrkua2 chxr8al clh6saz cy1haag c6xd4vr c1hs666a crbkh5v c12j6c4j c44qnp4 c1l5hqju c17cupsi c17z6119 cdtbwtz c1x2i9s7 c1q0jf93 cff9lwm cdoj399 cl3j0y4 c12043fe",children:"Sarah_Digitally (Div 1 Commentator POV)"})}),c.jsx(Y,{className:"w-popover-content c3o13 ccmv6d1 c9dia3q chby825 cj9cgi3 cmrkua2 c1allln7 ci548q0 cj7l28j c7w6ovy c17z6119 cckz8kx",children:c.jsxs(at,{url:"https://www.youtube.com/watch?v=M0SNE4TPI6E",showPreview:!0,showAnnotations:!1,showRelatedVideos:!1,color:"white",className:"w-you-tube cavd3zn cu0rr2h czr2pxy",children:[c.jsx(st,{alt:"YouTube video preview image",sizes:"100vw",optimize:!0,className:"w-preview-image cdwd3jx c1gxuxwl ckydi4m czr2pxy c1bkqfhr c1w14gb3 c7ylbzb c1h5pqsu c5u7r4m"}),c.jsx(dt,{className:"w-spinner cdwd3jx cuf9c1i cd1rb50 c8xup6y c57y1nl c9rhxl3 c1b6bgqp",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),c.jsx(lt,{"aria-label":"Play button",className:"w-play-button cdwd3jx c18rhfd1 ctsl3ob cuf9c1i cd1rb50 c1wjejkh c15znked cry9bxc c1qyy4dh ct02u4h c1l0vha7 csyy8v5 c17r8x7j c1bc2i7x c1szyaw7 c93at1n cf189jz c1mz5ev9 cxbr3c5 c1k6cp6t cuccfz7 c62906y",children:c.jsx(S,{"aria-hidden":!0,className:"w-box c1ifg8z5 c1bhscy3",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 2 9.333 6L4 14V2Z"/></svg>',className:"w-html-embed"})})})]})})]}),c.jsxs(W,{children:[c.jsx(U,{children:c.jsx(M,{className:"w-button csru8nn c1qyy4dh ct02u4h c1allln7 c9dia3q chby825 cj9cgi3 cmrkua2 chxr8al clh6saz cy1haag c6xd4vr c1hs666a crbkh5v c12j6c4j c44qnp4 c17cupsi c1l5hqju c17z6119 cdtbwtz c1x2i9s7 c1q0jf93 cff9lwm cdoj399 cl3j0y4 c12043fe",children:"StreetD0G (Div 1 P1 POV)"})}),c.jsx(Y,{sideOffset:4,side:"top",className:"w-popover-content c3o13 ccmv6d1 c9dia3q chby825 cj9cgi3 cmrkua2 c1allln7 ci548q0 cj7l28j c1qom380 c7w6ovy c17z6119 cckz8kx",children:c.jsxs(H,{href:"https://www.twitch.tv/videos/2384071593",target:"_blank",className:"w-link c6pfkur c1qom380",children:[c.jsx(F,{tag:"span",className:"w-text",children:"View on Twitch"}),c.jsx(Nt,{src:"https://tentakill.com/sarah/images/streetd0g-twitch-001.jpg",className:"w-image c1oj4qw c183qt6d c1twgu0n c5r7m82"})]})})]})]}),c.jsxs(S,{className:"w-box c1qom380 c1k0o02s",children:[c.jsxs(W,{children:[c.jsx(U,{children:c.jsx(M,{className:"w-button csru8nn c1qyy4dh ct02u4h c1allln7 c9dia3q chby825 cj9cgi3 cmrkua2 chxr8al clh6saz cy1haag c6xd4vr c1hs666a crbkh5v c12j6c4j c44qnp4 c17cupsi c1l5hqju c17z6119 cdtbwtz c1x2i9s7 c1q0jf93 cff9lwm cdoj399 cl3j0y4 c12043fe",children:"Ztenbritt & rick. (Div 2 P1 & P2 POVs)"})}),c.jsx(Y,{className:"w-popover-content c3o13 ccmv6d1 c9dia3q chby825 cj9cgi3 cmrkua2 c1allln7 ci548q0 cj7l28j c7w6ovy c17z6119 cckz8kx",children:c.jsxs(at,{url:"https://youtu.be/nn2hdifNN_Q",showPreview:!0,showRelatedVideos:!1,showAnnotations:!1,color:"white",className:"w-you-tube cavd3zn cu0rr2h czr2pxy",children:[c.jsx(st,{alt:"YouTube video preview image",sizes:"100vw",optimize:!0,className:"w-preview-image cdwd3jx c1gxuxwl ckydi4m czr2pxy c1bkqfhr c1w14gb3 c7ylbzb c1h5pqsu c5u7r4m"}),c.jsx(dt,{className:"w-spinner cdwd3jx cuf9c1i cd1rb50 c8xup6y c57y1nl c9rhxl3 c1b6bgqp",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),c.jsx(lt,{"aria-label":"Play button",className:"w-play-button cdwd3jx c18rhfd1 ctsl3ob cuf9c1i cd1rb50 c1wjejkh c15znked cry9bxc c1qyy4dh ct02u4h c1l0vha7 csyy8v5 c17r8x7j c1bc2i7x c1szyaw7 c93at1n cf189jz c1mz5ev9 cxbr3c5 c1k6cp6t cuccfz7 c62906y",children:c.jsx(S,{"aria-hidden":!0,className:"w-box c1ifg8z5 c1bhscy3",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 2 9.333 6L4 14V2Z"/></svg>',className:"w-html-embed"})})})]})})]}),c.jsxs(W,{children:[c.jsx(U,{children:c.jsx(M,{className:"w-button csru8nn c1qyy4dh ct02u4h c1allln7 c9dia3q chby825 cj9cgi3 cmrkua2 chxr8al clh6saz cy1haag c6xd4vr c1hs666a crbkh5v c12j6c4j c44qnp4 c17cupsi c1l5hqju c17z6119 cdtbwtz c1x2i9s7 c1q0jf93 cff9lwm cdoj399 cl3j0y4 c12043fe",children:"L2 (Div 2 P6 Racer POV)"})}),c.jsx(Y,{className:"w-popover-content c3o13 ccmv6d1 c9dia3q chby825 cj9cgi3 cmrkua2 c1allln7 ci548q0 cj7l28j c7w6ovy c17z6119 cckz8kx",children:c.jsxs(at,{url:"https://www.youtube.com/watch?v=_ItNaMamn9g",showPreview:!0,showRelatedVideos:!1,showAnnotations:!1,color:"white",className:"w-you-tube cavd3zn cu0rr2h czr2pxy",children:[c.jsx(st,{alt:"YouTube video preview image",sizes:"100vw",optimize:!0,className:"w-preview-image cdwd3jx c1gxuxwl ckydi4m czr2pxy c1bkqfhr c1w14gb3 c7ylbzb c1h5pqsu c5u7r4m"}),c.jsx(dt,{className:"w-spinner cdwd3jx cuf9c1i cd1rb50 c8xup6y c57y1nl c9rhxl3 c1b6bgqp",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),c.jsx(lt,{"aria-label":"Play button",className:"w-play-button cdwd3jx c18rhfd1 ctsl3ob cuf9c1i cd1rb50 c1wjejkh c15znked cry9bxc c1qyy4dh ct02u4h c1l0vha7 csyy8v5 c17r8x7j c1bc2i7x c1szyaw7 c93at1n cf189jz c1mz5ev9 cxbr3c5 c1k6cp6t cuccfz7 c62906y",children:c.jsx(S,{"aria-hidden":!0,className:"w-box c1ifg8z5 c1bhscy3",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 2 9.333 6L4 14V2Z"/></svg>',className:"w-html-embed"})})})]})})]}),c.jsxs(W,{children:[c.jsx(U,{children:c.jsx(M,{className:"w-button csru8nn c1qyy4dh ct02u4h c1allln7 c9dia3q chby825 cj9cgi3 cmrkua2 chxr8al clh6saz cy1haag c6xd4vr c1hs666a crbkh5v c12j6c4j c44qnp4 c17cupsi c1l5hqju c17z6119 cdtbwtz c1x2i9s7 c1q0jf93 cff9lwm cdoj399 cl3j0y4 c12043fe",children:"Benjo (Div 2 P7 Racer POV)"})}),c.jsx(Y,{className:"w-popover-content c3o13 ccmv6d1 c9dia3q chby825 cj9cgi3 cmrkua2 c1allln7 ci548q0 cj7l28j c7w6ovy c17z6119 cckz8kx",children:c.jsxs(at,{url:"https://youtu.be/lvR0CBRpRC8",showPreview:!0,showRelatedVideos:!1,showAnnotations:!1,color:"white",className:"w-you-tube cavd3zn cu0rr2h czr2pxy",children:[c.jsx(st,{alt:"YouTube video preview image",sizes:"100vw",optimize:!0,className:"w-preview-image cdwd3jx c1gxuxwl ckydi4m czr2pxy c1bkqfhr c1w14gb3 c7ylbzb c1h5pqsu c5u7r4m"}),c.jsx(dt,{className:"w-spinner cdwd3jx cuf9c1i cd1rb50 c8xup6y c57y1nl c9rhxl3 c1b6bgqp",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),c.jsx(lt,{"aria-label":"Play button",className:"w-play-button cdwd3jx c18rhfd1 ctsl3ob cuf9c1i cd1rb50 c1wjejkh c15znked cry9bxc c1qyy4dh ct02u4h c1l0vha7 csyy8v5 c17r8x7j c1bc2i7x c1szyaw7 c93at1n cf189jz c1mz5ev9 cxbr3c5 c1k6cp6t cuccfz7 c62906y",children:c.jsx(S,{"aria-hidden":!0,className:"w-box c1ifg8z5 c1bhscy3",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 2 9.333 6L4 14V2Z"/></svg>',className:"w-html-embed"})})})]})})]}),c.jsxs(W,{children:[c.jsx(U,{children:c.jsx(M,{className:"w-button csru8nn c1qyy4dh ct02u4h c1allln7 c9dia3q chby825 cj9cgi3 cmrkua2 chxr8al clh6saz cy1haag c6xd4vr c1hs666a crbkh5v c12j6c4j c44qnp4 c17cupsi c1l5hqju c17z6119 cdtbwtz c1x2i9s7 c1q0jf93 cff9lwm cdoj399 cl3j0y4 c12043fe",children:"AIRWALKING (Div 2 Racer POV)"})}),c.jsx(Y,{className:"w-popover-content c3o13 ccmv6d1 c9dia3q chby825 cj9cgi3 cmrkua2 c1allln7 ci548q0 cj7l28j c7w6ovy c17z6119 cckz8kx",children:c.jsxs(at,{url:"https://youtu.be/7ap1WxBvR94",showPreview:!0,title:"",showRelatedVideos:!1,showAnnotations:!1,color:"white",className:"w-you-tube cavd3zn cu0rr2h czr2pxy",children:[c.jsx(st,{alt:"YouTube video preview image",sizes:"100vw",optimize:!0,className:"w-preview-image cdwd3jx c1gxuxwl ckydi4m czr2pxy c1bkqfhr c1w14gb3 c7ylbzb c1h5pqsu c5u7r4m"}),c.jsx(dt,{className:"w-spinner cdwd3jx cuf9c1i cd1rb50 c8xup6y c57y1nl c9rhxl3 c1b6bgqp",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),c.jsx(lt,{"aria-label":"Play button",className:"w-play-button cdwd3jx c18rhfd1 ctsl3ob cuf9c1i cd1rb50 c1wjejkh c15znked cry9bxc c1qyy4dh ct02u4h c1l0vha7 csyy8v5 c17r8x7j c1bc2i7x c1szyaw7 c93at1n cf189jz c1mz5ev9 cxbr3c5 c1k6cp6t cuccfz7 c62906y",children:c.jsx(S,{"aria-hidden":!0,className:"w-box c1ifg8z5 c1bhscy3",children:c.jsx(q,{code:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 2 9.333 6L4 14V2Z"/></svg>',className:"w-html-embed"})})})]})})]})]})]})]})]})]}),Ia=({data:t})=>{const{system:e,resources:n,url:r}=t;return c.jsx(qe.Provider,{value:{imageLoader:Ne,assetBaseUrl:Gt,resources:n},children:c.jsx(Fa,{system:e},r)})},Ma=Object.freeze(Object.defineProperty({__proto__:null,default:Ia},Symbol.toStringTag,{value:"Module"})),$a=({data:t})=>{const{pageMeta:e}=t,{origin:n}=new URL(t.url);let r=e.socialImageUrl;return e.socialImageAssetName&&(r=`${n}${Ne({src:e.socialImageAssetName,format:"raw"})}`),c.jsxs(c.Fragment,{children:[t.url&&c.jsx("meta",{property:"og:url",content:t.url}),c.jsx("title",{children:e.title}),c.jsx("meta",{property:"og:title",content:e.title}),e.description&&c.jsxs(c.Fragment,{children:[c.jsx("meta",{name:"description",content:e.description}),c.jsx("meta",{property:"og:description",content:e.description})]}),c.jsx("meta",{property:"og:type",content:"website"}),Hn,r&&c.jsx("meta",{property:"og:image",content:e.socialImageUrl}),Hn,e.excludePageFromSearch&&c.jsx("meta",{name:"robots",content:"noindex, nofollow"}),e.custom.map(({property:o,content:i})=>c.jsx("meta",{property:o,content:i},o)),c.jsx("link",{rel:"icon",href:Ne({src:`${Gt}${Ta}`,width:144,height:144,fit:"pad",quality:100,format:"auto"})}),Oa.map(o=>c.jsx("link",{rel:"preload",href:`${Gt}${o}`,as:"font",crossOrigin:"anonymous"},o)),La.map(o=>c.jsx("link",{rel:"preload",href:`${Gt}${o}`,as:"image"},o))]})},Ba=Object.freeze(Object.defineProperty({__proto__:null,Head:$a},Symbol.toStringTag,{value:"Module"})),Ka={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:bo}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/sarah/the-digital-cup/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:Ma}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/sarah/the-digital-cup/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:Ba}}};export{Ka as configValuesSerialized};
