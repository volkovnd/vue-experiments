(function(t){function e(e){for(var a,i,u=e[0],c=e[1],l=e[2],s=0,d=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},o=[];function i(t){return u.p+"js/"+({404:"404",about:"about",catalog:"catalog",contacts:"contacts",home:"home"}[t]||t)+"."+{404:"75ef7928",about:"726cebb5",catalog:"8d72fa22","chunk-2d0b364d":"b8c6d4e2",contacts:"5f47c243",home:"b7879e1b"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(s);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[t]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vue-experiments/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("a949")},"01fc":function(t,e,n){},"11dd":function(t,e,n){"use strict";n("01fc")},1852:function(t,e,n){"use strict";n.r(e);var a,r,o=n("b42e"),i={functional:!0,props:{column:{type:Boolean,default:!1}},render:function(t,e){var n=e.props,a=e.data,r=e.children;return t("nav",Object(o["a"])(a,{staticClass:"nav",class:{"flex-column":n.column}}),r)}},u=i,c=n("2877"),l=Object(c["a"])(u,a,r,!1,null,null,null);e["default"]=l.exports},"1b67":function(t,e,n){var a={"./BaseLink.vue":"2913","./BaseLogo.vue":"da31","./BaseMailLink.vue":"aa41","./BaseNav.vue":"1852","./BaseNavLink.vue":"7442","./BasePhoneLink.vue":"4e80"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="1b67"},2913:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",t._g(t._b({attrs:{to:t.routerLinkTo}},"router-link",t.$attrs,!1),t.$listeners),[t._t("default")],2)},r=[],o={inheritAttrs:!1,props:{href:{type:String,default:""},to:{type:Object,default:null}},computed:{routerLinkTo:function(){return this.href?this.href:this.to}}},i=o,u=n("2877"),c=Object(u["a"])(i,a,r,!1,null,null,null);e["default"]=c.exports},"3e14":function(t,e,n){"use strict";n("867b")},"437c":function(t,e,n){},"4e80":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.href}},[t._t("default")],2)},r=[],o=(n("ac1f"),n("5319"),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7";return e+t.replace(/[\D]/gi,"").replace(/^(\+7|8)/,"")}),i={computed:{slotContent:function(){return this.$slots.default[0].text},href:function(){return"tel:".concat(o(this.slotContent))}}},u=i,c=n("2877"),l=Object(c["a"])(u,a,r,!1,null,null,null);e["default"]=l.exports},6294:function(t,e,n){"use strict";n("437c")},7442:function(t,e,n){"use strict";n.r(e);var a,r,o=n("b42e"),i={functional:!0,render:function(t,e){var n=e.data,a=e.children;return t("BaseLink",Object(o["a"])(n,{staticClass:"nav-item nav-link"}),a)}},u=i,c=n("2877"),l=Object(c["a"])(u,a,r,!1,null,null,null);e["default"]=l.exports},"7b3d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page"}},[n("PageHeader",{attrs:{id:"header"}},[n("div",{staticClass:"row justify-content-between align-items-center"},[n("div",{staticClass:"col-auto"},[n("router-link",{attrs:{to:"/"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.href,a=t.navigate;return[n("a",{attrs:{href:e},on:{click:a}},[n("BaseLogo")],1)]}}])})],1),n("div",{staticClass:"col-auto"},[n("div",{staticClass:"text-right"},[n("BasePhoneLink",[t._v("8 (495) 664-54-33")]),n("div",{staticClass:"address"},[t._v("Московская обл., г. Пушкино, ул. Грибоедова 7")])],1)])])]),n("PageNavigation",{attrs:{id:"navigation"}},[n("BaseNav",{staticClass:"navbar-nav"},[n("BaseNavLink",{attrs:{href:"/"}},[t._v("Home")]),n("BaseNavLink",{attrs:{href:"/catalog"}},[t._v("Catalog")]),n("BaseNavLink",{attrs:{href:"/about"}},[t._v("About")]),n("BaseNavLink",{attrs:{href:"/contacts"}},[t._v("Contacts")])],1)],1),n("PageMain",{attrs:{id:"main"}},[t._t("default")],2),n("PageFooter",{attrs:{id:"footer"}},[n("div",{staticClass:"text-light"},[t._v('ООО "ПакСервис"')]),n("div",{staticClass:"text-light"},[t._v("Адрес: 141207, Московская обл., г. Пушкино, ул. Грибоедова, д. 7")]),n("div",[n("BasePhoneLink",{staticClass:"text-light"},[t._v("Тел.: 8 (495) 664-54-33")])],1),n("div",[n("BaseMailLink",{staticClass:"text-light"},[t._v("E-Mail: pakservis@list.ru")])],1)])],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-3"},[n("div",{staticClass:"container"},[t._t("default")],2)])},i=[],u={name:"PageHeader"},c=u,l=n("2877"),s=Object(l["a"])(c,o,i,!1,null,null,null),f=s.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar navbar-expand-md navbar-dark bg-primary py-2"},[n("div",{staticClass:"container"},[n("button",{staticClass:"navbar-toggler",attrs:{type:"button"},on:{click:function(e){return t.toggle()}}},[n("span",{staticClass:"navbar-toggler-icon"})]),n("div",{staticClass:"navbar-collapse collapse",class:{show:!t.collapsed}},[t._t("default")],2)])])},p=[],v={name:"PageNavigation",data:function(){return{collapsed:!1}},beforeMount:function(){var t=this;this.$root.$router.beforeEach((function(e,n,a){t.hide(),a()}))},methods:{toggle:function(){this.collapsed?this.show():this.hide()},show:function(){this.collapsed=!1},hide:function(){this.collapsed=!0}}},h=v,b=Object(l["a"])(h,d,p,!1,null,null,null),m=b.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-5"},[n("div",{staticClass:"container"},[t._t("default")],2)])},y=[],_={},O=Object(l["a"])(_,g,y,!1,null,null,null),k=O.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-primary py-4"},[n("div",{staticClass:"container"},[t._t("default")],2)])},j=[],x={name:"PageFooter"},w=x,P=Object(l["a"])(w,C,j,!1,null,null,null),L=P.exports,$={name:"DefaultLayout",components:{PageHeader:f,PageNavigation:m,PageMain:k,PageFooter:L}},E=$,B=(n("3e14"),Object(l["a"])(E,a,r,!1,null,null,null));e["default"]=B.exports},"867b":function(t,e,n){},a949:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n(t.layoutComponent,{key:t.layoutComponent.name||t.layoutComponent.__filename,tag:"component"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{key:t.$route.fullPath})],1)],1)],1)},o=[],i=(n("99af"),n("c2a4")),u={name:"App",data:function(){return{currentLayout:null}},computed:{layoutComponent:function(){return this.currentLayout||n("7b3d").default}},metaInfo:{titleTemplate:function(t){return t="function"===typeof t?t(this.$store):t,t?"".concat(t," | ").concat(i.title):i.title},htmlAttrs:{lang:"ru"}}},c=u,l=(n("6294"),n("2877")),s=Object(l["a"])(c,r,o,!1,null,null,null),f=s.exports,d=n("2f62"),p=(n("d81d"),n("13d5"),n("d3b7"),n("ac1f"),n("5319"),n("ddb0"),n("5530")),v=n("ade3");function h(){var t=n("f517");return t.keys().map((function(e){var n=e.replace(/^\.\//,"").replace(/\.\w+$/,"",""),a=t(e).default||t(e);return a.namespaced=a.namespaced||!0,Object(v["a"])({},n,a)})).reduce((function(t,e){return Object(p["a"])(Object(p["a"])({},t),e)}),{})}a["a"].use(d["b"]);var b=function(){var t=h();return new d["a"]({modules:t,strict:!1})},m=n("8c4f"),g=n("58ca"),y=[{path:"/",name:"home",component:function(){return O(n.e("home").then(n.bind(null,"6511")))}},{path:"/about",name:"about",component:function(){return O(n.e("about").then(n.bind(null,"754b")))}},{path:"/contacts",name:"contacts",component:function(){return O(n.e("contacts").then(n.bind(null,"bfc0")))}},{path:"/catalog",name:"catalog",component:function(){return O(n.e("catalog").then(n.bind(null,"f7b4")))}},{path:"*",component:function(){return n.e("404").then(n.bind(null,"8cdb"))}}],_=y;function O(t){var e=function(){return{component:t,delay:200}};return Promise.resolve({functional:!0,render:function(t,n){var a=n.data,r=n.children;return t(e,a,r)}})}a["a"].use(m["a"]),a["a"].use(g["a"]);var k=function(){return new m["a"]({mode:"history",base:"/vue-experiments/",routes:_,linkActiveClass:"",linkExactActiveClass:"active"})},C=n("31bd"),j=function(t){var e=b(),n=k();return Object(C["sync"])(e,n),new a["a"]({store:e,router:n,render:function(e){return e(t)}})},x=(n("96cf"),n("1da1")),w={google:{families:["Open Sans:300,400,600,700:cyrillic,latin"]}},P=function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.e("chunk-2d0b364d").then(n.t.bind(null,"27d6",7));case 2:e=t.sent,e.load(w);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),L=function(){P()};function $(){var t=n("1b67");return t.keys().map((function(e){var n=e.replace(/^\.\//,"").replace(/\.vue$/,""),a=t(e).default||t(e);return Object(v["a"])({},n,a)})).reduce((function(t,e){return Object(p["a"])(Object(p["a"])({},t),e)}))}var E=function(t){var e=$();for(var n in e)t.component(n,e[n])},B={install:E};a["a"].config.productionTip=!1,a["a"].use(B),a["a"].use(L),j(f).$mount("#app")},aa41:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.href}},[t._t("default")],2)},r=[],o=(n("ac1f"),n("466d"),function(t){var e=/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;return t.match(e)[0]}),i={computed:{slotContent:function(){return this.$slots.default[0].text},href:function(){return"mailto:".concat(o(this.slotContent))}}},u=i,c=n("2877"),l=Object(c["a"])(u,a,r,!1,null,null,null);e["default"]=l.exports},c2a4:function(t){t.exports=JSON.parse('{"title":"Application","description":"Application description"}')},cf05:function(t,e,n){t.exports=n.p+"img/logo.8f81297b.png"},da31:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("img",{staticClass:"logo",attrs:{src:n("cf05"),alt:t.alt}})},r=[],o=n("c2a4"),i={props:{alt:{type:String,default:o.title}}},u=i,c=(n("11dd"),n("2877")),l=Object(c["a"])(u,a,r,!1,null,null,null);e["default"]=l.exports},f517:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="f517"}});