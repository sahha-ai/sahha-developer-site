"use strict";(self.webpackChunksahha_developer_site=self.webpackChunksahha_developer_site||[]).push([[9671],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,m=p["".concat(u,".").concat(d)]||p[d]||h[d]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>S});var n=a(7462),r=a(7294),o=a(6010),i=a(2466),l=a(6550),u=a(1980),s=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,s]=m({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=u??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var k=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),h=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==l&&(p(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:h},i,{className:(0,o.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function S(e){const t=(0,k.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},9881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),o=(a(4866),a(5162),a(9960));const i={sidebar_position:1},l="Get Started",u={unversionedId:"intro",id:"intro",title:"Get Started",description:"This page will help you get started with Sahha. You'll be up and running in a jiffy!",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",next:{title:"Requirements",permalink:"/docs/requirements"}},s={},c=[{value:"Step 1) Register Your Account",id:"step-1-register-your-account",level:2},{value:"Step 2) Access Your API Keys",id:"step-2-access-your-api-keys",level:2},{value:"Step 3) Authenticate Your Account",id:"step-3-authenticate-your-account",level:2},{value:"Step 4) Authenticate a User Profile",id:"step-4-authenticate-a-user-profile",level:2},{value:"Step 5) Build with Sahha",id:"step-5-build-with-sahha",level:2},{value:"Step 6) Try the Sahha Demo App",id:"step-6-try-the-sahha-demo-app",level:2},{value:"Step 7) Join Sahha on Slack",id:"step-7-join-sahha-on-slack",level:2}],p={toc:c},h="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(h,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-started"},"Get Started"),(0,r.kt)("p",null,"This page will help you get started with Sahha. You'll be up and running in a jiffy!"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"step-1-register-your-account"},"Step 1) Register Your Account"),(0,r.kt)("p",null,'Tap "Get Started with Sahha" to quickly sign up for an account that your organization can use to access Sahha services.'),(0,r.kt)(o.Z,{className:"button button--secondary button--lg",to:"https://app.sahha.ai/?rel=docs",mdxType:"Link"},"Get Started with Sahha"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"step-2-access-your-api-keys"},"Step 2) Access Your API Keys"),(0,r.kt)("admonition",{title:"You will need to access your API Keys in order to start connecting to the Sahha API.",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can find your Client ID and Client Secret inside the Dashboard by going to ",(0,r.kt)("inlineCode",{parentName:"p"},"API Credentials")," from the sidebar menu.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Access",src:a(3055).Z,width:"2047",height:"1024"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"step-3-authenticate-your-account"},"Step 3) Authenticate Your Account"),(0,r.kt)("p",null,"You will need to authenticate your account to access the Sahha API."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/#tag/1.-Account-Authentication/paths/~1api~1v1~1oauth~1account~1token/post"},"API - Authenticate Account")),(0,r.kt)("p",null,"Use your Client ID and Client Secret from the Dashboard to authenticate your account via the API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="REQUEST"',title:'"REQUEST"'},'// POST "/oauth/account/token"\n{\n  "clientId": "MY_CLIENT_ID",\n  "clientSecret": "MY_CLIENT_SECRET"\n}\n')),(0,r.kt)("p",null,"You will receive an ",(0,r.kt)("inlineCode",{parentName:"p"},"accountToken")," that allows you to create new user profiles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="RESPONSE"',title:'"RESPONSE"'},'// 200 OK\n{\n  "accountToken": "MY_ACCOUNT_TOKEN",\n  "expiresIn": "86400",\n  "tokenType": "Account"\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"step-4-authenticate-a-user-profile"},"Step 4) Authenticate a User Profile"),(0,r.kt)("p",null,"User profiles represent the unique individuals that user your app or service. You will need to authenticate your users in order to upload data and download an analysis for each individual."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/#tag/3.-Profile-Authentication"},(0,r.kt)("u",null,"API - Authenticate User Profile"))),(0,r.kt)("p",null,"Use your ",(0,r.kt)("inlineCode",{parentName:"p"},"accountToken")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"externalId")," to authenticate a user profile via the API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="REQUEST"',title:'"REQUEST"'},'// POST "/oauth/profile/register"\n// AUTHORIZATION HEADER "Account MY_ACCOUNT_TOKEN"\n\n// BODY\n{\n  "externalId": "MY_EXTERNAL_ID"\n}\n')),(0,r.kt)("admonition",{title:"Choosing your External ID",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"An External ID can be any string you choose to identify a user profile within your organization. This ID must be unique for each of your users."),(0,r.kt)("p",{parentName:"admonition"},"Suggested formats:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"UUID"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"123e4567-e89b-12d3-a456-426614174000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Email"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"user@email.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"User123"))),(0,r.kt)("p",{parentName:"admonition"},"If your user changes devices, make sure to use the same External ID to identify them on the new device.")),(0,r.kt)("p",null,"You will receive a ",(0,r.kt)("inlineCode",{parentName:"p"},"profileToken")," that allows that specific user profile to connect to the Sahha API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="RESPONSE"',title:'"RESPONSE"'},'// 200 OK\n{\n  "profileToken": "MY_PROFILE_TOKEN",\n  "expiresIn": "86400",\n  "tokenType": "Profile",\n  "refreshToken": "MY_REFRESH_TOKEN"\n}\n')),(0,r.kt)("p",null,"You can also authenticate a user profile via the SDK."),(0,r.kt)("admonition",{title:"Authenticate a User Profile with the SDK",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you also install the Sahha SDK in your app, you will need to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"appId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"appSecret"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"externalId")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"authenticate")," method."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"./use-the-sdk/profile"},"Profile - Authenticate"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"step-5-build-with-sahha"},"Step 5) Build with Sahha"),(0,r.kt)("p",null,"It's time to start building with Sahha!"),(0,r.kt)("p",null,"You can either:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A)")," ",(0,r.kt)("a",{parentName:"p",href:"/api/"},"Use the API")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"B)")," ",(0,r.kt)("a",{parentName:"p",href:"./use-the-sdk/configuration"},"Use the SDK")),(0,r.kt)("admonition",{title:"Disclaimer",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We recommend sending behavioral data using one of the available SDK's instead of directly via the API. Behavioral data that is uploaded via the API may differ in the structure and frequency typical of the device sensors. This could lead to reduced accuracy in your data analysis results.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"step-6-try-the-sahha-demo-app"},"Step 6) Try the Sahha Demo App"),(0,r.kt)("p",null,"To see what you can build with Sahha, we recommend trying one of our demo apps."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./try-the-demo"},"Try the Demo App")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"step-7-join-sahha-on-slack"},"Step 7) Join Sahha on Slack"),(0,r.kt)("p",null,"Sahha hosts an open Slack community for developers. Please join us on Slack to get help from the Sahha team and fellow developers to better integrate Sahha into your project."),(0,r.kt)(o.Z,{className:"button button--secondary button--lg",to:"https://join.slack.com/t/sahhacommunity/shared_invite/zt-1w0fmfbvk-qUwQ83tJgXyjT9XSxJvKIw",mdxType:"Link"},"Join Sahha on Slack"))}d.isMDXComponent=!0},3055:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api-credentials-d63f4a12840ec03b4d144e0c753d5874.png"}}]);