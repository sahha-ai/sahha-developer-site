"use strict";(self.webpackChunksahha_developer_site=self.webpackChunksahha_developer_site||[]).push([[5910],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=d(a),u=o,f=h["".concat(s,".").concat(u)]||h[u]||p[u]||r;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const r={sidebar_position:7,slug:"android-health-connect"},i="Android Health Connect",l={unversionedId:"android-health-connect",id:"android-health-connect",title:"Android Health Connect",description:"The Sahha SDK collects health data from Android Health Connect.",source:"@site/docs/android-health-connect.md",sourceDirName:".",slug:"/android-health-connect",permalink:"/docs/android-health-connect",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,slug:"android-health-connect"},sidebar:"docsSidebar",previous:{title:"Withings",permalink:"/docs/integrations/withings"},next:{title:"Apple Health",permalink:"/docs/apple-health"}},s={},d=[{value:"Check Health Connect availability",id:"check-health-connect-availability",level:2},{value:"Future Versions",id:"future-versions",level:3},{value:"Health Connect on Google Fit",id:"health-connect-on-google-fit",level:2},{value:"Set up Health Connect",id:"set-up-health-connect",level:3},{value:"Shared data",id:"shared-data",level:3},{value:"Data Types",id:"data-types",level:2},{value:"30-day read restriction",id:"30-day-read-restriction",level:2},{value:"Example",id:"example",level:3},{value:"Foreground restriction",id:"foreground-restriction",level:2}],c={toc:d},h="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"android-health-connect"},"Android Health Connect"),(0,o.kt)("p",null,"The Sahha SDK collects health data from Android Health Connect."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"check-health-connect-availability"},"Check Health Connect availability"),(0,o.kt)("p",null,"Health Connect is exclusive to Android and Google Play. Users can access Health Connect in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An open beta app on the Google Play store."),(0,o.kt)("li",{parentName:"ul"},"As an Android system app on certain Pixel devices (pushed out as part of the QPR2 update).")),(0,o.kt)("h3",{id:"future-versions"},"Future Versions"),(0,o.kt)("p",null,"Health Connect will become part of Android 14 as an Android system app."),(0,o.kt)("p",null,"This version of Health Connect will retain 100% feature parity with its open beta predecessor. Prior to the launch of Android 14, detailed guidance will be made available to facilitate a smooth transition from the APK to a framework model."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/health-and-fitness/guides/health-connect/platform-overview/availability"},"Read the official documentation")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"health-connect-on-google-fit"},"Health Connect on Google Fit"),(0,o.kt)("p",null,"With Health Connect, you can manage your fitness and health app connections and data with a single app. Health Connect combines data from other fitness and health apps and displays the shared health app information on your Google Fit dashboards. This will allow Fit to manage other health and fitness apps like your smartwatch."),(0,o.kt)("h3",{id:"set-up-health-connect"},"Set up Health Connect"),(0,o.kt)("p",null,"Follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On your Android phone, download Health Connect from the Play Store."),(0,o.kt)("li",{parentName:"ol"},"Open Google Fit."),(0,o.kt)("li",{parentName:"ol"},'Tap Profile > Settings > Under "Health Connect" settings.'),(0,o.kt)("li",{parentName:"ol"},"Turn on Sync Fit with Health Connect.")),(0,o.kt)("h3",{id:"shared-data"},"Shared data"),(0,o.kt)("p",null,"When you connect and grant access to Google Fit, Fit has permission to access or edit Health Connect data. Fit will still have a copy of this data that it has access and ownership over. Control and change who has access to your data on Health Connect and the data that\u2019s shared with the app. ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/fit/answer/10066796#zippy=%2Chealth-connect-and-google-fit"},"Learn more about How connected app sharing works with your Google Fit data"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/fit/answer/12830119?hl=en"},"Read the official documentation")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"data-types"},"Data Types"),(0,o.kt)("p",null,"The Sahha SDK collects the following data types via Health Connect:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SleepSession"),(0,o.kt)("li",{parentName:"ul"},"Steps"),(0,o.kt)("li",{parentName:"ul"},"HeartRate"),(0,o.kt)("li",{parentName:"ul"},"RestingHeartRate"),(0,o.kt)("li",{parentName:"ul"},"HeartRateVariabilityRmssd"),(0,o.kt)("li",{parentName:"ul"},"BloodPressure"),(0,o.kt)("li",{parentName:"ul"},"BloodGlucose")),(0,o.kt)("p",null,"More data types will be added in the future."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/health-and-fitness/guides/health-connect/data-and-data-types/data-types"},"Read the official documentation")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"30-day-read-restriction"},"30-day read restriction"),(0,o.kt)("p",null,"Applications can read data from Health Connect for up to 30 days prior to when any permission was first granted."),(0,o.kt)("p",null,"However, if a user deletes your app, the permission history is lost. If the user reinstalls your app and grants permission again, your app can read data from Health Connect up to 30 days prior to that new date."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"If a user first granted read permission to your application on March 30, 2023, the earliest data your app could read back would be from February 28, 2023 onwards."),(0,o.kt)("p",null,"The user then deletes your app on May 10, 2023. The user decides to reinstall it on May 15, 2023 and grant read permission. The earliest date your app can now read data from is April 15, 2023."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/health-and-fitness/guides/health-connect/common-workflows/read-data#read-restriction"},"Read the official documentation")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"foreground-restriction"},"Foreground restriction"),(0,o.kt)("p",null,"Reading data with Health Connect is restricted to applications running in the foreground. This restriction is in place to further strengthen user privacy. This assures users that Health Connect does not have background read access to their data, and that data is only read and accessed in the foreground."),(0,o.kt)("p",null,"For situations in which interruptions are tolerable, such as displaying a reading in your application, read directly from Health Connect to your client application."),(0,o.kt)("p",null,"For situations in which you prefer no interruptions, such as reading a range of data from Health Connect then writing and uploading it elsewhere, use a ForegroundService, rather than an Activity where it can be quickly dismissed."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/health-and-fitness/guides/health-connect/common-workflows/read-data#foreground-restriction"},"Read the official documentation")))}p.isMDXComponent=!0}}]);