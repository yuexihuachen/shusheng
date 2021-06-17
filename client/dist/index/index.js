(()=>{"use strict";var e={1562:(e,t,n)=>{var r,a=n(7294),l=n(3935),o=n(4308),c=n(7407),u=(0,c.oM)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),s=(r=u.actions).increment,i=r.decrement,m=r.incrementByAmount,p=function(e){return e.counter.value};const d=u.reducer;function f(){var e=(0,o.v9)(p),t=(0,o.I0)(),n=(0,a.useState)("2"),r=n[0],l=n[1];return a.createElement("div",null,a.createElement("div",{className:"row"},a.createElement("button",{className:"button","aria-label":"Increment value",onClick:function(){return t(s())}},"+"),a.createElement("span",{className:"value"},e),a.createElement("button",{className:"button","aria-label":"Decrement value",onClick:function(){return t(i())}},"-")),a.createElement("div",{className:"row"},a.createElement("input",{className:"textbox","aria-label":"Set increment amount",value:r,onChange:function(e){return l(e.target.value)}}),a.createElement("button",{className:"button",onClick:function(){return t(m(Number(r)||0))}},"Add Amount"),a.createElement("button",{className:"asyncButton",onClick:function(){return t((e=Number(r)||0,function(t){setTimeout((function(){t(m(e))}),1e3)}));var e}},"Add Async")))}const h=function(){return a.createElement("div",{className:"App"},a.createElement("header",{className:"App-header"},a.createElement(f,null),a.createElement("p",null,"Edit ",a.createElement("code",null,"src/App.tsx")," and save to reload."),a.createElement("span",null,a.createElement("span",null,"Learn "),a.createElement("a",{className:"App-link",href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React"),a.createElement("span",null,", "),a.createElement("a",{className:"App-link",href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer"},"Redux"),a.createElement("span",null,", "),a.createElement("a",{className:"App-link",href:"https://redux-toolkit.js.org/",target:"_blank",rel:"noopener noreferrer"},"Redux Toolkit"),",",a.createElement("span",null," and "),a.createElement("a",{className:"App-link",href:"https://react-redux.js.org/",target:"_blank",rel:"noopener noreferrer"},"React Redux"))))};var b=(0,c.xC)({reducer:{counter:d}});l.render(a.createElement(a.StrictMode,null,a.createElement(o.zt,{store:b},a.createElement(h,null))),document.getElementById("root"))}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r](a,a.exports,n),a.loaded=!0,a.exports}n.m=e,n.x=e=>{},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.j=353,(()=>{var e={353:0},t=[[1562,774]],r=e=>{},a=(a,l)=>{for(var o,c,[u,s,i,m]=l,p=0,d=[];p<u.length;p++)c=u[p],n.o(e,c)&&e[c]&&d.push(e[c][0]),e[c]=0;for(o in s)n.o(s,o)&&(n.m[o]=s[o]);for(i&&i(n),a&&a(l);d.length;)d.shift()();return m&&t.push.apply(t,m),r()},l=self.webpackChunkclient=self.webpackChunkclient||[];function o(){for(var r,a=0;a<t.length;a++){for(var l=t[a],o=!0,c=1;c<l.length;c++){var u=l[c];0!==e[u]&&(o=!1)}o&&(t.splice(a--,1),r=n(n.s=l[0]))}return 0===t.length&&(n.x(),n.x=e=>{}),r}l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l));var c=n.x;n.x=()=>(n.x=c||(e=>{}),(r=o)())})(),n.x()})();
//# sourceMappingURL=index.js.map