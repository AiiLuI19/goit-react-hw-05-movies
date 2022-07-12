"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{425:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var o=n(871),r=n(885),a=n(791),i=n(501),s=n(171),c=n(184),u=function(){var e=(0,i.lr)(),t=(0,r.Z)(e,1)[0].get("query"),n=s.Z.fetchSearchMovies,u=(0,a.useState)([]),l=(0,r.Z)(u,2),d=l[0],f=l[1],p=(0,a.useState)("idle"),m=(0,r.Z)(p,2),v=m[0],g=m[1],h=(0,a.useState)(null),y=(0,r.Z)(h,2),b=y[0],T=y[1],E=(0,o.TH)();return(0,a.useEffect)((function(){t&&(g("pending"),n(t).then((function(e){var t=e.results;g("resolved"),f(t)})).catch((function(e){T(e),g("rejected")})))}),[n,t]),(0,c.jsxs)(c.Fragment,{children:["rejected"===v&&(0,c.jsx)("h1",{children:b}),(0,c.jsx)("ul",{children:"resolved"===v&&d.map((function(e){var t=e.id,n=e.title;return(0,c.jsx)("li",{children:(0,c.jsx)(i.rU,{to:"/movies/".concat(t),state:{from:E},children:(0,c.jsx)("h2",{children:n})})},t)}))}),(0,c.jsx)(o.j3,{})]})};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=n(907);var v=n(181);function g(e){return function(e){if(Array.isArray(e))return(0,m.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,v.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=h(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var y=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=h(e))&&(o&&(o+=" "),o+=t);return o},b=["theme","type"],T=["delay","staleId"];function E(e){return"number"==typeof e&&!isNaN(e)}function O(e){return"boolean"==typeof e}function C(e){return"string"==typeof e}function _(e){return"function"==typeof e}function I(e){return C(e)||_(e)?e:null}function L(e){return 0===e||e}function w(e){return(0,a.isValidElement)(e)||C(e)||_(e)||E(e)}var P={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},N={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function k(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var o=e.children,i=e.position,c=e.preventExitTransition,l=e.done,d=e.nodeRef,f=e.isIn,p=r?t+"--"+i:t,m=r?n+"--"+i:n,v=(0,a.useRef)(),g=(0,a.useRef)(0);function h(e){if(e.target===d.current){var t=d.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",h),t.removeEventListener("animationcancel",h),0===g.current&&"animationcancel"!==e.type&&(t.className=v.current)}}function y(){var e=d.current;e.removeEventListener("animationend",y),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()}return(0,a.useLayoutEffect)((function(){!function(){var e=d.current;v.current=e.className,e.className+=" "+p,e.addEventListener("animationend",h),e.addEventListener("animationcancel",h)}()}),[]),(0,a.useEffect)((function(){f||(c?y():function(){g.current=1;var e=d.current;e.className+=" "+m,e.addEventListener("animationend",y)}())}),[f]),a.createElement(a.Fragment,null,o)}}function x(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var j={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,g([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},S=function(e){var t=e.theme,n=e.type,o=p(e,b);return a.createElement("svg",f({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},o))},R={info:function(e){return a.createElement(S,f({},e),a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return a.createElement(S,f({},e),a.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return a.createElement(S,f({},e),a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return a.createElement(S,f({},e),a.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return a.createElement("div",{className:"Toastify__spinner"})}};function M(e){var t=(0,a.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],o=(0,a.useState)([]),i=(0,r.Z)(o,2),s=i[0],c=i[1],u=(0,a.useRef)(null),l=(0,a.useRef)(new Map).current,d=function(e){return-1!==s.indexOf(e)},f=(0,a.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:d,getToast:function(e){return l.get(e)}}).current;function m(e){var t=e.containerId;!f.props.limit||t&&f.containerId!==t||(f.count-=f.queue.length,f.queue=[])}function v(e){c((function(t){return L(e)?t.filter((function(t){return t!==e})):[]}))}function h(){var e=f.queue.shift();b(e.toastContent,e.toastProps,e.staleId)}function y(e,t){var o=t.delay,r=t.staleId,i=p(t,T);if(w(e)&&!function(e){return!u.current||f.props.enableMultiContainer&&e.containerId!==f.props.containerId||l.has(e.toastId)&&null==e.updateId}(i)){var s=i.toastId,c=i.updateId,d=i.data,m=f.props,g=function(){return v(s)},y=null==c;y&&f.count++;var P,N,k={toastId:s,updateId:c,data:d,containerId:i.containerId,isLoading:i.isLoading,theme:i.theme||m.theme,icon:null!=i.icon?i.icon:m.icon,isIn:!1,key:i.key||f.toastKey++,type:i.type,closeToast:g,closeButton:i.closeButton,rtl:m.rtl,position:i.position||m.position,transition:i.transition||m.transition,className:I(i.className||m.toastClassName),bodyClassName:I(i.bodyClassName||m.bodyClassName),style:i.style||m.toastStyle,bodyStyle:i.bodyStyle||m.bodyStyle,onClick:i.onClick||m.onClick,pauseOnHover:O(i.pauseOnHover)?i.pauseOnHover:m.pauseOnHover,pauseOnFocusLoss:O(i.pauseOnFocusLoss)?i.pauseOnFocusLoss:m.pauseOnFocusLoss,draggable:O(i.draggable)?i.draggable:m.draggable,draggablePercent:i.draggablePercent||m.draggablePercent,draggableDirection:i.draggableDirection||m.draggableDirection,closeOnClick:O(i.closeOnClick)?i.closeOnClick:m.closeOnClick,progressClassName:I(i.progressClassName||m.progressClassName),progressStyle:i.progressStyle||m.progressStyle,autoClose:!i.isLoading&&(P=i.autoClose,N=m.autoClose,!1===P||E(P)&&P>0?P:N),hideProgressBar:O(i.hideProgressBar)?i.hideProgressBar:m.hideProgressBar,progress:i.progress,role:i.role||m.role,deleteToast:function(){var e=x(l.get(s),"removed");l.delete(s),j.emit(4,e);var t=f.queue.length;if(f.count=L(s)?f.count-1:f.count-f.displayedToast,f.count<0&&(f.count=0),t>0){var o=L(s)?1:f.props.limit;if(1===t||1===o)f.displayedToast++,h();else{var r=o>t?t:o;f.displayedToast=r;for(var a=0;a<r;a++)h()}}else n()}};k.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,i=null,s={theme:t,type:n};return!1===r||(_(r)?i=r(s):(0,a.isValidElement)(r)?i=(0,a.cloneElement)(r,s):C(r)||E(r)?i=r:o?i=R.spinner():function(e){return e in R}(n)&&(i=R[n](s))),i}(k),_(i.onOpen)&&(k.onOpen=i.onOpen),_(i.onClose)&&(k.onClose=i.onClose),k.closeButton=m.closeButton,!1===i.closeButton||w(i.closeButton)?k.closeButton=i.closeButton:!0===i.closeButton&&(k.closeButton=!w(m.closeButton)||m.closeButton);var S=e;(0,a.isValidElement)(e)&&!C(e.type)?S=(0,a.cloneElement)(e,{closeToast:g,toastProps:k,data:d}):_(e)&&(S=e({closeToast:g,toastProps:k,data:d})),m.limit&&m.limit>0&&f.count>m.limit&&y?f.queue.push({toastContent:S,toastProps:k,staleId:r}):E(o)?setTimeout((function(){b(S,k,r)}),o):b(S,k,r)}}function b(e,t,n){var o=t.toastId;n&&l.delete(n);var r={content:e,props:t};l.set(o,r),c((function(e){return[].concat(g(e),[o]).filter((function(e){return e!==n}))})),j.emit(4,x(r,null==r.props.updateId?"added":"updated"))}return(0,a.useEffect)((function(){return f.containerId=e.containerId,j.cancelEmit(3).on(0,y).on(1,(function(e){return u.current&&v(e)})).on(5,m).emit(2,f),function(){return j.emit(3,f)}}),[]),(0,a.useEffect)((function(){f.props=e,f.isToastActive=d,f.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(l.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:d}}function D(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function A(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function B(e){var t=(0,a.useState)(!1),n=(0,r.Z)(t,2),o=n[0],i=n[1],s=(0,a.useState)(!1),c=(0,r.Z)(s,2),u=c[0],l=c[1],d=(0,a.useRef)(null),f=(0,a.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,a.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,h=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){f.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",I),document.addEventListener("touchmove",C),document.addEventListener("touchend",I);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=D(t.nativeEvent),f.y=A(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(){if(f.boundingRect){var t=f.boundingRect,n=t.top,o=t.bottom,r=t.left,a=t.right;e.pauseOnHover&&f.x>=r&&f.x<=a&&f.y>=n&&f.y<=o?O():E()}}function E(){i(!0)}function O(){i(!1)}function C(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&O(),f.x=D(t),f.y=A(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+f.delta+"px)",n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function I(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",I);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,a.useEffect)((function(){p.current=e})),(0,a.useEffect)((function(){return d.current&&d.current.addEventListener("d",E,{once:!0}),_(e.onOpen)&&e.onOpen((0,a.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;_(e.onClose)&&e.onClose((0,a.isValidElement)(e.children)&&e.children.props)}}),[]),(0,a.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||O(),window.addEventListener("focus",E),window.addEventListener("blur",O)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var L={onMouseDown:b,onTouchStart:b,onMouseUp:T,onTouchEnd:T};return m&&v&&(L.onMouseEnter=O,L.onMouseLeave=E),y&&(L.onClick=function(e){h&&h(e),f.canCloseOnClick&&g()}),{playToast:E,pauseToast:O,isRunning:o,preventExitTransition:u,toastRef:d,eventHandlers:L}}function F(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return a.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},a.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function z(e){var t=e.delay,n=e.isRunning,o=e.closeToast,r=e.type,i=e.hide,s=e.className,c=e.style,u=e.controlledProgress,d=e.progress,p=e.rtl,m=e.isIn,v=e.theme,g=f(f({},c),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:i?0:1});u&&(g.transform="scaleX("+d+")");var h=y("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+v,"Toastify__progress-bar--"+r,{"Toastify__progress-bar--rtl":p}),b=_(s)?s({rtl:p,type:r,defaultClassName:h}):y(h,s);return a.createElement("div",l({role:"progressbar","aria-hidden":i?"true":"false","aria-label":"notification timer",className:b,style:g},u&&d>=1?"onTransitionEnd":"onAnimationEnd",u&&d<1?null:function(){m&&o()}))}z.defaultProps={type:N.DEFAULT,hide:!1};var H=function(e){var t=B(e),n=t.isRunning,o=t.preventExitTransition,r=t.toastRef,i=t.eventHandlers,s=e.closeButton,c=e.children,u=e.autoClose,l=e.onClick,d=e.type,p=e.hideProgressBar,m=e.closeToast,v=e.transition,g=e.position,h=e.className,b=e.style,T=e.bodyClassName,E=e.bodyStyle,O=e.progressClassName,C=e.progressStyle,I=e.updateId,L=e.role,w=e.progress,P=e.rtl,N=e.toastId,k=e.deleteToast,x=e.isIn,j=e.isLoading,S=e.iconOut,R=e.theme,M=y("Toastify__toast","Toastify__toast-theme--"+R,"Toastify__toast--"+d,{"Toastify__toast--rtl":P}),D=_(h)?h({rtl:P,position:g,type:d,defaultClassName:M}):y(M,h),A=!!w,H={closeToast:m,type:d,theme:R},U=null;return!1===s||(U=_(s)?s(H):a.isValidElement(s)?a.cloneElement(s,H):F(H)),a.createElement(v,{isIn:x,done:k,position:g,preventExitTransition:o,nodeRef:r},a.createElement("div",f(f({id:N,onClick:l,className:D},i),{},{style:b,ref:r}),a.createElement("div",f(f({},x&&{role:L}),{},{className:_(T)?T({type:d}):y("Toastify__toast-body",T),style:E}),null!=S&&a.createElement("div",{className:y("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!j})},S),a.createElement("div",null,c)),U,(u||A)&&a.createElement(z,f(f({},I&&!A?{key:"pb-"+I}:{}),{},{rtl:P,theme:R,delay:u,isRunning:n,isIn:x,closeToast:m,hide:p,type:d,style:C,className:O,controlledProgress:A,progress:w}))))},U=k({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),Z=(k({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),k({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),k({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,a.forwardRef)((function(e,t){var n=M(e),o=n.getToastToRender,r=n.containerRef,i=n.isToastActive,s=e.className,c=e.style,u=e.rtl,l=e.containerId;function d(e){var t=y("Toastify__toast-container","Toastify__toast-container--"+e,{"Toastify__toast-container--rtl":u});return _(s)?s({position:e,rtl:u,defaultClassName:t}):y(t,I(s))}return(0,a.useEffect)((function(){t&&(t.current=r.current)}),[]),a.createElement("div",{ref:r,className:"Toastify",id:l},o((function(e,t){var n=t.length?f({},c):f(f({},c),{},{pointerEvents:"none"});return a.createElement("div",{className:d(e),style:n,key:"container-"+e},t.map((function(e,n){var o=e.content,r=e.props;return a.createElement(H,f(f({},r),{},{isIn:i(r.toastId),style:f(f({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+r.key}),o)})))})))})));Z.displayName="ToastContainer",Z.defaultProps={position:P.TOP_RIGHT,transition:U,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:F,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var q,Q=new Map,V=[];function G(){return Math.random().toString(36).substring(2,9)}function W(e){return e&&(C(e.toastId)||E(e.toastId))?e.toastId:G()}function X(e,t){return Q.size>0?j.emit(0,e,t):V.push({content:e,options:t}),t.toastId}function Y(e,t){return f(f({},t),{},{type:t&&t.type||e,toastId:W(t)})}function K(e){return function(t,n){return X(t,Y(e,n))}}function J(e,t){return X(e,Y(N.DEFAULT,t))}J.loading=function(e,t){return X(e,Y(N.DEFAULT,f({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},J.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=C(r)?J.loading(r,n):J.loading(r.render,f(f({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,r){if(null!=t){var a=f(f(f({type:e},s),n),{},{data:r}),i=C(t)?{render:t}:t;return o?J.update(o,f(f({},a),i)):J(i.render,f(f({},a),i)),r}J.dismiss(o)},u=_(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},J.success=K(N.SUCCESS),J.info=K(N.INFO),J.error=K(N.ERROR),J.warning=K(N.WARNING),J.warn=J.warning,J.dark=function(e,t){return X(e,Y(N.DEFAULT,f({theme:"dark"},t)))},J.dismiss=function(e){return j.emit(1,e)},J.clearWaitingQueue=function(e){return void 0===e&&(e={}),j.emit(5,e)},J.isActive=function(e){var t=!1;return Q.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},J.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=Q.get(n||q);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,r=n.content,a=f(f(f({},o),t),{},{toastId:t.toastId||e,updateId:G()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,X(i,a)}}),0)},J.done=function(e){J.update(e,{progress:1})},J.onChange=function(e){return j.on(4,e),function(){j.off(4,e)}},J.POSITION=P,J.TYPE=N,j.on(2,(function(e){q=e.containerId||e,Q.set(q,e),V.forEach((function(e){j.emit(0,e.content,e.options)})),V=[]})).on(3,(function(e){Q.delete(e.containerId||e),0===Q.size&&j.off(0).off(1).off(5)}));var $=function(e){var t=e.onSubmit,n=(0,a.useState)(""),o=(0,r.Z)(n,2),i=o[0],s=o[1];return(0,c.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===i.trim())return J.info("Add name img");t(i),s("")},children:[(0,c.jsx)("input",{type:"text",autoComplete:"off",value:i,onChange:function(e){s(e.currentTarget.value.toLowerCase())},autoFocus:!0,name:"movieName",placeholder:"Search movies and photos"}),(0,c.jsx)("button",{type:"submit","aria-label":"search button",children:"Search"})]})},ee=function(){var e=(0,o.s0)();return(0,c.jsxs)("main",{children:[(0,c.jsx)($,{onSubmit:function(t){e({search:"query=".concat(t)})}}),(0,c.jsx)(u,{})]})}},171:function(e,t){var n={fetchTrending:function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=d3e8a787d9b4dc35185152e0bafc0774").then((function(e){return e.ok?e.json():Promise.reject(new Error("No Movie"))}))},fetchSearchMovies:function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US&query=".concat(e)).then((function(e){return e.ok?e.json():Promise.reject(new Error("No Movie"))}))},fetchMoviesInfo:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No Movie"))}))},fetchMoviesCredits:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No Movie"))}))},fetchMoviesReviews:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No Movie"))}))}};t.Z=n}}]);
//# sourceMappingURL=movies.7776c4e6.chunk.js.map