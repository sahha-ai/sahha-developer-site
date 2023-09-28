"use strict";(self.webpackChunksahha_developer_site=self.webpackChunksahha_developer_site||[]).push([[4050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(m,l(l({ref:t},c),{},{components:n})):o.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={},l="Glooko",i={unversionedId:"integrations/glooko",id:"integrations/glooko",title:"Glooko",description:"Sync data between Glooko and Sahha.",source:"@site/docs/integrations/glooko.md",sourceDirName:"integrations",slug:"/integrations/glooko",permalink:"/docs/integrations/glooko",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Garmin",permalink:"/docs/integrations/garmin"},next:{title:"Lifesum",permalink:"/docs/integrations/lifesum"}},p={},s=[{value:"iOS",id:"ios",level:2},{value:"Connecting to Apple Health",id:"connecting-to-apple-health",level:3},{value:"Android",id:"android",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"glooko"},"Glooko"),(0,a.kt)("p",null,"Sync data between Glooko and Sahha."),(0,a.kt)("img",{src:n(2951).Z,style:{height:256}}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"ios"},"iOS"),(0,a.kt)("p",null,"Your iOS app users will need to perfom a one-time connection between Glooko and Apple Health on their iOS device."),(0,a.kt)("p",null,"Once the user has completed this process, the Sahha SDK will be able to collect the synced Glooko health data directly from Apple Health without any further effort from the user."),(0,a.kt)("h3",{id:"connecting-to-apple-health"},"Connecting to Apple Health"),(0,a.kt)("p",null,"Follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Tap the Silhouette (menu) icon in the top right "),(0,a.kt)("li",{parentName:"ol"},"Tap Devices"),(0,a.kt)("li",{parentName:"ol"},"Tap Apple Health Settings."),(0,a.kt)("li",{parentName:"ol"},"Tap the Open Apple Health button."),(0,a.kt)("li",{parentName:"ol"},"When the Apple Health app opens:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tap Turn All Categories On or tap to toggle on syncing for only the data types you would like to sync."),(0,a.kt)("li",{parentName:"ul"},"NOTE: Glooko does not currently sync carbohydrates data from Apple Health.")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Tap Allow at the top-right of the screen to allow Glooko to access your data.")),(0,a.kt)("p",null,'You will be routed back to the Apple Health Settings screen. In the Shared Data Types section, the data types will display a status of "Enabled" or "Disabled" based on your selections in the Apple Health app.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"}," It may take 10-30 minutes before your data initially appears in your account, then your data will begin syncing automatically. "))),(0,a.kt)("admonition",{title:"Setup Guide",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://support.glooko.com/hc/en-us/articles/360006074037-How-do-I-sync-my-glucose-insulin-and-nutrition-data-with-Apple-Health-"},"The official documentation")," provides a step-by-step guide explaining how to sync health data."),(0,a.kt)("p",{parentName:"admonition"},"Please read and share this guide with your iOS app users.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"android"},"Android"),(0,a.kt)("admonition",{title:"NOT AVAILABLE",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Unfortunately, Glooko does not provide an official method for syncing health data with Android Health Connect.")))}d.isMDXComponent=!0},2951:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/glooko-e50eb4ba951d4051b80b935168027cd7.png"}}]);