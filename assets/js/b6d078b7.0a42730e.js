"use strict";(self.webpackChunksahha_developer_site=self.webpackChunksahha_developer_site||[]).push([[526],{3905:(e,M,t)=>{t.d(M,{Zo:()=>c,kt:()=>D});var i=t(7294);function a(e,M,t){return M in e?Object.defineProperty(e,M,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[M]=t,e}function s(e,M){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);M&&(i=i.filter((function(M){return Object.getOwnPropertyDescriptor(e,M).enumerable}))),t.push.apply(t,i)}return t}function n(e){for(var M=1;M<arguments.length;M++){var t=null!=arguments[M]?arguments[M]:{};M%2?s(Object(t),!0).forEach((function(M){a(e,M,t[M])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(M){Object.defineProperty(e,M,Object.getOwnPropertyDescriptor(t,M))}))}return e}function N(e,M){if(null==e)return{};var t,i,a=function(e,M){if(null==e)return{};var t,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],M.indexOf(t)>=0||(a[t]=e[t]);return a}(e,M);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],M.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var r=i.createContext({}),l=function(e){var M=i.useContext(r),t=M;return e&&(t="function"==typeof e?e(M):n(n({},M),e)),t},c=function(e){var M=l(e.components);return i.createElement(r.Provider,{value:M},e.children)},o="mdxType",j={inlineCode:"code",wrapper:function(e){var M=e.children;return i.createElement(i.Fragment,{},M)}},u=i.forwardRef((function(e,M){var t=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,c=N(e,["components","mdxType","originalType","parentName"]),o=l(t),u=a,D=o["".concat(r,".").concat(u)]||o[u]||j[u]||s;return t?i.createElement(D,n(n({ref:M},c),{},{components:t})):i.createElement(D,n({ref:M},c))}));function D(e,M){var t=arguments,a=M&&M.mdxType;if("string"==typeof e||a){var s=t.length,n=new Array(s);n[0]=u;var N={};for(var r in M)hasOwnProperty.call(M,r)&&(N[r]=M[r]);N.originalType=e,N[o]="string"==typeof e?e:a,n[1]=N;for(var l=2;l<s;l++)n[l]=t[l];return i.createElement.apply(null,n)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3167:(e,M,t)=>{t.d(M,{Z:()=>s});var i=t(7294),a=t(9960);function s(){return i.createElement("div",{style:{textAlign:"center"}},i.createElement("h3",null,"Subscribe to Sahha | News"),i.createElement("p",null,"How digital-phenotyping, artificial intelligence and machine learning will change the world of product development."),i.createElement(a.Z,{className:"button button--secondary button--lg",to:"https://sahha.substack.com/subscribe?utm_medium=web&utm_source=developer-portal"},"Subscribe"))}},136:(e,M,t)=>{t.r(M),t.d(M,{assets:()=>l,contentTitle:()=>N,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var i=t(7462),a=(t(7294),t(3905)),s=t(3167);const n={slug:"understanding-a-simple-model",title:"Understanding a simple model",description:"This article discusses some basic data science that is required to understand binary classification model outputs.",tags:["data science"]},N=void 0,r={permalink:"/sahha-developer-site/blog/understanding-a-simple-model",source:"@site/blog/2022-07-07/index.md",title:"Understanding a simple model",description:"This article discusses some basic data science that is required to understand binary classification model outputs.",date:"2022-07-07T00:00:00.000Z",formattedDate:"July 7, 2022",tags:[{label:"data science",permalink:"/sahha-developer-site/blog/tags/data-science"}],readingTime:5.32,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"understanding-a-simple-model",title:"Understanding a simple model",description:"This article discusses some basic data science that is required to understand binary classification model outputs.",tags:["data science"]},prevItem:{title:"The burden of anxiety and depressive disorders",permalink:"/sahha-developer-site/blog/the-burden-of-anxiety-and-depressive"}},l={authorsImageUrls:[]},c=[{value:"Terminology:",id:"terminology",level:2},{value:"Example data set",id:"example-data-set",level:2},{value:"Visualising the data set",id:"visualising-the-data-set",level:2},{value:"The model",id:"the-model",level:2},{value:"Determining accuracy",id:"determining-accuracy",level:2},{value:"Determining recall",id:"determining-recall",level:2},{value:"Determining precision",id:"determining-precision",level:2},{value:"Improving precision",id:"improving-precision",level:2},{value:"What is \u201cthe precision-recall tradeoff\u201d?",id:"what-is-the-precision-recall-tradeoff",level:2},{value:"Improving Recall",id:"improving-recall",level:2},{value:"Conclusion",id:"conclusion",level:2}],o={toc:c},j="wrapper";function u(e){let{components:M,...n}=e;return(0,a.kt)(j,(0,i.Z)({},o,n,{components:M,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This article discusses some basic data science that is required to understand binary classification model outputs.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sahha",src:t(7864).Z,width:"800",height:"400"})),(0,a.kt)("p",null,"In this article we will discuss some basic data-science metrics and terms and use an example dataset to understand how different metrics are calculated with a binary classification model."),(0,a.kt)("p",null,"Accuracy is just one of many metrics that are important when it comes to creating successful models and this article aims to help simply what metrics matter and what they mean."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"this example does not reflect Sahha\u2019s model performance."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"this article is written to help non-data modelling experts learn more about the subject. More in-depth articles will be available soon.")))),(0,a.kt)("h2",{id:"terminology"},"Terminology:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Classification:")," This is the category (or label) a model assigns to an observation (or input)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Label:")," Often used synonymously with \u201cclass\u201d, label is the variable we wish to predict with the model. E.g., The Sahha binary classifier classifies input data into classes/labels: (depressed, not-depressed)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Observation:")," A data point"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Class imbalance:")," Where the class distribution is not equal and is instead skewed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"True positives:")," An outcome where the model correctly predicts the positive class"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"True negatives:")," An outcome where the model correctly predicts the negative class"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"False positives:")," An outcome where the model incorrectly predicts the positive class"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"False negatives:")," An outcome where the model incorrectly predicts the negative class"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Dataset:")," A collection of data. For the purposes of Sahha\u2019s model, the dataset used to train and evaluate a model\u2019s performance is a tabular dataset, which is data organised into rows representing observations and columns representing attributes for those observations."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Accuracy:")," The fraction of classifications a model made correctly."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Recall:")," For a given class, recall is the number of correct classifications made for that class divided by the total number of observations that are in that class."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Precision:")," For a given class, precision is the number of correct classifications made for that class divided by the total number of observations the model predicted to be that class."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Decision threshold:")," The tolerance for which the model uses when making a classification based on the predicted probabilities for each class."),(0,a.kt)("p",null,"Confusing? Let\u2019s understand it all with some examples."),(0,a.kt)("h2",{id:"example-data-set"},"Example data set"),(0,a.kt)("p",null,"Our example data set will consist of 100 observations. These observations are labeled as either ",(0,a.kt)("inlineCode",{parentName:"p"},"depressed")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"not-depressed"),"."),(0,a.kt)("p",null,"The dataset is imbalanced, in this case, it means that there are more ",(0,a.kt)("inlineCode",{parentName:"p"},"not-depressed")," samples than there are ",(0,a.kt)("inlineCode",{parentName:"p"},"depressed")," samples."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"100 Samples")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"73 not-depressed")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"27 depressed")),(0,a.kt)("h2",{id:"visualising-the-data-set"},"Visualising the data set"),(0,a.kt)("p",null,"The purple area represents the observations that the model classified as depressed, and similarly, the green area represents the observations the model classified as not-depressed."),(0,a.kt)("p",null,"Within the purple area the data has been classified as such:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"22 depressed (true positives)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"3 non-depressed (false positives)"))),(0,a.kt)("p",null,"Within the green are the data has been classified as such:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"70 non-depressed (true negatives)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"5 depressed (false negatives)"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(7827).Z,width:"899",height:"495"})),(0,a.kt)("h2",{id:"the-model"},"The model"),(0,a.kt)("p",null,"The model is a binary classification model, in that it only classifies observations as either one of two classes: depressed or not-depressed."),(0,a.kt)("h2",{id:"determining-accuracy"},"Determining accuracy"),(0,a.kt)("p",null,"Accuracy is determined by the number of correct classifications, divided by the total number of classifications. In this case, 70 observations are correctly classified as not-depressed plus 22 correctly classified as depressed, this equals 92 correct classifications in total."),(0,a.kt)("p",null,"The equation is simple, 92/100=0.92\n92 correct classifications divided by 100 classifications equals 0.92 or 92%"),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Let\u2019s pause, because these next parts are important")," when looking at model metrics. Some models have trade-offs between recall and precision. For example, depending on the accuracy performance of the model tightening or loosening the decision threshold of the model will allow you to increase or decrease precision or recall."),(0,a.kt)("p",{parentName:"blockquote"},"What\u2019s a real use-case for this? Let\u2019s say it\u2019s of high importance that your model performs well in identifying correctly classified depressed data-points (true-positives) because you\u2019d rather be certain you have a depressed data-point than perhaps not having one. In this case high precision would be required, potentially sacrificing recall.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"determining-recall"},"Determining recall"),(0,a.kt)("p",null,"First, pick which class you want to calculate the recall on. Let\u2019s use the depressed class for this example (purple outline)."),(0,a.kt)("p",null,"Recall is determined by the number of depressed classifications that were correct divided by the total number of depressed people in the sample."),(0,a.kt)("p",null,"The equation is simple, 22/27=0.81."),(0,a.kt)("p",null,"22 correct classifications divided by 27 total depressed classifications equals ~0.81 or approx. 81%."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(1389).Z,width:"899",height:"495"})),(0,a.kt)("h2",{id:"determining-precision"},"Determining precision"),(0,a.kt)("p",null,"First, focus on what class you wish to find the precision for. Let\u2019s again use the depressed class and not consider any of the non-depressed classifications (now faded out."),(0,a.kt)("p",null,"Precision is determined by the number of depressed classifications that were classed correctly within all of the depressed classifications, divided by the overall number of depressed classifications."),(0,a.kt)("p",null,"22 correct depressed classifications divided by 25 total depressed classifications equals precision of 0.88."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(6276).Z,width:"899",height:"495"})),(0,a.kt)("h2",{id:"improving-precision"},"Improving precision"),(0,a.kt)("p",null,"Let\u2019s again use the depressed class and not consider the non-depressed classifications."),(0,a.kt)("p",null,"But this time we need to shrink the decision threshold. After doing so, we\u2019ve reduced\nthe number of depressed classifications down to just 10. Of which, 9 are correctly classified as depressed and the remaining 1 is not."),(0,a.kt)("p",null,"Now perform the same equation."),(0,a.kt)("p",null,"9 correct classifications divided by 10 total depressed classifications equals 0.90."),(0,a.kt)("p",null,"However, what you\u2019ll notice is that we have ignored 13 correct depressed classifications because of our more strict decision threshold, this has likely changed the recall, or \u201cthe precision-recall tradeoff\u201d. Let\u2019s see if that is true."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(3977).Z,width:"907",height:"530"})),(0,a.kt)("h2",{id:"what-is-the-precision-recall-tradeoff"},"What is \u201cthe precision-recall tradeoff\u201d?"),(0,a.kt)("p",null,"There is a nice tradeoff between recall and precision. In that, generally, if we want more precision our recall may suffer and visa-versa."),(0,a.kt)("p",null,"The recall of this model is now calculated as:"),(0,a.kt)("p",null,"10 correct depressed classifications divided by 27 total depressed classification, which equates to ~0.37 or approx. 37%."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(7018).Z,width:"907",height:"530"})),(0,a.kt)("h2",{id:"improving-recall"},"Improving Recall"),(0,a.kt)("p",null,"Now in order to improve recall, we can similarly adjust the decision threshold to accommodate more depressed classifications."),(0,a.kt)("p",null,"In this model, all depressed classifications have been correctly classified."),(0,a.kt)("p",null,"27 correct classifications divided by 27 total depressed classifications equals 1 or 100%."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(2622).Z,width:"899",height:"528"})),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Hopefully this article helps you understand core binary model metrics, and why they are important to how they perform. Of course the development of these models is much more complicated, we will release an article on this topic in the future."),(0,a.kt)("hr",null),(0,a.kt)(s.Z,{mdxType:"SubscribeButton"}))}u.isMDXComponent=!0},7827:(e,M,t)=>{t.d(M,{Z:()=>i});const i=t.p+"assets/images/image_1-8e8880c85cdb770f6d4a632ec69179bf.png"},1389:(e,M,t)=>{t.d(M,{Z:()=>i});const i=t.p+"assets/images/image_2-3f7da71a610750995c1f9776c31ee737.png"},6276:(e,M,t)=>{t.d(M,{Z:()=>i});const i=t.p+"assets/images/image_3-62a9c045c615c3a93026f37bd00650e2.png"},3977:(e,M,t)=>{t.d(M,{Z:()=>i});const i=t.p+"assets/images/image_4-11223ec5f3b1c4d39240ca7e6f6f088e.png"},7018:(e,M,t)=>{t.d(M,{Z:()=>i});const i=t.p+"assets/images/image_5-c2b796a94095cb14aeb5053308a65e5c.png"},2622:(e,M,t)=>{t.d(M,{Z:()=>i});const i=t.p+"assets/images/image_6-e4d155bfd56b4cc807c8e933cac9b30a.png"},7864:(e,M,t)=>{t.d(M,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDgwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIxOTUuMTk2IiBjeT0iMjAwLjE5NiIgcj0iOTUuMTk2MSIgZmlsbD0iIzMzMzI0MiIvPgo8cGF0aCBkPSJNMTcyLjQ2OSAyMDQuODc0QzE3My41MjYgMjAxLjAwMyAxNzEuNzU3IDE5OS41MzIgMTY5LjAxOSAyMDEuMDAzTDE0OS4xNTggMjEwLjY4MkMxNDguMjUgMjExLjA5NSAxNDcuNDY0IDIxMS42OTUgMTQ2Ljg2NCAyMTIuNDMyQzE0Ni4yNjMgMjEzLjE3IDE0NS44NjUgMjE0LjAyNCAxNDUuNzAxIDIxNC45MjVDMTQ1LjUzNyAyMTUuODI3IDE0NS42MTIgMjE2Ljc1IDE0NS45MjEgMjE3LjYyMUMxNDYuMjI5IDIxOC40OTEgMTQ2Ljc2MiAyMTkuMjg0IDE0Ny40NzYgMjE5LjkzNUwxNTkuMDc3IDIzMy4zN0MxNTkuNTQ4IDIzMy44MSAxNjAuMTQzIDIzNC4xMjYgMTYwLjggMjM0LjI4M0MxNjEuNDU2IDIzNC40NCAxNjIuMTQ4IDIzNC40MzMgMTYyLjggMjM0LjI2MUMxNjMuNDUyIDIzNC4wODkgMTY0LjAzOSAyMzMuNzYgMTY0LjQ5NyAyMzMuMzA5QzE2NC45NTUgMjMyLjg1OCAxNjUuMjY2IDIzMi4zMDMgMTY1LjM5NiAyMzEuNzA1TDE3Mi40NjkgMjA0Ljg3NFoiIGZpbGw9IiNGREI1OTAiLz4KPHBhdGggZD0iTTE3OC4xNzIgMjUwLjM4QzE3My42MjIgMjQ1LjU5MSAxNzIuNzA4IDI0MS42MDMgMTczLjYyMiAyMzguMzk4TDE4NS4yNDcgMTk2LjgyMkMxODYuMTI4IDE5My45NDMgMTg4LjEyMSAxOTEuNDIxIDE5MC44ODYgMTg5LjY4NkwyMTIuNjU1IDE3OS4zMDdDMjEzLjMzMyAxNzkuMDQ5IDIxNC4wOCAxNzguOTYxIDIxNC44MTIgMTc5LjA1M0MyMTUuNTQ0IDE3OS4xNDYgMjE2LjIzMiAxNzkuNDE1IDIxNi43OTkgMTc5LjgzMUMyMTcuMzY2IDE4MC4yNDcgMjE3Ljc5IDE4MC43OTMgMjE4LjAyMyAxODEuNDA4QzIxOC4yNTYgMTgyLjAyMyAyMTguMjkgMTgyLjY4MyAyMTguMTE5IDE4My4zMTRMMTk2LjE5NyAyNjIuMjI4QzE5Ni4wNDEgMjYyLjgxIDE5NS43MDEgMjYzLjM0MiAxOTUuMjE3IDI2My43NjJDMTk0LjczMiAyNjQuMTgzIDE5NC4xMjMgMjY0LjQ3NSAxOTMuNDU3IDI2NC42MDdDMTkyLjc5MiAyNjQuNzM4IDE5Mi4wOTggMjY0LjcwMyAxOTEuNDU1IDI2NC41MDVDMTkwLjgxMiAyNjQuMzA3IDE5MC4yNDUgMjYzLjk1NSAxODkuODE5IDI2My40ODhMMTc4LjE3MiAyNTAuMzhaIiBmaWxsPSIjRUJFQjRBIi8+CjxwYXRoIGQ9Ik0yNDQuOTk2IDIwMi45ODZDMjQ2LjA3NSAyMDQuNjQyIDI0Ni41NjYgMjA2LjU0OCAyNDYuNDA2IDIwOC40NTVDMjQ2LjI0NSAyMTAuMzYyIDI0NS40NCAyMTIuMTgxIDI0NC4wOTUgMjEzLjY3NkwyMTcuMzI5IDI0My41OThDMjE2LjgyNSAyNDQuMTc1IDIxNi4xMTMgMjQ0LjU4IDIxNS4zMTIgMjQ0Ljc0NkMyMTQuNTExIDI0NC45MTIgMjEzLjY3IDI0NC44MjkgMjEyLjkzIDI0NC41MUMyMTIuMTkgMjQ0LjE5IDIxMS41OTcgMjQzLjY1NSAyMTEuMjUgMjQyLjk5NEMyMTAuOTAyIDI0Mi4zMzIgMjEwLjgyMyAyNDEuNTg1IDIxMS4wMjMgMjQwLjg3N0wyMjYuMDM3IDE4NC42MTFDMjI2LjE5OCAxODMuOTg4IDIyNi41NjkgMTgzLjQyMiAyMjcuMDk5IDE4Mi45ODhDMjI3LjYzIDE4Mi41NTQgMjI4LjI5NSAxODIuMjcyIDIyOS4wMDkgMTgyLjE4QzIyOS43MjMgMTgyLjA4NyAyMzAuNDUyIDE4Mi4xODggMjMxLjEwMSAxODIuNDY5QzIzMS43NDkgMTgyLjc1MSAyMzIuMjg2IDE4My4xOTkgMjMyLjY0MiAxODMuNzU1TDI0NC45OTYgMjAyLjk4NloiIGZpbGw9IiNFOEUxRkUiLz4KPHBhdGggZD0iTTE5Ni4zNSAxNzguNjJDMTk1Ljc0MyAxNzguOTI2IDE5NS4wNTEgMTc5LjA2MyAxOTQuMzU5IDE3OS4wMTdDMTkzLjY2NyAxNzguOTcgMTkzLjAwNSAxNzguNzQxIDE5Mi40NTQgMTc4LjM1N0MxOTEuOTAzIDE3Ny45NzQgMTkxLjQ4NyAxNzcuNDUzIDE5MS4yNTcgMTc2Ljg1N0MxOTEuMDI3IDE3Ni4yNjIgMTkwLjk5MiAxNzUuNjE5IDE5MS4xNTggMTc1LjAwNkwxOTYuNDE0IDE1NS4yODNMMTk5LjEwNiAxNDUuNTY3TDIwMC42MDIgMTQxLjAyQzIwMC42OTcgMTQwLjcxOCAyMDAuODg3IDE0MC40NDcgMjAxLjE0OCAxNDAuMjQxQzIwMS40MSAxNDAuMDM1IDIwMS43MzIgMTM5LjkwNCAyMDIuMDc1IDEzOS44NjNDMjAyLjQxOCAxMzkuODIxIDIwMi43NjcgMTM5Ljg3MiAyMDMuMDc4IDE0MC4wMDlDMjAzLjM5IDE0MC4xNDUgMjAzLjY1MSAxNDAuMzYyIDIwMy44MjggMTQwLjYzMkwyMTguNzg1IDE2My43NzRDMjE5LjAyMyAxNjQuMTUxIDIxOS4xNzYgMTY0LjU2NyAyMTkuMjM1IDE2NC45OThDMjE5LjI5NCAxNjUuNDI5IDIxOS4yNTcgMTY1Ljg2NiAyMTkuMTI4IDE2Ni4yODRDMjE4Ljk5OCAxNjYuNzAyIDIxOC43NzkgMTY3LjA5MiAyMTguNDgxIDE2Ny40MzJDMjE4LjE4NCAxNjcuNzcyIDIxNy44MTUgMTY4LjA1NSAyMTcuMzk3IDE2OC4yNjNMMTk2LjM1IDE3OC42MloiIGZpbGw9IiM5NEUyQkYiLz4KPHBhdGggZD0iTTE1Mi40MjYgMjAwLjA1NUwxNzQuODggMTg5LjI0MkMxNzYuMjE4IDE4OC41OTkgMTc3LjM4OSAxODcuNzA1IDE3OC4zMTEgMTg2LjYyMUMxNzkuMjM0IDE4NS41MzcgMTc5Ljg4NyAxODQuMjg3IDE4MC4yMjggMTgyLjk1NkwxOTIuMDQ5IDEzNi45ODhDMTkyLjE3NiAxMzYuNDMzIDE5Mi4wODEgMTM1Ljg1NSAxOTEuNzgxIDEzNS4zNTZDMTkxLjQ4MSAxMzQuODU3IDE5MC45OTYgMTM0LjQ3IDE5MC40MSAxMzQuMjYyQzE4OS44MjQgMTM0LjA1NCAxODkuMTc1IDEzNC4wMzkgMTg4LjU3OCAxMzQuMjJDMTg3Ljk4MSAxMzQuNDAxIDE4Ny40NzQgMTM0Ljc2NSAxODcuMTQ2IDEzNS4yNDlMMTc0LjY4OSAxNTQuMzU1TDE2NS43OTYgMTY4Ljc5OUwxNDcuNjk0IDE5NS41NjZDMTQ3LjI5IDE5Ni4xNjcgMTQ3LjExNyAxOTYuODcyIDE0Ny4yMDEgMTk3LjU3MUMxNDcuMjg2IDE5OC4yNjkgMTQ3LjYyMiAxOTguOTI0IDE0OC4xNiAxOTkuNDM0QzE0OC42OTcgMTk5Ljk0NCAxNDkuNDA2IDIwMC4yODEgMTUwLjE3NyAyMDAuMzkzQzE1MC45NDcgMjAwLjUwNSAxNTEuNzM4IDIwMC4zODcgMTUyLjQyNiAyMDAuMDU1VjIwMC4wNTVaIiBmaWxsPSIjNURFOEU4Ii8+CjxwYXRoIGQ9Ik0zNTUuMDg2IDI0OEMzNDUuNjM4IDI0OCAzMzcuNzM1IDI0NS45NzggMzMxLjM3NyAyNDEuOTM0QzMyNS4xMDggMjM3LjgwMiAzMjAuNjQ5IDIzMi4yMiAzMTggMjI1LjE4N0wzMzYuMjc4IDIxNC42MzdDMzM5Ljk4NyAyMjMuMTY1IDM0Ni40NzcgMjI3LjQyOSAzNTUuNzQ4IDIyNy40MjlDMzY0LjEzNyAyMjcuNDI5IDM2OC4zMzEgMjI0LjkyMyAzNjguMzMxIDIxOS45MTJDMzY4LjMzMSAyMTcuMTg3IDM2Ni45NjIgMjE1LjA3NyAzNjQuMjI1IDIxMy41ODJDMzYxLjU3NiAyMTIgMzU2LjU0MyAyMTAuMTk4IDM0OS4xMjYgMjA4LjE3NkMzNDUuMjQgMjA3LjEyMSAzNDEuODQxIDIwNS45MzQgMzM4LjkyNyAyMDQuNjE1QzMzNi4wMTMgMjAzLjI5NyAzMzMuMTQzIDIwMS41ODIgMzMwLjMxOCAxOTkuNDczQzMyNy41ODEgMTk3LjI3NSAzMjUuNDYxIDE5NC41NDkgMzIzLjk2IDE5MS4yOTdDMzIyLjU0NyAxODguMDQ0IDMyMS44NDEgMTg0LjMwOCAzMjEuODQxIDE4MC4wODhDMzIxLjg0MSAxNzEuNTYgMzI0Ljg4NyAxNjQuNzQ3IDMzMC45OCAxNTkuNjQ4QzMzNy4xNjEgMTU0LjU0OSAzNDQuNDkgMTUyIDM1Mi45NjcgMTUyQzM2MC41NiAxNTIgMzY3LjI3MSAxNTMuODAyIDM3My4wOTkgMTU3LjQwN0MzNzguOTI3IDE2MC45MjMgMzgzLjUxOCAxNjYuMDY2IDM4Ni44NzQgMTcyLjgzNUwzNjguOTkzIDE4My4yNTNDMzY3LjMxNSAxNzkuNzM2IDM2NS4yNCAxNzcuMDk5IDM2Mi43NjggMTc1LjM0MUMzNjAuMjk1IDE3My40OTUgMzU3LjAyOCAxNzIuNTcxIDM1Mi45NjcgMTcyLjU3MUMzNDkuNzg4IDE3Mi41NzEgMzQ3LjMxNSAxNzMuMjc1IDM0NS41NDkgMTc0LjY4MUMzNDMuODcyIDE3NiAzNDMuMDMzIDE3Ny42MjYgMzQzLjAzMyAxNzkuNTZDMzQzLjAzMyAxODEuODQ2IDM0NC4wOTMgMTgzLjgyNCAzNDYuMjEyIDE4NS40OTVDMzQ4LjQxOSAxODcuMTY1IDM1Mi45MjIgMTg5LjAxMSAzNTkuNzIyIDE5MS4wMzNDMzYzLjQzIDE5Mi4xNzYgMzY2LjMgMTkzLjA5OSAzNjguMzMxIDE5My44MDJDMzcwLjM2MiAxOTQuNTA1IDM3Mi45MjIgMTk1LjY5MiAzNzYuMDEzIDE5Ny4zNjNDMzc5LjE5MiAxOTguOTQ1IDM4MS41NzYgMjAwLjY1OSAzODMuMTY1IDIwMi41MDVDMzg0Ljg0MyAyMDQuMjY0IDM4Ni4zIDIwNi42MzcgMzg3LjUzNiAyMDkuNjI2QzM4OC44NiAyMTIuNTI3IDM4OS41MjMgMjE1Ljg2OCAzODkuNTIzIDIxOS42NDhDMzg5LjUyMyAyMjguNDQgMzg2LjM0NCAyMzUuMzg1IDM3OS45ODYgMjQwLjQ4NEMzNzMuNjI5IDI0NS40OTUgMzY1LjMyOSAyNDggMzU1LjA4NiAyNDhaIiBmaWxsPSIjMzMzMjQyIi8+CjxwYXRoIGQ9Ik00NDguMTQ2IDE4MC4yMkg0NjguMDEzVjI0Ni4xNTRINDQ4LjE0NlYyMzkuOTU2QzQ0My40NjYgMjQ1LjMxOSA0MzYuODg4IDI0OCA0MjguNDExIDI0OEM0MTkuNjY5IDI0OCA0MTIuMjA4IDI0NC42NTkgNDA2LjAyNyAyMzcuOTc4QzM5OS44NDYgMjMxLjIwOSAzOTYuNzU2IDIyMi45NDUgMzk2Ljc1NiAyMTMuMTg3QzM5Ni43NTYgMjAzLjQyOSAzOTkuODQ2IDE5NS4yMDkgNDA2LjAyNyAxODguNTI3QzQxMi4yMDggMTgxLjc1OCA0MTkuNjY5IDE3OC4zNzQgNDI4LjQxMSAxNzguMzc0QzQzNi44ODggMTc4LjM3NCA0NDMuNDY2IDE4MS4wNTUgNDQ4LjE0NiAxODYuNDE4VjE4MC4yMlpNNDIwLjk5NCAyMjQuOTIzQzQyMy45MDggMjI3LjgyNCA0MjcuNzA1IDIyOS4yNzUgNDMyLjM4NCAyMjkuMjc1QzQzNy4wNjQgMjI5LjI3NSA0NDAuODYxIDIyNy44MjQgNDQzLjc3NSAyMjQuOTIzQzQ0Ni42ODkgMjIyLjAyMiA0NDguMTQ2IDIxOC4xMSA0NDguMTQ2IDIxMy4xODdDNDQ4LjE0NiAyMDguMjY0IDQ0Ni42ODkgMjA0LjM1MiA0NDMuNzc1IDIwMS40NTFDNDQwLjg2MSAxOTguNTQ5IDQzNy4wNjQgMTk3LjA5OSA0MzIuMzg0IDE5Ny4wOTlDNDI3LjcwNSAxOTcuMDk5IDQyMy45MDggMTk4LjU0OSA0MjAuOTk0IDIwMS40NTFDNDE4LjA4IDIwNC4zNTIgNDE2LjYyMyAyMDguMjY0IDQxNi42MjMgMjEzLjE4N0M0MTYuNjIzIDIxOC4xMSA0MTguMDggMjIyLjAyMiA0MjAuOTk0IDIyNC45MjNaIiBmaWxsPSIjMzMzMjQyIi8+CjxwYXRoIGQ9Ik01MjAuMDcyIDE3OC4zNzRDNTI3LjEzNiAxNzguMzc0IDUzMy4wMDggMTgwLjc5MSA1MzcuNjg4IDE4NS42MjZDNTQyLjQ1NiAxOTAuNDYyIDU0NC44NCAxOTcuMTQzIDU0NC44NCAyMDUuNjdWMjQ2LjE1NEg1MjQuOTczVjIwOC41NzFDNTI0Ljk3MyAyMDQuNzAzIDUyMy44NjkgMjAxLjc1OCA1MjEuNjYyIDE5OS43MzZDNTE5LjU0MiAxOTcuNjI2IDUxNi44MDUgMTk2LjU3MSA1MTMuNDUgMTk2LjU3MUM1MDkuNjUzIDE5Ni41NzEgNTA2LjY1MSAxOTcuNzE0IDUwNC40NDMgMjAwQzUwMi4yMzYgMjAyLjI4NiA1MDEuMTMyIDIwNS42NyA1MDEuMTMyIDIxMC4xNTRWMjQ2LjE1NEg0ODEuMjY0VjE1My44NDZINTAxLjEzMlYxODYuNDE4QzUwNS4xMDUgMTgxLjA1NSA1MTEuNDE5IDE3OC4zNzQgNTIwLjA3MiAxNzguMzc0WiIgZmlsbD0iIzMzMzI0MiIvPgo8cGF0aCBkPSJNNTk1Ljk2NyAxNzguMzc0QzYwMy4wMzEgMTc4LjM3NCA2MDguOTAzIDE4MC43OTEgNjEzLjU4MiAxODUuNjI2QzYxOC4zNTEgMTkwLjQ2MiA2MjAuNzM1IDE5Ny4xNDMgNjIwLjczNSAyMDUuNjdWMjQ2LjE1NEg2MDAuODY3VjIwOC41NzFDNjAwLjg2NyAyMDQuNzAzIDU5OS43NjMgMjAxLjc1OCA1OTcuNTU2IDE5OS43MzZDNTk1LjQzNyAxOTcuNjI2IDU5Mi43IDE5Ni41NzEgNTg5LjM0NCAxOTYuNTcxQzU4NS41NDcgMTk2LjU3MSA1ODIuNTQ1IDE5Ny43MTQgNTgwLjMzOCAyMDBDNTc4LjEzIDIwMi4yODYgNTc3LjAyNiAyMDUuNjcgNTc3LjAyNiAyMTAuMTU0VjI0Ni4xNTRINTU3LjE1OVYxNTMuODQ2SDU3Ny4wMjZWMTg2LjQxOEM1ODEgMTgxLjA1NSA1ODcuMzEzIDE3OC4zNzQgNTk1Ljk2NyAxNzguMzc0WiIgZmlsbD0iIzMzMzI0MiIvPgo8cGF0aCBkPSJNNjgxLjEzMyAxODAuMjJINzAxVjI0Ni4xNTRINjgxLjEzM1YyMzkuOTU2QzY3Ni40NTMgMjQ1LjMxOSA2NjkuODc0IDI0OCA2NjEuMzk4IDI0OEM2NTIuNjU2IDI0OCA2NDUuMTk1IDI0NC42NTkgNjM5LjAxNCAyMzcuOTc4QzYzMi44MzMgMjMxLjIwOSA2MjkuNzQyIDIyMi45NDUgNjI5Ljc0MiAyMTMuMTg3QzYyOS43NDIgMjAzLjQyOSA2MzIuODMzIDE5NS4yMDkgNjM5LjAxNCAxODguNTI3QzY0NS4xOTUgMTgxLjc1OCA2NTIuNjU2IDE3OC4zNzQgNjYxLjM5OCAxNzguMzc0QzY2OS44NzQgMTc4LjM3NCA2NzYuNDUzIDE4MS4wNTUgNjgxLjEzMyAxODYuNDE4VjE4MC4yMlpNNjUzLjk4IDIyNC45MjNDNjU2Ljg5NCAyMjcuODI0IDY2MC42OTEgMjI5LjI3NSA2NjUuMzcxIDIyOS4yNzVDNjcwLjA1MSAyMjkuMjc1IDY3My44NDggMjI3LjgyNCA2NzYuNzYyIDIyNC45MjNDNjc5LjY3NiAyMjIuMDIyIDY4MS4xMzMgMjE4LjExIDY4MS4xMzMgMjEzLjE4N0M2ODEuMTMzIDIwOC4yNjQgNjc5LjY3NiAyMDQuMzUyIDY3Ni43NjIgMjAxLjQ1MUM2NzMuODQ4IDE5OC41NDkgNjcwLjA1MSAxOTcuMDk5IDY2NS4zNzEgMTk3LjA5OUM2NjAuNjkxIDE5Ny4wOTkgNjU2Ljg5NCAxOTguNTQ5IDY1My45OCAyMDEuNDUxQzY1MS4wNjcgMjA0LjM1MiA2NDkuNjEgMjA4LjI2NCA2NDkuNjEgMjEzLjE4N0M2NDkuNjEgMjE4LjExIDY1MS4wNjcgMjIyLjAyMiA2NTMuOTggMjI0LjkyM1oiIGZpbGw9IiMzMzMyNDIiLz4KPC9zdmc+Cg=="}}]);