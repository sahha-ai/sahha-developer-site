"use strict";(self.webpackChunksahha_developer_site=self.webpackChunksahha_developer_site||[]).push([[203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(87462),r=n(67294),i=n(86010),l=n(12466),o=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=h({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),k=(()=>{const e=s??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var k=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(f,(0,a.Z)({},e,t)))}function S(e){const t=(0,k.Z)();return r.createElement(b,(0,a.Z)({key:String(t)},e))}},45548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(74866),l=n(85162);const o={sidebar_position:2},s="Profile",u={unversionedId:"use-the-sdk/profile",id:"use-the-sdk/profile",title:"Profile",description:"Manage a Sahha user profile",source:"@site/docs/use-the-sdk/profile.md",sourceDirName:"use-the-sdk",slug:"/use-the-sdk/profile",permalink:"/docs/use-the-sdk/profile",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Configuration",permalink:"/docs/use-the-sdk/configuration"},next:{title:"Sensors",permalink:"/docs/use-the-sdk/sensors"}},c={},p=[{value:"Authenticate",id:"authenticate",level:2},{value:"Option A) Authenticate via API",id:"option-a-authenticate-via-api",level:3},{value:"Step 1) Use your <code>accountToken</code> and <code>externalId</code> to authenticate a user profile via the <code>profile/register</code> endpoint.",id:"step-1-use-your-accounttoken-and-externalid-to-authenticate-a-user-profile-via-the-profileregister-endpoint",level:4},{value:"Step 2) Pass the <code>profileToken</code> and <code>refreshToken</code> you generated via the API to the SDK.",id:"step-2-pass-the-profiletoken-and-refreshtoken-you-generated-via-the-api-to-the-sdk",level:4},{value:"Option B) Authenticate via SDK",id:"option-b-authenticate-via-sdk",level:3},{value:"Using Your App ID and App Secret",id:"using-your-app-id-and-app-secret",level:3},{value:"Using Your External ID",id:"using-your-external-id",level:3},{value:"Deauthenticate",id:"deauthenticate",level:2},{value:"Check Authentication",id:"check-authentication",level:2},{value:"Demographic",id:"demographic",level:2},{value:"<code>age : Int</code>",id:"age--int",level:3},{value:"<code>gender : String</code>",id:"gender--string",level:3},{value:"<code>country : String</code>",id:"country--string",level:3},{value:"<code>birthCountry : String</code>",id:"birthcountry--string",level:3},{value:"<code>ethnicity : String</code>",id:"ethnicity--string",level:3},{value:"<code>occupation : String</code>",id:"occupation--string",level:3},{value:"<code>industry : String</code>",id:"industry--string",level:3},{value:"<code>incomeRange : String</code>",id:"incomerange--string",level:3},{value:"<code>education : String</code>",id:"education--string",level:3},{value:"<code>relationship : String</code>",id:"relationship--string",level:3},{value:"<code>locale : String</code>",id:"locale--string",level:3},{value:"<code>livingArrangement : String</code>",id:"livingarrangement--string",level:3},{value:"<code>birthDate : String</code>",id:"birthdate--string",level:3},{value:"MODEL",id:"model",level:2},{value:"POST",id:"post",level:2},{value:"GET",id:"get",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"profile"},"Profile"),(0,r.kt)("p",null,"Manage a Sahha user profile"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"authenticate"},"Authenticate"),(0,r.kt)("p",null,"The Sahha SDK must be authenticated in order to connect to the Sahha API. Do this once per user profile. Once a profile is authenticated, the SDK will take care of automatically issuing and refreshing API tokens."),(0,r.kt)("p",null,"You can authenticate a profile in 2 ways - via the API or SDK."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"option-a-authenticate-via-api"},"Option A) Authenticate via API"),(0,r.kt)("p",null,"You can authenticate a user profile via the API and then pass the Profile Token to the SDK."),(0,r.kt)("p",null,"View the API docs: ",(0,r.kt)("a",{parentName:"p",href:"/api/#tag/3.-Profile-Authentication"},"API - Authenticate User Profile")),(0,r.kt)("h4",{id:"step-1-use-your-accounttoken-and-externalid-to-authenticate-a-user-profile-via-the-profileregister-endpoint"},"Step 1) Use your ",(0,r.kt)("inlineCode",{parentName:"h4"},"accountToken")," and ",(0,r.kt)("inlineCode",{parentName:"h4"},"externalId")," to authenticate a user profile via the ",(0,r.kt)("inlineCode",{parentName:"h4"},"profile/register")," endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="REQUEST"',title:'"REQUEST"'},'// POST "/oauth/profile/register"\n// AUTHORIZATION HEADER "Account MY_ACCOUNT_TOKEN"\n\n// BODY\n{\n  "externalId": "MY_EXTERNAL_ID"\n}\n')),(0,r.kt)("p",null,"You will receive a ",(0,r.kt)("inlineCode",{parentName:"p"},"profileToken")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"refreshToken")," in the API response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="RESPONSE"',title:'"RESPONSE"'},'// POST "/oauth/profile/register"\n// AUTHORIZATION HEADER "Account MY_ACCOUNT_TOKEN"\n\n// BODY\n{\n  "profileToken": "PROFILE_TOKEN",\n  "expiresIn": "86400",\n  "tokenType": "Profile",\n  "refreshToken": "REFRESH_TOKEN"\n}\n')),(0,r.kt)("h4",{id:"step-2-pass-the-profiletoken-and-refreshtoken-you-generated-via-the-api-to-the-sdk"},"Step 2) Pass the ",(0,r.kt)("inlineCode",{parentName:"h4"},"profileToken")," and ",(0,r.kt)("inlineCode",{parentName:"h4"},"refreshToken")," you generated via the API to the SDK."),(0,r.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title=MyApp.swift",title:"MyApp.swift"},'Sahha.authenticate(profileToken: "PROFILE_TOKEN", refreshToken: "REFRESH_TOKEN") { error, success in\n    if let error = error {\n    print(error)\n    } else if success {\n        print("You are now authenticated")\n    }\n}\n'))),(0,r.kt)(l.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=MainActivity.kt",title:"MainActivity.kt"},'Sahha.authenticate(profileToken: "PROFILE_TOKEN", refreshToken:  "REFRESH_TOKEN") { error, success ->\n    if (success) greeting = "Successful"\n    else greeting = error ?: "Failed"\n}\n'))),(0,r.kt)(l.Z,{value:"flutter",label:"Flutter",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title=MyApp.dart",title:"MyApp.dart"},'SahhaFlutter.authenticateToken(profileToken: "PROFILE_TOKEN", refreshToken: "REFRESH_TOKEN")\n  .then((success) => {\n    debugPrint(success.toString())\n  })\n  .catchError((error, stackTrace) => {\n    debugPrint(error.toString())\n  });\n'))),(0,r.kt)(l.Z,{value:"react-native",label:"React Native",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=MyApp.tsx",title:"MyApp.tsx"},'Sahha.authenticateToken(\n  "PROFILE_TOKEN",\n  "REFRESH_TOKEN",\n  (error: string, success: boolean) => {\n    console.log(`Success: ${success}`);\n    if (error) {\n      console.error(`Error: ${error}`);\n    }\n  }\n);\n')))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"option-b-authenticate-via-sdk"},"Option B) Authenticate via SDK"),(0,r.kt)("p",null,"You will need your App ID and App Secret to authenticate user profiles with an External ID."),(0,r.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title=MyApp.swift",title:"MyApp.swift"},'Sahha.authenticate(appId: "APP_ID", appSecret: "APP_SECRET", externalId: "EXTERNAL_ID") { error, success in\n    if let error = error {\n    print(error)\n    } else if success {\n        print("You are now authenticated")\n    }\n}\n'))),(0,r.kt)(l.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=MainActivity.kt",title:"MainActivity.kt"},'Sahha.authenticate(appId: "APP_ID", appSecret:  "APP_SECRET", externalId: "EXTERNAL_ID") { error, success ->\n    if (success) greeting = "Successful"\n    else greeting = error ?: "Failed"\n}\n'))),(0,r.kt)(l.Z,{value:"flutter",label:"Flutter",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title=MyApp.dart",title:"MyApp.dart"},'SahhaFlutter.authenticate(appId: "APP_ID", appSecret: "APP_SECRET", externalId: "EXTERNAL_ID")\n  .then((success) => {\n    debugPrint(success.toString())\n  })\n  .catchError((error, stackTrace) => {\n    debugPrint(error.toString())\n  });\n'))),(0,r.kt)(l.Z,{value:"react-native",label:"React Native",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=MyApp.tsx",title:"MyApp.tsx"},'Sahha.authenticate(\n  "APP_ID",\n  "APP_SECRET",\n  "EXTERNAL_ID",\n  (error: string, success: boolean) => {\n    console.log(`Success: ${success}`);\n    if (error) {\n      console.error(`Error: ${error}`);\n    }\n  }\n);\n')))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"using-your-app-id-and-app-secret"},"Using Your App ID and App Secret"),(0,r.kt)("p",null,"If you choose to authenticate a user profile via the SDK, you will need to user your App ID and App Secret."),(0,r.kt)("admonition",{title:"Finding your App ID and App Secret",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Your ",(0,r.kt)("inlineCode",{parentName:"p"},"appId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"appSecret")," are available in the Sahha dashboard."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://app.sahha.ai"},"Login to the Sahha Dashboard")),(0,r.kt)("p",{parentName:"admonition"},"These values are separate from your ",(0,r.kt)("inlineCode",{parentName:"p"},"clientId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"clientSecret")," and should only be used to authenticate a profile via the SDK.")),(0,r.kt)("admonition",{title:"Using your App ID and App Secret",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"DO NOT")," store your app ID and App Secret in your app code. Your account could be harmed if any 3rd party gains access to these two values. "),(0,r.kt)("p",{parentName:"admonition"},"We recommend storing and accessing these values from your server on app launch.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"using-your-external-id"},"Using Your External ID"),(0,r.kt)("p",null,"You will need to provide your own unique External ID to authenticate a user profile."),(0,r.kt)("admonition",{title:"Choosing your External ID",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"An External ID can be any string you choose to identify a user profile within your organization. This ID must be unique for each of your users. This ID has a limit of 100 characters."),(0,r.kt)("p",{parentName:"admonition"},"We suggest using an anonymous UUID e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"123e4567-e89b-12d3-a456-426614174000")),(0,r.kt)("p",{parentName:"admonition"},"If your user changes devices, make sure to use the same External ID to identify them on the new device.")),(0,r.kt)("admonition",{title:"User Privacy",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Sahha does not collect personally identifiable information from users due to privacy and security."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"DO NOT")," use an External ID that could be used to personally identify a user."),(0,r.kt)("p",{parentName:"admonition"},"For example, do not use emails or usernames for External ID:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Email (",(0,r.kt)("a",{parentName:"li",href:"mailto:Samantha.Jones@website.com"},"Samantha.Jones@website.com"),")"),(0,r.kt)("li",{parentName:"ul"},"Username (TimmyT_123)"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"deauthenticate"},"Deauthenticate"),(0,r.kt)("p",null,"If you would like to change authenticated users, first deauthenticate the current user before authenticating a new user."),(0,r.kt)("p",null,"The SDK will take care of switching user data and automatically issuing and refreshing API tokens."),(0,r.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title=MyApp.swift",title:"MyApp.swift"},'Sahha.deauthenticate { error, success in\n    if let error = error {\n    print(error)\n    } else if success {\n        print("You are now deauthenticated")\n    }\n}\n'))),(0,r.kt)(l.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=MainActivity.kt",title:"MainActivity.kt"},'Sahha.deauthenticate { error, success ->\n    if (success) farewell = "Successful"\n    else farewell = error ?: "Failed"\n}\n'))),(0,r.kt)(l.Z,{value:"flutter",label:"Flutter",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title=MyApp.dart",title:"MyApp.dart"},"SahhaFlutter.deauthenticate()\n  .then((success) => {\n    debugPrint(success.toString())\n  })\n  .catchError((error, stackTrace) => {\n    debugPrint(error.toString())\n  });\n"))),(0,r.kt)(l.Z,{value:"react-native",label:"React Native",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=MyApp.tsx",title:"MyApp.tsx"},"Sahha.deauthenticate(\n  (error: string, success: boolean) => {\n    console.log(`Success: ${success}`);\n    if (error) {\n      console.error(`Error: ${error}`);\n    }\n  }\n);\n")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"check-authentication"},"Check Authentication"),(0,r.kt)("p",null,"You can easily check if a profile is already authenticated via the SDK."),(0,r.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title=MyApp.swift",title:"MyApp.swift"},'if Sahha.isAuthenticated {\n  print("Profile is ready")\n} else {\n    print("You must authenticate your profile")\n}\n'))),(0,r.kt)(l.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=MainActivity.kt",title:"MainActivity.kt"},'if Sahha.isAuthenticated {\n  print("Profile is ready")\n} else {\n    print("You must authenticate your profile")\n}\n'))),(0,r.kt)(l.Z,{value:"flutter",label:"Flutter",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title=MyApp.dart",title:"MyApp.dart"},"SahhaFlutter.isAuthenticated()\n  .then((success) => {\n    debugPrint(success.toString())\n  })\n  .catchError((error, stackTrace) => {\n    debugPrint(error.toString())\n  });\n"))),(0,r.kt)(l.Z,{value:"react-native",label:"React Native",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=MyApp.tsx",title:"MyApp.tsx"},"Sahha.isAuthenticated(\n  (error: string, success: boolean) => {\n    console.log(`Success: ${success}`);\n    if (error) {\n      console.error(`Error: ${error}`);\n    }\n  }\n);\n")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"demographic"},"Demographic"),(0,r.kt)("p",null,"Each authenticated profile includes an optional demographic which can be used to increase the accuracy of analyzation. This data is not collected automatically. Your app can choose to ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," this demographic via the Sahha API."),(0,r.kt)("admonition",{title:"All values are optional",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"String values are case insensitive (for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"'us'")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"'US'")," are equal and valid).")),(0,r.kt)("h3",{id:"age--int"},(0,r.kt)("inlineCode",{parentName:"h3"},"age : Int")),(0,r.kt)("p",null,"Age must be a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"Int")," between ",(0,r.kt)("inlineCode",{parentName:"p"},"1 - 99"),"."),(0,r.kt)("h3",{id:"gender--string"},(0,r.kt)("inlineCode",{parentName:"h3"},"gender : String")),(0,r.kt)("p",null,"Gender must be a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," from this list:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'male'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'female'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'gender diverse'"))),(0,r.kt)("h3",{id:"country--string"},(0,r.kt)("inlineCode",{parentName:"h3"},"country : String")),(0,r.kt)("p",null,"Country must be a valid 2 character ISO ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," from this list:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes"},"ISO Country Codes")),(0,r.kt)("h3",{id:"birthcountry--string"},(0,r.kt)("inlineCode",{parentName:"h3"},"birthCountry : String")),(0,r.kt)("p",null,"Birth Country must be a valid 2 character ISO ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," from this list:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes"},"ISO Country Codes")),(0,r.kt)("h3",{id:"ethnicity--string"},(0,r.kt)("inlineCode",{parentName:"h3"},"ethnicity : String")),(0,r.kt)("p",null,"Any ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," value."),(0,r.kt)("h3",{id:"occupation--string"},(0,r.kt)("inlineCode",{parentName:"h3"},"occupation : String")),(0,r.kt)("p",null,"Any ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," value."),(0,r.kt)("h3",{id:"industry--string"},(0,r.kt)("inlineCode",{parentName:"h3"},"industry : String")),(0,r.kt)("p",null,"Any ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," value."),(0,r.kt)("h3",{id:"incomerange--string"},(0,r.kt)("inlineCode",{parentName:"h3"},"incomeRange : String")),(0,r.kt)("p",null,"Any ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," value."),(0,r.kt)("h3",{id:"education--string"},(0,r.kt)("inlineCode",{parentName:"h3"},"education : String")),(0,r.kt)("p",null,"Any ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," value."),(0,r.kt)("h3",{id:"relationship--string"},(0,r.kt)("inlineCode",{parentName:"h3"},"relationship : String")),(0,r.kt)("p",null,"Any ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," value."),(0,r.kt)("h3",{id:"locale--string"},(0,r.kt)("inlineCode",{parentName:"h3"},"locale : String")),(0,r.kt)("p",null,"Any ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," value."),(0,r.kt)("h3",{id:"livingarrangement--string"},(0,r.kt)("inlineCode",{parentName:"h3"},"livingArrangement : String")),(0,r.kt)("p",null,"Any ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," value."),(0,r.kt)("h3",{id:"birthdate--string"},(0,r.kt)("inlineCode",{parentName:"h3"},"birthDate : String")),(0,r.kt)("p",null,"Birth Date must be a ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," in the format ",(0,r.kt)("inlineCode",{parentName:"p"},"'YYYY-MM-DD'"),". For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"'1990-05-20'"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"model"},"MODEL"),(0,r.kt)("p",null,"You can ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," demographic info via the API using this model."),(0,r.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title=MyApp.swift",title:"MyApp.swift"},'// All values are optional\n\npublic struct SahhaDemographic: Codable {\n    public var age: Int?\n    public var gender: String? // "male", "female", "gender diverse"\n    public var country: String? // ISO 2 character code, i.e. "us", "uk", "au", etc.\n    public var birthCountry: String?  // ISO 2 character code, i.e. "us", "uk", "au", etc.\n    public var ethnicity: String? // any string\n    public var occupation: String? // any string\n    public var industry: String? // any string\n    public var incomeRange: String? // any string\n    public var education: String? // any string\n    public var relationship: String? // any string\n    public var locale: String? // any string\n    public var livingArrangement: String? // any string\n    public var birthDate: String? // must be in format "YYYY-MM-DD", i.e. "1990-05-20"\n}\n'))),(0,r.kt)(l.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=MainActivity.kt",title:"MainActivity.kt"},'// All values are optional\n\nclass SahhaDemographic {\n    public var age: Int?\n    public var gender: String? // "male", "female", "gender diverse"\n    public var country: String? // ISO 2 character code, i.e. "us", "uk", "au", etc.\n    public var birthCountry: String?  // ISO 2 character code, i.e. "us", "uk", "au", etc.\n    public var ethnicity: String? // any string\n    public var occupation: String? // any string\n    public var industry: String? // any string\n    public var incomeRange: String? // any string\n    public var education: String? // any string\n    public var relationship: String? // any string\n    public var locale: String? // any string\n    public var livingArrangement: String? // any string\n    public var birthDate: String? // must be in format "YYYY-MM-DD", i.e. "1990-05-20"\n}\n'))),(0,r.kt)(l.Z,{value:"flutter",label:"Flutter",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title=MyApp.dart",title:"MyApp.dart"},'// All values are optional\n\nvar demographic = {\n  "age" : 35, // int\n  "gender" : "Female", // string, "Male", "Female", "Gender Diverse"\n  "country" : "NZ", // ISO 2 digit code, i.e. "US", "UK", "AU", etc.\n  "birthCountry" : "UK" // ISO 2 digit code, i.e. "US", "UK", "AU", etc.\n};\n'))),(0,r.kt)(l.Z,{value:"react-native",label:"React Native",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=MyApp.tsx",title:"MyApp.tsx"},'// All values are optional\n\nconst demographic = {\n  age: 35, // number\n  gender: "Female", // string, "Male", "Female", "Gender Diverse",\n  country: "NZ", // ISO 2 digit code, i.e. "US", "UK", "AU", etc.\n  birthCountry: "UK", // ISO 2 digit code, i.e. "US", "UK", "AU", etc.\n  birthDate: "1990-05-20" // must be in format "YYYY-MM-DD", i.e. "1990-05-20"\n}\n')))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"post"},"POST"),(0,r.kt)("p",null,"An example ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," of demographic info via the SDK."),(0,r.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title=MyApp.swift",title:"MyApp.swift"},'let demographic = SahhaDemographic(\n    age: 32,\n    gender: "Female",\n    country: "NZ",\n    birthCountry: "UK",\n    birthDate: "1990-05-20"\n)\n\nSahha.postDemographic(demographic) { error, success in\n    if let error = error {\n        print(error)\n    }\n    print(success)\n}\n'))),(0,r.kt)(l.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=MainActivity.kt",title:"MainActivity.kt"},'var demographic = SahhaDemographic(\n    age: 32, \n    gender: "Female", \n    country: "NZ", \n    birthCountry: "UK", \n    birthDate: "1990-05-20"\n)\n\nSahha.postDemographic(demographic) { error, success ->\n    if (error != null) {\n        println(error)\n    } else {\n        println(success.toString())\n    }\n}\n'))),(0,r.kt)(l.Z,{value:"flutter",label:"Flutter",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title=MyApp.dart",title:"MyApp.dart"},'var demographic = {\n  "age" : 32, // int\n  "gender" : "Female", // string, "Male", "Female", "Gender Diverse"\n  "country" : "NZ", // ISO 2 digit code, i.e. "US", "UK", "AU", etc.\n  "birthCountry" : "UK" // ISO 2 digit code, i.e. "US", "UK", "AU", etc.\n};\n\nSahhaFlutter.postDemographic(demographic)\n  .then((success) => {\n    debugPrint(success.toString())\n  })\n  .catchError((error, stackTrace) => {\n    debugPrint(error.toString())\n  });\n'))),(0,r.kt)(l.Z,{value:"react-native",label:"React Native",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=MyApp.tsx",title:"MyApp.tsx"},'const demographic = {\n  age: 32, // number\n  gender: "Female", // string, "Male", "Female", "Gender Diverse",\n  country: "NZ", // ISO 2 digit code, i.e. "US", "UK", "AU", etc.\n  birthCountry: "UK", // ISO 2 digit code, i.e. "US", "UK", "AU", etc.\n  birthDate: "1990-05-20" // must be in format "YYYY-MM-DD", i.e. "1990-05-20"\n}\n\nSahha.postDemographic(demographic, (error: string, success: boolean) => {\n  if error {\n    console.error(`Error: $ {error}`);\n  } else if success {\n    console.log(`Success: $ {success}`);\n  }\n});\n')))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"get"},"GET"),(0,r.kt)("p",null,"An example ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," of demographic info via the SDK."),(0,r.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title=MyApp.swift",title:"MyApp.swift"},"Sahha.getDemographic() { error, demographic in\n    if let error = error {\n        print(error)\n    }\n    if let demographic = demographic {\n        print(demographic)\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=MainActivity.kt",title:"MainActivity.kt"},"Sahha.getDemographic() { error, demographic ->\n    if (error != null) {\n        println(error)\n    } else if (demographic != null) {\n        println(demographic)\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"flutter",label:"Flutter",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"title=MyApp.dart",title:"MyApp.dart"},"SahhaFlutter.getDemographic()\n  .then((value) => {\n    debugPrint(value)\n  })\n  .catchError((error, stackTrace) => {\n    debugPrint(error.toString())\n  });\n"))),(0,r.kt)(l.Z,{value:"react-native",label:"React Native",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=MyApp.tsx",title:"MyApp.tsx"},"Sahha.getDemographic((error: string, value: string) => {\n  if error {\n    console.error(`Error: $ {error}`);\n  } else if value {\n    console.log(`Value: $ {value}`);\n  }\n});\n")))))}h.isMDXComponent=!0}}]);