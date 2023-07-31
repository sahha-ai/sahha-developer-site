"use strict";(self.webpackChunksahha_developer_site=self.webpackChunksahha_developer_site||[]).push([[339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="Android",l={unversionedId:"install-the-sdk/android",id:"install-the-sdk/android",title:"Android",description:"Learn how to install the Sahha SDK in your Android project",source:"@site/docs/install-the-sdk/android.md",sourceDirName:"install-the-sdk",slug:"/install-the-sdk/android",permalink:"/docs/install-the-sdk/android",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"iOS",permalink:"/docs/install-the-sdk/ios"},next:{title:"Flutter",permalink:"/docs/install-the-sdk/flutter"}},d={},p=[{value:"Step 1) Add Jitpack",id:"step-1-add-jitpack",level:2},{value:"Step 2) Add Implementation",id:"step-2-add-implementation",level:2},{value:"Step 3) Import Module",id:"step-3-import-module",level:2}],s={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"android"},"Android"),(0,a.kt)("p",null,"Learn how to install the Sahha SDK in your Android project"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"step-1-add-jitpack"},"Step 1) Add Jitpack"),(0,a.kt)("p",null,"Add the Jitpack repository to your project's Settings.gradle."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:"title=Settings.gradle",title:"Settings.gradle"},'repositories {\n    mavenCentral()\n    maven { url "https://jitpack.io" }\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"step-2-add-implementation"},"Step 2) Add Implementation"),(0,a.kt)("p",null,"Add the Sahha SDK implementation to your project's dependencies in Build.gradle."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:"title=Build.gradle",title:"Build.gradle"},"dependencies {\n\n    ...\n\n    implementation 'com.github.sahha-ai:sahha-android:+'\n\n    ...\n\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"step-3-import-module"},"Step 3) Import Module"),(0,a.kt)("p",null,"Import the Sahha module into any files inside your project that use the SDK."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=MyApp.kt",title:"MyApp.kt"},"import sdk.sahha.android.source.*\n")))}u.isMDXComponent=!0}}]);