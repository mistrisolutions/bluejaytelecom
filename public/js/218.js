(self.webpackChunkbluejay=self.webpackChunkbluejay||[]).push([[218],{6334:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var n=i(3645),a=i.n(n)()((function(e){return e[1]}));a.push([e.id,".parallax-overlay p{width:70%}@media (min-width:768px){.parallax-overlay p{width:50%}}",""]);const o=a},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,n){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(n)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(a[r]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);n&&a[s[0]]||(i&&(s[2]?s[2]="".concat(i," and ").concat(s[2]):s[2]=i),t.push(s))}},t}},3379:(e,t,i)=>{"use strict";var n,a=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},o=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),r=[];function u(e){for(var t=-1,i=0;i<r.length;i++)if(r[i].identifier===e){t=i;break}return t}function s(e,t){for(var i={},n=[],a=0;a<e.length;a++){var o=e[a],s=t.base?o[0]+t.base:o[0],c=i[s]||0,l="".concat(s," ").concat(c);i[s]=c+1;var m=u(l),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==m?(r[m].references++,r[m].updater(d)):r.push({identifier:l,updater:h(d,t),references:1}),n.push(l)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var a=i.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var r=o(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var l,m=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,i,n){var a=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=m(t,a);else{var o=document.createTextNode(a),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(o,r[t]):e.appendChild(o)}}function p(e,t,i){var n=i.css,a=i.media,o=i.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var f=null,v=0;function h(e,t){var i,n,a;if(t.singleton){var o=v++;i=f||(f=c(t)),n=d.bind(null,i,o,!1),a=d.bind(null,i,o,!0)}else i=c(t),n=p.bind(null,i,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var i=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var a=u(i[n]);r[a].references--}for(var o=s(e,t),c=0;c<i.length;c++){var l=u(i[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=o}}}},1218:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>a});const n={layout:"frontend-layout",components:{Parallax:i(7551).Z},data:function(){return{}}};const a=(0,i(1900).Z)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("Parallax",{attrs:{header:{bg:"/assets/img/bg4.jpg",title:"Licenses",desc:"Bluejay Telecom delivers the highest quality of telecommunications from voice, data, internet and mobile. "}}}),e._v(" "),i("div",{staticClass:"privecy py-10"},[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("p",[e._v("\n                        Lorem ipsum dolor sit amet consectetur, adipisicing\n                        elit. Explicabo quod cumque eum non dignissimos in\n                        eaque cupiditate voluptatum dolor soluta. Beatae\n                        recusandae temporibus nostrum similique incidunt non\n                        odio deleniti, ipsam consequuntur, ducimus aliquam\n                        enim porro optio in animi obcaecati hic unde\n                        reiciendis voluptate suscipit quis, necessitatibus\n                        magni repellat! Officia culpa vel, voluptate\n                        corrupti voluptates fuga harum quis, provident, quas\n                        neque aliquam exercitationem deleniti voluptatem\n                        repellendus. Saepe minima distinctio incidunt\n                        cupiditate laudantium est tempora repellat sint\n                        possimus odio quo a numquam necessitatibus vitae\n                        officiis nulla maiores eius error fugiat neque dicta\n                        totam, fuga minus? Dolorum fugiat amet accusantium\n                        fuga praesentium quae harum exercitationem repellat!\n                        Itaque accusantium iste cumque tempore dicta\n                        corrupti animi accusamus! Quo veniam officia facilis\n                        corrupti quos qui illum accusantium vitae dolorem,\n                        minus ab maxime aliquam sit earum ex consequatur\n                        cumque blanditiis voluptatibus, maiores porro dicta.\n                        Aperiam quia temporibus vitae assumenda hic,\n                        sapiente, fuga illo asperiores explicabo eos\n                        quisquam corrupti voluptas. Deserunt illo voluptatum\n                        inventore in maxime. Porro culpa dicta architecto id\n                        cum eius doloremque laborum, sed beatae odit ratione\n                        nesciunt ex ipsam sit explicabo dolores atque\n                        maiores eaque neque, facilis ea? Praesentium culpa\n                        voluptates at, dolores esse provident voluptate\n                        exercitationem. Fuga dolor error dolores inventore,\n                        nihil nobis dolorum.\n                    ")]),e._v(" "),i("p",[e._v("\n                        Lorem ipsum dolor sit, amet consectetur adipisicing\n                        elit. Iste saepe doloribus vitae nesciunt vel?\n                        Facere quam impedit, aut ab fuga nihil corrupti amet\n                        expedita nesciunt ea ratione? Reprehenderit qui, sed\n                        magni nam aliquam cumque culpa doloremque illo! Sint\n                        cupiditate nostrum, reprehenderit ullam, incidunt\n                        natus magnam id necessitatibus aut atque alias rerum\n                        similique saepe fuga eaque nobis provident officia\n                        nam. Facere hic iste ducimus repellendus maiores\n                        incidunt nihil soluta quasi aut, provident\n                        consectetur dicta dolores aliquid porro eos ratione\n                        quo consequuntur odit optio quis pariatur,\n                        repudiandae a doloribus. Fugit laudantium laborum\n                        quam repellat nam quis. Vero voluptatem totam\n                        deserunt, corrupti voluptates voluptas in ut\n                        dolores. Beatae doloremque sequi labore itaque\n                        eveniet! Aut fuga, voluptates quam suscipit iste\n                        labore illum. Vero eveniet magnam ratione minus\n                        sapiente, enim nisi, accusamus amet praesentium\n                        totam, aspernatur ex exercitationem excepturi quia\n                        corrupti quae voluptatum saepe rem sint odio tempora\n                        laborum. Delectus sint veritatis cum repellat qui.\n                    ")]),e._v(" "),i("p",[e._v("\n                        Lorem ipsum dolor, sit amet consectetur adipisicing\n                        elit. Assumenda id autem maiores, tempore, eum\n                        necessitatibus inventore ipsam minima saepe\n                        voluptatibus labore officia? Ipsam nam molestiae quo\n                        veritatis a commodi recusandae nesciunt quia vel\n                        eligendi earum iusto, facere vitae necessitatibus\n                        nostrum tempora labore aliquid qui quisquam incidunt\n                        fugit! Modi est quasi asperiores libero quod\n                        consequuntur dolorum provident sunt, qui, nostrum\n                        totam incidunt ullam consequatur doloremque numquam\n                        eum veritatis similique distinctio, dicta sint\n                        inventore quibusdam eius. Aut architecto ipsam ipsum\n                        ducimus et commodi itaque, eius assumenda quasi\n                        inventore repellendus sunt minus maiores facilis\n                        perspiciatis illum nulla! Nemo ea temporibus libero\n                        neque amet.\n                    ")])])],1)],1)],1)],1)}),[],!1,null,null,null).exports},7551:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});const n={props:{header:{type:Object}}};var a=i(3379),o=i.n(a),r=i(6334),u={insert:"head",singleton:!1};o()(r.Z,u);r.Z.locals;const s=(0,i(1900).Z)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-parallax",{staticClass:"parallax-overlay",attrs:{dark:"",src:e.header.bg,height:"400"}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[i("h1",{staticClass:"text-h4 text-sm-h3 font-weight-bold mb-4"},[e._v("\n                "+e._s(e.header.title)+"\n            ")]),e._v(" "),i("p",{staticClass:"text-body-2 white--text text-center mx-auto"},[e._v("\n                "+e._s(e.header.desc)+"\n            ")])])],1)],1)}),[],!1,null,null,null).exports},1900:(e,t,i)=>{"use strict";function n(e,t,i,n,a,o,r,u){var s,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=i,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),r?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=s):a&&(s=u?function(){a.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:a),s)if(c.functional){c._injectStyles=s;var l=c.render;c.render=function(e,t){return s.call(t),l(e,t)}}else{var m=c.beforeCreate;c.beforeCreate=m?[].concat(m,s):[s]}return{exports:e,options:c}}i.d(t,{Z:()=>n})}}]);