(()=>{"use strict";var e={1066:(e,t,a)=>{var n=a(7294),r=a(3935);function i(e){var t=e.data.setNote,a=(0,n.useState)({}),r=a[0],i=a[1],c=(0,n.useState)({id:0,name:""}),l=c[0],s=c[1],o=(0,n.useState)([]),m=o[0],u=o[1];(0,n.useEffect)((function(){var e=(1,location.pathname.split("/").slice(-1));e&&!e[0]&&(e=["1"]),f(Number(e[0])),p(Number(e[0]))}),[]);var d=function(e){return fetch(e.url,{body:JSON.stringify(e.params),headers:{"content-type":"application/json"},method:"POST"}).then((function(e){return e.json()}))},p=function(e){d({url:"/select",params:{name:"articleType",fields:"id,name",condition:"id="+e}}).then((function(e){e.code||s(e.data[0])}))},f=function(e){d({url:"/queryData",params:{name:"pzhkux2wxwl",fields:"61twbqeeaot",condition:"fx51cohv0om",supplement:e,mappingProperty:"querySecondMenu"}}).then((function(e){if(!e.code){var t={};e.data.forEach((function(e,a){var n=e.noteId,r=e.name;a||u([r,n]),t[r]||(t[r]=[]),t[r].push(e)})),i(t)}}))},E=function(e){u(e),d({url:"/select",params:{name:"articleInfo",fields:"content",condition:"id="+e[1]}}).then((function(e){e.code||t(decodeURIComponent(e.data[0].content))}))};return n.createElement("ul",{className:"sidebar-links"},n.createElement("li",null,n.createElement("section",{className:"sidebar-group depth-0"},n.createElement("p",{className:"sidebar-heading open"}," ",n.createElement("span",null,l&&l.name)," "),n.createElement("ul",{className:"sidebar-links sidebar-group-items"},Object.keys(r).map((function(e,t){var a=m.includes(e);return n.createElement(n.Fragment,{key:t},n.createElement("li",null,n.createElement("a",{onClick:function(){return E([e,r[e][0].noteId])},className:(a?"active":"")+" sidebar-link"},e),n.createElement("ul",{className:(a?"":"is-hidden")+" sidebar-sub-headers"},r[e].map((function(t){var a=t.noteId,r=t.title;return n.createElement("li",{key:a,className:"sidebar-sub-header"},n.createElement("a",{onClick:function(){return E([e,a])},className:(m.includes(a)?"active":"")+" sidebar-link"},r))})))))}))))))}function c(){return n.createElement("div",{className:"tile is-ancestor"},n.createElement("div",{className:"tile is-vertical is-8"},n.createElement("div",{className:"tile"},n.createElement("div",{className:"tile is-parent is-vertical"},n.createElement("article",{className:"tile is-child notification is-primary"},n.createElement("p",{className:"title"},"数据结构"),n.createElement("p",{className:"subtitle"},"Data structure")),n.createElement("article",{className:"tile is-child notification is-warning"},n.createElement("p",{className:"title"},"算法"),n.createElement("p",{className:"subtitle"},"Algorithm"))),n.createElement("div",{className:"tile is-parent"},n.createElement("article",{className:"tile is-child notification is-info"},n.createElement("p",{className:"title"},"前端"),n.createElement("p",{className:"subtitle"},"Front-end"),n.createElement("figure",{className:"image is-4by3"})))),n.createElement("div",{className:"tile is-parent"},n.createElement("article",{className:"tile is-child notification is-danger"},n.createElement("p",{className:"title"},"系统"),n.createElement("p",{className:"subtitle"},"Linux"),n.createElement("div",{className:"content"})))),n.createElement("div",{className:"tile is-parent"},n.createElement("article",{className:"tile is-child notification is-success"},n.createElement("div",{className:"content"},n.createElement("p",{className:"title"},"后端"),n.createElement("p",{className:"subtitle"},"Back-end"),n.createElement("div",{className:"content"})))))}var l=a(1619),s=a.n(l);function o(e){var t=e.data.note;return n.createElement("div",{className:"editor-content"},n.createElement("div",{className:"editor-board"},n.createElement(s(),{preview:"true",toolbar:{},style:{border:"none",boxShadow:"none"},height:"100%",value:decodeURIComponent(t||"")})))}function m(e){var t=e.data.note;return n.useEffect((function(){}),[]),n.createElement("div",{className:"content"},t?n.createElement(o,{data:{note:t}}):n.createElement(c,null))}const u=function(){var e=n.useState(""),t=e[0],a=e[1];return n.createElement("div",{className:"app"},n.createElement("aside",{className:"sidebar"},n.createElement(i,{data:{setNote:a}})),n.createElement("main",{className:"page"},n.createElement(m,{data:{note:t}})))};var d=a(7407),p=(0,d.oM)({name:"getMenuData",initialState:{menuList:{}},reducers:{getMenuList:function(e,t){e.menuList=t.payload}}});p.actions.getMenuList;const f=p.reducer;var E=(0,d.oM)({name:"getMenuData",initialState:{content:{}},reducers:{getContent:function(e,t){e.content=t.payload}}});E.actions.getContent;const h={reducer:{menu:f,main:E.reducer}};var v=(0,d.xC)(h),N=a(4308);r.render(n.createElement(n.StrictMode,null,n.createElement(N.zt,{store:v},n.createElement(u,null))),document.getElementById("root"))}},t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={id:n,loaded:!1,exports:{}};return e[n](r,r.exports,a),r.loaded=!0,r.exports}a.m=e,a.x=e=>{},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.j=982,(()=>{var e={982:0},t=[[1066,774]],n=e=>{},r=(r,i)=>{for(var c,l,[s,o,m,u]=i,d=0,p=[];d<s.length;d++)l=s[d],a.o(e,l)&&e[l]&&p.push(e[l][0]),e[l]=0;for(c in o)a.o(o,c)&&(a.m[c]=o[c]);for(m&&m(a),r&&r(i);p.length;)p.shift()();return u&&t.push.apply(t,u),n()},i=self.webpackChunkclient=self.webpackChunkclient||[];function c(){for(var n,r=0;r<t.length;r++){for(var i=t[r],c=!0,l=1;l<i.length;l++){var s=i[l];0!==e[s]&&(c=!1)}c&&(t.splice(r--,1),n=a(a.s=i[0]))}return 0===t.length&&(a.x(),a.x=e=>{}),n}i.forEach(r.bind(null,0)),i.push=r.bind(null,i.push.bind(i));var l=a.x;a.x=()=>(a.x=l||(e=>{}),(n=c)())})(),a.x()})();
//# sourceMappingURL=index.js.map