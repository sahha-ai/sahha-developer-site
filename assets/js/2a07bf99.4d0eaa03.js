"use strict";(self.webpackChunksahha_developer_site=self.webpackChunksahha_developer_site||[]).push([[5846],{3905:(M,N,j)=>{j.d(N,{Zo:()=>u,kt:()=>L});var D=j(7294);function I(M,N,j){return N in M?Object.defineProperty(M,N,{value:j,enumerable:!0,configurable:!0,writable:!0}):M[N]=j,M}function g(M,N){var j=Object.keys(M);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(M);N&&(D=D.filter((function(N){return Object.getOwnPropertyDescriptor(M,N).enumerable}))),j.push.apply(j,D)}return j}function z(M){for(var N=1;N<arguments.length;N++){var j=null!=arguments[N]?arguments[N]:{};N%2?g(Object(j),!0).forEach((function(N){I(M,N,j[N])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(j)):g(Object(j)).forEach((function(N){Object.defineProperty(M,N,Object.getOwnPropertyDescriptor(j,N))}))}return M}function y(M,N){if(null==M)return{};var j,D,I=function(M,N){if(null==M)return{};var j,D,I={},g=Object.keys(M);for(D=0;D<g.length;D++)j=g[D],N.indexOf(j)>=0||(I[j]=M[j]);return I}(M,N);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(M);for(D=0;D<g.length;D++)j=g[D],N.indexOf(j)>=0||Object.prototype.propertyIsEnumerable.call(M,j)&&(I[j]=M[j])}return I}var T=D.createContext({}),A=function(M){var N=D.useContext(T),j=N;return M&&(j="function"==typeof M?M(N):z(z({},N),M)),j},u=function(M){var N=A(M.components);return D.createElement(T.Provider,{value:N},M.children)},e="mdxType",i={inlineCode:"code",wrapper:function(M){var N=M.children;return D.createElement(D.Fragment,{},N)}},O=D.forwardRef((function(M,N){var j=M.components,I=M.mdxType,g=M.originalType,T=M.parentName,u=y(M,["components","mdxType","originalType","parentName"]),e=A(j),O=I,L=e["".concat(T,".").concat(O)]||e[O]||i[O]||g;return j?D.createElement(L,z(z({ref:N},u),{},{components:j})):D.createElement(L,z({ref:N},u))}));function L(M,N){var j=arguments,I=N&&N.mdxType;if("string"==typeof M||I){var g=j.length,z=new Array(g);z[0]=O;var y={};for(var T in N)hasOwnProperty.call(N,T)&&(y[T]=N[T]);y.originalType=M,y[e]="string"==typeof M?M:I,z[1]=y;for(var A=2;A<g;A++)z[A]=j[A];return D.createElement.apply(null,z)}return D.createElement.apply(null,j)}O.displayName="MDXCreateElement"},3167:(M,N,j)=>{j.d(N,{Z:()=>g});var D=j(7294),I=j(9960);function g(){return D.createElement("div",{style:{textAlign:"center"}},D.createElement("h3",null,"Subscribe to Sahha | News"),D.createElement("p",null,"How digital-phenotyping, artificial intelligence and machine learning will change the world of product development."),D.createElement(I.Z,{className:"button button--secondary button--lg",to:"https://sahha.substack.com/subscribe?utm_medium=web&utm_source=developer-portal"},"Subscribe"))}},814:(M,N,j)=>{j.r(N),j.d(N,{assets:()=>T,contentTitle:()=>z,default:()=>i,frontMatter:()=>g,metadata:()=>y,toc:()=>A});var D=j(7462),I=(j(7294),j(3905));j(3167);const g={slug:"sahha-data-analysis",title:"Sahha Data Analysis",description:"Definitions and understanding the data outputs from the Sahha API",tags:["data science","digital health"]},z=void 0,y={permalink:"/sahha-developer-site/blog/sahha-data-analysis",source:"@site/blog/2022-04-26_2/index.md",title:"Sahha Data Analysis",description:"Definitions and understanding the data outputs from the Sahha API",date:"2022-04-26T00:00:00.000Z",formattedDate:"April 26, 2022",tags:[{label:"data science",permalink:"/sahha-developer-site/blog/tags/data-science"},{label:"digital health",permalink:"/sahha-developer-site/blog/tags/digital-health"}],readingTime:2.16,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"sahha-data-analysis",title:"Sahha Data Analysis",description:"Definitions and understanding the data outputs from the Sahha API",tags:["data science","digital health"]},prevItem:{title:"Sahha Data Science Report 001",permalink:"/sahha-developer-site/blog/data-science-report-001"}},T={authorsImageUrls:[]},A=[],u={toc:A},e="wrapper";function i(M){let{components:N,...g}=M;return(0,I.kt)(e,(0,D.Z)({},u,g,{components:N,mdxType:"MDXLayout"}),(0,I.kt)("hr",null),(0,I.kt)("p",null,(0,I.kt)("em",{parentName:"p"},"Definitions and understanding the data outputs from the Sahha API")),(0,I.kt)("p",null,(0,I.kt)("img",{alt:"Sahha",src:j(4753).Z,width:"800",height:"400"})))}i.isMDXComponent=!0},4753:(M,N,j)=>{j.d(N,{Z:()=>D});const D="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDgwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIxOTUuMTk2IiBjeT0iMjAwLjE5NiIgcj0iOTUuMTk2MSIgZmlsbD0iIzMzMzI0MiIvPgo8cGF0aCBkPSJNMTcyLjQ2OSAyMDQuODc0QzE3My41MjYgMjAxLjAwMyAxNzEuNzU3IDE5OS41MzIgMTY5LjAxOSAyMDEuMDAzTDE0OS4xNTggMjEwLjY4MkMxNDguMjUgMjExLjA5NSAxNDcuNDY0IDIxMS42OTUgMTQ2Ljg2NCAyMTIuNDMyQzE0Ni4yNjMgMjEzLjE3IDE0NS44NjUgMjE0LjAyNCAxNDUuNzAxIDIxNC45MjVDMTQ1LjUzNyAyMTUuODI3IDE0NS42MTIgMjE2Ljc1IDE0NS45MjEgMjE3LjYyMUMxNDYuMjI5IDIxOC40OTEgMTQ2Ljc2MiAyMTkuMjg0IDE0Ny40NzYgMjE5LjkzNUwxNTkuMDc3IDIzMy4zN0MxNTkuNTQ4IDIzMy44MSAxNjAuMTQzIDIzNC4xMjYgMTYwLjggMjM0LjI4M0MxNjEuNDU2IDIzNC40NCAxNjIuMTQ4IDIzNC40MzMgMTYyLjggMjM0LjI2MUMxNjMuNDUyIDIzNC4wODkgMTY0LjAzOSAyMzMuNzYgMTY0LjQ5NyAyMzMuMzA5QzE2NC45NTUgMjMyLjg1OCAxNjUuMjY2IDIzMi4zMDMgMTY1LjM5NiAyMzEuNzA1TDE3Mi40NjkgMjA0Ljg3NFoiIGZpbGw9IiNGREI1OTAiLz4KPHBhdGggZD0iTTE3OC4xNzIgMjUwLjM4QzE3My42MjIgMjQ1LjU5MSAxNzIuNzA4IDI0MS42MDMgMTczLjYyMiAyMzguMzk4TDE4NS4yNDcgMTk2LjgyMkMxODYuMTI4IDE5My45NDMgMTg4LjEyMSAxOTEuNDIxIDE5MC44ODYgMTg5LjY4NkwyMTIuNjU1IDE3OS4zMDdDMjEzLjMzMyAxNzkuMDQ5IDIxNC4wOCAxNzguOTYxIDIxNC44MTIgMTc5LjA1M0MyMTUuNTQ0IDE3OS4xNDYgMjE2LjIzMiAxNzkuNDE1IDIxNi43OTkgMTc5LjgzMUMyMTcuMzY2IDE4MC4yNDcgMjE3Ljc5IDE4MC43OTMgMjE4LjAyMyAxODEuNDA4QzIxOC4yNTYgMTgyLjAyMyAyMTguMjkgMTgyLjY4MyAyMTguMTE5IDE4My4zMTRMMTk2LjE5NyAyNjIuMjI4QzE5Ni4wNDEgMjYyLjgxIDE5NS43MDEgMjYzLjM0MiAxOTUuMjE3IDI2My43NjJDMTk0LjczMiAyNjQuMTgzIDE5NC4xMjMgMjY0LjQ3NSAxOTMuNDU3IDI2NC42MDdDMTkyLjc5MiAyNjQuNzM4IDE5Mi4wOTggMjY0LjcwMyAxOTEuNDU1IDI2NC41MDVDMTkwLjgxMiAyNjQuMzA3IDE5MC4yNDUgMjYzLjk1NSAxODkuODE5IDI2My40ODhMMTc4LjE3MiAyNTAuMzhaIiBmaWxsPSIjRUJFQjRBIi8+CjxwYXRoIGQ9Ik0yNDQuOTk2IDIwMi45ODZDMjQ2LjA3NSAyMDQuNjQyIDI0Ni41NjYgMjA2LjU0OCAyNDYuNDA2IDIwOC40NTVDMjQ2LjI0NSAyMTAuMzYyIDI0NS40NCAyMTIuMTgxIDI0NC4wOTUgMjEzLjY3NkwyMTcuMzI5IDI0My41OThDMjE2LjgyNSAyNDQuMTc1IDIxNi4xMTMgMjQ0LjU4IDIxNS4zMTIgMjQ0Ljc0NkMyMTQuNTExIDI0NC45MTIgMjEzLjY3IDI0NC44MjkgMjEyLjkzIDI0NC41MUMyMTIuMTkgMjQ0LjE5IDIxMS41OTcgMjQzLjY1NSAyMTEuMjUgMjQyLjk5NEMyMTAuOTAyIDI0Mi4zMzIgMjEwLjgyMyAyNDEuNTg1IDIxMS4wMjMgMjQwLjg3N0wyMjYuMDM3IDE4NC42MTFDMjI2LjE5OCAxODMuOTg4IDIyNi41NjkgMTgzLjQyMiAyMjcuMDk5IDE4Mi45ODhDMjI3LjYzIDE4Mi41NTQgMjI4LjI5NSAxODIuMjcyIDIyOS4wMDkgMTgyLjE4QzIyOS43MjMgMTgyLjA4NyAyMzAuNDUyIDE4Mi4xODggMjMxLjEwMSAxODIuNDY5QzIzMS43NDkgMTgyLjc1MSAyMzIuMjg2IDE4My4xOTkgMjMyLjY0MiAxODMuNzU1TDI0NC45OTYgMjAyLjk4NloiIGZpbGw9IiNFOEUxRkUiLz4KPHBhdGggZD0iTTE5Ni4zNSAxNzguNjJDMTk1Ljc0MyAxNzguOTI2IDE5NS4wNTEgMTc5LjA2MyAxOTQuMzU5IDE3OS4wMTdDMTkzLjY2NyAxNzguOTcgMTkzLjAwNSAxNzguNzQxIDE5Mi40NTQgMTc4LjM1N0MxOTEuOTAzIDE3Ny45NzQgMTkxLjQ4NyAxNzcuNDUzIDE5MS4yNTcgMTc2Ljg1N0MxOTEuMDI3IDE3Ni4yNjIgMTkwLjk5MiAxNzUuNjE5IDE5MS4xNTggMTc1LjAwNkwxOTYuNDE0IDE1NS4yODNMMTk5LjEwNiAxNDUuNTY3TDIwMC42MDIgMTQxLjAyQzIwMC42OTcgMTQwLjcxOCAyMDAuODg3IDE0MC40NDcgMjAxLjE0OCAxNDAuMjQxQzIwMS40MSAxNDAuMDM1IDIwMS43MzIgMTM5LjkwNCAyMDIuMDc1IDEzOS44NjNDMjAyLjQxOCAxMzkuODIxIDIwMi43NjcgMTM5Ljg3MiAyMDMuMDc4IDE0MC4wMDlDMjAzLjM5IDE0MC4xNDUgMjAzLjY1MSAxNDAuMzYyIDIwMy44MjggMTQwLjYzMkwyMTguNzg1IDE2My43NzRDMjE5LjAyMyAxNjQuMTUxIDIxOS4xNzYgMTY0LjU2NyAyMTkuMjM1IDE2NC45OThDMjE5LjI5NCAxNjUuNDI5IDIxOS4yNTcgMTY1Ljg2NiAyMTkuMTI4IDE2Ni4yODRDMjE4Ljk5OCAxNjYuNzAyIDIxOC43NzkgMTY3LjA5MiAyMTguNDgxIDE2Ny40MzJDMjE4LjE4NCAxNjcuNzcyIDIxNy44MTUgMTY4LjA1NSAyMTcuMzk3IDE2OC4yNjNMMTk2LjM1IDE3OC42MloiIGZpbGw9IiM5NEUyQkYiLz4KPHBhdGggZD0iTTE1Mi40MjYgMjAwLjA1NUwxNzQuODggMTg5LjI0MkMxNzYuMjE4IDE4OC41OTkgMTc3LjM4OSAxODcuNzA1IDE3OC4zMTEgMTg2LjYyMUMxNzkuMjM0IDE4NS41MzcgMTc5Ljg4NyAxODQuMjg3IDE4MC4yMjggMTgyLjk1NkwxOTIuMDQ5IDEzNi45ODhDMTkyLjE3NiAxMzYuNDMzIDE5Mi4wODEgMTM1Ljg1NSAxOTEuNzgxIDEzNS4zNTZDMTkxLjQ4MSAxMzQuODU3IDE5MC45OTYgMTM0LjQ3IDE5MC40MSAxMzQuMjYyQzE4OS44MjQgMTM0LjA1NCAxODkuMTc1IDEzNC4wMzkgMTg4LjU3OCAxMzQuMjJDMTg3Ljk4MSAxMzQuNDAxIDE4Ny40NzQgMTM0Ljc2NSAxODcuMTQ2IDEzNS4yNDlMMTc0LjY4OSAxNTQuMzU1TDE2NS43OTYgMTY4Ljc5OUwxNDcuNjk0IDE5NS41NjZDMTQ3LjI5IDE5Ni4xNjcgMTQ3LjExNyAxOTYuODcyIDE0Ny4yMDEgMTk3LjU3MUMxNDcuMjg2IDE5OC4yNjkgMTQ3LjYyMiAxOTguOTI0IDE0OC4xNiAxOTkuNDM0QzE0OC42OTcgMTk5Ljk0NCAxNDkuNDA2IDIwMC4yODEgMTUwLjE3NyAyMDAuMzkzQzE1MC45NDcgMjAwLjUwNSAxNTEuNzM4IDIwMC4zODcgMTUyLjQyNiAyMDAuMDU1VjIwMC4wNTVaIiBmaWxsPSIjNURFOEU4Ii8+CjxwYXRoIGQ9Ik0zNTUuMDg2IDI0OEMzNDUuNjM4IDI0OCAzMzcuNzM1IDI0NS45NzggMzMxLjM3NyAyNDEuOTM0QzMyNS4xMDggMjM3LjgwMiAzMjAuNjQ5IDIzMi4yMiAzMTggMjI1LjE4N0wzMzYuMjc4IDIxNC42MzdDMzM5Ljk4NyAyMjMuMTY1IDM0Ni40NzcgMjI3LjQyOSAzNTUuNzQ4IDIyNy40MjlDMzY0LjEzNyAyMjcuNDI5IDM2OC4zMzEgMjI0LjkyMyAzNjguMzMxIDIxOS45MTJDMzY4LjMzMSAyMTcuMTg3IDM2Ni45NjIgMjE1LjA3NyAzNjQuMjI1IDIxMy41ODJDMzYxLjU3NiAyMTIgMzU2LjU0MyAyMTAuMTk4IDM0OS4xMjYgMjA4LjE3NkMzNDUuMjQgMjA3LjEyMSAzNDEuODQxIDIwNS45MzQgMzM4LjkyNyAyMDQuNjE1QzMzNi4wMTMgMjAzLjI5NyAzMzMuMTQzIDIwMS41ODIgMzMwLjMxOCAxOTkuNDczQzMyNy41ODEgMTk3LjI3NSAzMjUuNDYxIDE5NC41NDkgMzIzLjk2IDE5MS4yOTdDMzIyLjU0NyAxODguMDQ0IDMyMS44NDEgMTg0LjMwOCAzMjEuODQxIDE4MC4wODhDMzIxLjg0MSAxNzEuNTYgMzI0Ljg4NyAxNjQuNzQ3IDMzMC45OCAxNTkuNjQ4QzMzNy4xNjEgMTU0LjU0OSAzNDQuNDkgMTUyIDM1Mi45NjcgMTUyQzM2MC41NiAxNTIgMzY3LjI3MSAxNTMuODAyIDM3My4wOTkgMTU3LjQwN0MzNzguOTI3IDE2MC45MjMgMzgzLjUxOCAxNjYuMDY2IDM4Ni44NzQgMTcyLjgzNUwzNjguOTkzIDE4My4yNTNDMzY3LjMxNSAxNzkuNzM2IDM2NS4yNCAxNzcuMDk5IDM2Mi43NjggMTc1LjM0MUMzNjAuMjk1IDE3My40OTUgMzU3LjAyOCAxNzIuNTcxIDM1Mi45NjcgMTcyLjU3MUMzNDkuNzg4IDE3Mi41NzEgMzQ3LjMxNSAxNzMuMjc1IDM0NS41NDkgMTc0LjY4MUMzNDMuODcyIDE3NiAzNDMuMDMzIDE3Ny42MjYgMzQzLjAzMyAxNzkuNTZDMzQzLjAzMyAxODEuODQ2IDM0NC4wOTMgMTgzLjgyNCAzNDYuMjEyIDE4NS40OTVDMzQ4LjQxOSAxODcuMTY1IDM1Mi45MjIgMTg5LjAxMSAzNTkuNzIyIDE5MS4wMzNDMzYzLjQzIDE5Mi4xNzYgMzY2LjMgMTkzLjA5OSAzNjguMzMxIDE5My44MDJDMzcwLjM2MiAxOTQuNTA1IDM3Mi45MjIgMTk1LjY5MiAzNzYuMDEzIDE5Ny4zNjNDMzc5LjE5MiAxOTguOTQ1IDM4MS41NzYgMjAwLjY1OSAzODMuMTY1IDIwMi41MDVDMzg0Ljg0MyAyMDQuMjY0IDM4Ni4zIDIwNi42MzcgMzg3LjUzNiAyMDkuNjI2QzM4OC44NiAyMTIuNTI3IDM4OS41MjMgMjE1Ljg2OCAzODkuNTIzIDIxOS42NDhDMzg5LjUyMyAyMjguNDQgMzg2LjM0NCAyMzUuMzg1IDM3OS45ODYgMjQwLjQ4NEMzNzMuNjI5IDI0NS40OTUgMzY1LjMyOSAyNDggMzU1LjA4NiAyNDhaIiBmaWxsPSIjMzMzMjQyIi8+CjxwYXRoIGQ9Ik00NDguMTQ2IDE4MC4yMkg0NjguMDEzVjI0Ni4xNTRINDQ4LjE0NlYyMzkuOTU2QzQ0My40NjYgMjQ1LjMxOSA0MzYuODg4IDI0OCA0MjguNDExIDI0OEM0MTkuNjY5IDI0OCA0MTIuMjA4IDI0NC42NTkgNDA2LjAyNyAyMzcuOTc4QzM5OS44NDYgMjMxLjIwOSAzOTYuNzU2IDIyMi45NDUgMzk2Ljc1NiAyMTMuMTg3QzM5Ni43NTYgMjAzLjQyOSAzOTkuODQ2IDE5NS4yMDkgNDA2LjAyNyAxODguNTI3QzQxMi4yMDggMTgxLjc1OCA0MTkuNjY5IDE3OC4zNzQgNDI4LjQxMSAxNzguMzc0QzQzNi44ODggMTc4LjM3NCA0NDMuNDY2IDE4MS4wNTUgNDQ4LjE0NiAxODYuNDE4VjE4MC4yMlpNNDIwLjk5NCAyMjQuOTIzQzQyMy45MDggMjI3LjgyNCA0MjcuNzA1IDIyOS4yNzUgNDMyLjM4NCAyMjkuMjc1QzQzNy4wNjQgMjI5LjI3NSA0NDAuODYxIDIyNy44MjQgNDQzLjc3NSAyMjQuOTIzQzQ0Ni42ODkgMjIyLjAyMiA0NDguMTQ2IDIxOC4xMSA0NDguMTQ2IDIxMy4xODdDNDQ4LjE0NiAyMDguMjY0IDQ0Ni42ODkgMjA0LjM1MiA0NDMuNzc1IDIwMS40NTFDNDQwLjg2MSAxOTguNTQ5IDQzNy4wNjQgMTk3LjA5OSA0MzIuMzg0IDE5Ny4wOTlDNDI3LjcwNSAxOTcuMDk5IDQyMy45MDggMTk4LjU0OSA0MjAuOTk0IDIwMS40NTFDNDE4LjA4IDIwNC4zNTIgNDE2LjYyMyAyMDguMjY0IDQxNi42MjMgMjEzLjE4N0M0MTYuNjIzIDIxOC4xMSA0MTguMDggMjIyLjAyMiA0MjAuOTk0IDIyNC45MjNaIiBmaWxsPSIjMzMzMjQyIi8+CjxwYXRoIGQ9Ik01MjAuMDcyIDE3OC4zNzRDNTI3LjEzNiAxNzguMzc0IDUzMy4wMDggMTgwLjc5MSA1MzcuNjg4IDE4NS42MjZDNTQyLjQ1NiAxOTAuNDYyIDU0NC44NCAxOTcuMTQzIDU0NC44NCAyMDUuNjdWMjQ2LjE1NEg1MjQuOTczVjIwOC41NzFDNTI0Ljk3MyAyMDQuNzAzIDUyMy44NjkgMjAxLjc1OCA1MjEuNjYyIDE5OS43MzZDNTE5LjU0MiAxOTcuNjI2IDUxNi44MDUgMTk2LjU3MSA1MTMuNDUgMTk2LjU3MUM1MDkuNjUzIDE5Ni41NzEgNTA2LjY1MSAxOTcuNzE0IDUwNC40NDMgMjAwQzUwMi4yMzYgMjAyLjI4NiA1MDEuMTMyIDIwNS42NyA1MDEuMTMyIDIxMC4xNTRWMjQ2LjE1NEg0ODEuMjY0VjE1My44NDZINTAxLjEzMlYxODYuNDE4QzUwNS4xMDUgMTgxLjA1NSA1MTEuNDE5IDE3OC4zNzQgNTIwLjA3MiAxNzguMzc0WiIgZmlsbD0iIzMzMzI0MiIvPgo8cGF0aCBkPSJNNTk1Ljk2NyAxNzguMzc0QzYwMy4wMzEgMTc4LjM3NCA2MDguOTAzIDE4MC43OTEgNjEzLjU4MiAxODUuNjI2QzYxOC4zNTEgMTkwLjQ2MiA2MjAuNzM1IDE5Ny4xNDMgNjIwLjczNSAyMDUuNjdWMjQ2LjE1NEg2MDAuODY3VjIwOC41NzFDNjAwLjg2NyAyMDQuNzAzIDU5OS43NjMgMjAxLjc1OCA1OTcuNTU2IDE5OS43MzZDNTk1LjQzNyAxOTcuNjI2IDU5Mi43IDE5Ni41NzEgNTg5LjM0NCAxOTYuNTcxQzU4NS41NDcgMTk2LjU3MSA1ODIuNTQ1IDE5Ny43MTQgNTgwLjMzOCAyMDBDNTc4LjEzIDIwMi4yODYgNTc3LjAyNiAyMDUuNjcgNTc3LjAyNiAyMTAuMTU0VjI0Ni4xNTRINTU3LjE1OVYxNTMuODQ2SDU3Ny4wMjZWMTg2LjQxOEM1ODEgMTgxLjA1NSA1ODcuMzEzIDE3OC4zNzQgNTk1Ljk2NyAxNzguMzc0WiIgZmlsbD0iIzMzMzI0MiIvPgo8cGF0aCBkPSJNNjgxLjEzMyAxODAuMjJINzAxVjI0Ni4xNTRINjgxLjEzM1YyMzkuOTU2QzY3Ni40NTMgMjQ1LjMxOSA2NjkuODc0IDI0OCA2NjEuMzk4IDI0OEM2NTIuNjU2IDI0OCA2NDUuMTk1IDI0NC42NTkgNjM5LjAxNCAyMzcuOTc4QzYzMi44MzMgMjMxLjIwOSA2MjkuNzQyIDIyMi45NDUgNjI5Ljc0MiAyMTMuMTg3QzYyOS43NDIgMjAzLjQyOSA2MzIuODMzIDE5NS4yMDkgNjM5LjAxNCAxODguNTI3QzY0NS4xOTUgMTgxLjc1OCA2NTIuNjU2IDE3OC4zNzQgNjYxLjM5OCAxNzguMzc0QzY2OS44NzQgMTc4LjM3NCA2NzYuNDUzIDE4MS4wNTUgNjgxLjEzMyAxODYuNDE4VjE4MC4yMlpNNjUzLjk4IDIyNC45MjNDNjU2Ljg5NCAyMjcuODI0IDY2MC42OTEgMjI5LjI3NSA2NjUuMzcxIDIyOS4yNzVDNjcwLjA1MSAyMjkuMjc1IDY3My44NDggMjI3LjgyNCA2NzYuNzYyIDIyNC45MjNDNjc5LjY3NiAyMjIuMDIyIDY4MS4xMzMgMjE4LjExIDY4MS4xMzMgMjEzLjE4N0M2ODEuMTMzIDIwOC4yNjQgNjc5LjY3NiAyMDQuMzUyIDY3Ni43NjIgMjAxLjQ1MUM2NzMuODQ4IDE5OC41NDkgNjcwLjA1MSAxOTcuMDk5IDY2NS4zNzEgMTk3LjA5OUM2NjAuNjkxIDE5Ny4wOTkgNjU2Ljg5NCAxOTguNTQ5IDY1My45OCAyMDEuNDUxQzY1MS4wNjcgMjA0LjM1MiA2NDkuNjEgMjA4LjI2NCA2NDkuNjEgMjEzLjE4N0M2NDkuNjEgMjE4LjExIDY1MS4wNjcgMjIyLjAyMiA2NTMuOTggMjI0LjkyM1oiIGZpbGw9IiMzMzMyNDIiLz4KPC9zdmc+Cg=="}}]);