(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./sites/dui/pages/Snackbar.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return k}));var a=t("./node_modules/docz-core/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),l=t("./node_modules/docz-core/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),b=t("./node_modules/docz-core/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),c=t("./node_modules/docz-core/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),s=t("./node_modules/docz-core/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js"),o=t("./node_modules/docz-core/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=t("./node_modules/docz-core/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=t("./node_modules/react/index.js"),u=t("./node_modules/@mdx-js/react/dist/esm.js"),d=t("./src/index.tsx"),p=t("./node_modules/docz/dist/index.esm.js"),g={};function j(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(u.b)("wrapper",Object.assign({},g,t,{components:n,mdxType:"MDXLayout"}),Object(u.b)("h3",{id:"snackbar"},"Snackbar"),Object(u.b)("table",null,Object(u.b)("thead",{parentName:"table"},Object(u.b)("tr",{parentName:"thead"},Object(u.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(u.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u63cf\u8ff0"),Object(u.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(u.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(u.b)("tbody",{parentName:"table"},Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"className"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u540d"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"style"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u6837\u5f0f"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"object"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"zIndex"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u7ec4\u4ef6\u5f39\u51fa\u5c42zIndex"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"10000")),Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"visible"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u662f\u5426\u663e\u793a\uff0c\u53ea\u5728\u4ee5\u7ec4\u4ef6\u5f62\u5f0f\u8c03\u7528\u65f6\u6709\u6548"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"boolean"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"type"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"'info' ","|"," 'success' ","|"," 'error' ","|"," 'loading'"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"'info'")),Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"showIcon"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u662f\u5426\u663e\u793a\u8be5\u6d88\u606f\u7c7b\u578b\u5bf9\u5e94\u7684\u56fe\u6807"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"boolean"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"true")),Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"message"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u4e3b\u4f53\u4fe1\u606f\uff0c\u4e5f\u53ef\u901a\u8fc7children\u4f20\u5165"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"ReactNode"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"action"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u9644\u52a0\u64cd\u4f5c\u3002\u4f20\u5165\u6570\u7ec4\u65f6\u53ef\u8bbe\u7f6e\u591a\u4e2a\u64cd\u4f5c\u3002"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"ReactNode ","|"," ISnackbarAction[]"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"onClickAction"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"\b\u7528\u6237\u70b9\u51fb\u9644\u52a0\u64cd\u4f5c\u65f6\u7684\u56de\u8c03\uff0c\u5f53action\u4e0d\u4e3a\u6570\u7ec4\u65f6\u751f\u6548"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"() => void"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"closable"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u662f\u5426\u663e\u793a\u5173\u95ed\u6309\u94ae"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"boolean"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"onClose"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u5173\u95edsnackbar\u65f6\u7684\u56de\u8c03\u3002\u70b9\u51fb\u64cd\u4f5c\u548c\u5173\u95ed\u6309\u94ae\u65f6\u90fd\u4f1a\u8c03\u7528\u6b64\u65b9\u6cd5\u3002\u56e0\u4e3areact\u5355\u5411\u6570\u636e\u6d41\u7684\u7279\u70b9\uff0c\u5728\u4ee5\u7ec4\u4ef6\u5f62\u5f0f\u4f7f\u7528\u65f6\uff0c\u9664\u4e86\u81ea\u5df1\u7684\u903b\u8f91\u5916\uff0c\u8fd8\u9700\u8981\u5728\u6b64\u65b9\u6cd5\u91cc\u8bbe\u7f6evisible\u4e3afalse\u3002"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"() => void ","|"," false"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"containerDom"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u7528\u4e8e\u6307\u5b9asnackbar\u6302\u8f7d\u7684dom\uff0c\u4f18\u5148\u7ea7\u4f4e\u4e8eSnackbar.Container\u7ec4\u4ef6"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"HTMLElement"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"document.body")),Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"spinType"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"type\u4e3aloading\u65f6\u65cb\u8f6c\u52a8\u753b\u7684\u7c7b\u578b"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"'light' ","|"," 'dark' ","|"," 'primary'"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"'primary'")))),Object(u.b)("p",null,"ISnackbarAction\u7c7b\u578b\u5982\u4e0b"),Object(u.b)("pre",null,Object(u.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"interface ISnackbarAction {\n    text: ReactNode;\n    onClick?: () => void;\n}\n")),Object(u.b)("h3",{id:"snackbarshow-\u7279\u6709"},"Snackbar.show \u7279\u6709"),Object(u.b)("table",null,Object(u.b)("thead",{parentName:"table"},Object(u.b)("tr",{parentName:"thead"},Object(u.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(u.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u63cf\u8ff0"),Object(u.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(u.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(u.b)("tbody",{parentName:"table"},Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"autoClose"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u662f\u5426\u81ea\u52a8\u6d88\u5931\uff0c\u53ea\u5728\u4ee5\u65b9\u6cd5\u5f62\u5f0f\u8c03\u7528\u65f6\u6709\u6548"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"boolean"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"true")),Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"duration"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u81ea\u52a8\u6d88\u5931\u7684\u6beb\u79d2\u6570\uff0c\u53ea\u5728\u4ee5\u65b9\u6cd5\u5f62\u5f0f\u8c03\u7528\u65f6\u4e14autoClose\u4e3atrue\u65f6\u6709\u6548"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"2000")),Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"id"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u5e94\u4e3a\u5e94\u7528\u5185\u552f\u4e00\u5b9a\u503c\uff0c\u591a\u4e2a\u76f8\u540cid\u7684Snackbar\u5b9e\u4f8b\u5728\u540c\u4e00\u4e2a\u4f4d\u7f6e\u53ea\u4f1a\u5c55\u793a\u6700\u65b0\u7684\u4e00\u4e2a\uff08\u4e92\u65a5\uff09\uff0c\u4e0d\u81ea\u52a8\u6d88\u5931\u7684Snackbar\u82e5\u4e0d\u8bbe\u7f6e\u6b64\u53c2\u6570\u5219\u4e0d\u4e92\u65a5"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")))),Object(u.b)("blockquote",null,Object(u.b)("p",{parentName:"blockquote"},"visible \u53c2\u6570\u53ea\u5728\u4ee5\u7ec4\u4ef6\u5f62\u5f0f\u4f7f\u7528\u65f6\u6709\u6548\uff0cduration \u53c2\u6570\u53ea\u5728\u4ee5\u65b9\u6cd5\u5f62\u5f0f\u4f7f\u7528\u65f6\uff0c\u4e14\u4f20\u5165autoClose:true\uff08\u9ed8\u8ba4\u60c5\u51b5\uff09\u6709\u6548")),Object(u.b)("blockquote",null,Object(u.b)("p",{parentName:"blockquote"},"\u5728autoClose\u4e3afalse\u65f6\uff0c\u8c03\u7528Snackbar.show\u8fd4\u56de{update, close}\uff0c\u53ef\u7528\u4e8e\u66f4\u65b0\u548c\u624b\u52a8\u5173\u95edsnackbar\u3002\u82e5\u8bbe\u7f6e\u4e86closable\u6216\u8005action\uff0c\u6b64\u65f6\u7528\u6237\u70b9\u51fb\u4e5f\u53ef\u5173\u95ed\u3002\u4ee5\u65b9\u6cd5\u5f62\u5f0f\u8c03\u7528\u65f6\uff0c\u5728onClose\u4e2d\u8fd4\u56defalse\u53ef\u4ee5\u963b\u6b62Snackbar\u88ab\u70b9\u51fb\u884c\u4e3a\u5173\u95ed\uff0c\u6b64\u65f6\u9700\u8981\u81ea\u5df1\u624b\u52a8\u8c03\u7528close\u6765\u5c06\u5176\u5173\u95ed\u3002")),Object(u.b)("h3",{id:"snackbarcontainer"},"Snackbar.Container"),Object(u.b)("table",null,Object(u.b)("thead",{parentName:"table"},Object(u.b)("tr",{parentName:"thead"},Object(u.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(u.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u63cf\u8ff0"),Object(u.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(u.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(u.b)("tbody",{parentName:"table"},Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"className"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u540d"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"style"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u6837\u5f0f"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"object"),Object(u.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")))),Object(u.b)("blockquote",null,Object(u.b)("p",{parentName:"blockquote"},"\u4f4d\u4e8eContainer\u5185\u7684Snackbar\u5143\u7d20\u4f1a\u663e\u793a\u4e8eContainer\u5185\uff0c\u800c\u975e\u9875\u9762\u56fa\u5b9a\u4f4d\u7f6e")),Object(u.b)("blockquote",null,Object(u.b)("p",{parentName:"blockquote"},"\u9700\u8981\u6ce8\u610fContainer\u5143\u7d20\u81ea\u8eab\u7684\u5bbd\u9ad8\u53ca\u4f4d\u7f6e\u662f\u5426\u6b63\u786e\uff0c\u4f8b\u5982\u662f\u5426\u7531\u4e8e\u5b50\u5143\u7d20\u8131\u79bb\u6587\u6863\u6d41(\u7edd\u5bf9\u5b9a\u4f4d\u3001float\u7b49)\u5bfc\u81f4Container\u9ad8\u5ea6\u4e3a0")),Object(u.b)("blockquote",null,Object(u.b)("p",{parentName:"blockquote"},"Modal\u4e5f\u53ef\u4ee5\u5f53\u4f5cSnackbar.Container\u4f7f\u7528")),Object(u.b)("h3",{id:"snackbarshowconfigdefaults"},"Snackbar.show.configDefaults"),Object(u.b)("p",null,"\u53ef\u7528\u4e8e",Object(u.b)("strong",{parentName:"p"},"\u5168\u5c40"),"\u914d\u7f6e\uff08\u5f71\u54cd\u6574\u4e2a\u9879\u76ee\uff09Snackbar.show\u65b9\u6cd5\u53c2\u6570\u7684",Object(u.b)("strong",{parentName:"p"},"\u9ed8\u8ba4\u503c"),"\uff0c\u7528\u6cd5\u5982\u4e0b"),Object(u.b)("pre",null,Object(u.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"Snackbar.show.configDefaults({\n    duration: 1000,\n    style: { zIndex: 20000 }\n});\n")))}j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Snackbar/README.md"}}),j.isMDXComponent=!0;m="Demo";var m,O={};function k(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(u.b)("wrapper",Object.assign({},O,t,{components:n,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"snackbar-\u63d0\u793a\u64cd\u4f5c\u5f39\u51fa\u6846"},"Snackbar \u63d0\u793a\u64cd\u4f5c\u5f39\u51fa\u6846"),Object(u.b)("h2",{id:"\u57fa\u672c"},"\u57fa\u672c"),Object(u.b)(p.c,{__position:0,__code:"<Button\n  type=\"primary\"\n  style={{ margin: '10px' }}\n  onClick={() =>\n    Snackbar.show({\n      message: '\u64cd\u4f5c\u6210\u529f',\n      type: 'success',\n      duration: 3000,\n    })\n  }\n>\n  \u81ea\u52a8\u6d88\u5931\u7684\u901a\u77e5\n</Button>\n<Button\n  type=\"warning\"\n  style={{ margin: '10px' }}\n  onClick={() =>\n    Snackbar.show({\n      message: '\u64cd\u4f5c\u5931\u8d25',\n      type: 'error',\n      autoClose: false,\n      closable: true,\n      action: '\u91cd\u8bd5',\n      onClickAction: () => {\n        console.log('\u91cd\u8bd5')\n      },\n    })\n  }\n>\n  \u70b9\u51fb\u6d88\u5931\u7684\u901a\u77e5\n</Button>\n<Button\n  style={{ margin: '10px' }}\n  onClick={() =>\n    Snackbar.show({\n      message: '\u6587\u4ef6\u5df2\u653e\u5165\u56de\u6536\u7ad9',\n      type: 'info',\n      duration: 3000,\n      action: '\u64a4\u9500',\n      onClickAction: () => console.log('\u5df2\u64a4\u9500'),\n    })\n  }\n>\n  \u81ea\u52a8\u6d88\u5931\uff0c\u4e5f\u53ef\u70b9\u51fb\u6d88\u5931\u7684\u901a\u77e5\n</Button>\n<Button\n  style={{ margin: '10px' }}\n  onClick={() =>\n    Snackbar.show({\n      message: `\u5f53\u524d\u65f6\u95f4\u662f${new Date().toLocaleTimeString()}`,\n      autoClose: false,\n      closable: true,\n      action: '\u597d\u7684',\n      onClickAction: () => {\n        console.log('\u597d\u7684')\n      },\n      id: 'my-snackbar-1',\n    })\n  }\n>\n  \u70b9\u51fb\u6d88\u5931\uff0c\u4f46\u4e92\u65a5\u7684\u901a\u77e5\n</Button>",__scope:{props:this?this.props:t,Snackbar:d.u,Button:d.c,Modal:d.n,Playground:p.c,Props:j,Component:i.Component,useState:i.useState,useCallback:i.useCallback,Fragment:i.Fragment},mdxType:"Playground"},Object(u.b)(d.c,{type:"primary",style:{margin:"10px"},onClick:function(){return d.u.show({message:"\u64cd\u4f5c\u6210\u529f",type:"success",duration:3e3})},mdxType:"Button"},"\u81ea\u52a8\u6d88\u5931\u7684\u901a\u77e5"),Object(u.b)(d.c,{type:"warning",style:{margin:"10px"},onClick:function(){return d.u.show({message:"\u64cd\u4f5c\u5931\u8d25",type:"error",autoClose:!1,closable:!0,action:"\u91cd\u8bd5",onClickAction:function(){console.log("\u91cd\u8bd5")}})},mdxType:"Button"},"\u70b9\u51fb\u6d88\u5931\u7684\u901a\u77e5"),Object(u.b)(d.c,{style:{margin:"10px"},onClick:function(){return d.u.show({message:"\u6587\u4ef6\u5df2\u653e\u5165\u56de\u6536\u7ad9",type:"info",duration:3e3,action:"\u64a4\u9500",onClickAction:function(){return console.log("\u5df2\u64a4\u9500")}})},mdxType:"Button"},"\u81ea\u52a8\u6d88\u5931\uff0c\u4e5f\u53ef\u70b9\u51fb\u6d88\u5931\u7684\u901a\u77e5"),Object(u.b)(d.c,{style:{margin:"10px"},onClick:function(){return d.u.show({message:"\u5f53\u524d\u65f6\u95f4\u662f".concat((new Date).toLocaleTimeString()),autoClose:!1,closable:!0,action:"\u597d\u7684",onClickAction:function(){console.log("\u597d\u7684")},id:"my-snackbar-1"})},mdxType:"Button"},"\u70b9\u51fb\u6d88\u5931\uff0c\u4f46\u4e92\u65a5\u7684\u901a\u77e5")),Object(u.b)("h2",{id:"loading"},"loading"),Object(u.b)(p.c,{__position:1,__code:"() => {\n  let loadingBar\n  let isClosed = true\n  const handleClick = () => {\n    if (!isClosed) {\n      loadingBar.close()\n      isClosed = true\n    } else {\n      loadingBar = Snackbar.show({\n        autoClose: false, // \u82e5\u4e3atrue\uff08\u9ed8\u8ba4\uff09\uff0c\u5219\u4e0d\u4f1a\u8fd4\u56de\u5f15\u7528\n        type: 'loading',\n        message: '\u6b63\u5728\u52a0\u8f7d\u4e2d...',\n      })\n      isClosed = false\n    }\n  }\n\n  // \u7ec4\u4ef6\n  const Demo = () => {\n    const [snackbarVisible, setSnackbarVisible] = useState(false)\n\n    const toggleSnackbar = useCallback(() => {\n      setSnackbarVisible(!snackbarVisible)\n    }, [snackbarVisible])\n\n    return (\n      <Fragment>\n        <Button type=\"primary\" onClick={toggleSnackbar}>\n          \u7ec4\u4ef6\u5f62\u5f0f\u6253\u5f00/\u5173\u95ed\n        </Button>\n        <Button style={{ marginLeft: '20px' }} onClick={handleClick}>\n          \u51fd\u6570\u5f62\u5f0f\u6253\u5f00/\u5173\u95ed\n        </Button>\n        <Snackbar type=\"loading\" visible={snackbarVisible}>\n          \u6b63\u5728\u52a0\u8f7d\u4e2d...\n        </Snackbar>\n      </Fragment>\n    )\n  }\n\n  return <Demo />\n}",__scope:{props:this?this.props:t,Snackbar:d.u,Button:d.c,Modal:d.n,Playground:p.c,Props:j,Component:i.Component,useState:i.useState,useCallback:i.useCallback,Fragment:i.Fragment},mdxType:"Playground"},(function(){var e,n=!0,t=function(){n?(e=d.u.show({autoClose:!1,type:"loading",message:"\u6b63\u5728\u52a0\u8f7d\u4e2d..."}),n=!1):(e.close(),n=!0)};return Object(u.b)((function(){var e=Object(i.useState)(!1),n=Object(o.a)(e,2),a=n[0],l=n[1],b=Object(i.useCallback)((function(){l(!a)}),[a]);return Object(u.b)(i.Fragment,{mdxType:"Fragment"},Object(u.b)(d.c,{type:"primary",onClick:b,mdxType:"Button"},"\u7ec4\u4ef6\u5f62\u5f0f\u6253\u5f00/\u5173\u95ed"),Object(u.b)(d.c,{style:{marginLeft:"20px"},onClick:t,mdxType:"Button"},"\u51fd\u6570\u5f62\u5f0f\u6253\u5f00/\u5173\u95ed"),Object(u.b)(d.u,{type:"loading",visible:a,mdxType:"Snackbar"},"\u6b63\u5728\u52a0\u8f7d\u4e2d..."))}),{mdxType:"Demo"})})),Object(u.b)("h2",{id:"\u548cmodal\u8054\u52a8"},"\u548cModal\u8054\u52a8"),Object(u.b)(p.c,{__position:2,__code:'() => {\n  const [snackbarVisible, setSnackbarVisible] = useState(false)\n  const [modalVisible, setModalVisible] = useState(false)\n  const handleSnackbarClose = useCallback(() => {\n    console.log(\'closed\')\n    setSnackbarVisible(false)\n  }, [])\n\n  const handleClickAction = useCallback(() => {\n    console.log(\'\u70b9\u8d5e\u6570+1\')\n  }, [])\n\n  const toggleSnackbar = useCallback(() => {\n    setSnackbarVisible(!snackbarVisible)\n  }, [snackbarVisible])\n\n  const openModal = useCallback(() => {\n    setModalVisible(true)\n  }, [])\n\n  const closeModal = useCallback(() => {\n    setModalVisible(false)\n  }, [])\n\n  return (\n    <Fragment>\n      <Button type="primary" onClick={openModal}>\n        \u6253\u5f00Modal\n      </Button>\n      <Modal\n        visible={modalVisible}\n        title="\u6807\u9898"\n        onCancel={closeModal}\n        onOk={closeModal}\n      >\n        <Snackbar\n          action="\u8d5e\u4e00\u4e2a"\n          closable\n          onClose={handleSnackbarClose}\n          onClickAction={handleClickAction}\n          type="success"\n          visible={snackbarVisible}\n        >\n          \u64cd\u4f5c\u6210\u529f\n        </Snackbar>\n        <Button type="primary" onClick={toggleSnackbar}>\n          {snackbarVisible ? \'\u5173\u95ed\' : \'\u6253\u5f00\'}Snackbar\n        </Button>\n      </Modal>\n    </Fragment>\n  )\n}',__scope:{props:this?this.props:t,Snackbar:d.u,Button:d.c,Modal:d.n,Playground:p.c,Props:j,Component:i.Component,useState:i.useState,useCallback:i.useCallback,Fragment:i.Fragment},mdxType:"Playground"},(function(){var e=Object(i.useState)(!1),n=Object(o.a)(e,2),t=n[0],a=n[1],l=Object(i.useState)(!1),b=Object(o.a)(l,2),c=b[0],s=b[1],r=Object(i.useCallback)((function(){console.log("closed"),a(!1)}),[]),p=Object(i.useCallback)((function(){console.log("\u70b9\u8d5e\u6570+1")}),[]),g=Object(i.useCallback)((function(){a(!t)}),[t]),j=Object(i.useCallback)((function(){s(!0)}),[]),m=Object(i.useCallback)((function(){s(!1)}),[]);return Object(u.b)(i.Fragment,{mdxType:"Fragment"},Object(u.b)(d.c,{type:"primary",onClick:j,mdxType:"Button"},"\u6253\u5f00Modal"),Object(u.b)(d.n,{visible:c,title:"\u6807\u9898",onCancel:m,onOk:m,mdxType:"Modal"},Object(u.b)(d.u,{action:"\u8d5e\u4e00\u4e2a",closable:!0,onClose:r,onClickAction:p,type:"success",visible:t,mdxType:"Snackbar"},"\u64cd\u4f5c\u6210\u529f"),Object(u.b)(d.c,{type:"primary",onClick:g,mdxType:"Button"},t?"\u5173\u95ed":"\u6253\u5f00","Snackbar")))})),Object(u.b)("h2",{id:"\u6307\u5b9a\u6302\u8f7d\u5bb9\u5668"},"\u6307\u5b9a\u6302\u8f7d\u5bb9\u5668"),Object(u.b)(p.c,{__position:3,__code:"() => {\n  const Demo = class Demo extends Component {\n    constructor(...args) {\n      super(...args)\n      this.state = {\n        visible: false,\n      }\n      this.handleSnackbarClose = this.handleSnackbarClose.bind(this)\n      this.handleClickAction = this.handleClickAction.bind(this)\n      this.toggleSnackbar = this.toggleSnackbar.bind(this)\n    }\n\n    handleSnackbarClose() {\n      console.log('closed')\n      this.setState({ visible: false })\n    }\n\n    handleClickAction() {\n      console.log('\u70b9\u8d5e\u6570+1')\n    }\n\n    toggleSnackbar() {\n      this.setState(prevState => ({ visible: !prevState.visible }))\n    }\n\n    render() {\n      const { visible } = this.state\n      return (\n        <Snackbar.Container\n          style={{\n            background: '#f2f2f2',\n            width: '300px',\n            height: '200px',\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'flex-end',\n            padding: '20px',\n          }}\n        >\n          <Snackbar\n            action=\"\u8d5e\u4e00\u4e2a\"\n            closable\n            onClose={this.handleSnackbarClose}\n            onClickAction={this.handleClickAction}\n            type=\"success\"\n            visible={visible}\n          >\n            \u64cd\u4f5c\u6210\u529f\n          </Snackbar>\n          <Button type=\"primary\" onClick={this.toggleSnackbar}>\n            {visible ? '\u5173\u95ed' : '\u6253\u5f00'}Snackbar\n          </Button>\n        </Snackbar.Container>\n      )\n    }\n  }\n\n  return <Demo />\n}",__scope:{props:this?this.props:t,Snackbar:d.u,Button:d.c,Modal:d.n,Playground:p.c,Props:j,Component:i.Component,useState:i.useState,useCallback:i.useCallback,Fragment:i.Fragment},mdxType:"Playground"},(function(){var e=function(e){Object(c.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(a.a)(this,t);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return(e=n.call.apply(n,[this].concat(c))).state={visible:!1},e.handleSnackbarClose=e.handleSnackbarClose.bind(Object(b.a)(e)),e.handleClickAction=e.handleClickAction.bind(Object(b.a)(e)),e.toggleSnackbar=e.toggleSnackbar.bind(Object(b.a)(e)),e}return Object(l.a)(t,[{key:"handleSnackbarClose",value:function(){console.log("closed"),this.setState({visible:!1})}},{key:"handleClickAction",value:function(){console.log("\u70b9\u8d5e\u6570+1")}},{key:"toggleSnackbar",value:function(){this.setState((function(e){return{visible:!e.visible}}))}},{key:"render",value:function(){var e=this.state.visible;return Object(u.b)(d.u.Container,{style:{background:"#f2f2f2",width:"300px",height:"200px",display:"flex",justifyContent:"center",alignItems:"flex-end",padding:"20px"}},Object(u.b)(d.u,{action:"\u8d5e\u4e00\u4e2a",closable:!0,onClose:this.handleSnackbarClose,onClickAction:this.handleClickAction,type:"success",visible:e,mdxType:"Snackbar"},"\u64cd\u4f5c\u6210\u529f"),Object(u.b)(d.c,{type:"primary",onClick:this.toggleSnackbar,mdxType:"Button"},e?"\u5173\u95ed":"\u6253\u5f00","Snackbar"))}}]),t}(i.Component);return Object(u.b)(e,{mdxType:"Demo"})})),Object(u.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(u.b)(j,{mdxType:"Props"}))}k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"sites/dui/pages/Snackbar.mdx"}}),k.isMDXComponent=!0}}]);
//# sourceMappingURL=sites-dui-pages-snackbar.2b372526dd59ee94db4e.js.map