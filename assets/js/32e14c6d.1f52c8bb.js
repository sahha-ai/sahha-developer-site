"use strict";(self.webpackChunksahha_developer_site=self.webpackChunksahha_developer_site||[]).push([[1768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?i.createElement(h,l(l({ref:t},d),{},{components:n})):i.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[c]="string"==typeof e?e:a,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},l="iOS",r={unversionedId:"install-the-sdk/ios",id:"install-the-sdk/ios",title:"iOS",description:"Learn how to install the Sahha SDK in your iOS project",source:"@site/docs/install-the-sdk/ios.md",sourceDirName:"install-the-sdk",slug:"/install-the-sdk/ios",permalink:"/sahha-developer-site/docs/install-the-sdk/ios",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Install the SDK",permalink:"/sahha-developer-site/docs/category/install-the-sdk"},next:{title:"Android",permalink:"/sahha-developer-site/docs/install-the-sdk/android"}},p={},s=[{value:"Step 1) Install Library",id:"step-1-install-library",level:2},{value:"Option A) Swift Package Manager",id:"option-a-swift-package-manager",level:3},{value:"Option B) CocoaPods",id:"option-b-cocoapods",level:3},{value:"Step 1) Add the Sahha pod to your project&#39;s Podfile.",id:"step-1-add-the-sahha-pod-to-your-projects-podfile",level:4},{value:"Step 2) Run <code>pod install</code> from the <code>Terminal</code> app in your project root folder.",id:"step-2-run-pod-install-from-the-terminal-app-in-your-project-root-folder",level:4},{value:"Step 2) Import Module",id:"step-2-import-module",level:2},{value:"Step 3) Edit Project",id:"step-3-edit-project",level:2},{value:"Usage Descriptions",id:"usage-descriptions",level:3},{value:"HealthKit Entitlement",id:"healthkit-entitlement",level:3},{value:"Background Modes Entitlement",id:"background-modes-entitlement",level:3},{value:"Info.plist",id:"infoplist",level:3},{value:"App.entitlements",id:"appentitlements",level:3}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ios"},"iOS"),(0,a.kt)("p",null,"Learn how to install the Sahha SDK in your iOS project"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"step-1-install-library"},"Step 1) Install Library"),(0,a.kt)("p",null,"Choose how you would like to install the Sahha library into your Xcode project."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"option-a-swift-package-manager"},"Option A) Swift Package Manager"),(0,a.kt)("p",null,"Add the Sahha swift package to your project's package dependencies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Swift Package Manager"',title:'"Swift',Package:!0,'Manager"':!0},"https://github.com/sahha-ai/sahha-swift\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"option-b-cocoapods"},"Option B) CocoaPods"),(0,a.kt)("p",null,"Add the Sahha pod to your project's pod dependencies."),(0,a.kt)("admonition",{title:"Install CocoaPods",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Visit ",(0,a.kt)("a",{href:"https://cocoapods.org/https://cocoapods.org/",target:"_blank"},"cocoapods.org")," to learn how to install CocoaPods.")),(0,a.kt)("h4",{id:"step-1-add-the-sahha-pod-to-your-projects-podfile"},"Step 1) Add the Sahha pod to your project's Podfile."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Podfile"',title:'"Podfile"'},"pod 'Sahha'\n")),(0,a.kt)("h4",{id:"step-2-run-pod-install-from-the-terminal-app-in-your-project-root-folder"},"Step 2) Run ",(0,a.kt)("inlineCode",{parentName:"h4"},"pod install")," from the ",(0,a.kt)("inlineCode",{parentName:"h4"},"Terminal")," app in your project root folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Terminal"',title:'"Terminal"'},"$ pod install\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"step-2-import-module"},"Step 2) Import Module"),(0,a.kt)("p",null,"After you have installed the Sahha library, import the Sahha module into any files inside your project that use the SDK."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="MyApp.swift"',title:'"MyApp.swift"'},"import Sahha\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"step-3-edit-project"},"Step 3) Edit Project"),(0,a.kt)("p",null,"You will need to edit your project settings to enable the Sahha SDK."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"usage-descriptions"},"Usage Descriptions"),(0,a.kt)("admonition",{title:"Add usage descriptions to your Xcode project",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You will need to write a message explaining to the user why they should approve these permissions."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"NSMotionUsageDescription")),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"NSHealthShareUsageDescription")),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"NSHealthUpdateUsageDescription")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"healthkit-entitlement"},"HealthKit Entitlement"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Add ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"HealthKit")," entitlement to your Xcode project"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Select your App Target in the Project panel"),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"Signing & Capabilities")),(0,a.kt)("li",{parentName:"ul"},"Tap the ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," button"),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"HealthKit")," from the list"),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"Background Delivery")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"background-modes-entitlement"},"Background Modes Entitlement"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Add ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Background Modes")," entitlement to your Xcode project"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Select your App Target in the Project panel"),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"Signing & Capabilities")),(0,a.kt)("li",{parentName:"ul"},"Tap the ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," button"),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"Background Modes")," from the list"),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"Background Fetch")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"Background Processing")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"infoplist"},"Info.plist"),(0,a.kt)("p",null,"You can also edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"Info.plist")," file directly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="Info.plist"',title:'"Info.plist"'},'<plist version="1.0">\n<dict>\n  <key>NSMotionUsageDescription</key>\n  <string>This app would like access to your motion activity for analysis.</string>\n<key>NSHealthShareUsageDescription</key>\n  <string>This app would like access to your health activity for analysis.</string>\n<key>NSHealthUpdateUsageDescription</key>\n  <string>This app would like access to your health activity for analysis.</string>\n<key>UIBackgroundModes</key>\n    <array>\n        <string>fetch</string>\n        <string>processing</string>\n    </array>\n</dict>\n</plist>\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"appentitlements"},"App.entitlements"),(0,a.kt)("p",null,"You can also edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"App.entitlements")," file directly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App.entitlements"',title:'"App.entitlements"'},'<plist version="1.0">\n<dict>\n <key>com.apple.developer.healthkit</key>\n  <true/>\n <key>com.apple.developer.healthkit.access</key>\n  <array/>\n <key>com.apple.developer.healthkit.background-delivery</key>\n  <true/>\n</dict>\n</plist>\n')))}u.isMDXComponent=!0}}]);