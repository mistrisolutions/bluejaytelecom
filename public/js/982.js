(self.webpackChunkbluejay=self.webpackChunkbluejay||[]).push([[982],{598:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(3645),s=n.n(a)()((function(e){return e[1]}));s.push([e.id,".v-list-item__subtitle[data-v-3d9b2687],.v-list-item__title[data-v-3d9b2687]{white-space:pre-wrap;line-height:1.5;font-weight:500;font-size:.95rem}.theme--light.v-card[data-v-3d9b2687]{transition:.3s}.theme--light.v-card[data-v-3d9b2687]:hover{background-color:hsla(0,0%,96.5%,.685)}.v-application .seemoreBtn a[data-v-3d9b2687]{color:#fff!important;text-decoration:none!important}",""]);const r=s},4792:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(3645),s=n.n(a)()((function(e){return e[1]}));s.push([e.id,".header-carousel .v-carousel-{height:600px}.header-carousel .v-responsive__sizer{background:rgba(0,0,0,.47843137254901963)!important}.v-sheet.theme--dark{background:transparent}@media (max-width:599px){.header-carousel .v-carousel,.header-carousel .v-carousel__item{height:300px!important}}",""]);const r=s},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var s={};if(a)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(s[i]=!0)}for(var o=0;o<e.length;o++){var c=[].concat(e[o]);a&&s[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},3379:(e,t,n)=>{"use strict";var a,s=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function o(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},a=[],s=0;s<e.length;s++){var r=e[s],c=t.base?r[0]+t.base:r[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=o(u),h={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(i[d].references++,i[d].updater(h)):i.push({identifier:u,updater:f(h,t),references:1}),a.push(u)}return a}function l(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var s=n.nc;s&&(a.nonce=s)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function h(e,t,n,a){var s=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=d(t,s);else{var r=document.createTextNode(s),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function v(e,t,n){var a=n.css,s=n.media,r=n.sourceMap;if(s?e.setAttribute("media",s):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var m=null,p=0;function f(e,t){var n,a,s;if(t.singleton){var r=p++;n=m||(m=l(t)),a=h.bind(null,n,r,!1),s=h.bind(null,n,r,!0)}else n=l(t),a=v.bind(null,n,t),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else s()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=s());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var s=o(n[a]);i[s].references--}for(var r=c(e,t),l=0;l<n.length;l++){var u=o(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=r}}}},7982:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});const a={data:function(){return{colors:["light-blue lighten-3","teal lighten-3","light-blue accent-2"],slides:[{img:"assets/img/slider1.jpg",title:"We're going big for small."},{img:"assets/img/slider2.jpg",title:"And we’re not stopping there."},{img:"assets/img/slider3.jpg",title:"More ways we’ve helped businesses like yours."}]}}};var s=n(3379),r=n.n(s),i=n(4792),o={insert:"head",singleton:!1};r()(i.Z,o);i.Z.locals;var c=n(1900);const l={layout:"frontend-layout",components:{Carousel:(0,c.Z)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"header-carousel"},[n("v-carousel",{attrs:{"hide-delimiter-background":"","show-arrows":"",interval:"1000000",cycle:!1}},e._l(e.slides,(function(t,a){return n("v-carousel-item",{key:a,attrs:{src:t.img,"reverse-transition":"none",transition:"none"}},[n("v-sheet",{attrs:{height:"100%"}},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"mx-auto",attrs:{cols:"8",sm:"6"}},[n("h1",{staticClass:"text-center text-h6 text-sm-h4"},[e._v(e._s(t.title))])])],1)],1)],1)})),1)],1)}),[],!1,null,null,null).exports,Card:n(3321).Z},data:function(){return{}}};const u=(0,c.Z)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("Carousel"),e._v(" "),n("div",{staticClass:"py-16"},[n("v-container",[n("v-row",{staticClass:"d-flex align-center justify-center"},[n("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"5"}},[n("h2",{staticClass:"mb-6"},[e._v("\n                        About Bluejay Telecom\n                    ")]),e._v(" "),n("p",[e._v("\n                        Bluejay Telecom was founded by a group of business\n                        and telecommunication network professionals with\n                        years of industrial experience, incorporated in USA\n                        with national telecom operators and best VoIP\n                        companies around the world. Bluejay Telecom deliver\n                        the highest quality of telecommunications from\n                        voice, data, internet and mobile. We are committed\n                        to serve our customers with an uninterrupted and\n                        affordable VoIP service and utmost convenience. We\n                        have flexibility to offer innovative services to\n                        customers worldwide. We offer wholesale and retail\n                        voice termination all over the world with main focus\n                        in Asia. Our systems are modular, scalable and\n                        flexible.\n                    ")])]),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"7"}},[n("v-img",{attrs:{src:"assets/img/about.png"}})],1)],1)],1)],1),e._v(" "),n("Card",{attrs:{count:3,btn:!0}}),e._v(" "),n("div",{staticClass:"what-is-voip py-16"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",justify:"center"}},[n("v-img",{staticClass:"mx-auto my-10",attrs:{src:"assets/img/phone.png","max-height":"500","max-width":"500"}})],1),e._v(" "),n("v-col",{staticClass:"pr-md-16",attrs:{cols:"12",md:"6"}},[n("h2",{staticClass:"mb-6 font-weight-bold"},[e._v("\n                        What is VoIP?\n                    ")]),e._v(" "),n("p",[e._v("\n                        VoIP is an acronym for Voice over Internet Protocol\n                        that describes the method to place and receive phone\n                        calls over the internet. Most people consider VoIP\n                        the alternative to the local telephone company.\n                    ")]),e._v(" "),n("p",[e._v("\n                        If you’ve heard of an IP address, that’s your\n                        Internet Protocol address. An IP address is how\n                        computers and devices communicate with each other on\n                        the internet.\n                    ")]),e._v(" "),n("p",[e._v("\n                        VoIP isn’t actually all that new. Telephony has\n                        relied on digital lines to carry phone calls since\n                        the late 90s. VoIP is a cost-effective way to handle\n                        an unlimited number of calls.\n                    ")])]),e._v(" "),n("v-col",{staticClass:"pr-md-16",attrs:{cols:"12",md:"6"}},[n("h2",{staticClass:"mb-6 font-weight-bold"},[e._v("\n                        What is VoIP?\n                    ")]),e._v(" "),n("p",[e._v("\n                        VoIP phone expert is the one person who can handle\n                        all your VoIP phone system installation, support and\n                        training needs. This professional is pretty much an\n                        expert on everything pertaining to VoIP phones and\n                        calling services. VoIP or Voice over Internet\n                        Protocol calling has become almost indispensable for\n                        any company that wants to make a lasting impact as a\n                        company of the future. It is both a cost effective,\n                        as well as, far reaching way to make local, as well\n                        as, international and long distance calls. VoIP\n                        services use a high speed internet broadband\n                        connection to place calls. VoIP phone systems lend a\n                        professional and efficient touch to your business\n                        communications.\n                    ")])])],1)],1)],1)],1)}),[],!1,null,null,null).exports},3321:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});const a={props:{count:Number,btn:!1},data:function(){return{services:[{icon:"mdi-semantic-web",service_name:"Wholesale VOIP",lists:["The wholesale VOIP is our Main Concern and service.","Our Main Object to provide the best Wholesale Service in the VOIP Market in the cheapest rate.","We are interconnected with more then 100+ satisfied Wholesale customer,who are happily enjoying our wholesale services."]},{icon:"mdi-bullseye-arrow",service_name:"Retails VOIP",lists:["We are strong in the retails VoIP.","We have many attractive plans for the retail’s services apart from the VOIP market for A2Z Destinations.","we have more then 50+ satisfied Retails customer who are taking the experience of best retail services and technical support by connecting with us. Feel free to contact us."]},{icon:"mdi-apple-keyboard-command",service_name:"Server Rent",lists:["We have unbeatable price for high performance Dedicated Server, Virtual Server, VOIP Switch, VOS. ","We have professional and experienced Technical support team who will always would be ready to provide you quick 24/7 Support. Feel free to contact us."]},{icon:"mdi-xml",service_name:"APPS DEVELOPMENT ",lists:["Got an app idea? Let’s make your dream app a reality together.","We’ve had an affair with creativity which compels us to strive harder!","We are expert on making Ecommerce app and Mobile Game."]},{icon:"mdi-code-braces",service_name:"WEB DEVELOPMENT",lists:["A Website is not enough.","You need results as well and we are expert on that.","We turn your imagination into reality with our creativity.","Our web design services will greatly enhance your business’s presence on the Internet."]},{icon:"mdi-gate-arrow-right",service_name:"SOFTWARE DEVELOPMENT",lists:["Get high-performing, speedy software applications that handles your Personal & Business operations better.","we make software applications that are interactive and a visual treat.","Feel free to contact us."]}]}},computed:{getServices:function(){return this.services.slice(0,this.count)}}};var s=n(3379),r=n.n(s),i=n(598),o={insert:"head",singleton:!1};r()(i.Z,o);i.Z.locals;const c=(0,n(1900).Z)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"py-16 grey lighten-3"},[n("v-container",[n("v-row",{staticClass:"justify-center text-center"},[n("v-col",{attrs:{md:"6"}},[n("h1",{staticClass:"mb-6 section-title"},[e._v("Our Service")])])],1),e._v(" "),n("v-row",[e._l(e.getServices,(function(t,a){return n("v-col",{key:a,attrs:{cols:"12",md:"6",lg:"4"}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(s){var r=s.hover;return[n("v-card",{staticClass:"py-6",class:{"on-hover":r},attrs:{elevation:r?16:2,outlined:"",height:"100%"}},[n("v-list-item",[n("v-list-item-content",{staticClass:"text-center"},[n("v-icon",{staticClass:"primary--text",attrs:{size:"80"}},[e._v("\n                                    "+e._s(t.icon)+"\n                                ")]),e._v(" "),n("h3",{staticClass:"font-weight-bold my-5"},[e._v("\n                                    "+e._s(t.service_name)+"\n                                ")])],1)],1),e._v(" "),n("div",{staticClass:"px-5"},e._l(e.services[a].lists,(function(t,a){return n("v-list-item",{key:a,staticClass:"px-0"},[n("v-list-item-content",[n("v-row",[n("v-col",{attrs:{cols:"1"}},[n("v-icon",{attrs:{color:"primary"}},[e._v("mdi-chevron-double-right\n                                            ")])],1),e._v(" "),n("v-col",{attrs:{cols:"10"}},[n("v-list-item-title",[e._v(e._s(t))])],1)],1)],1)],1)})),1)],1)]}}],null,!0)})],1)})),e._v(" "),e.btn?n("v-col",{staticClass:"text-center mt-5",attrs:{cols:"12"}},[n("v-btn",{staticClass:"secondary button seemoreBtn"},[n("inertia-link",{attrs:{href:"/service"}},[e._v("See more")])],1)],1):e._e()],2)],1)],1)}),[],!1,null,"3d9b2687",null).exports},1900:(e,t,n)=>{"use strict";function a(e,t,n,a,s,r,i,o){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),a&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=c):s&&(c=o?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}n.d(t,{Z:()=>a})}}]);