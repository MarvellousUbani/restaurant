!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var r=t(1),a=t(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,n,t){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function d(e,n){for(var t={},r=[],a=0;a<e.length;a++){var o=e[a],d=n.base?o[0]+n.base:o[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var u=c(l),m={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(i[u].references++,i[u].updater(m)):i.push({identifier:l,updater:b(m,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function m(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,a);else{var o=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}function p(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function b(e,n){var t,r,a;if(n.singleton){var o=h++;t=f||(f=s(n)),r=m.bind(null,t,o,!1),a=m.bind(null,t,o,!0)}else t=s(n),r=p.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=d(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=c(t[r]);i[a].references--}for(var o=d(e,n),s=0;s<t.length;s++){var l=c(t[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=o}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,"body{\r\n    margin:0;\r\n    padding:0;\r\n    background:#171717;\r\n    color:#fff;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.row{\r\n    display:flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.header__info{\r\n    padding:10vh 4rem;\r\n}\r\n\r\n.header__text-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.header__img-content img{\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.header__title{\r\n    font-size: 3.5rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.header__btn{\r\n    max-width: 150px;\r\n    padding: .75rem;\r\n    font-size: 1rem;\r\n    color: #fff;\r\n    border: 1px solid #fff;\r\n    background: transparent;\r\n    margin-top: 1rem;\r\n}\r\n\r\n.form-col{\r\n    max-width: 800px;\r\n    margin: auto;\r\n    text-align: center;\r\n    padding-top: 20vh;\r\n\r\n}\r\n\r\n.form-box{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.form-input{\r\n    font-size: 1rem;\r\n    margin-bottom: 1rem;\r\n    background: transparent;\r\n    border: 1px solid #979796;\r\n    padding: .75rem;\r\n    box-sizing:border-box;\r\n    max-width:100%;\r\n}\r\n\r\n.form-textarea{\r\n    border: 1px solid #979796;\r\n    box-sizing: border-box;\r\n    padding: .75rem;\r\n    background: transparent;\r\n    font-size: 1rem;\r\n    font-family: sans-serif;\r\n    margin-bottom: 1rem;\r\n    max-width:100%;\r\n}\r\n\r\n.form-submit{\r\n    max-width: 300px;\r\n    margin: auto;\r\n    padding: .75rem 2rem;\r\n    font-size: 1rem;\r\n    border-radius: 30px;\r\n    border: none;\r\n    background: #c28334;\r\n    color: #fff;\r\n    transition: all .5s;\r\n    max-width:100%;\r\n}\r\n\r\n/* Navbar */\r\n\r\n.tabs{\r\n    padding-top: 2rem;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.navbar-btn{\r\n    border: none;\r\n    background: transparent;\r\n    font-size: 1rem;\r\n    color: #fff;\r\n    padding: .5rem 1rem;\r\n    cursor:pointer;\r\n}\r\n\r\n.menu-box{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap:wrap;\r\n    max-width: 90%;\r\n    margin: 4rem auto;\r\n}\r\n\r\n.meal{\r\n    width:45%;\r\n    text-align: center;\r\n    margin-bottom:2rem;\r\n}\r\n\r\n.meal-title{\r\n    font-size: 1.5rem;\r\n    color: #c28334;\r\n}\r\n\r\n.meal-img{\r\n    width: 400px;\r\n    height: 400px;\r\n    border-radius: 50%;\r\n    max-width: 100%;\r\n    object-fit: contain;\r\n}\r\n\r\n@media(max-width:900px){\r\n    .row{\r\n        flex-direction: column;\r\n    }\r\n\r\n    .header__title{\r\n        font-size:2.5rem;\r\n    }\r\n\r\n    .form-col{\r\n        max-width:90%;\r\n        padding-top:2rem;\r\n    }\r\n\r\n    .menu-box{\r\n        flex-direction: column;\r\n        padding:1rem 2rem;\r\n    }\r\n\r\n    .meal{\r\n        width:100%;\r\n    }\r\n\r\n    .meal-img{\r\n        width:100%;\r\n        max-width:200px;\r\n        height:auto;\r\n    }\r\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var a=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([a]).join("\n")}var i,c,d;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&a[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},function(e,n,t){"use strict";t.r(n);t(0);var r=t.p+"3c272b381e7fbe2c5235aabad6db1fd3.png";var a=()=>{const e=document.createElement("div");e.classList.add("form-col");const n=document.createElement("h2");n.textContent="Make a Reservation & Enquiries Now";const t=document.createElement("form");t.classList.add("form-box");const r=document.createElement("input");r.classList.add("form-input"),r.setAttribute("type","text"),r.setAttribute("placeholder","What's your Full Name?");const a=document.createElement("input");a.classList.add("form-input"),a.setAttribute("type","text"),a.setAttribute("placeholder","How can we reach you?");const o=document.createElement("textarea");o.classList.add("form-textarea"),o.setAttribute("cols","30"),o.setAttribute("rows","10"),o.setAttribute("placeholder","Ask Us Anything or Send Details about your Reservation");const i=document.createElement("input");return i.classList.add("form-submit"),i.setAttribute("type","submit"),i.setAttribute("value","Send My Enquiry"),t.appendChild(r),t.appendChild(a),t.appendChild(o),t.appendChild(i),e.appendChild(n),e.appendChild(t),e},o=t.p+"fe7346ee82cad0266e4c13c73a8e5325.png",i=t.p+"24e34774a16e537262e36bc806f8217d.png",c=t.p+"22d17a06f73ebcc33d61b43de46c2663.png";const d=[{mealType:"Appetizer",detail:"Start with our fresh baked bread with an egg and basil on top",img:o},{mealType:"Main Dish",detail:"Our juicy fresh grilled Steak is served to satisfy your appetite",img:i},{mealType:"Side Dish",detail:"Have a healthy salad mixed with light slice meat to complement your steak",img:t.p+"5d8b21f420bc3d52253832b4ece1b45f.png"},{mealType:"Dessert",detail:"Finish your Kitchen experience with a cake to cleanse your mouth",img:c}];var s=()=>{const e=document.createElement("div");return e.classList.add("menu-box"),d.forEach(n=>{const t=document.createElement("div");t.classList.add("meal");const r=document.createElement("img");r.classList.add("meal-img"),r.src=n.img;const a=document.createElement("p");a.classList.add("meal-title"),a.textContent=n.mealType;const o=document.createElement("p");o.classList.add("meal-detail"),o.textContent=n.detail,t.appendChild(r),t.appendChild(a),t.appendChild(o),e.appendChild(t)}),e};const l=()=>{const e=document.createElement("div");e.classList.add("row","header__info");const n=document.createElement("div");n.classList.add("col","header__text-content");const t=document.createElement("h2");t.classList.add("header__title"),t.textContent="A Premium And Authentic Steakhouse";const a=document.createElement("p");a.classList.add("header__content"),a.textContent="We've been running for over 20 years and have become a habit of over 2000 customers";const o=document.createElement("button");o.classList.add("header__btn"),o.textContent="Menu",n.appendChild(t),n.appendChild(a),n.appendChild(o);const i=document.createElement("div");i.classList.add("col","header__img-content");const c=document.createElement("img");return c.setAttribute("alt","Marvy restaurant"),c.src=r,i.appendChild(c),e.appendChild(n),e.appendChild(i),e},u=document.getElementById("content");u.appendChild(l()),document.addEventListener("click",(function(e){u.innerHTML="","Home"===e.target.textContent&&u.appendChild(l()),"Menu"===e.target.textContent&&u.appendChild(s()),"Contact"===e.target.textContent&&u.appendChild(a())}))}]);