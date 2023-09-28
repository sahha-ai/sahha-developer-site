"use strict";(self.webpackChunksahha_developer_site=self.webpackChunksahha_developer_site||[]).push([[3139],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,g=h["".concat(p,".").concat(d)]||h[d]||u[d]||r;return n?o.createElement(g,i(i({ref:t},s),{},{components:n})):o.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[h]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={},i="WHOOP",l={unversionedId:"integrations/whoop",id:"integrations/whoop",title:"WHOOP",description:"Sync data between WHOOP and Sahha.",source:"@site/docs/integrations/whoop.md",sourceDirName:"integrations",slug:"/integrations/whoop",permalink:"/docs/integrations/whoop",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Strava",permalink:"/docs/integrations/strava"},next:{title:"Withings",permalink:"/docs/integrations/withings"}},p={},c=[{value:"iOS",id:"ios",level:2},{value:"Connecting to Apple Health",id:"connecting-to-apple-health",level:3},{value:"Android",id:"android",level:2},{value:"Connecting to Health Connect",id:"connecting-to-health-connect",level:3}],s={toc:c},h="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"whoop"},"WHOOP"),(0,a.kt)("p",null,"Sync data between WHOOP and Sahha."),(0,a.kt)("img",{src:n(75271).Z,style:{height:256}}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"ios"},"iOS"),(0,a.kt)("p",null,"Your iOS app users will need to perfom a one-time connection between WHOOP and Apple Health on their iOS device."),(0,a.kt)("p",null,"Once the user has completed this process, the Sahha SDK will be able to collect the synced WHOOP health data directly from Apple Health without any further effort from the user."),(0,a.kt)("h3",{id:"connecting-to-apple-health"},"Connecting to Apple Health"),(0,a.kt)("p",null,"To enable Health app access, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Update your WHOOP App to the latest version"),(0,a.kt)("li",{parentName:"ol"},"Open the WHOOP app and select the menu icon in the bottom-right corner"),(0,a.kt)("li",{parentName:"ol"},"Scroll down and select Integrations"),(0,a.kt)("li",{parentName:"ol"},"Select Apple Health "),(0,a.kt)("li",{parentName:"ol"},"Select Connect"),(0,a.kt)("li",{parentName:"ol"},"Select Turn on all or select which categories you'd like to share between WHOOP and Apple Health"),(0,a.kt)("li",{parentName:"ol"},"Select Allow")),(0,a.kt)("admonition",{title:"Setup Guide",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://support.whoop.com/s/article/Apple-Health-Integration"},"The official documentation")," provides a step-by-step guide explaining how to sync health data."),(0,a.kt)("p",{parentName:"admonition"},"Please read and share this guide with your iOS app users.")),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/uX6EZsOiwXQ?si=vIa4i9E7vEJdeoNU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"android"},"Android"),(0,a.kt)("p",null,"Your Android app users will need to perfom a one-time connection between WHOOP and Health Connect on their Android device."),(0,a.kt)("p",null,"Once the user has ompleted this process, the Sahha SDK will be able to collect the synced WHOOP health data directly from Health Connect without any further effort from the user."),(0,a.kt)("h3",{id:"connecting-to-health-connect"},"Connecting to Health Connect"),(0,a.kt)("p",null,"To enable Health Connect app access, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Update your WHOOP app to the latest version"),(0,a.kt)("li",{parentName:"ol"},"Open the WHOOP app and click the More icon in the bottom-right corner"),(0,a.kt)("li",{parentName:"ol"},"Scroll down and tap Integrations"),(0,a.kt)("li",{parentName:"ol"},"Tap Health Connect")),(0,a.kt)("admonition",{title:"Setup Guide",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://support.whoop.com/s/article/Google-Health-Integration-For-Android"},"The official documentation")," provides a step-by-step guide explaining how to sync health data."),(0,a.kt)("p",{parentName:"admonition"},"Please read and share this guide with your Android app users.")))}u.isMDXComponent=!0},75271:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);