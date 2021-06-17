(()=>{"use strict";var e={4509:(e,t,n)=>{var r,a=n(7294),o=n(3935),l=n(4308),c=n(7407),u=(0,c.oM)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),i=(r=u.actions).increment,s=r.decrement,f=r.incrementByAmount,m=function(e){return e.counter.value};const d=u.reducer;function p(){var e=(0,l.v9)(m),t=(0,l.I0)(),n=(0,a.useState)("2"),r=n[0],o=n[1];return a.createElement("div",null,a.createElement("div",{className:"row"},a.createElement("button",{className:"button","aria-label":"Increment value",onClick:function(){return t(i())}},"+"),a.createElement("span",{className:"value"},e),a.createElement("button",{className:"button","aria-label":"Decrement value",onClick:function(){return t(s())}},"-")),a.createElement("div",{className:"row"},a.createElement("input",{className:"textbox","aria-label":"Set increment amount",value:r,onChange:function(e){return o(e.target.value)}}),a.createElement("button",{className:"button",onClick:function(){return t(f(Number(r)||0))}},"Add Amount"),a.createElement("button",{className:"asyncButton",onClick:function(){return t((e=Number(r)||0,function(t){setTimeout((function(){t(f(e))}),1e3)}));var e}},"Add Async")))}var h,v=(0,c.oM)({name:"showName",initialState:{isShow:!0,name:"wanglong"},reducers:{showName:function(e,t){e.isShow=t.payload},hideName:function(e,t){e.isShow=t.payload},changeName:function(e,t){e.name=t.payload}}}),b=(h=v.actions).showName,E=h.hideName,y=(h.changeName,function(e){return e.showName.isShow});const w=v.reducer;var g,x=(0,c.hg)("users/fetchByIdStatus",(function(e){return t=void 0,n=void 0,a=function(){return function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}(this,(function(e){switch(e.label){case 0:return[4,fetch("http://localhost:3000/home").then((function(e){return e.json()}))];case 1:return[2,e.sent()]}}))},new((r=void 0)||(r=Promise))((function(e,o){function l(e){try{u(a.next(e))}catch(e){o(e)}}function c(e){try{u(a.throw(e))}catch(e){o(e)}}function u(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(l,c)}u((a=a.apply(t,n||[])).next())}));var t,n,r,a}));function N(){var e=(0,l.I0)(),t=(0,l.v9)(y),n=(0,a.useState)("wanglong"),r=n[0],o=n[1];return a.useEffect((function(){e(x("sdf"))}),[e]),a.createElement("div",null,a.createElement("div",{className:"show_name"},a.createElement("input",{value:t?r:"",type:"text",onChange:function(e){o(e.target.value)}}),a.createElement("button",{onClick:function(){return e(b(!0))}},"show"),a.createElement("button",{onClick:function(){return e(E(!1))}},"hide"),a.createElement("button",{onClick:function(){return e((function(e){setTimeout((function(){e(E(!1))}),1e3)}))}},"hideAsync")))}const k=function(){return a.createElement("div",{className:"App"},a.createElement("header",{className:"App-header"},a.createElement(p,null),a.createElement(N,null),a.createElement("p",null,"Edit ",a.createElement("code",null,"src/App.tsx")," and save to reload."),a.createElement("span",null,a.createElement("span",null,"Learn "),a.createElement("a",{className:"App-link",href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React"),a.createElement("span",null,", "),a.createElement("a",{className:"App-link",href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer"},"Redux"),a.createElement("span",null,", "),a.createElement("a",{className:"App-link",href:"https://redux-toolkit.js.org/",target:"_blank",rel:"noopener noreferrer"},"Redux Toolkit"),",",a.createElement("span",null," and "),a.createElement("a",{className:"App-link",href:"https://react-redux.js.org/",target:"_blank",rel:"noopener noreferrer"},"React Redux"))))},S={reducer:{counter:d,showName:w,api:(0,c.oM)({name:"test",initialState:{list:null},reducers:{},extraReducers:(g={},g[x.fulfilled]=function(e,t){var n=t.payload;e.list=n},g[x.pending]=function(e,t){var n=t.payload;e.list=n},g[x.rejected]=function(e,t){var n=t.payload;e.list=n},g)}).reducer}};var A=(0,c.xC)(S);o.render(a.createElement(a.StrictMode,null,a.createElement(l.zt,{store:A},a.createElement(k,null))),document.getElementById("root"))}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r](a,a.exports,n),a.loaded=!0,a.exports}n.m=e,n.x=e=>{},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.j=937,(()=>{var e={937:0},t=[[4509,774]],r=e=>{},a=(a,o)=>{for(var l,c,[u,i,s,f]=o,m=0,d=[];m<u.length;m++)c=u[m],n.o(e,c)&&e[c]&&d.push(e[c][0]),e[c]=0;for(l in i)n.o(i,l)&&(n.m[l]=i[l]);for(s&&s(n),a&&a(o);d.length;)d.shift()();return f&&t.push.apply(t,f),r()},o=self.webpackChunkclient=self.webpackChunkclient||[];function l(){for(var r,a=0;a<t.length;a++){for(var o=t[a],l=!0,c=1;c<o.length;c++){var u=o[c];0!==e[u]&&(l=!1)}l&&(t.splice(a--,1),r=n(n.s=o[0]))}return 0===t.length&&(n.x(),n.x=e=>{}),r}o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o));var c=n.x;n.x=()=>(n.x=c||(e=>{}),(r=l)())})(),n.x()})();
//# sourceMappingURL=index.js.map