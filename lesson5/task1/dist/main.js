!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=65)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(37))},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(5),o=n(6),i=n(12);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(0),o=n(19),i=n(1),u=n(24),c=n(25),a=n(43),l=o("wks"),s=r.Symbol,f=a?s:s&&s.withoutSetter||u;t.exports=function(t){return i(l,t)||(c&&i(s,t)?l[t]=s[t]:l[t]=f("Symbol."+t)),l[t]}},function(t,e,n){var r=n(3);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var r=n(5),o=n(21),i=n(8),u=n(23),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=u(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(40),o=n(18);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=!1},function(t,e,n){var r=n(0),o=n(2);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports={}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(19),o=n(24),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports={}},function(t,e,n){var r=n(0),o=n(38),i=n(39),u=n(2),c=n(4),a=c("iterator"),l=c("toStringTag"),s=i.values;for(var f in o){var p=r[f],d=p&&p.prototype;if(d){if(d[a]!==s)try{u(d,a,s)}catch(t){d[a]=s}if(d[l]||u(d,l,f),o[f])for(var v in i)if(d[v]!==i[v])try{u(d,v,i[v])}catch(t){d[v]=i[v]}}}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(10),o=n(20);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(0),o=n(11),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(5),o=n(3),i=n(22);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(7),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,e,n){var r=n(7);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(3);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r,o=n(8),i=n(44),u=n(14),c=n(13),a=n(49),l=n(22),s=n(15),f=s("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"<\/script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;v=r?function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=l("iframe")).style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var n=u.length;n--;)delete v.prototype[u[n]];return v()};c[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[f]=t):n=v(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(1),o=n(9),i=n(46).indexOf,u=n(13);t.exports=function(t,e){var n,c=o(t),a=0,l=[];for(n in c)!r(u,n)&&r(c,n)&&l.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(l,n)||l.push(n));return l}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(50),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r,o,i,u=n(51),c=n(0),a=n(7),l=n(2),s=n(1),f=n(15),p=n(13),d=c.WeakMap;if(u){var v=new d,y=v.get,m=v.has,g=v.set;r=function(t,e){return g.call(v,t,e),e},o=function(t){return y.call(v,t)||{}},i=function(t){return m.call(v,t)}}else{var h=f("state");p[h]=!0,r=function(t,e){return l(t,h,e),e},o=function(t){return s(t,h)?t[h]:{}},i=function(t){return s(t,h)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(20),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(5),o=n(54),i=n(12),u=n(9),c=n(23),a=n(1),l=n(21),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=u(t),e=c(e,!0),l)try{return s(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(0),o=n(2),i=n(1),u=n(11),c=n(31),a=n(30),l=a.get,s=a.enforce,f=String(String).split("String");(t.exports=function(t,e,n,c){var a=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),s(n).source=f.join("string"==typeof e?e:"")),t!==r?(a?!p&&t[e]&&(l=!0):delete t[e],l?t[e]=n:o(t,e,n)):l?t[e]=n:u(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||c(this)}))},function(t,e,n){"use strict";var r,o,i,u=n(35),c=n(2),a=n(1),l=n(4),s=n(10),f=l("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),s||a(r,f)||c(r,f,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,e,n){var r=n(1),o=n(61),i=n(15),u=n(62),c=i("IE_PROTO"),a=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),r(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var r=n(6).f,o=n(1),i=n(4)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r=n(9),o=n(42),i=n(16),u=n(30),c=n(52),a=u.set,l=u.getterFor("Array Iterator");t.exports=c(Array,"Array",(function(t,e){a(this,{type:"Array Iterator",target:r(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){var r=n(3),o=n(41),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(4),o=n(26),i=n(6),u=r("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},function(t,e,n){var r=n(25);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(5),o=n(6),i=n(8),u=n(45);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=u(e),c=r.length,a=0;c>a;)o.f(t,n=r[a++],e[n]);return t}},function(t,e,n){var r=n(27),o=n(14);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(9),o=n(47),i=n(48),u=function(t){return function(e,n,u){var c,a=r(e),l=o(a.length),s=i(u,l);if(t&&n!=n){for(;l>s;)if((c=a[s++])!=c)return!0}else for(;l>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,e,n){var r=n(28),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(28),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){var r=n(29);t.exports=r("document","documentElement")},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(0),o=n(31),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){"use strict";var r=n(53),o=n(60),i=n(35),u=n(63),c=n(36),a=n(2),l=n(33),s=n(4),f=n(10),p=n(16),d=n(34),v=d.IteratorPrototype,y=d.BUGGY_SAFARI_ITERATORS,m=s("iterator"),g=function(){return this};t.exports=function(t,e,n,s,d,h,S){o(n,e,s);var b,w,D,L=function(t){if(t===d&&$)return $;if(!y&&t in O)return O[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},x=e+" Iterator",T=!1,O=t.prototype,_=O[m]||O["@@iterator"]||d&&O[d],$=!y&&_||L(d),q="Array"==e&&O.entries||_;if(q&&(b=i(q.call(new t)),v!==Object.prototype&&b.next&&(f||i(b)===v||(u?u(b,v):"function"!=typeof b[m]&&a(b,m,g)),c(b,x,!0,!0),f&&(p[x]=g))),"values"==d&&_&&"values"!==_.name&&(T=!0,$=function(){return _.call(this)}),f&&!S||O[m]===$||a(O,m,$),p[e]=$,d)if(w={values:L("values"),keys:h?$:L("keys"),entries:L("entries")},S)for(D in w)!y&&!T&&D in O||l(O,D,w[D]);else r({target:e,proto:!0,forced:y||T},w);return w}},function(t,e,n){var r=n(0),o=n(32).f,i=n(2),u=n(33),c=n(11),a=n(55),l=n(59);t.exports=function(t,e){var n,s,f,p,d,v=t.target,y=t.global,m=t.stat;if(n=y?r:m?r[v]||c(v,{}):(r[v]||{}).prototype)for(s in e){if(p=e[s],f=t.noTargetGet?(d=o(n,s))&&d.value:n[s],!l(y?s:v+(m?".":"#")+s,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;a(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),u(n,s,p,t)}}},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(1),o=n(56),i=n(32),u=n(6);t.exports=function(t,e){for(var n=o(e),c=u.f,a=i.f,l=0;l<n.length;l++){var s=n[l];r(t,s)||c(t,s,a(e,s))}}},function(t,e,n){var r=n(29),o=n(57),i=n(58),u=n(8);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(u(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(27),o=n(14).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(3),o=/#|\.prototype\./,i=function(t,e){var n=c[u(t)];return n==l||n!=a&&("function"==typeof e?r(e):!!e)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",l=i.POLYFILL="P";t.exports=i},function(t,e,n){"use strict";var r=n(34).IteratorPrototype,o=n(26),i=n(12),u=n(36),c=n(16),a=function(){return this};t.exports=function(t,e,n){var l=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),u(t,l,!1,!0),c[l]=a,t}},function(t,e,n){var r=n(18);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(3);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){var r=n(8),o=n(64);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){"use strict";n.r(e);n(17);let r=[];function o(){localStorage.setItem("storage",JSON.stringify(r))}window.addEventListener("storage",(function(t){"storage"==t.key&&(r=localStorage.getItem("storage")?JSON.parse(localStorage.getItem("storage")):[],S())}));let i=document.querySelectorAll(".day"),u=document.querySelectorAll(".day-number");function c(t,e,n,r,o,c){if(g[0].getMonth()===t.getMonth()){let a=(e-t)/1e3/60;for(let l=0;l<7;l++){let s=(t+"").split(" ")[4].split(":");if(u[l].innerHTML==e.getDate())if(t.getDate()!==e.getDate()){let u=document.createElement("div"),a=document.createElement("div");u.classList.add("active_event"),a.classList.add("active_event");let f=60*+s[0]+ +s[1];u.style.marginTop=`${f+100}px`,u.style.height=`${1440-f}px`;a.style.marginTop="100px",a.style.height=`${1440-(1440-60*(e+"").split(" ")[4].split(":")[0]+ +(e+"").split(" ")[4].split(":")[1])}px`,i[l-1].append(u),i[l].append(a),a.innerHTML+=`${n}<br>`,a.innerHTML+=`${(t+"").split(" ")[4]} - ${(e+"").split(" ")[4]}<br>`,a.innerHTML+=`${r}`,u.innerHTML+=`${n}<br>`,u.innerHTML+=`${(t+"").split(" ")[4]} - ${(e+"").split(" ")[4]}<br>`,u.innerHTML+=`${r}`,u.setAttribute("data-id",o),u.style.backgroundColor=c,a.setAttribute("data-id",o),a.style.backgroundColor=c}else{let u=60*+s[0]+ +s[1],f=document.createElement("div");i[l].append(f),f.classList.add("active_event"),f.style.height=`${a}px`,f.style.marginTop=`${u+100}px`,f.innerHTML+=`${n}<br>`,f.innerHTML+=`${(t+"").split(" ")[4]} - ${(e+"").split(" ")[4]}<br>`,f.innerHTML+=`${r}`,f.setAttribute("data-id",o),f.style.backgroundColor=c}}}}function a(){r=localStorage.getItem("storage")?JSON.parse(localStorage.getItem("storage")):[];for(let t=0;t<r.length;t++)"object"!=typeof r[t].startDate&&(r[t].startDate=new Date(r[t].startDate),r[t].endDate=new Date(r[t].endDate)),c(r[t].startDate,r[t].endDate,r[t].name,r[t].description,r[t].id,r[t].color)}let l=document.querySelectorAll(".day");function s(){for(let t=0;t<g.length;t++)if((g[t]+"").split(" ")[2]==(new Date+"").split(" ")[2]){let e=document.createElement("div");e.classList.add("redLine"),l[t].append(e);let n=document.createElement("div"),r=document.createElement("div");n.classList.add("redLine-round"),r.classList.add("redLine-line"),e.append(n),e.append(r);let o=(g[t]+"").split(" ")[4].split(":"),i=60*+o[0]+ +o[1];e.style.marginTop=`${i+100}px`}}function f(t){document.querySelector(".delete-event").addEventListener("click",(function(){event.preventDefault();for(let e=0;e<r.length;e++)if(t.id==r[e].id){return r.splice(e,1),o(),document.querySelector(".popup").classList.remove("popup-switch"),void S()}}))}function p(){let t=document.querySelectorAll(".active_event");for(let e=0;e<t.length;e++)t[e].addEventListener("click",(function(){for(let t=0;t<r.length;t++)if(event.target.dataset.id==r[t].id){d(r[t]),f(r[t]);let e=document.querySelector(".submit-button ");e.addEventListener("click",v.bind(e,r[t]))}}))}function d(t){document.querySelector(".popup").classList.add("popup-switch");let e=document.querySelector(".input__name"),n=document.querySelector(".event__color-picker"),r=document.querySelector(".start-date"),o=document.querySelector(".start-time"),i=document.querySelector(".end-time"),u=document.querySelector(".end-date"),c=document.querySelector(".description-input ");e.value=t.name+"",n.value=t.color;let a=t.startDate.getMonth()+1<9?`0${t.startDate.getMonth()+1+""}`:`${t.startDate.getMonth()+1}`,l=(t.startDate+"").split(" ")[3],s=(t.startDate+"").split(" ")[2];r.value=`${l}-${a}-${s}`,o.value=(t.startDate+"").split(" ")[4].split(":").splice(0,2).join(":"),i.value=(t.endDate+"").split(" ")[4].split(":").splice(0,2).join(":");let f=t.endDate.getMonth()+1<9?`0${t.endDate.getMonth()+1+""}`:`${t.endDate.getMonth()+1}`,p=(t.endDate+"").split(" ")[3],d=(t.endDate+"").split(" ")[2];u.value=`${p}-${f}-${d}`,c.value=t.description}function v(t){for(let e=0;e<r.length;e++)t.id==r[e].id&&(r.splice(e,1),o(),S());document.querySelector(".submit-button ").removeEventListener("click",v),document.querySelector(".popup").classList.remove("popup-switch")}let y=document.querySelectorAll(".day-number"),m=document.querySelector(".dates"),g=[];function h(){let t=(new Date).getDay();for(let e=0;e<7;e++){if(e<t){let t=new Date,n=t.getDate()-(e+1),r=t.setDate(n);g.unshift(new Date(r))}if(t==e&&g.push(new Date),e>t){let t=new Date,n=t.getDate()+(e-t.getDay()),r=t.setDate(n);g.push(new Date(r))}}}function S(){for(let t=0;t<7;t++){let e=(g[t]+"").split(" ")[2];y[t].innerHTML=e,(g[t]+"").split(" ")[2]===(new Date+"").split(" ")[2]?y[t].classList.add("current-day"):y[t].classList.remove("current-day")}!function(){let t=[],e=[],n=[],r=[];for(let n=0;n<g.length;n++)t.push((g[n]+"").split(" ")[1]),e.push((g[n]+"").split(" ")[3]);for(let e of t)n.includes(e)||n.push(e);for(let t of e)r.includes(t)||r.push(t);1==r.length?m.innerHTML=`${n[0]} ${r[0]}`:m.innerHTML=`${n[0]} ${r[0]} - ${n[1]} ${r[1]}`}();let t=document.querySelectorAll(".active_event");for(let e=0;e<t.length;e++)t[e].remove();a(),p(),s()}h(),S();let b=document.querySelector(".arrow-button__next");document.querySelector(".arrow-button__prev").addEventListener("click",(function(){for(let t=0;t<7;t++){let e=g[t].getDate()-7;e=new Date(g[t]).setDate(e),g[t]=new Date(e)}S(),D();let t=document.querySelector(".redLine");null!==t&&t.remove("div"),s()})),b.addEventListener("click",(function(){for(let t=0;t<7;t++){let e=g[t].getDate()+7;e=new Date(g[t]).setDate(e),g[t]=new Date(e)}S(),D();let t=document.querySelector(".redLine");null!==t&&t.remove("div"),s()})),document.querySelector(".today-button").addEventListener("click",(function(){g=[],h(),S()}));const w=document.querySelector(".calendar-visualization"),D=()=>{w.innerHTML="";for(let t=1;t<=24;t++){const e=document.createElement("div");e.setAttribute("data-time",`${t<10?0:""}${t}:00`),e.classList.add("emptyRow"),w.append(e);for(let t=1;t<=7;t++){const n=document.createElement("div");let r=g[t-1]+"",o=r.split(" ")[0],i=r.split(" ")[2];n.setAttribute("data-day",`${o}`),n.setAttribute("data-date",`${i}`),n.setAttribute("data-number",`${t-1}`),n.classList.add("emptyCell"),e.append(n)}}};D();const L=document.querySelector(".timing");L.innerHTML=(()=>{const t=[];return((t,e)=>{const n=[];for(let r=t;r<=e;r++)n.push(r);return n})(1,23).map(e=>{let n="";n=e<10?`0${e}`:e,t.push(`<div \n                    class="timing__blocks" \n                    data-block-number='${e}'\n                    ><span class="clock">${n}:00</span></div>`)}),t.join("")})();let x=document.querySelector(".start-date"),T=document.querySelector(".start-time"),O=document.querySelector(".end-time"),_=document.querySelector(".end-date");document.querySelector(".event__color-picker");function $(t){const e=t.getFullYear();let n=t.getMonth()+1;n=n<10?"0"+n:n;let r=t.getDate();return r=r<10?"0"+r:r,`${e}-${n}-${r}`}function q(t){let e=t.getHours();e=e<10?"0"+e:e;let n=t.getMinutes();return n=n<10?"0"+n:n,`${e}:${n}`}const M=t=>{if("emptyCell"===t.target.classList.value){t.target.classList.add("temporary-cell"),document.querySelector(".popup").classList.add("popup-switch"),document.querySelector(".event__color-picker").value="#4183f1",T.value=t.target.closest(".emptyRow").dataset.time+"",O.value=t.target.closest(".emptyRow").dataset.time+"";document.querySelector(".dates").innerHTML.split(" ")[0];let e="01",n=document.querySelector(".dates").innerHTML.split(" ")[1],r=t.target.dataset.date;x.value=`${n}-${e}-${r}`,_.value=`${n}-${e}-${r}`}else{document.querySelector(".popup").classList.add("popup-switch"),x.value=$(new Date),_.value=$(new Date),T.value=q(new Date),O.value=q(new Date)}},j=document.querySelector(".calendar-visualization"),k=document.querySelector(".create-button");j.addEventListener("click",M),k.addEventListener("click",M),document.querySelector(".close").onclick=function(){event.preventDefault(),document.querySelector(".popup").classList.remove("popup-switch"),D()};const E=(t,e)=>e<t?(alert("error"),!1):!(t-e>216e5)||(alert("error"),!1),A=(t,e)=>e.getHours()-t.getHours()>6?(alert("You cannot create an event longer than 6 hours"),!1):!(t.getTime()-e.getTime()>216e5)||(alert("You cannot create an event longer than 6 hours"),!1),P=t=>!(t-(new Date).getTime()<9e5)||(alert("you cannot delete/update event 15 minutes before the start"),!1),I=()=>{document.querySelector(".input__name");const t=document.querySelector(".start-date"),e=document.querySelector(".start-time"),n=document.querySelector(".end-date"),o=document.querySelector(".end-time");document.querySelector(".description-input");let i,u,c,a,l=new Date(t.value+"T"+e.value);new Date(n.value+"T"+o.value);for(let n=0;n<r.length-1;n++){let o=new Date(r[n].startDate),i=new Date(r[n].endDate);if(t.value+"T"+e.value==r[n].startDate)return null==r[n].id||(alert("two events cannot intersect 1"),!1);if(l>o&&l<i)return null==r[n].id||(alert("two events cannot intersect 2"),!1)}let s,f,p=[],d=[],v=new Date(t.value+"T"+e.value),y=new Date(n.value+"T"+o.value);r.map(t=>{p.push(new Date(t.startDate)),d.push(new Date(t.endDate))});return(()=>{for(let t=0;t<p.length;t++)s=p[t],f=d[t],s<v&&(void 0===i||i<s)?i=s:s>v&&(void 0===u||u>s)&&(u=s),f<y&&(void 0===c||c<f)?c=f:f>y&&(void 0===a||a>f)&&(a=f)})(),v>=c&&v<=i?(alert("two events cannot intersect 3"),!1):!(y>u&&y<a)||(alert("two events cannot intersect 4"),!1)};let H=document.querySelector(".popup__form");document.querySelector(".submit-button").addEventListener("click",(function(){event.preventDefault();const t=[...new FormData(H)];let e=t[0][1],n=t[1][1],i=`${t[2][1]}T${t[3][1]}`,u=`${t[5][1]}T${t[4][1]}`,c=t[6][1];if(0==function(t,e){if(!(E(t,e)&&A(t,e)&&P(t)&&I()))return!1}(new Date(i),new Date(u)))return;!function(t,e,n,o,i){let u={id:1e3*Math.random(),name:t,color:e,startDate:new Date(n),endDate:new Date(o),description:i};isNaN(u.startDate.getTime())||isNaN(u.endDate.getTime())||r.push(u)}(e,n,i,u,c),o(),a(),document.querySelector(".popup").classList.remove("popup-switch"),S(),p(),D()}))}]);