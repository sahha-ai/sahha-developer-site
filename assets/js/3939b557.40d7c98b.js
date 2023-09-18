"use strict";(self.webpackChunksahha_developer_site=self.webpackChunksahha_developer_site||[]).push([[687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="Myzone",l={unversionedId:"integrations/myzone",id:"integrations/myzone",title:"Myzone",description:"Sync data between Myzone and Sahha.",source:"@site/docs/integrations/myzone.md",sourceDirName:"integrations",slug:"/integrations/myzone",permalink:"/docs/integrations/myzone",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Lifesum",permalink:"/docs/integrations/lifesum"},next:{title:"Oura",permalink:"/docs/integrations/oura"}},p={},s=[{value:"iOS",id:"ios",level:2},{value:"Android",id:"android",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"myzone"},"Myzone"),(0,o.kt)("p",null,"Sync data between Myzone and Sahha."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"ios"},"iOS"),(0,o.kt)("p",null,"Your iOS app users will need to perfom a one-time connection between Myzone and Apple Health on their iOS device."),(0,o.kt)("p",null,"Once the user has ompleted this process, the Sahha SDK will be able to collect the synced Myzone health data directly from Apple Health without any further effort from the user."),(0,o.kt)("admonition",{title:"Setup Guide",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://myzonesupport.zendesk.com/hc/en-us/articles/360026685732-Apple-Health-Integration"},"The official documentation")," provides a step-by-step guide explaining how to sync health data."),(0,o.kt)("p",{parentName:"admonition"},"Please read and share this guide with your iOS app users.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"android"},"Android"),(0,o.kt)("p",null,"Your Android app users will need to perfom a one-time connection between Myzone and Google Fit on their Android device."),(0,o.kt)("p",null,"Once the user has completed this process, the Sahha SDK will be able to collect the synced Myzone health data directly from Google Fit without any further effort from the user."),(0,o.kt)("admonition",{title:"Setup Guide",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://myzonesupport.zendesk.com/hc/en-us/articles/360035193611-Google-Fit-Integration"},"The official documentation")," provides a step-by-step guide explaining how to sync health data."),(0,o.kt)("p",{parentName:"admonition"},"Please read and share this guide with your Android app users.")))}d.isMDXComponent=!0}}]);