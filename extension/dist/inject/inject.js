(()=>{var U=Object.create,S=Object.defineProperty,W=Object.getPrototypeOf,I=Object.prototype.hasOwnProperty,G=Object.getOwnPropertyNames,H=Object.getOwnPropertyDescriptor;var z=i=>S(i,"__esModule",{value:!0});var Z=(i,s)=>()=>(s||(s={exports:{}},i(s.exports,s)),s.exports);var V=(i,s,u)=>{if(s&&typeof s=="object"||typeof s=="function")for(let o of G(s))!I.call(i,o)&&o!=="default"&&S(i,o,{get:()=>s[o],enumerable:!(u=H(s,o))||u.enumerable});return i},K=i=>i&&i.__esModule?i:V(z(S(i!=null?U(W(i)):{},"default",{value:i,enumerable:!0})),i);var O=Z((T,R)=>{(function(i,s){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],s);else if(typeof T!="undefined")s(R);else{var u={exports:{}};s(u),i.browser=u.exports}})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:T,function(i){"use strict";if(typeof browser=="undefined"||Object.getPrototypeOf(browser)!==Object.prototype){let s="The message port closed before a response was received.",u="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",o=l=>{let f={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(f).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class w extends WeakMap{constructor(r,t=void 0){super(t);this.createItem=r}get(r){return this.has(r)||this.set(r,this.createItem(r)),super.get(r)}}let q=e=>e&&typeof e=="object"&&typeof e.then=="function",P=(e,r)=>(...t)=>{l.runtime.lastError?e.reject(l.runtime.lastError):r.singleCallbackArg||t.length<=1&&r.singleCallbackArg!==!1?e.resolve(t[0]):e.resolve(t)},k=e=>e==1?"argument":"arguments",F=(e,r)=>function(g,...m){if(m.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${k(r.minArgs)} for ${e}(), got ${m.length}`);if(m.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${k(r.maxArgs)} for ${e}(), got ${m.length}`);return new Promise((A,c)=>{if(r.fallbackToNoCallback)try{g[e](...m,P({resolve:A,reject:c},r))}catch(n){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,n),g[e](...m),r.fallbackToNoCallback=!1,r.noCallback=!0,A()}else r.noCallback?(g[e](...m),A()):g[e](...m,P({resolve:A,reject:c},r))})},M=(e,r,t)=>new Proxy(r,{apply(g,m,A){return t.call(m,e,...A)}}),y=Function.call.bind(Object.prototype.hasOwnProperty),E=(e,r={},t={})=>{let g=Object.create(null),m={has(c,n){return n in e||n in g},get(c,n,x){if(n in g)return g[n];if(!(n in e))return;let a=e[n];if(typeof a=="function")if(typeof r[n]=="function")a=M(e,e[n],r[n]);else if(y(t,n)){let p=F(n,t[n]);a=M(e,e[n],p)}else a=a.bind(e);else if(typeof a=="object"&&a!==null&&(y(r,n)||y(t,n)))a=E(a,r[n],t[n]);else if(y(t,"*"))a=E(a,r[n],t["*"]);else return Object.defineProperty(g,n,{configurable:!0,enumerable:!0,get(){return e[n]},set(p){e[n]=p}}),a;return g[n]=a,a},set(c,n,x,a){return n in g?g[n]=x:e[n]=x,!0},defineProperty(c,n,x){return Reflect.defineProperty(g,n,x)},deleteProperty(c,n){return Reflect.deleteProperty(g,n)}},A=Object.create(e);return new Proxy(A,m)},N=e=>({addListener(r,t,...g){r.addListener(e.get(t),...g)},hasListener(r,t){return r.hasListener(e.get(t))},removeListener(r,t){r.removeListener(e.get(t))}}),_=!1,D=new w(e=>typeof e!="function"?e:function(t,g,m){let A=!1,c,n=new Promise(b=>{c=function(d){_||(console.warn(u,new Error().stack),_=!0),A=!0,b(d)}}),x;try{x=e(t,g,c)}catch(b){x=Promise.reject(b)}let a=x!==!0&&q(x);if(x!==!0&&!a&&!A)return!1;let p=b=>{b.then(d=>{m(d)},d=>{let C;d&&(d instanceof Error||typeof d.message=="string")?C=d.message:C="An unexpected error occurred",m({__mozWebExtensionPolyfillReject__:!0,message:C})}).catch(d=>{console.error("Failed to send onMessage rejected reply",d)})};return p(a?x:n),!0}),$=({reject:e,resolve:r},t)=>{l.runtime.lastError?l.runtime.lastError.message===s?r():e(l.runtime.lastError):t&&t.__mozWebExtensionPolyfillReject__?e(new Error(t.message)):r(t)},L=(e,r,t,...g)=>{if(g.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${k(r.minArgs)} for ${e}(), got ${g.length}`);if(g.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${k(r.maxArgs)} for ${e}(), got ${g.length}`);return new Promise((m,A)=>{let c=$.bind(null,{resolve:m,reject:A});g.push(c),t.sendMessage(...g)})},j={runtime:{onMessage:N(D),onMessageExternal:N(D),sendMessage:L.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:L.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},v={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return f.privacy={network:{"*":v},services:{"*":v},websites:{"*":v}},E(l,j,f)};if(typeof chrome!="object"||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");i.exports=o(chrome)}else i.exports=browser})});var B=K(O());function h(){let i=document.querySelector('.file-navigation .btn[data-hotkey="t"]');if(i&&!document.querySelector(".DEDUPE_git-peek-repo")){var s=document.createElement("a");s.innerHTML="Open (git-peek)",s.className="btn btn-primary DEDUPE_git-peek-repo",s.href="git-peek://"+window.location.href,i.parentElement.insertBefore(s,i)}let u=document.querySelector(".BtnGroup");if(u&&!document.querySelector(".DEDUPE_git-peek-file")){var o=document.createElement("div");o.className="BtnGroup";var s=document.createElement("a");s.innerHTML="Open (git-peek)",s.className="btn btn-sm btn-primary DEDUPE_git-peek-file",s.href="git-peek://"+window.location.href,s.style.marginRight="8px",o.appendChild(s),u.parentElement.prepend(o)}if(location.pathname.includes("/pull")&&location.pathname.includes("/files"))for(let l of document.querySelectorAll(".file-header")){let f;l.querySelector(".octicon.octicon-file")?f=l.querySelector(".octicon.octicon-file").closest(".BtnGroup"):f=l.querySelector(".js-toggle-user-reviewed-file-form");let w=l.querySelector('*[data-ga-click="View file, click, location:files_changed_dropdown"]')?.getAttribute("href");if(f&&w&&!l.querySelector(".DEDUPE_git-peek-fileaction")){var o=document.createElement("div");o.className="BtnGroup";var s=document.createElement("a");s.innerHTML="Open (git-peek)",s.className="btn btn-sm DEDUPE_git-peek-fileaction",s.href="git-peek://"+location.origin+w,s.style.marginRight="8px",o.appendChild(s),f.parentElement.prepend(o)}}}window.addEventListener("DOMContentLoaded",()=>requestAnimationFrame(h));window.addEventListener("popstate",()=>requestAnimationFrame(h));window.addEventListener("replaceState",()=>requestAnimationFrame(h));requestAnimationFrame(h);B.default.runtime.onMessage.addListener(()=>{requestAnimationFrame(h)});})();