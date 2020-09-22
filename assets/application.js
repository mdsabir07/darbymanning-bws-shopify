!function(){"use strict";const t=(t,e=document)=>e.querySelectorAll(t),e=(t,e=document)=>e.getElementsByClassName(t),n=(t,e=document)=>e.getElementById(t),i=(Window.prototype.on=Window.prototype.addEventListener,Window.prototype.off=Window.prototype.removeEventListener,Node.prototype.on=Node.prototype.addEventListener,Node.prototype.off=Node.prototype.removeEventListener,()=>{Array.from(((t,e=document)=>e.getElementsByTagName(t))("input")).map(t=>{t.type!==t.getAttribute("type")&&t.setAttribute("type",t.type)})}),o=function(t){t.preventDefault(),"reload"===$el.dataset.history?location.reload():history[$el.dataset.history]()},a=function(t){let e=t.target,n=document.location,i=/^(a|html)$/i;for(;!i.test(e.nodeName);)e=e.parentNode;!("href"in e)||!(href=e.href).replace(n.href,"").indexOf("#")||/^[a-z\+\.\-]+:/i.test(href)&&0!==href.indexOf(n.protocol+"//"+n.host)||(t.preventDefault(),n.href=e.href)};function r(n){const r=()=>{Stickyfill&&Stickyfill.remove(t(".u-sticky")),(()=>{if("standalone"in navigator&&navigator.standalone){const t=e("js-history");Array.from(t).map(t=>{t.off("click",o)}),document.off("click",a,!1)}})()};function s(){document.documentElement.classList.remove("no-js"),document.documentElement.classList.add("js"),(1==window.navigator.standalone||window.matchMedia("(display-mode: standalone)").matches)&&document.documentElement.classList.add("standalone"),i(),Stickyfill&&(Array.from(e("u-sticky")).map(t=>Stickyfill.add(t)),Array.from(e("c-modal__close")).map(t=>Stickyfill.add(t))),(()=>{if("standalone"in navigator&&navigator.standalone){const t=e("js-history");Array.from(t).map(t=>{t.on("click",o)}),document.on("click",a,!1)}})(),window.svg4everybody&&svg4everybody()}return{destroy:r,reinit:()=>{r(),s()},init:s()}}function s(i){const o={beforeOpen:null,afterOpen:null,beforeClose:null,afterClose:null,...i},a={open:e("js-modal__open"),close:e("js-modal__close"),modal:e("c-modal")},r=function(t){t.preventDefault(),u(this.hash.substring(1))},s=function(t){t.preventDefault(),f(t.target.closest(".c-modal").id)},l=function(t){this.classList.contains("c-modal")&&t.target===this&&(t.preventDefault(),f(this.closest(".c-modal").id))},c=function(e){const n=t(".c-modal.is-active");if("Escape"==e.key&&n.length){const t=n.length-1;f(n[t].id)}},u=(t,e)=>{const i=n(t),a={detail:{id:t,modal:i}},r=new CustomEvent("modal.open:before",a),s=new CustomEvent("modal.open:after",a);"function"==typeof o.beforeOpen&&o.beforeOpen.call(this),document.dispatchEvent(r),i.classList.add("is-active"),document.body.classList.add("u-locked"),!e&&history.pushState({},"","#"+t),"function"==typeof o.afterOpen&&o.afterOpen.call(this),document.dispatchEvent(s)},f=e=>{const i={detail:{id:e}},a=new CustomEvent("modal.close:before",i),r=new CustomEvent("modal.close:after",i);"function"==typeof o.beforeClose&&o.beforeClose.call(this),document.dispatchEvent(a),1===t(".c-modal.is-active").length&&document.body.classList.remove("u-locked"),e?n(e).closest(".c-modal").classList.remove("is-active"):Array.from(t(".c-modal")).map(t=>t.classList.remove("is-active")),"function"==typeof o.afterClose&&o.afterClose.call(this),document.dispatchEvent(r)},d=()=>{f(),Array.from(a.open).map(t=>t.off("click",r)),Array.from(a.close).map(t=>t.off("click",s)),Array.from(a.modal).map(t=>t.off("click",l)),window.off("keydown",c),document.off("fetcher:after",m)},m=()=>{d(),p()};function p(){const t=location.hash.substring(1),e=n(t);e&&e.classList.contains("c-modal")&&u(t),Array.from(a.open).map(t=>t.on("click",r)),Array.from(a.close).map(t=>t.on("click",s)),Array.from(a.modal).map(t=>t.on("click",l)),window.on("keydown",c),document.on("fetcher:after",m)}return{open:u,close:f,destroy:d,reinit:m,init:p()}}function l(t){const i={animate:!0,before:null,after:null,...t},o=function(t){t.preventDefault(),a(this.hash.substring(1))},a=(t,e)=>{const o=t?((t,e=document)=>e.querySelector(t))(`[href="#${t}"]`):this,a=o.closest(".js-tabs").getElementsByClassName("js-tab"),r=n(t),s=r.closest(".js-tabs-contents").getElementsByClassName("js-tab-content"),l={detail:{tab:o,tabs:a,content:r,contents:s}},c=new CustomEvent("tab:before",l),u=new CustomEvent("tab:after",l);"function"==typeof i.before&&i.before.call(this),document.dispatchEvent(c),[...Array.from(a),...Array.from(s)].map(t=>t.classList.remove("is-active")),o.classList.add("is-active"),r.classList.add("is-active"),!e&&history.pushState({},"","#"+t),"function"==typeof i.after&&i.after.call(this),document.dispatchEvent(u)},r=()=>{const t=e("js-tab");Array.from(t).map(t=>t.off("click",o))},s=()=>{r(),l()};function l(){const t=e("js-tab");Array.from(t).map(t=>t.on("click",o)),(()=>{const t=location.hash.substring(1),e=n(t);e&&e.classList.contains("js-tab-content")&&a(t,!0)})(),document.on("fetcher:after",s)}return{goto:a,destroy:r,reinit:s,init:l()}}
/*!---------------------------------------------------------------------------*\
        Neue Kit

        - Version:      1.0.2
        - Author:       Creative Little Dots
        - Site:         http://creativelittle.uk/neuekit
        - Copyright:    2020, Creative Little Dots
        – License:      MIT | http://goo.gl/p3bexl
    \*----------------------------------------------------------------------------*/var c=window,u=c.requestAnimationFrame||c.webkitRequestAnimationFrame||c.mozRequestAnimationFrame||c.msRequestAnimationFrame||function(t){return setTimeout(t,16)},f=window,d=f.cancelAnimationFrame||f.mozCancelAnimationFrame||function(t){clearTimeout(t)};function m(){for(var t,e,n,i=arguments[0]||{},o=1,a=arguments.length;o<a;o++)if(null!==(t=arguments[o]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function p(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function v(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function h(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var y=document.documentElement;function g(t){var e="";return t.fake&&(e=y.style.overflow,t.style.background="",t.style.overflow=y.style.overflow="hidden",y.appendChild(t)),e}function b(t,e){t.fake&&(t.remove(),y.style.overflow=e,y.offsetHeight)}function x(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function w(t){return("insertRule"in t?t.cssRules:t.rules).length}function C(t,e,n){for(var i=0,o=t.length;i<o;i++)e.call(n,t[i],i)}var E="classList"in document.createElement("_"),M=E?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},T=E?function(t,e){M(t,e)||t.classList.add(e)}:function(t,e){M(t,e)||(t.className+=" "+e)},A=E?function(t,e){M(t,e)&&t.classList.remove(e)}:function(t,e){M(t,e)&&(t.className=t.className.replace(e,""))};function L(t,e){return t.hasAttribute(e)}function k(t,e){return t.getAttribute(e)}function N(t){return void 0!==t.item}function S(t,e){if(t=N(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function B(t,e){t=N(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var o=n;o--;)t[i].removeAttribute(e[o])}function O(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function D(t,e){"none"!==t.style.display&&(t.style.display="none")}function H(t,e){"none"===t.style.display&&(t.style.display="")}function R(t){return"none"!==window.getComputedStyle(t).display}function I(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}for(var i=document.createElement("fakeelement"),o=(t.length,0);o<t.length;o++){var a=t[o];if(void 0!==i.style[a])return a}return!1}function P(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var j=!1;try{var W=Object.defineProperty({},"passive",{get:function(){j=!0}});window.addEventListener("test",null,W)}catch(t){}var z=!!j&&{passive:!0};function _(t,e,n){for(var i in e){var o=["touchstart","touchmove"].indexOf(i)>=0&&!n&&z;t.addEventListener(i,e[i],o)}}function q(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&z;t.removeEventListener(n,e[n],i)}}function F(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var V=function(t){t=m({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var e=document,n=window,i={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},o={},a=t.useLocalStorage;if(a){var r=navigator.userAgent,s=new Date;try{(o=n.localStorage)?(o.setItem(s,s),a=o.getItem(s)==s,o.removeItem(s)):a=!1,a||(o={})}catch(t){a=!1}a&&(o.tnsApp&&o.tnsApp!==r&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){o.removeItem(t)})),localStorage.tnsApp=r)}var l=o.tC?p(o.tC):v(o,"tC",function(){var t=document,e=h(),n=g(e),i=t.createElement("div"),o=!1;e.appendChild(i);try{for(var a,r="(10px * 10)",s=["calc"+r,"-moz-calc"+r,"-webkit-calc"+r],l=0;l<3;l++)if(a=s[l],i.style.width=a,100===i.offsetWidth){o=a.replace(r,"");break}}catch(t){}return e.fake?b(e,n):i.remove(),o}(),a),c=o.tPL?p(o.tPL):v(o,"tPL",function(){var t,e=document,n=h(),i=g(n),o=e.createElement("div"),a=e.createElement("div"),r="";o.className="tns-t-subp2",a.className="tns-t-ct";for(var s=0;s<70;s++)r+="<div></div>";return a.innerHTML=r,o.appendChild(a),n.appendChild(o),t=Math.abs(o.getBoundingClientRect().left-a.children[67].getBoundingClientRect().left)<2,n.fake?b(n,i):o.remove(),t}(),a),f=o.tMQ?p(o.tMQ):v(o,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=h(),i=g(n),o=e.createElement("div"),a=e.createElement("style"),r="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return a.type="text/css",o.className="tns-mq-test",n.appendChild(a),n.appendChild(o),a.styleSheet?a.styleSheet.cssText=r:a.appendChild(e.createTextNode(r)),t=window.getComputedStyle?window.getComputedStyle(o).position:o.currentStyle.position,n.fake?b(n,i):o.remove(),"absolute"===t}(),a),y=o.tTf?p(o.tTf):v(o,"tTf",I("transform"),a),E=o.t3D?p(o.t3D):v(o,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=h(),o=g(i),a=n.createElement("p"),r=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return r+="transform",i.insertBefore(a,null),a.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(a).getPropertyValue(r),i.fake?b(i,o):a.remove(),void 0!==e&&e.length>0&&"none"!==e}(y),a),N=o.tTDu?p(o.tTDu):v(o,"tTDu",I("transitionDuration"),a),j=o.tTDe?p(o.tTDe):v(o,"tTDe",I("transitionDelay"),a),W=o.tADu?p(o.tADu):v(o,"tADu",I("animationDuration"),a),z=o.tADe?p(o.tADe):v(o,"tADe",I("animationDelay"),a),G=o.tTE?p(o.tTE):v(o,"tTE",P(N,"Transition"),a),Q=o.tAE?p(o.tAE):v(o,"tAE",P(W,"Animation"),a),X=n.console&&"function"==typeof n.console.warn,Y=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],$={};if(Y.forEach((function(n){if("string"==typeof t[n]){var i=t[n],o=e.querySelector(i);if($[n]=i,!o||!o.nodeName)return void(X&&console.warn("Can't find",t[n]));t[n]=o}})),!(t.container.children.length<1)){var K=t.responsive,J=t.nested,U="carousel"===t.mode;if(K){0 in K&&(t=m(t,K[0]),delete K[0]);var Z={};for(var tt in K){var et=K[tt];et="number"==typeof et?{items:et}:et,Z[tt]=et}K=Z,Z=null}if(U||function t(e){for(var n in e)U||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!U){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,ot=t.animateDelay,at=t.animateNormal}var rt,st,lt="horizontal"===t.axis,ct=e.createElement("div"),ut=e.createElement("div"),ft=t.container,dt=ft.parentNode,mt=ft.outerHTML,pt=ft.children,vt=pt.length,ht=On(),yt=!1;K&&Un(),U&&(ft.className+=" tns-vpfix");var gt,bt,xt,wt,Ct,Et,Mt,Tt,At,Lt=t.autoWidth,kt=In("fixedWidth"),Nt=In("edgePadding"),St=In("gutter"),Bt=Hn(),Ot=In("center"),Dt=Lt?1:Math.floor(In("items")),Ht=In("slideBy"),Rt=t.viewportMax||t.fixedWidthViewportWidth,It=In("arrowKeys"),Pt=In("speed"),jt=t.rewind,Wt=!jt&&t.loop,zt=In("autoHeight"),_t=In("controls"),qt=In("controlsText"),Ft=In("nav"),Vt=In("touch"),Gt=In("mouseDrag"),Qt=In("autoplay"),Xt=In("autoplayTimeout"),Yt=In("autoplayText"),$t=In("autoplayHoverPause"),Kt=In("autoplayResetOnVisibility"),Jt=(Mt=null,Tt=In("nonce"),At=document.createElement("style"),Mt&&At.setAttribute("media",Mt),Tt&&At.setAttribute("nonce",Tt),document.querySelector("head").appendChild(At),At.sheet?At.sheet:At.styleSheet),Ut=t.lazyload,Zt=t.lazyloadSelector,te=[],ee=Wt?(Ct=function(){if(Lt||kt&&!Rt)return vt-1;var e=kt?"fixedWidth":"items",n=[];if((kt||t[e]<vt)&&n.push(t[e]),K)for(var i in K){var o=K[i][e];o&&(kt||o<vt)&&n.push(o)}return n.length||n.push(0),Math.ceil(kt?Rt/Math.min.apply(null,n):Math.max.apply(null,n))}(),Et=U?Math.ceil((5*Ct-vt)/2):4*Ct-vt,Et=Math.max(Ct,Et),Rn("edgePadding")?Et+1:Et):0,ne=U?vt+2*ee:vt+ee,ie=!(!kt&&!Lt||Wt),oe=kt?Mi():null,ae=!U||!Wt,re=lt?"left":"top",se="",le="",ce=kt?function(){return Ot&&!Wt?vt-1:Math.ceil(-oe/(kt+St))}:Lt?function(){for(var t=0;t<ne;t++)if(gt[t]>=-oe)return t}:function(){return Ot&&U&&!Wt?vt-1:Wt||U?Math.max(0,ne-Math.ceil(Dt)):ne-1},ue=Nn(In("startIndex")),fe=ue,de=(kn(),0),me=Lt?null:ce(),pe=t.preventActionWhenRunning,ve=t.swipeAngle,he=!ve||"?",ye=!1,ge=t.onInit,be=new F,xe=" tns-slider tns-"+t.mode,we=ft.id||(wt=window.tnsId,window.tnsId=wt?wt+1:1,"tns"+window.tnsId),Ce=In("disable"),Ee=!1,Me=t.freezable,Te=!(!Me||Lt)&&Jn(),Ae=!1,Le={click:Di,keydown:function(t){t=_i(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Ye.disabled||Di(t,-1):$e.disabled||Di(t,1))}},ke={click:function(t){if(ye){if(pe)return;Bi()}var e=qi(t=_i(t));for(;e!==Ze&&!L(e,"data-nav");)e=e.parentNode;if(L(e,"data-nav")){var n=on=Number(k(e,"data-nav")),i=kt||Lt?n*vt/en:n*Dt;Oi(Ie?n:Math.min(Math.ceil(i),vt-1),t),an===n&&(fn&&ji(),on=-1)}},keydown:function(t){t=_i(t);var n=e.activeElement;if(!L(n,"data-nav"))return;var o=[i.LEFT,i.RIGHT,i.ENTER,i.SPACE].indexOf(t.keyCode),a=Number(k(n,"data-nav"));o>=0&&(0===o?a>0&&zi(Ue[a-1]):1===o?a<en-1&&zi(Ue[a+1]):(on=a,Oi(a,t)))}},Ne={mouseover:function(){fn&&(Ri(),dn=!0)},mouseout:function(){dn&&(Hi(),dn=!1)}},Se={visibilitychange:function(){e.hidden?fn&&(Ri(),pn=!0):pn&&(Hi(),pn=!1)}},Be={keydown:function(t){t=_i(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&Di(t,0===e?-1:1)}},Oe={touchstart:Qi,touchmove:Xi,touchend:Yi,touchcancel:Yi},De={mousedown:Qi,mousemove:Xi,mouseup:Yi,mouseleave:Yi},He=Rn("controls"),Re=Rn("nav"),Ie=!!Lt||t.navAsThumbnails,Pe=Rn("autoplay"),je=Rn("touch"),We=Rn("mouseDrag"),ze="tns-slide-active",_e="tns-complete",qe={load:function(t){si(qi(t))},error:function(t){e=qi(t),T(e,"failed"),li(e);var e}},Fe="force"===t.preventScrollOnTouch;if(He)var Ve,Ge,Qe=t.controlsContainer,Xe=t.controlsContainer?t.controlsContainer.outerHTML:"",Ye=t.prevButton,$e=t.nextButton,Ke=t.prevButton?t.prevButton.outerHTML:"",Je=t.nextButton?t.nextButton.outerHTML:"";if(Re)var Ue,Ze=t.navContainer,tn=t.navContainer?t.navContainer.outerHTML:"",en=Lt?vt:Ki(),nn=0,on=-1,an=Bn(),rn=an,sn="tns-nav-active",ln="Carousel Page ",cn=" (Current Slide)";if(Pe)var un,fn,dn,mn,pn,vn="forward"===t.autoplayDirection?1:-1,hn=t.autoplayButton,yn=t.autoplayButton?t.autoplayButton.outerHTML:"",gn=["<span class='tns-visually-hidden'>"," animation</span>"];if(je||We)var bn,xn,wn={},Cn={},En=!1,Mn=lt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Lt||Ln(Ce||Te),y&&(re=y,se="translate",E?(se+=lt?"3d(":"3d(0px, ",le=lt?", 0px, 0px)":", 0px)"):(se+=lt?"X(":"Y(",le=")")),U&&(ft.className=ft.className.replace("tns-vpfix","")),function(){Rn("gutter");ct.className="tns-outer",ut.className="tns-inner",ct.id=we+"-ow",ut.id=we+"-iw",""===ft.id&&(ft.id=we);xe+=c||Lt?" tns-subpixel":" tns-no-subpixel",xe+=l?" tns-calc":" tns-no-calc",Lt&&(xe+=" tns-autowidth");xe+=" tns-"+t.axis,ft.className+=xe,U?((rt=e.createElement("div")).id=we+"-mw",rt.className="tns-ovh",ct.appendChild(rt),rt.appendChild(ut)):ct.appendChild(ut);if(zt){(rt||ut).className+=" tns-ah"}if(dt.insertBefore(ct,ft),ut.appendChild(ft),C(pt,(function(t,e){T(t,"tns-item"),t.id||(t.id=we+"-item"+e),!U&&at&&T(t,at),S(t,{"aria-hidden":"true",tabindex:"-1"})})),ee){for(var n=e.createDocumentFragment(),i=e.createDocumentFragment(),o=ee;o--;){var a=o%vt,r=pt[a].cloneNode(!0);if(T(r,"tns-slide-cloned"),B(r,"id"),i.insertBefore(r,i.firstChild),U){var s=pt[vt-1-a].cloneNode(!0);T(s,"tns-slide-cloned"),B(s,"id"),n.appendChild(s)}}ft.insertBefore(n,ft.firstChild),ft.appendChild(i),pt=ft.children}}(),function(){if(!U)for(var e=ue,i=ue+Math.min(vt,Dt);e<i;e++){var o=pt[e];o.style.left=100*(e-ue)/Dt+"%",T(o,nt),A(o,at)}lt&&(c||Lt?(x(Jt,"#"+we+" > .tns-item","font-size:"+n.getComputedStyle(pt[0]).fontSize+";",w(Jt)),x(Jt,"#"+we,"font-size:0;",w(Jt))):U&&C(pt,(function(t,e){t.style.marginLeft=function(t){return l?l+"("+100*t+"% / "+ne+")":100*t/ne+"%"}(e)})));if(f){if(N){var a=rt&&t.autoHeight?qn(t.speed):"";x(Jt,"#"+we+"-mw",a,w(Jt))}a=Pn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),x(Jt,"#"+we+"-iw",a,w(Jt)),U&&(a=lt&&!Lt?"width:"+jn(t.fixedWidth,t.gutter,t.items)+";":"",N&&(a+=qn(Pt)),x(Jt,"#"+we,a,w(Jt))),a=lt&&!Lt?Wn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(a+=zn(t.gutter)),U||(N&&(a+=qn(Pt)),W&&(a+=Fn(Pt))),a&&x(Jt,"#"+we+" > .tns-item",a,w(Jt))}else{U&&zt&&(rt.style[N]=Pt/1e3+"s"),ut.style.cssText=Pn(Nt,St,kt,zt),U&&lt&&!Lt&&(ft.style.width=jn(kt,St,Dt));a=lt&&!Lt?Wn(kt,St,Dt):"";St&&(a+=zn(St)),a&&x(Jt,"#"+we+" > .tns-item",a,w(Jt))}if(K&&f)for(var r in K){r=parseInt(r);var s=K[r],u=(a="",""),d="",m="",p="",v=Lt?null:In("items",r),h=In("fixedWidth",r),y=In("speed",r),g=In("edgePadding",r),b=In("autoHeight",r),E=In("gutter",r);N&&rt&&In("autoHeight",r)&&"speed"in s&&(u="#"+we+"-mw{"+qn(y)+"}"),("edgePadding"in s||"gutter"in s)&&(d="#"+we+"-iw{"+Pn(g,E,h,y,b)+"}"),U&&lt&&!Lt&&("fixedWidth"in s||"items"in s||kt&&"gutter"in s)&&(m="width:"+jn(h,E,v)+";"),N&&"speed"in s&&(m+=qn(y)),m&&(m="#"+we+"{"+m+"}"),("fixedWidth"in s||kt&&"gutter"in s||!U&&"items"in s)&&(p+=Wn(h,E,v)),"gutter"in s&&(p+=zn(E)),!U&&"speed"in s&&(N&&(p+=qn(y)),W&&(p+=Fn(y))),p&&(p="#"+we+" > .tns-item{"+p+"}"),(a=u+d+m+p)&&Jt.insertRule("@media (min-width: "+r/16+"em) {"+a+"}",Jt.cssRules.length)}}(),Vn();var Tn=Wt?U?function(){var t=de,e=me;t+=Ht,e-=Ht,Nt?(t+=1,e-=1):kt&&(Bt+St)%(kt+St)&&(e-=1),ee&&(ue>e?ue-=vt:ue<t&&(ue+=vt))}:function(){if(ue>me)for(;ue>=de+vt;)ue-=vt;else if(ue<de)for(;ue<=me-vt;)ue+=vt}:function(){ue=Math.max(de,Math.min(me,ue))},An=U?function(){var t,e,n,i,o,a,r,s,l,c,u;Ci(ft,""),N||!Pt?(Li(),Pt&&R(ft)||Bi()):(t=ft,e=re,n=se,i=le,o=Ti(),a=Pt,r=Bi,s=Math.min(a,10),l=o.indexOf("%")>=0?"%":"px",o=o.replace(l,""),c=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),u=(o-c)/a*s,setTimeout((function o(){a-=s,c+=u,t.style[e]=n+c+l+i,a>0?setTimeout(o,s):r()}),s)),lt||$i()}:function(){te=[];var t={};t[G]=t[Q]=Bi,q(pt[fe],t),_(pt[ue],t),ki(fe,nt,it,!0),ki(ue,at,nt),G&&Q&&Pt&&R(ft)||Bi()};return{version:"2.9.3",getInfo:Ui,events:be,goTo:Oi,play:function(){Qt&&!fn&&(Pi(),mn=!1)},pause:function(){fn&&(ji(),mn=!0)},isOn:yt,updateSliderHeight:pi,refresh:Vn,destroy:function(){if(Jt.disabled=!0,Jt.ownerNode&&Jt.ownerNode.remove(),q(n,{resize:$n}),It&&q(e,Be),Qe&&q(Qe,Le),Ze&&q(Ze,ke),q(ft,Ne),q(ft,Se),hn&&q(hn,{click:Wi}),Qt&&clearInterval(un),U&&G){var i={};i[G]=Bi,q(ft,i)}Vt&&q(ft,Oe),Gt&&q(ft,De);var o=[mt,Xe,Ke,Je,tn,yn];for(var a in Y.forEach((function(e,n){var i="container"===e?ct:t[e];if("object"==typeof i&&i){var a=!!i.previousElementSibling&&i.previousElementSibling,r=i.parentNode;i.outerHTML=o[n],t[e]=a?a.nextElementSibling:r.firstElementChild}})),Y=nt=it=ot=at=lt=ct=ut=ft=dt=mt=pt=vt=st=ht=Lt=kt=Nt=St=Bt=Dt=Ht=Rt=It=Pt=jt=Wt=zt=Jt=Ut=gt=te=ee=ne=ie=oe=ae=re=se=le=ce=ue=fe=de=me=ve=he=ye=ge=be=xe=we=Ce=Ee=Me=Te=Ae=Le=ke=Ne=Se=Be=Oe=De=He=Re=Ie=Pe=je=We=ze=_e=qe=bt=_t=qt=Qe=Xe=Ye=$e=Ve=Ge=Ft=Ze=tn=Ue=en=nn=on=an=rn=sn=ln=cn=Qt=Xt=vn=Yt=$t=hn=yn=Kt=gn=un=fn=dn=mn=pn=wn=Cn=bn=En=xn=Mn=Vt=Gt=null,this)"rebuild"!==a&&(this[a]=null);yt=!1},rebuild:function(){return V(m(t,$))}}}function Ln(t){t&&(_t=Ft=Vt=Gt=It=Qt=$t=Kt=!1)}function kn(){for(var t=U?ue-ee:ue;t<0;)t+=vt;return t%vt+1}function Nn(t){return t=t?Math.max(0,Math.min(Wt?vt-1:vt-Dt,t)):0,U?t+ee:t}function Sn(t){for(null==t&&(t=ue),U&&(t-=ee);t<0;)t+=vt;return Math.floor(t%vt)}function Bn(){var t,e=Sn();return t=Ie?e:kt||Lt?Math.ceil((e+1)*en/vt-1):Math.floor(e/Dt),!Wt&&U&&ue===me&&(t=en-1),t}function On(){return n.innerWidth||e.documentElement.clientWidth||e.body.clientWidth}function Dn(t){return"top"===t?"afterbegin":"beforeend"}function Hn(){var t=Nt?2*Nt-St:0;return function t(n){if(null!=n){var i,o,a=e.createElement("div");return n.appendChild(a),o=(i=a.getBoundingClientRect()).right-i.left,a.remove(),o||t(n.parentNode)}}(dt)-t}function Rn(e){if(t[e])return!0;if(K)for(var n in K)if(K[n][e])return!0;return!1}function In(e,n){if(null==n&&(n=ht),"items"===e&&kt)return Math.floor((Bt+St)/(kt+St))||1;var i=t[e];if(K)for(var o in K)n>=parseInt(o)&&e in K[o]&&(i=K[o][e]);return"slideBy"===e&&"page"===i&&(i=In("items")),U||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function Pn(t,e,n,i,o){var a="";if(void 0!==t){var r=t;e&&(r-=e),a=lt?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var s="-"+e+"px";a="margin: 0 "+(lt?s+" 0 0":"0 "+s+" 0")+";"}return!U&&o&&N&&i&&(a+=qn(i)),a}function jn(t,e,n){return t?(t+e)*ne+"px":l?l+"("+100*ne+"% / "+n+")":100*ne/n+"%"}function Wn(t,e,n){var i;if(t)i=t+e+"px";else{U||(n=Math.floor(n));var o=U?ne:n;i=l?l+"(100% / "+o+")":100/o+"%"}return i="width:"+i,"inner"!==J?i+";":i+" !important;"}function zn(t){var e="";!1!==t&&(e=(lt?"padding-":"margin-")+(lt?"right":"bottom")+": "+t+"px;");return e}function _n(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function qn(t){return _n(N,18)+"transition-duration:"+t/1e3+"s;"}function Fn(t){return _n(W,17)+"animation-duration:"+t/1e3+"s;"}function Vn(){if(Rn("autoHeight")||Lt||!lt){var t=ft.querySelectorAll("img");C(t,(function(t){var e=t.src;Ut||(e&&e.indexOf("data:image")<0?(t.src="",_(t,qe),T(t,"loading"),t.src=e):si(t))})),u((function(){fi(O(t),(function(){bt=!0}))})),Rn("autoHeight")&&(t=ci(ue,Math.min(ue+Dt-1,ne-1))),Ut?Gn():u((function(){fi(O(t),Gn)}))}else U&&Ai(),Xn(),Yn()}function Gn(){if(Lt&&vt>1){var t=Wt?ue:vt-1;!function e(){var n=pt[t].getBoundingClientRect().left,i=pt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Qn():setTimeout((function(){e()}),16)}()}else Qn()}function Qn(){lt&&!Lt||(vi(),Lt?(oe=Mi(),Me&&(Te=Jn()),me=ce(),Ln(Ce||Te)):$i()),U&&Ai(),Xn(),Yn()}function Xn(){if(hi(),ct.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+oi()+"</span>  of "+vt+"</div>"),xt=ct.querySelector(".tns-liveregion .current"),Pe){var e=Qt?"stop":"start";hn?S(hn,{"data-action":e}):t.autoplayButtonOutput&&(ct.insertAdjacentHTML(Dn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+gn[0]+e+gn[1]+Yt[0]+"</button>"),hn=ct.querySelector("[data-action]")),hn&&_(hn,{click:Wi}),Qt&&(Pi(),$t&&_(ft,Ne),Kt&&_(ft,Se))}if(Re){if(Ze)S(Ze,{"aria-label":"Carousel Pagination"}),C(Ue=Ze.children,(function(t,e){S(t,{"data-nav":e,tabindex:"-1","aria-label":ln+(e+1),"aria-controls":we})}));else{for(var n="",i=Ie?"":'style="display:none"',o=0;o<vt;o++)n+='<button type="button" data-nav="'+o+'" tabindex="-1" aria-controls="'+we+'" '+i+' aria-label="'+ln+(o+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",ct.insertAdjacentHTML(Dn(t.navPosition),n),Ze=ct.querySelector(".tns-nav"),Ue=Ze.children}if(Ji(),N){var a=N.substring(0,N.length-18).toLowerCase(),r="transition: all "+Pt/1e3+"s";a&&(r="-"+a+"-"+r),x(Jt,"[aria-controls^="+we+"-item]",r,w(Jt))}S(Ue[an],{"aria-label":ln+(an+1)+cn}),B(Ue[an],"tabindex"),T(Ue[an],sn),_(Ze,ke)}He&&(Qe||Ye&&$e||(ct.insertAdjacentHTML(Dn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+we+'">'+qt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+we+'">'+qt[1]+"</button></div>"),Qe=ct.querySelector(".tns-controls")),Ye&&$e||(Ye=Qe.children[0],$e=Qe.children[1]),t.controlsContainer&&S(Qe,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&S([Ye,$e],{"aria-controls":we,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(S(Ye,{"data-controls":"prev"}),S($e,{"data-controls":"next"})),Ve=gi(Ye),Ge=gi($e),wi(),Qe?_(Qe,Le):(_(Ye,Le),_($e,Le))),Zn()}function Yn(){if(U&&G){var i={};i[G]=Bi,_(ft,i)}Vt&&_(ft,Oe,t.preventScrollOnTouch),Gt&&_(ft,De),It&&_(e,Be),"inner"===J?be.on("outerResized",(function(){Kn(),be.emit("innerLoaded",Ui())})):(K||kt||Lt||zt||!lt)&&_(n,{resize:$n}),zt&&("outer"===J?be.on("innerLoaded",ui):Ce||ui()),ri(),Ce?ni():Te&&ei(),be.on("indexChanged",di),"inner"===J&&be.emit("innerLoaded",Ui()),"function"==typeof ge&&ge(Ui()),yt=!0}function $n(t){u((function(){Kn(_i(t))}))}function Kn(n){if(yt){"outer"===J&&be.emit("outerResized",Ui(n)),ht=On();var i,o=st,a=!1;K&&(Un(),(i=o!==st)&&be.emit("newBreakpointStart",Ui(n)));var r,s,l=Dt,c=Ce,u=Te,d=It,m=_t,p=Ft,v=Vt,h=Gt,y=Qt,g=$t,b=Kt,E=ue;if(i){var M=kt,L=zt,k=qt,N=Ot,S=Yt;if(!f)var B=St,O=Nt}if(It=In("arrowKeys"),_t=In("controls"),Ft=In("nav"),Vt=In("touch"),Ot=In("center"),Gt=In("mouseDrag"),Qt=In("autoplay"),$t=In("autoplayHoverPause"),Kt=In("autoplayResetOnVisibility"),i&&(Ce=In("disable"),kt=In("fixedWidth"),Pt=In("speed"),zt=In("autoHeight"),qt=In("controlsText"),Yt=In("autoplayText"),Xt=In("autoplayTimeout"),f||(Nt=In("edgePadding"),St=In("gutter"))),Ln(Ce),Bt=Hn(),lt&&!Lt||Ce||(vi(),lt||($i(),a=!0)),(kt||Lt)&&(oe=Mi(),me=ce()),(i||kt)&&(Dt=In("items"),Ht=In("slideBy"),(s=Dt!==l)&&(kt||Lt||(me=ce()),Tn())),i&&Ce!==c&&(Ce?ni():function(){if(!Ee)return;if(Jt.disabled=!1,ft.className+=xe,Ai(),Wt)for(var t=ee;t--;)U&&H(pt[t]),H(pt[ne-t-1]);if(!U)for(var e=ue,n=ue+vt;e<n;e++){var i=pt[e],o=e<ue+Dt?nt:at;i.style.left=100*(e-ue)/Dt+"%",T(i,o)}ti(),Ee=!1}()),Me&&(i||kt||Lt)&&(Te=Jn())!==u&&(Te?(Li(Ti(Nn(0))),ei()):(!function(){if(!Ae)return;Nt&&f&&(ut.style.margin="");if(ee)for(var t="tns-transparent",e=ee;e--;)U&&A(pt[e],t),A(pt[ne-e-1],t);ti(),Ae=!1}(),a=!0)),Ln(Ce||Te),Qt||($t=Kt=!1),It!==d&&(It?_(e,Be):q(e,Be)),_t!==m&&(_t?Qe?H(Qe):(Ye&&H(Ye),$e&&H($e)):Qe?D(Qe):(Ye&&D(Ye),$e&&D($e))),Ft!==p&&(Ft?(H(Ze),Ji()):D(Ze)),Vt!==v&&(Vt?_(ft,Oe,t.preventScrollOnTouch):q(ft,Oe)),Gt!==h&&(Gt?_(ft,De):q(ft,De)),Qt!==y&&(Qt?(hn&&H(hn),fn||mn||Pi()):(hn&&D(hn),fn&&ji())),$t!==g&&($t?_(ft,Ne):q(ft,Ne)),Kt!==b&&(Kt?_(e,Se):q(e,Se)),i){if(kt===M&&Ot===N||(a=!0),zt!==L&&(zt||(ut.style.height="")),_t&&qt!==k&&(Ye.innerHTML=qt[0],$e.innerHTML=qt[1]),hn&&Yt!==S){var R=Qt?1:0,I=hn.innerHTML,P=I.length-S[R].length;I.substring(P)===S[R]&&(hn.innerHTML=I.substring(0,P)+Yt[R])}}else Ot&&(kt||Lt)&&(a=!0);if((s||kt&&!Lt)&&(en=Ki(),Ji()),(r=ue!==E)?(be.emit("indexChanged",Ui()),a=!0):s?r||di():(kt||Lt)&&(ri(),hi(),ii()),s&&!U&&function(){for(var t=ue+Math.min(vt,Dt),e=ne;e--;){var n=pt[e];e>=ue&&e<t?(T(n,"tns-moving"),n.style.left=100*(e-ue)/Dt+"%",T(n,nt),A(n,at)):n.style.left&&(n.style.left="",T(n,at),A(n,nt)),A(n,it)}setTimeout((function(){C(pt,(function(t){A(t,"tns-moving")}))}),300)}(),!Ce&&!Te){if(i&&!f&&(Nt===O&&St===B||(ut.style.cssText=Pn(Nt,St,kt,Pt,zt)),lt)){U&&(ft.style.width=jn(kt,St,Dt));var j=Wn(kt,St,Dt)+zn(St);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Jt,w(Jt)-1),x(Jt,"#"+we+" > .tns-item",j,w(Jt))}zt&&ui(),a&&(Ai(),fe=ue)}i&&be.emit("newBreakpointEnd",Ui(n))}}function Jn(){if(!kt&&!Lt)return vt<=(Ot?Dt-(Dt-1)/2:Dt);var t=kt?(kt+St)*vt:gt[vt],e=Nt?Bt+2*Nt:Bt+St;return Ot&&(e-=kt?(Bt-kt)/2:(Bt-(gt[ue+1]-gt[ue]-St))/2),t<=e}function Un(){for(var t in st=0,K)t=parseInt(t),ht>=t&&(st=t)}function Zn(){!Qt&&hn&&D(hn),!Ft&&Ze&&D(Ze),_t||(Qe?D(Qe):(Ye&&D(Ye),$e&&D($e)))}function ti(){Qt&&hn&&H(hn),Ft&&Ze&&H(Ze),_t&&(Qe?H(Qe):(Ye&&H(Ye),$e&&H($e)))}function ei(){if(!Ae){if(Nt&&(ut.style.margin="0px"),ee)for(var t="tns-transparent",e=ee;e--;)U&&T(pt[e],t),T(pt[ne-e-1],t);Zn(),Ae=!0}}function ni(){if(!Ee){if(Jt.disabled=!0,ft.className=ft.className.replace(xe.substring(1),""),B(ft,["style"]),Wt)for(var t=ee;t--;)U&&D(pt[t]),D(pt[ne-t-1]);if(lt&&U||B(ut,["style"]),!U)for(var e=ue,n=ue+vt;e<n;e++){var i=pt[e];B(i,["style"]),A(i,nt),A(i,at)}Zn(),Ee=!0}}function ii(){var t=oi();xt.innerHTML!==t&&(xt.innerHTML=t)}function oi(){var t=ai(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function ai(t){null==t&&(t=Ti());var e,n,i,o=ue;if(Ot||Nt?(Lt||kt)&&(n=-(parseFloat(t)+Nt),i=n+Bt+2*Nt):Lt&&(n=gt[ue],i=n+Bt),Lt)gt.forEach((function(t,a){a<ne&&((Ot||Nt)&&t<=n+.5&&(o=a),i-t>=.5&&(e=a))}));else{if(kt){var a=kt+St;Ot||Nt?(o=Math.floor(n/a),e=Math.ceil(i/a-1)):e=o+Math.ceil(Bt/a)-1}else if(Ot||Nt){var r=Dt-1;if(Ot?(o-=r/2,e=ue+r/2):e=ue+r,Nt){var s=Nt*Dt/Bt;o-=s,e+=s}o=Math.floor(o),e=Math.ceil(e)}else e=o+Dt-1;o=Math.max(o,0),e=Math.min(e,ne-1)}return[o,e]}function ri(){if(Ut&&!Ce){var t=ai();t.push(Zt),ci.apply(null,t).forEach((function(t){if(!M(t,_e)){var e={};e[G]=function(t){t.stopPropagation()},_(t,e),_(t,qe),t.src=k(t,"data-src");var n=k(t,"data-srcset");n&&(t.srcset=n),T(t,"loading")}}))}}function si(t){T(t,"loaded"),li(t)}function li(t){T(t,_e),A(t,"loading"),q(t,qe)}function ci(t,e,n){var i=[];for(n||(n="img");t<=e;)C(pt[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function ui(){var t=ci.apply(null,ai());u((function(){fi(t,pi)}))}function fi(t,e){return bt?e():(t.forEach((function(e,n){!Ut&&e.complete&&li(e),M(e,_e)&&t.splice(n,1)})),t.length?void u((function(){fi(t,e)})):e())}function di(){ri(),hi(),ii(),wi(),function(){if(Ft&&(an=on>=0?on:Bn(),on=-1,an!==rn)){var t=Ue[rn],e=Ue[an];S(t,{tabindex:"-1","aria-label":ln+(rn+1)}),A(t,sn),S(e,{"aria-label":ln+(an+1)+cn}),B(e,"tabindex"),T(e,sn),rn=an}}()}function mi(t,e){for(var n=[],i=t,o=Math.min(t+e,ne);i<o;i++)n.push(pt[i].offsetHeight);return Math.max.apply(null,n)}function pi(){var t=zt?mi(ue,Dt):mi(ee,vt),e=rt||ut;e.style.height!==t&&(e.style.height=t+"px")}function vi(){gt=[0];var t=lt?"left":"top",e=lt?"right":"bottom",n=pt[0].getBoundingClientRect()[t];C(pt,(function(i,o){o&&gt.push(i.getBoundingClientRect()[t]-n),o===ne-1&&gt.push(i.getBoundingClientRect()[e]-n)}))}function hi(){var t=ai(),e=t[0],n=t[1];C(pt,(function(t,i){i>=e&&i<=n?L(t,"aria-hidden")&&(B(t,["aria-hidden","tabindex"]),T(t,ze)):L(t,"aria-hidden")||(S(t,{"aria-hidden":"true",tabindex:"-1"}),A(t,ze))}))}function yi(t){return t.nodeName.toLowerCase()}function gi(t){return"button"===yi(t)}function bi(t){return"true"===t.getAttribute("aria-disabled")}function xi(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function wi(){if(_t&&!jt&&!Wt){var t=Ve?Ye.disabled:bi(Ye),e=Ge?$e.disabled:bi($e),n=ue<=de,i=!jt&&ue>=me;n&&!t&&xi(Ve,Ye,!0),!n&&t&&xi(Ve,Ye,!1),i&&!e&&xi(Ge,$e,!0),!i&&e&&xi(Ge,$e,!1)}}function Ci(t,e){N&&(t.style[N]=e)}function Ei(t){return null==t&&(t=ue),Lt?(Bt-(Nt?St:0)-(gt[t+1]-gt[t]-St))/2:kt?(Bt-kt)/2:(Dt-1)/2}function Mi(){var t=Bt+(Nt?St:0)-(kt?(kt+St)*ne:gt[ne]);return Ot&&!Wt&&(t=kt?-(kt+St)*(ne-1)-Ei():Ei(ne-1)-gt[ne-1]),t>0&&(t=0),t}function Ti(t){var e;if(null==t&&(t=ue),lt&&!Lt)if(kt)e=-(kt+St)*t,Ot&&(e+=Ei());else{var n=y?ne:Dt;Ot&&(t-=Ei()),e=100*-t/n}else e=-gt[t],Ot&&Lt&&(e+=Ei());return ie&&(e=Math.max(e,oe)),e+=!lt||Lt||kt?"px":"%"}function Ai(t){Ci(ft,"0s"),Li(t)}function Li(t){null==t&&(t=Ti()),ft.style[re]=se+t+le}function ki(t,e,n,i){var o=t+Dt;Wt||(o=Math.min(o,ne));for(var a=t;a<o;a++){var r=pt[a];i||(r.style.left=100*(a-ue)/Dt+"%"),ot&&j&&(r.style[j]=r.style[z]=ot*(a-t)/1e3+"s"),A(r,e),T(r,n),i&&te.push(r)}}function Ni(t,e){ae&&Tn(),(ue!==fe||e)&&(be.emit("indexChanged",Ui()),be.emit("transitionStart",Ui()),zt&&ui(),fn&&t&&["click","keydown"].indexOf(t.type)>=0&&ji(),ye=!0,An())}function Si(t){return t.toLowerCase().replace(/-/g,"")}function Bi(t){if(U||ye){if(be.emit("transitionEnd",Ui(t)),!U&&te.length>0)for(var e=0;e<te.length;e++){var n=te[e];n.style.left="",z&&j&&(n.style[z]="",n.style[j]=""),A(n,it),T(n,at)}if(!t||!U&&t.target.parentNode===ft||t.target===ft&&Si(t.propertyName)===Si(re)){if(!ae){var i=ue;Tn(),ue!==i&&(be.emit("indexChanged",Ui()),Ai())}"inner"===J&&be.emit("innerLoaded",Ui()),ye=!1,fe=ue}}}function Oi(t,e){if(!Te)if("prev"===t)Di(e,-1);else if("next"===t)Di(e,1);else{if(ye){if(pe)return;Bi()}var n=Sn(),i=0;if("first"===t?i=-n:"last"===t?i=U?vt-Dt-n:vt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(vt-1,t))),i=t-n)),!U&&i&&Math.abs(i)<Dt){var o=i>0?1:-1;i+=ue+i-vt>=de?vt*o:2*vt*o*-1}ue+=i,U&&Wt&&(ue<de&&(ue+=vt),ue>me&&(ue-=vt)),Sn(ue)!==Sn(fe)&&Ni(e)}}function Di(t,e){if(ye){if(pe)return;Bi()}var n;if(!e){for(var i=qi(t=_i(t));i!==Qe&&[Ye,$e].indexOf(i)<0;)i=i.parentNode;var o=[Ye,$e].indexOf(i);o>=0&&(n=!0,e=0===o?-1:1)}if(jt){if(ue===de&&-1===e)return void Oi("last",t);if(ue===me&&1===e)return void Oi("first",t)}e&&(ue+=Ht*e,Lt&&(ue=Math.floor(ue)),Ni(n||t&&"keydown"===t.type?t:null))}function Hi(){un=setInterval((function(){Di(null,vn)}),Xt),fn=!0}function Ri(){clearInterval(un),fn=!1}function Ii(t,e){S(hn,{"data-action":t}),hn.innerHTML=gn[0]+t+gn[1]+e}function Pi(){Hi(),hn&&Ii("stop",Yt[1])}function ji(){Ri(),hn&&Ii("start",Yt[0])}function Wi(){fn?(ji(),mn=!0):(Pi(),mn=!1)}function zi(t){t.focus()}function _i(t){return Fi(t=t||n.event)?t.changedTouches[0]:t}function qi(t){return t.target||n.event.srcElement}function Fi(t){return t.type.indexOf("touch")>=0}function Vi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Gi(){return a=Cn.y-wn.y,r=Cn.x-wn.x,e=Math.atan2(a,r)*(180/Math.PI),n=ve,i=!1,(o=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":o<=n&&(i="vertical"),i===t.axis;var e,n,i,o,a,r}function Qi(t){if(ye){if(pe)return;Bi()}Qt&&fn&&Ri(),En=!0,xn&&(d(xn),xn=null);var e=_i(t);be.emit(Fi(t)?"touchStart":"dragStart",Ui(t)),!Fi(t)&&["img","a"].indexOf(yi(qi(t)))>=0&&Vi(t),Cn.x=wn.x=e.clientX,Cn.y=wn.y=e.clientY,U&&(bn=parseFloat(ft.style[re].replace(se,"")),Ci(ft,"0s"))}function Xi(t){if(En){var e=_i(t);Cn.x=e.clientX,Cn.y=e.clientY,U?xn||(xn=u((function(){!function t(e){if(!he)return void(En=!1);d(xn),En&&(xn=u((function(){t(e)})));"?"===he&&(he=Gi());if(he){!Fe&&Fi(e)&&(Fe=!0);try{e.type&&be.emit(Fi(e)?"touchMove":"dragMove",Ui(e))}catch(t){}var n=bn,i=Mn(Cn,wn);if(!lt||kt||Lt)n+=i,n+="px";else n+=y?i*Dt*100/((Bt+St)*ne):100*i/(Bt+St),n+="%";ft.style[re]=se+n+le}}(t)}))):("?"===he&&(he=Gi()),he&&(Fe=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Fe&&t.preventDefault()}}function Yi(e){if(En){xn&&(d(xn),xn=null),U&&Ci(ft,""),En=!1;var n=_i(e);Cn.x=n.clientX,Cn.y=n.clientY;var i=Mn(Cn,wn);if(Math.abs(i)){if(!Fi(e)){var o=qi(e);_(o,{click:function t(e){Vi(e),q(o,{click:t})}})}U?xn=u((function(){if(lt&&!Lt){var t=-i*Dt/(Bt+St);t=i>0?Math.floor(t):Math.ceil(t),ue+=t}else{var n=-(bn+i);if(n<=0)ue=de;else if(n>=gt[ne-1])ue=me;else for(var o=0;o<ne&&n>=gt[o];)ue=o,n>gt[o]&&i<0&&(ue+=1),o++}Ni(e,i),be.emit(Fi(e)?"touchEnd":"dragEnd",Ui(e))})):he&&Di(e,i>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(Fe=!1),ve&&(he="?"),Qt&&!fn&&Hi()}function $i(){(rt||ut).style.height=gt[ue+Dt]-gt[ue]+"px"}function Ki(){var t=kt?(kt+St)*vt/Bt:vt/Dt;return Math.min(Math.ceil(t),vt)}function Ji(){if(Ft&&!Ie&&en!==nn){var t=nn,e=en,n=H;for(nn>en&&(t=en,e=nn,n=D);t<e;)n(Ue[t]),t++;nn=en}}function Ui(t){return{container:ft,slideItems:pt,navContainer:Ze,navItems:Ue,controlsContainer:Qe,hasControls:He,prevButton:Ye,nextButton:$e,items:Dt,slideBy:Ht,cloneCount:ee,slideCount:vt,slideCountNew:ne,index:ue,indexCached:fe,displayIndex:kn(),navCurrentIndex:an,navCurrentIndexCached:rn,pages:en,pagesCached:nn,sheet:Jt,isOn:yt,event:t||{}}}X&&console.warn("No slides found in",t.container)};
/*!---------------------------------------------------------------------------*\
        Project Name
        - Version:      1.0
        - Author:       YOUR NAME
        - Site:         http://YOUR_SITE
        - Copyright:    2019, YOUR COMPANY
        – License:      YOUR LICENSE
    \*----------------------------------------------------------------------------*/
const G=new function(t){const e={core:{},modals:{},tabs:{},...t},n={},i=()=>{n.core.destroy(),n.modals.destroy(),n.tabs.destroy()};function o(){n.core=new r(e.core),n.modals=new s(e.modals),n.tabs=new l(e.tabs)}return{destroy:i,reinit:()=>{i(),o()},init:o()}};window.neuekit=G,document.addEventListener("click",(function(t){if(t.target.classList.contains("accordion__toggle")){var e=document.querySelector(t.target.hash);if(e)if(t.preventDefault(),e.classList.contains("accordion__content--active"))e.classList.remove("accordion__content--active");else{for(var n=document.querySelectorAll(".accordion__content.accordion__content--active"),i=0;i<n.length;i++)n[i].classList.remove("accordion__content--active");e.classList.toggle("accordion__content--active")}}}));const Q=new function(){return{destroy:()=>{},reinit:()=>{},init:()=>{Array.from(document.querySelectorAll(".js-slider")).forEach(t=>{V({container:t,items:t.getAttribute("data-items")||1,gutter:t.getAttribute("data-gutter")||0,slideBy:"page",controlsContainer:t.parentNode.querySelector(".js-slider-controls")})}),V({container:".home-slide-1",items:4,gutter:10,slideBy:"page",autoplay:!1,loop:!0,controlsContainer:".home-slide-1-controls",nav:!1,responsive:{350:{items:2},700:{items:3},1e3:{items:4}}}),V({container:".home-slide-2",items:4,gutter:10,slideBy:"page",autoplay:!1,loop:!0,controlsContainer:".home-slide-2-controls",nav:!1,responsive:{350:{items:2},700:{items:3},1e3:{items:4}}}),V({container:".home-slide-3",items:4,gutter:10,slideBy:"page",autoplay:!1,loop:!0,controlsContainer:".home-slide-3-controls",nav:!1,responsive:{350:{items:2},700:{items:3},1e3:{items:4}}}),V({container:".collection-list-slide",items:12,gutter:10,slideBy:"page",autoplay:!1,loop:!0,controlsContainer:".collection-list-controls",nav:!1,responsive:{350:{items:3},700:{items:6},1e3:{items:12}}})}}};document.addEventListener("DOMContentLoaded",()=>{Q.init()})}();
