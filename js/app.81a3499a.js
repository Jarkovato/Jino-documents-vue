(function(t){function e(e){for(var s,i,o=e[0],a=e[1],l=e[2],f=0,p=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s]);u&&u(e);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],s=!0,o=1;o<n.length;o++){var a=n[o];0!==r[a]&&(s=!1)}s&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},r={app:0},c=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1990:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Documents")],1)},c=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"documents"},[n("div",{staticClass:"container"},[n("div",{staticClass:"documents__title"},[t._v("Подтверждение аккаунта")]),n("div",{staticClass:"documents__text"},[t._v(" Для подтверждения вашего аккаунта вам нужно заполнить все поля, подтвердить почтовый ящик и телефон, а также загрузить сканы ваших документов. ")]),n("form",{staticClass:"documents__form form",attrs:{action:""}},[n("div",{staticClass:"form__file"},[n("img",{staticClass:"form__img",attrs:{src:t.srcUpload.src,alt:"srcUpload.alt"},on:{click:function(e){return t.focusInput()}}}),n("input",{staticClass:"form__file-input",attrs:{id:"fileInput",name:"file",type:"file",required:"",accept:".png, .jpg, .jpeg"},on:{change:t.onFileChange}}),n("label",{staticClass:"form__file-label underline",attrs:{for:"fileInput",id:"inputBtn"}},[t._v(" Загрузить скан страницы с фотографией ")]),t.result||""==t.file?t._e():n("span",{staticClass:"form__file-action false-text"},[t._v("Отклонено ")]),n("span",{staticClass:"form__file-options"},[t._v("Размер файла не более 5мб")])]),t.result&&""!=t.file?n("div",{staticClass:"form__file-result"},[n("img",{staticClass:"form__img",attrs:{src:"success"==t.result?t.srcSuccess.src:t.srcWait.src,alt:"result == 'success'? srcSuccess.alt : srcWait.alt  "}}),n("label",{staticClass:"form__file-label"},[t._v(" "+t._s(t.computedLabelTitle))]),n("span",{class:"success"==t.result?"form__file-action success-text":"form__file-action"},[t._v(" "+t._s(t.computedActionTitle)+" ")]),n("span",{staticClass:"form__file-options"},[t._v(t._s(t.file.name)+" "+t._s(t.file.size)+"kb")])]):t._e()])])])},o=[],a={data:function(){return{srcUpload:{src:n("7a26"),alt:"Загрузить файл"},srcWait:{src:n("daea"),alt:"Проверка файла"},srcSuccess:{src:n("e641"),alt:"Успешно загружено"},file:"",randomNum:"",result:!0}},computed:{computedActionTitle:function(){return"success"===this.result?"Проверено":"Идет проверка"},computedLabelTitle:function(){return"success"==this.result?"Страница с пропиской":"Файл загружен"}},methods:{onFileChange:function(t){var e=this,n=document.getElementById("fileInput");this.result=!0;var s=t.target.files;s.length&&(this.file=s[0],this.file.size>5e6&&(this.result=!1),this.randomInteger(),setTimeout((function(){e.randomNum%2===0?e.result="success":(e.result=!1,n.value="")}),2e3))},randomInteger:function(){var t=1,e=10,n=t+Math.random()*(e+1-t);return this.randomNum=Math.floor(n)},focusInput:function(){var t=document.getElementById("inputBtn");t.click()}}},l=a,u=(n("9d90"),n("2877")),f=Object(u["a"])(l,i,o,!1,null,null,null),p=f.exports,d={name:"App",components:{Documents:p}},m=d,_=(n("5c0b"),Object(u["a"])(m,r,c,!1,null,null,null)),v=_.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"7a26":function(t,e,n){t.exports=n.p+"img/upload.0827c5e3.svg"},"9c0c":function(t,e,n){},"9d90":function(t,e,n){"use strict";n("1990")},daea:function(t,e,n){t.exports=n.p+"img/wait.bc19045c.svg"},e641:function(t,e,n){t.exports=n.p+"img/ok.1c902919.svg"}});
//# sourceMappingURL=app.81a3499a.js.map