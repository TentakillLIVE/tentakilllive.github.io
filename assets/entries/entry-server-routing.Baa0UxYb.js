const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/entries/pages_index.CZeY8zpX.js","assets/chunks/chunk-FjS-Y4RK.js","assets/static/app_generated_index-6937cd5a.DWME2fyQ.css","assets/entries/pages_sarah.BT3m3SDG.js","assets/chunks/chunk-Bk33GQ2w.js","assets/entries/pages_sarah_the-digital-cup.C2kS6RgG.js"])))=>i.map(i=>d[i]);
function pe(e){return Array.from(new Set(e))}function x(e,t){const n=Le();return n[e]=n[e]||t}function Le(){const e="_vike";return globalThis[e]=globalThis[e]||{}}const Ae="0.4.220",he={projectName:"Vike",projectVersion:Ae},y=new Proxy({},{get:(e,t)=>n=>t==="code"?`\`${n}\``:t==="string"?`'${n}'`:n}),w=x("assertSingleInstance.ts",{instances:[],alreadyLogged:new Set}),ze="Client runtime of both Server Routing and Client Routing loaded https://vike.dev/client-runtimes-conflict",me="Client runtime loaded twice https://vike.dev/client-runtime-duplicated";function ye(){{const e=pe(w.instances);Ve(e.length<=1,`vike@${y.bold(e[0])} and vike@${y.bold(e[1])} loaded but only one version should be loaded`)}w.checkSingleInstance&&w.instances.length>1&&B(!1,me,{onlyOnce:!0,showStackTrace:!0})}function We(e){B(w.isClientRouting!==!0,ze,{onlyOnce:!0,showStackTrace:!0}),B(w.isClientRouting===void 0,me,{onlyOnce:!0,showStackTrace:!0}),w.isClientRouting=!1,w.checkSingleInstance=!0,ye()}function De(){w.instances.push(he.projectVersion),ye()}function Ve(e,t){if(e)return;const n=`[vike][Wrong Usage] ${t}`;throw new Error(n)}function B(e,t,{onlyOnce:n,showStackTrace:r}){if(e)return;const i=`[vike][Warning] ${t}`;if(n){const{alreadyLogged:s}=w,a=n===!0?i:n;if(s.has(a))return;s.add(a)}console.warn(r?new Error(i):i)}function Ue(){return!(typeof process>"u"||!process.cwd||!process.versions||typeof process.versions.node>"u"||!process.release||process.release.name!=="node")}function L(e,t){const n=new Error(e);return Ue()&&(n.stack=He(n.stack,t)),n}function He(e,t){if(!e)return e;const n=Ne(e);let r=0;return n.filter(s=>s.includes(" (internal/")||s.includes(" (node:internal")?!1:r<t&&Be(s)?(r++,!1):!0).join(`
`)}function Be(e){return e.startsWith("    at ")}function Ne(e){return e.split(/\r?\n/)}function b(e){return typeof e=="object"&&e!==null}const v=x("utils/assert.ts",{alreadyLogged:new Set,logger(e,t){t==="info"?console.log(e):console.warn(e)},showStackTraceList:new WeakSet});De();const Ge="[vike]",Je=`[vike@${he.projectVersion}]`,Ye="Bug",A=2;function o(e,t){var a;if(e)return;const n=(()=>{if(!t)return null;const c=typeof t=="string"?t:JSON.stringify(t);return y.dim(`Debug info (for Vike maintainers; you can ignore this): ${c}`)})();let i=[`You stumbled upon a Vike bug. Go to ${y.blue("https://github.com/vikejs/vike/issues/new")} and copy-paste this error. A maintainer will fix the bug (usually within 24 hours).`,n].filter(Boolean).join(" ");i=W(i),i=z(i,Ye),i=D(i,!0);const s=L(i,A);throw(a=v.onBeforeLog)==null||a.call(v),s}function h(e,t,{showStackTrace:n}={}){var i;if(e)return;n=n||v.alwaysShowStackTrace,t=W(t),t=z(t,"Wrong Usage"),t=D(t);const r=L(t,A);throw n&&v.showStackTraceList.add(r),(i=v.onBeforeLog)==null||i.call(v),r}function Me(e){return e=W(e),e=z(e,"Error"),e=D(e),L(e,A)}function $(e,t,{onlyOnce:n,showStackTrace:r}){var i;if(!e){if(r=r||v.alwaysShowStackTrace,t=W(t),t=z(t,"Warning"),t=D(t),n){const{alreadyLogged:s}=v,a=n===!0?t:n;if(s.has(a))return;s.add(a)}if((i=v.onBeforeLog)==null||i.call(v),r){const s=L(t,A);v.showStackTraceList.add(s),v.logger(s,"warn")}else v.logger(t,"warn")}}function z(e,t){let n=`[${t}]`;const r=t==="Warning"?"yellow":"red";return n=y.bold(y[r](n)),`${n}${e}`}function W(e){return e.startsWith("[")?e:` ${e}`}function D(e,t=!1){return`${t?Je:Ge}${e}`}function q(){return typeof window<"u"&&typeof window.scrollY=="number"}const ee=x("utils/assertRouterType.ts",{});function qe(){Ke(ee.isClientRouting!==!0),ee.isClientRouting=!1}function Ke(e){h(q(),`${y.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`,{showStackTrace:!0}),$(e,"You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.",{showStackTrace:!0,onlyOnce:!0})}function Xe(){o(q())}function Qe(){Xe()}function te(e){const t=e/1e3;if(t<120){const n=ne(t);return`${n} second${re(n)}`}{const n=t/60,r=ne(n);return`${r} minute${re(r)}`}}function ne(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function re(e){return e==="1"?"":"s"}const N=x("utils/executeHook.ts",{userHookErrors:new WeakMap,pageContext:null});function Ze(e,t,n){const{hookName:r,hookFilePath:i,hookTimeout:{error:s,warning:a}}=t;let c,l;const u=new Promise((d,p)=>{c=E=>{g(),d(E)},l=E=>{g(),p(E)}}),g=()=>{f&&clearTimeout(f),S&&clearTimeout(S)},f=ie(a)&&setTimeout(()=>{$(!1,`The ${r}() hook defined by ${i} is slow: it's taking more than ${te(a)} (https://vike.dev/hooksTimeout)`,{onlyOnce:!1})},a),S=ie(s)&&setTimeout(()=>{const d=Me(`The ${r}() hook defined by ${i} timed out: it didn't finish after ${te(s)} (https://vike.dev/hooksTimeout)`);l(d)},s);return(async()=>{try{et(n);const d=await e();c(d)}catch(d){b(d)&&N.userHookErrors.set(d,{hookName:r,hookFilePath:i}),l(d)}})(),u}function ie(e){return!!e&&e!==1/0}function et(e){N.pageContext=e,Promise.resolve().then(()=>{N.pageContext=null})}function V(e){return e instanceof Function||typeof e=="function"}function _(e){return Array.isArray(e)}function tt(e){return _(e)&&e.every(t=>typeof t=="string")}function nt(e){return b(e)&&Object.values(e).every(t=>typeof t=="string")}function m(e,t,n){if(!b(e))return!1;if(!(t in e))return n==="undefined";if(n===void 0)return!0;const r=e[t];return n==="undefined"?r===void 0:n==="array"?_(r):n==="object"?b(r):n==="string[]"?tt(r):n==="string{}"?nt(r):n==="function"?V(r):_(n)?typeof r=="string"&&n.includes(r):n==="null"?r===null:n==="true"?r===!0:n==="false"?r===!1:typeof r===n}function C(e,t){t&&(o(!("_isPageContextObject"in t)),Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)))}function Ee(e,t,n){return typeof e=="string"?se(e.split(""),t,n).join(""):se(e,t,n)}function se(e,t,n){const r=[];let i=t;o(i>=0&&i<=e.length);let s=e.length+n;for(o(s>=0&&s<=e.length);!(i===s||(i===e.length&&(i=0),i===s));){const a=e[i];o(a!==void 0),r.push(a),i++}return r}function rt(e,t){o(gt(e),e),o(t.startsWith("/"));const{hashString:n,withoutHash:r}=it(e);o(n===null||n.startsWith("#"));const i=n===null?"":ve(n.slice(1)),{searchString:s,withoutSearch:a}=oe(r);o(s===null||s.startsWith("?"));let c="";if(s!==null)c=s;else if(e.startsWith("#")){const T=Se();c=T&&oe(T).searchString||""}const l={},u={};Array.from(new URLSearchParams(c)).forEach(([T,Z])=>{l[T]=Z,u[T]=[...u.hasOwnProperty(T)?u[T]:[],Z]});let{protocol:g,origin:f,pathnameAbsoluteWithBase:S}=ot(a,t);const d=a.slice((f||"").length);dt(e,f,d,s,n);let{pathname:p,hasBaseServer:E}=ut(S,t);const P=we(f,p,s,n),O=f?f.slice(g.length):null,{hostname:U,port:Ie}=at(O,e);return p=st(p),o(p.startsWith("/")),{href:P,protocol:g,hostname:U,port:Ie,origin:f,pathname:p,pathnameOriginal:d,hasBaseServer:E,search:l,searchAll:u,searchOriginal:s,hash:i,hashOriginal:n}}function it(e){const[t,...n]=e.split("#");return{hashString:["",...n].join("#")||null,withoutHash:t}}function oe(e){const[t,...n]=e.split("?");return{searchString:["",...n].join("?")||null,withoutSearch:t}}function ve(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function st(e){return e=e.replace(/\s+$/,""),e=e.split("/").map(t=>ve(t).split("/").join("%2F")).join("/"),e}function ot(e,t){o(!e.includes("?")&&!e.includes("#"));{const{protocol:n,origin:r,pathname:i}=ae(e);if(r)return{protocol:n,origin:r,pathnameAbsoluteWithBase:i};o(i===e)}if(e.startsWith("/"))return{protocol:null,origin:null,pathnameAbsoluteWithBase:e};{const n=Se();let r;return n?r=ae(n.split("?")[0].split("#")[0]).pathname:r=t,{protocol:null,origin:null,pathnameAbsoluteWithBase:ct(e,r)}}}function Se(){var t;return typeof window<"u"?(t=window==null?void 0:window.document)==null?void 0:t.baseURI:void 0}function ae(e){if(Pe(e)){const{protocol:t,uriWithoutProtocol:n}=be(e);o(t);const[r,...i]=n.split("/"),s=t+r;return{pathname:"/"+i.join("/"),origin:s,protocol:t}}else return{pathname:e,origin:null,protocol:null}}function at(e,t){const n={hostname:null,port:null};if(!e)return n;const r=e.split(":");if(r.length>1){const i=parseInt(r.pop(),10);o(i||i===0,t),n.port=i}return n.hostname=r.join(":"),n}function be(e){const t=":",[n,...r]=e.split(t);if(r.length===0||!/^[a-z][a-z0-9\+\-]*$/i.test(n))return{protocol:null,uriWithoutProtocol:e};let i=n+t,s=r.join(t);const a="//";return s.startsWith(a)&&(i=i+a,s=s.slice(a.length)),{protocol:i,uriWithoutProtocol:s}}function lt(e){return["ipfs://","ipns://"].includes(e)?!1:e.endsWith("://")}function ct(e,t){const n=t.split("/"),r=e.split("/");let i=t.endsWith("/");e.startsWith(".")&&n.pop();for(const a in r){const c=r[a];c==""&&a==="0"||c!="."&&(c==".."?n.pop():(i=!1,n.push(c)))}let s=n.join("/");return i&&!s.endsWith("/")&&(s+="/"),s.startsWith("/")||(s="/"+s),s}function ut(e,t){return o(e.startsWith("/")),o(ft(t)),o(e.startsWith("/")),o(t.startsWith("/")),{pathname:e,hasBaseServer:!0}}function ft(e){return e.startsWith("/")}function dt(e,t,n,r,i){const s=we(t,n,r,i);o(e===s)}function we(e,t,n,r){return`${e||""}${t}${n||""}${r||""}`}function gt(e){return Pe(e)||e.startsWith("/")||pt(e)}function pt(e){return[".","?","#"].some(t=>e.startsWith(t))||e===""}function Pe(e){const{protocol:t}=be(e);return!!t&&lt(t)}function ht(e){return typeof e=="string"&&mt(e)?`.${e}`:`[${JSON.stringify(e)}]`}function mt(e){return/^[a-z0-9\$_]+$/i.test(e)}Qe();const yt=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],r=t[2];return new RegExp(n,r)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function Ce(e){const t=JSON.parse(e);return K(t)}function K(e){return typeof e=="string"?Et(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=K(n)}),e)}function Et(e){for(const{match:t,deserialize:n}of yt)if(t(e))return n(e,Ce);return e}function vt(){const e="vike_pageContext",t=document.getElementById(e);h(t,`Couldn't find #${e} (which Vike automatically injects in the HTML): make sure it exists (i.e. don't remove it and make sure your HTML isn't malformed)`);const n=t.textContent;o(n);const r=Ce(n);return o(m(r,"pageId","string")),o(m(r,"routeParams","string{}")),r}function St(e){return(t,n)=>{const r=e(t),i=e(n);if(o([!0,!1,null].includes(r)),o([!0,!1,null].includes(i)),r===i)return 0;if(r===!0||i===!1)return-1;if(i===!0||r===!1)return 1;o(!1)}}function bt(e){return St(t=>{const n=e(t);return n===null?null:!n})}function wt(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const Pt=e=>e!=null;function $e(e){const t=n=>`Not a posix path: ${n}`;o(e!==null,t("null")),o(typeof e=="string",t(`typeof path === ${JSON.stringify(typeof e)}`)),o(e!=="",t("(empty string)")),o(e),o(!e.includes("\\"),t(e))}const Te=["js","ts","cjs","cts","mjs","mts"],Ct=["jsx","tsx","cjsx","ctsx","mjsx","mtsx"],xe=["vue","svelte","marko","md","mdx"],$t=[...Te,...Ct,...xe];function je(e){const t=$t.some(n=>e.endsWith("."+n));return Tt(e)&&o(t),t}function Tt(e){const t=/\.(c|m)?(j|t)s$/.test(e),n=Te.some(r=>e.endsWith("."+r));return o(t===n),t}function xt(e){return xe.some(t=>e.endsWith("."+t))}const jt=["clientRouting"];function _t(e){jt.forEach(t=>{if(o(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;h(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`),h(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const _e=["render","clientRouting","prerender","doNotPrerender"];function Rt(e,t){h(!_e.includes(e),`${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`)}function Ot(e){const t=".page.",n=Ee(e.split(t),0,-1).join(t);return o(!n.includes("\\")),n}function R(e){$e(e)}function X(e,t){return o(!e.includes("\\")),e.includes("/_error")}function Ft(e,t){if(t.length>0){const n=t.find(r=>r.pageId===e);return o(n),!!n.isErrorPage}else return X(e)}const kt=[".page",".page.server",".page.route",".page.client",".css"];function It(e){if($e(e),e.endsWith(".css"))return".css";o(je(e),e);const n=e.split("/").slice(-1)[0].split("."),r=n.slice(-3)[0],i=n.slice(-2)[0];if(i==="page")return".page";if(o(r==="page",e),i==="server")return".page.server";if(i==="client")return".page.client";if(i==="route")return".page.route";o(!1,e)}function Re(e){const t=s=>i.pageId===s||i.isDefaultPageFile&&(le(i.filePath)||Lt(s,i.filePath)),n=It(e),i={filePath:e,fileType:n,isEnv:s=>{if(o(n!==".page.route"),s==="CLIENT_ONLY")return n===".page.client"||n===".css";if(s==="SERVER_ONLY")return n===".page.server";if(s==="CLIENT_AND_SERVER")return n===".page";o(!1)},isRelevant:t,isDefaultPageFile:G(e),isRendererPageFile:n!==".css"&&G(e)&&le(e),isErrorPageFile:X(e),pageId:Ot(e)};return i}function G(e){return R(e),X(e)?!1:e.includes("/_default")}function le(e){return R(e),e.includes("/renderer/")}function Lt(e,t){R(e),R(t),o(!e.endsWith("/")),o(!t.endsWith("/")),o(G(t));const n=Ee(t.split("/"),0,-1).filter(r=>r!=="_default").join("/");return e.startsWith(n)}function At(e,t){if(!e)return null;let[n,...r]=e;if(!n||r.length===0&&["*","default",t].includes(n))return null;o(n!=="*");let i="",s="";return n==="default"?i="export default":(i="export",r=[n,...r]),r.forEach(c=>{i=`${i} { ${c}`,s=` }${s}`}),i+s}function zt(e,t,n){return`${J(e,t)} at ${I(n,t)}`}function Wt(e,t,n){return n?`${J(e,t)} at ${I(n,t)}`:`${J(e,t)} internally`}function J(e,t){return`${e} ${y.cyan(t)} defined`}function I(e,t){let n;return _(e)?n=e:n=[e],o(n.length>=1),n.map(i=>{const{filePathToShowToUser:s,fileExportPathToShowToUser:a}=i;let c=s;const l=At(a,t);return l&&(c=`${c} > ${y.cyan(l)}`),c}).join(" / ")}const Dt=["$$registrations","_rerender_only"],Vt=[".md",".mdx"];function Ut(e,t,n){const r=Object.keys(e),i=u=>u==="default"||u===n,s=r.filter(i),a=y.code("export default"),c=y.code(`export { ${n} }`);s.length===0&&h(!1,`${t} should have ${c} or ${a}`),s.length===2&&h(!1,`${t} is ambiguous: remove ${a} or ${c}`),o(s.length===1);const l=r.filter(u=>!i(u)).filter(u=>!Dt.includes(u));Vt.some(u=>t.endsWith(u))||l.forEach(u=>{$(!1,`${t} unexpected ${y.cyan(`export { ${u} }`)}, see https://vike.dev/no-side-exports`,{onlyOnce:!0})})}function Y(e){return Nt(e)}function Ht(e,t){const n=e.map(i=>{const s=Y(i.configValuesSerialized),{pageId:a,isErrorPage:c,routeFilesystem:l,loadConfigValuesAll:u}=i;return Bt(s),{pageId:a,isErrorPage:c,routeFilesystem:l,configValues:s,loadConfigValuesAll:u}}),r={configValues:{}};{const i=Y(t.configValuesSerialized);Object.assign(r.configValues,i)}return{pageConfigs:n,pageConfigGlobal:r}}function Bt(e){const t="route",n=e[t];if(!n)return;const{value:r,definedAtData:i}=n,s=typeof r;o(i);const a=zt("Config",t,i);h(s==="string"||V(r),`${a} has an invalid type '${s}': it should be a string or a function instead, see https://vike.dev/route`)}function Nt(e){const t={};return Object.entries(e).forEach(([r,i])=>{let s;if(i.type==="cumulative"){const{valueSerialized:a,...c}=i;s={value:a.map((u,g)=>{const{value:f,sideExports:S}=ce(u,r,()=>{const d=i.definedAtData[g];return o(d),d});return n(S),f}),...c}}else{const{valueSerialized:a,...c}=i,{value:l,sideExports:u}=ce(a,r,()=>(o(i.type!=="computed"),i.definedAtData));n(u),s={value:l,...c}}t[r]=s}),t;function n(r){r.forEach(i=>{const{configName:s,configValue:a}=i;t[s]||(t[s]=a)})}}function ce(e,t,n){if(e.type==="js-serialized"){let{value:r}=e;return r=K(r),{value:r,sideExports:[]}}if(e.type==="pointer-import"){const{value:r}=e;return{value:r,sideExports:[]}}if(e.type==="plus-file"){const r=n(),{exportValues:i}=e;Ut(i,r.filePathToShowToUser,t);let s,a=!1;const c=[];return Object.entries(i).forEach(([l,u])=>{l!=="default"&&l!==t?c.push({configName:l,configValue:{type:"standard",value:u,definedAtData:{filePathToShowToUser:r.filePathToShowToUser,fileExportPathToShowToUser:[l]}}}):(s=u,o(!a),a=!0)}),o(a),{value:s,sideExports:c}}o(!1)}function Gt(e){o(m(e,"pageFilesLazy","object")),o(m(e,"pageFilesEager","object")),o(m(e,"pageFilesExportNamesLazy","object")),o(m(e,"pageFilesExportNamesEager","object")),o(m(e.pageFilesLazy,".page")),o(m(e.pageFilesLazy,".page.client")||m(e.pageFilesLazy,".page.server")),o(m(e,"pageFilesList","string[]")),o(m(e,"pageConfigsSerialized")),o(m(e,"pageConfigGlobalSerialized"));const{pageConfigsSerialized:t,pageConfigGlobalSerialized:n}=e;Jt(t),Yt(n);const{pageConfigs:r,pageConfigGlobal:i}=Ht(t,n),s={};F(e.pageFilesLazy).forEach(({filePath:c,pageFile:l,globValue:u})=>{l=s[c]=s[c]??l;const g=u;ue(g),l.loadFile=async()=>{"fileExports"in l||(l.fileExports=await g(),_t(l))}}),F(e.pageFilesExportNamesLazy).forEach(({filePath:c,pageFile:l,globValue:u})=>{l=s[c]=s[c]??l;const g=u;ue(g),l.loadExportNames=async()=>{if(!("exportNames"in l)){const f=await g();o(m(f,"exportNames","string[]"),l.filePath),l.exportNames=f.exportNames}}}),F(e.pageFilesEager).forEach(({filePath:c,pageFile:l,globValue:u})=>{l=s[c]=s[c]??l;const g=u;o(b(g)),l.fileExports=g}),F(e.pageFilesExportNamesEager).forEach(({filePath:c,pageFile:l,globValue:u})=>{l=s[c]=s[c]??l;const g=u;o(b(g)),o(m(g,"exportNames","string[]"),l.filePath),l.exportNames=g.exportNames}),e.pageFilesList.forEach(c=>{s[c]=s[c]??Re(c)});const a=Object.values(s);return a.forEach(({filePath:c})=>{o(!c.includes("\\"))}),{pageFiles:a,pageConfigs:r,pageConfigGlobal:i}}function F(e){const t=[];return Object.entries(e).forEach(([n,r])=>{o(kt.includes(n)),o(b(r)),Object.entries(r).forEach(([i,s])=>{const a=Re(i);o(a.fileType===n),t.push({filePath:i,pageFile:a,globValue:s})})}),t}function ue(e){o(V(e))}function Jt(e){o(_(e)),e.forEach(t=>{o(b(t)),o(m(t,"pageId","string")),o(m(t,"routeFilesystem")),o(m(t,"configValuesSerialized"))})}function Yt(e){o(m(e,"configValuesSerialized"))}function Mt(e){if(!e||_(e))return null;const{filePathToShowToUser:t}=e;return o(t),t}function qt(e,t){const n={},r={},i={};e.forEach(f=>{Kt(f).forEach(({exportName:d,exportValue:p,isFromDefaultExport:E})=>{o(d!=="default"),i[d]=i[d]??[],i[d].push({exportValue:p,exportSource:`${f.filePath} > ${E?`\`export default { ${d} }\``:`\`export { ${d} }\``}`,filePath:f.filePath,_filePath:f.filePath,_fileType:f.fileType,_isFromDefaultExport:E})})});let s,a,c;if(t){const f=Oe(t);s=f.source,a=f.sources,c=f.from,Object.assign(n,f.config),Object.assign(r,f.configEntries),Object.assign(i,f.exportsAll)}else s={},a={},c={configsStandard:{},configsCumulative:{},configsComputed:{}};const l=Xt(),u={};return Object.entries(i).forEach(([f,S])=>{S.forEach(({exportValue:d,_fileType:p,_isFromDefaultExport:E})=>{u[f]=u[f]??d,p===".page"&&!E&&(f in l||(l[f]=d))})}),o(!("default"in u)),o(!("default"in i)),{from:c,source:s,sources:a,config:n,configEntries:r,exports:u,exportsAll:i,pageExports:l}}function Oe(e){const t={},n={},r={},i={},s={},a={configsStandard:{},configsCumulative:{},configsComputed:{}},c=(l,u)=>{i[u]=l,s[u]??(s[u]=[]),s[u].push(l)};return Object.entries(e.configValues).forEach(([l,u])=>{const{value:g}=u,f=Mt(u.definedAtData),S=Wt("Config",l,u.definedAtData);if(t[l]=t[l]??g,n[l]=n[l]??[],o(n[l].length===0),n[l].push({configValue:g,configDefinedAt:S,configDefinedByFile:f}),u.type==="standard"){const p={type:"configsStandard",value:u.value,definedAt:I(u.definedAtData,l)};c(p,l),a.configsStandard[l]=p}if(u.type==="cumulative"){const p={type:"configsCumulative",values:u.value.map((E,P)=>{const O=u.definedAtData[P];o(O);const U=I(O,l);return{value:E,definedAt:U}})};c(p,l),a.configsCumulative[l]=p}if(u.type==="computed"){const p={type:"configsComputed",value:u.value};c(p,l),a.configsComputed[l]=p}const d=l;r[d]=r[d]??[],r[d].push({exportValue:g,exportSource:S,filePath:f,_filePath:f,_fileType:null,_isFromDefaultExport:null})}),{config:t,configEntries:n,exportsAll:r,source:i,sources:s,from:a}}function Kt(e){const{filePath:t,fileExports:n}=e;o(n),o(je(t));const r=[];return Object.entries(n).sort(bt(([i])=>i==="default")).forEach(([i,s])=>{let a=i==="default";if(a)if(xt(t))i="Page";else{h(b(s),`The ${y.cyan("export default")} of ${t} should be an object.`),Object.entries(s).forEach(([c,l])=>{Rt(c,t),r.push({exportName:c,exportValue:l,isFromDefaultExport:a})});return}r.push({exportName:i,exportValue:s,isFromDefaultExport:a})}),r.forEach(({exportName:i,isFromDefaultExport:s})=>{o(!(s&&_e.includes(i)))}),r}function Xt(){return new Proxy({},{get(...e){return q()||$(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vike.dev/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}const j=x("setPageFiles.ts",{});function Qt(e){const{pageFiles:t,pageConfigs:n,pageConfigGlobal:r}=Gt(e);j.pageFilesAll=t,j.pageConfigs=n,j.pageConfigGlobal=r,j.globalConfig=Oe(r)}async function Zt(e,t){o(!j.pageFilesGetter),o(t===void 0);const{pageFilesAll:n,pageConfigs:r,pageConfigGlobal:i,globalConfig:s}=j;o(n&&r&&i&&s);const a=en(n,r);return{pageFilesAll:n,allPageIds:a,pageConfigs:r,pageConfigGlobal:i,globalConfig:s}}function en(e,t){const n=e.filter(({isDefaultPageFile:s})=>!s).map(({pageId:s})=>s),r=pe(n),i=t.map(s=>s.pageId);return[...r,...i]}function tn(e,t){return nn(e,t,!0)}function nn(e,t,n){const r="CLIENT_ONLY",i=e.filter(d=>d.isRelevant(t)&&d.fileType!==".page.route").sort(rn(n,t)),s=d=>{const p=i.filter(P=>P.pageId===t&&P.isEnv(d?"CLIENT_AND_SERVER":r));h(p.length<=1,`Merge the following files into a single file: ${p.map(P=>P.filePath).join(" ")}`);const E=p[0];return o(E===void 0||!E.isDefaultPageFile),E},a=s(!1),c=s(!0),l=d=>i.filter(p=>p.isRendererPageFile&&p.isEnv(d?"CLIENT_AND_SERVER":r))[0],u=l(!1),g=l(!0),f=i.filter(d=>d.isDefaultPageFile&&!d.isRendererPageFile&&(d.isEnv(r)||d.isEnv("CLIENT_AND_SERVER")));return[a,c,...f,u,g].filter(Pt)}function rn(e,t){const n="CLIENT_ONLY";return(a,c)=>{if(!a.isDefaultPageFile&&c.isDefaultPageFile)return-1;if(!c.isDefaultPageFile&&a.isDefaultPageFile)return 1;{const l=a.isRendererPageFile,u=c.isRendererPageFile;if(!l&&u)return-1;if(!u&&l)return 1;o(l===u)}{const l=fe(t,a.filePath),u=fe(t,c.filePath);if(l<u)return-1;if(u<l)return 1;o(l===u)}{if(a.isEnv(n)&&c.isEnv("CLIENT_AND_SERVER"))return-1;if(c.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return 1}return 0}}function fe(e,t){R(e),R(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const r=e.slice(n),i=t.slice(n),s=r.split("/").length,a=i.split("/").length;return s+a}function sn(e,t){const n=e.filter(i=>i.pageId===t);return o(n.length<=1),n[0]??null}async function on(e,t){if("isAllLoaded"in e&&!t)return e;const n=await e.loadConfigValuesAll(),r=Y(n.configValuesSerialized);return Object.assign(e.configValues,r),C(e,{isAllLoaded:!0}),e}const an="__whileFetchingAssets";async function ln(e,t,n){const r=tn(t,e),i=sn(n,e);let s;const a=!1;try{s=(await Promise.all([i&&on(i,a),...r.map(g=>{var f;return(f=g.loadFile)==null?void 0:f.call(g)})]))[0]}catch(u){throw cn(u)&&Object.assign(u,{[an]:!0}),u}const c=qt(r,s),l={};return C(l,c),C(l,{_pageFilesLoaded:r}),l}function cn(e){return e instanceof Error?["Failed to fetch dynamically imported module","error loading dynamically imported module","Importing a module script failed","error resolving module specifier","failed to resolve module"].some(n=>e.message.toLowerCase().includes(n.toLowerCase())):!1}function un(e,t){o(!e.startsWith("#"));const{searchOriginal:n,hashOriginal:r,pathname:i}=rt(e,"/");let s=`${i}${n||""}`;return t!=null&&t.withoutHash||(s+=r||""),o(s.startsWith("/")),s}function Fe(e){return un(window.location.href,e)}const fn="modulepreload",dn=function(e){return"/"+e},de={},H=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=dn(l),l in de)return;de[l]=!0;const u=l.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${g}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":fn,u||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),u)return new Promise((S,d)=>{f.addEventListener("load",S),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})},Q={},gn={},pn={},hn={},mn=[],ke={},yn=[{pageId:"/pages/index",isErrorPage:void 0,routeFilesystem:{routeString:"/",definedBy:"/pages/index/"},loadConfigValuesAll:()=>H(()=>import("./pages_index.CZeY8zpX.js"),__vite__mapDeps([0,1,2])),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}},{pageId:"/pages/sarah",isErrorPage:void 0,routeFilesystem:{routeString:"/sarah",definedBy:"/pages/sarah/"},loadConfigValuesAll:()=>H(()=>import("./pages_sarah.BT3m3SDG.js"),__vite__mapDeps([3,1,4,2])),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}},{pageId:"/pages/sarah/the-digital-cup",isErrorPage:void 0,routeFilesystem:{routeString:"/sarah/the-digital-cup",definedBy:"/pages/sarah/the-digital-cup/"},loadConfigValuesAll:()=>H(()=>import("./pages_sarah_the-digital-cup.C2kS6RgG.js"),__vite__mapDeps([5,1,4,2])),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}}],En={configValuesSerialized:{}},vn=Object.assign({}),Sn={...vn};Q[".page"]=Sn;const bn=Object.assign({}),wn={...bn};Q[".page.client"]=wn;const Pn=Object.assign({}),Cn={...Pn};ke[".page.server"]=Cn;const $n=Object.freeze(Object.defineProperty({__proto__:null,neverLoaded:ke,pageConfigGlobalSerialized:En,pageConfigsSerialized:yn,pageFilesEager:gn,pageFilesExportNamesEager:hn,pageFilesExportNamesLazy:pn,pageFilesLazy:Q,pageFilesList:mn},Symbol.toStringTag,{value:"Module"})),ge=Fe({withoutHash:!0});Qt($n);async function Tn(){const e=vt();return C(e,{isHydration:!0,isBackwardNavigation:null,_hasPageContextFromServer:!0,_hasPageContextFromClient:!1}),C(e,await jn(e.pageId)),xn(),e}function xn(){const e=Fe({withoutHash:!0});h(ge===e,`The URL was manipulated before the hydration finished ('${ge}' to '${e}'). Ensure the hydration has finished before manipulating the URL. Consider using the onHydrationEnd() hook.`)}async function jn(e){const t={},{pageFilesAll:n,pageConfigs:r}=await Zt();return C(t,{_pageFilesAll:n,_pageConfigs:r}),C(t,await ln(e,t._pageFilesAll,t._pageConfigs)),n.filter(i=>i.fileType!==".page.server").forEach(i=>{var s;$(!((s=i.fileExports)!=null&&s.onBeforeRender),`export { onBeforeRender } of ${i.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define onBeforeRender() in a .page.server.js file instead, see https://vike.dev/onBeforeRender-isomorphic#server-routing`,{onlyOnce:!0})}),t}const _n=x("getHook.ts",{});function M(e,t){if(!(t in e.exports))return null;const{hooksTimeout:n}=e.config,r=Fn(n,t),i=e.exports[t],s=e.exportsAll[t][0];if(o(s.exportValue===i),i===null)return null;const a=s.filePath;return o(a),o(!a.endsWith(" ")),On(i,{hookName:t,hookFilePath:a}),{hookFn:i,hookName:t,hookFilePath:a,hookTimeout:r}}function Rn(e,t){M(e,t)}function On(e,{hookName:t,hookFilePath:n}){o(t&&n),o(!t.endsWith(")")),h(V(e),`Hook ${t}() defined by ${n} should be a function`)}function Fn(e,t){const n=kn(e);if(n===!1)return{error:!1,warning:!1};const r=n[t],i=In(t);return(r==null?void 0:r.error)!==void 0&&(i.error=r.error),(r==null?void 0:r.warning)!==void 0&&(i.warning=r.warning),i}function kn(e){if(e===void 0)return{};if(e===!1)return!1;h(b(e),`Setting ${y.cyan("hooksTimeout")} should be ${y.cyan("false")} or an object`);const t={};return Object.entries(e).forEach(([n,r])=>{if(r===!1){t[n]={error:!1,warning:!1};return}h(b(r),`Setting ${y.cyan(`hooksTimeout.${n}`)} should be ${y.cyan("false")} or an object`);const[i,s]=["error","warning"].map(a=>{const c=r[a];if(c===void 0||c===!1)return c;const l=`Setting ${y.cyan(`hooksTimeout.${n}.${a}`)} should be`;return h(typeof c=="number",`${l} ${y.cyan("false")} or a number`),h(c>0,`${l} a positive number`),c});t[n]={error:i,warning:s}}),t}function In(e){return e==="onBeforeRoute"?{error:5*1e3,warning:1*1e3}:_n.isPrerendering?{error:2*60*1e3,warning:30*1e3}:(o(!e.toLowerCase().includes("prerender")),{error:30*1e3,warning:4*1e3})}const Ln="not-serializable",k=x("getPageContextProxyForUser.ts",{});function An(e){return o([!0,!1].includes(e._hasPageContextFromServer)),o([!0,!1].includes(e._hasPageContextFromClient)),new Proxy(e,{get(t,n){const r=e[n],i=ht(n);return h(r!==Ln,`Can't access pageContext${i} on the client side. Because it can't be serialized, see server logs.`),zn(e,n,i),r}})}function zn(e,t,n){if(Vn(t)||t in e||Dn(t)||!e._hasPageContextFromServer)return;const r=`pageContext${n} isn't defined on the client-side, see https://vike.dev/passToClient#error`;e._hasPageContextFromClient?$(!1,r,{onlyOnce:!1,showStackTrace:!0}):h(!1,r)}const Wn=["then","toJSON"];function Dn(e){return!!(Wn.includes(e)||typeof e=="symbol"||typeof e!="string"||e.startsWith("__v_"))}function Vn(e){return k.prev===e||k.prev==="__v_raw"?!0:(k.prev=e,window.setTimeout(()=>{k.prev=void 0},0),!1)}function Un(e){Hn(e),Bn(e)}function Hn(e){Ft(e.pageId,e._pageConfigs)&&o(m(e,"is404","boolean"))}function Bn(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!b(t)){$(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}function Nn(e){o(e.pageId),o("config"in e),o("configEntries"in e),Un(e),"_pageId"in e||Object.defineProperty(e,"_pageId",{get(){return $(!1,"pageContext._pageId has been renamed to pageContext.pageId",{showStackTrace:!0,onlyOnce:!0}),e.pageId},enumerable:!1}),Gn(e)}function Gn(e){let t=Object.getOwnPropertyDescriptors(e);for(const n of Object.keys(e))delete e[n];t=Object.fromEntries(Object.entries(t).sort(([n],[r])=>wt(n,r))),Object.defineProperties(e,t)}function Jn(e,t){{const i=e;o(i.isHydration===!0),o(i.isBackwardNavigation===null)}const n=e.config.Page||e.exports.Page;return C(e,{Page:n}),Yn(e),Nn(e),An(e)}function Yn(e){Mn(e)}function Mn(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}async function qn(e,t){const n=Jn(e);let r=null,i;r=M(e,"render"),i="render";{const c=M(e,"onRenderClient");c&&(r=c,i="onRenderClient")}if(!r){const c=Kn(e);if(o(c),e._pageConfigs.length>0)h(!1,`No onRenderClient() hook defined for URL '${c}', but it's needed, see https://vike.dev/onRenderClient`);else{const l=e._pageFilesLoaded.filter(g=>g.fileType===".page.client");let u;l.length===0?u="No file `*.page.client.*` found for URL "+c:u="One of the following files should export a render() hook: "+l.map(g=>g.filePath).join(" "),h(!1,u)}}o(r);const s=r.hookFn;o(i);const a=await Ze(()=>s(n),r,e);h(a===void 0,`The ${i}() hook defined by ${r.hookFilePath} isn't allowed to return a value`)}function Kn(e){let t;try{t=e.urlPathname??e.urlOriginal}catch{}return t=t??window.location.href,t}qe();We();Xn();async function Xn(){var t,n;const e=await Tn();await qn(e),Rn(e,"onHydrationEnd"),await((n=(t=e.exports).onHydrationEnd)==null?void 0:n.call(t,e))}
