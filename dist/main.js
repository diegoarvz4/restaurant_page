!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=(()=>{const e=["About","Menu","Contact"];return{create:()=>{let t="<ul class='content-nav-list'>";e.forEach(e=>{t+=`<li class='content-nav-list-item' id='${e}'>${e}</li>`}),t+="</ul>";let n=document.createElement("nav");return n.classList.add("content-nav"),n.innerHTML=t,n}}})(),o={create:()=>{let e=document.createElement("div");return e.classList.add("content-header"),e.innerHTML='<h1 class="content-heade-title">PIZZA RESTAURANT</h1>',e}},c={create:()=>{let e=document.createElement("div");return e.classList.add("content-body"),e.setAttribute("id","content-body"),e}},r={create:()=>{let e=document.createElement("div");return e.classList.add("content-footer"),e.innerHTML="<span> ® Pizza Restaurant All Rights Reserved</span>",e}},i={create:()=>{let e=document.createElement("div");return e.classList.add("content-body-about"),e.innerHTML='<p class="content-body-about-copy">Welcome to he best pizzas from Cuernavaca, México. \n                Explore the italian tradition with new mixes of our\n                own culture. New flavors are new experiences.\n                This is all about enforcing the pizza culture.\n                Take a look at our menu and please enjoy!</p>',e}},l={create:()=>{let e=document.createElement("div");return e.classList.add("content-body-menu"),e.innerHTML=(()=>{let e="";return["hawaiian","margheritta","mexican","pepperoni","shrimps","vegetarian"].forEach(t=>{e+=`<div class="content-body-menu-item">\n                        <h1 class="content-body-menu-item-title"> ${t.toUpperCase()} </h1>\n                        <img class="content-body-menu-item-img" src='assets/img/${t}.jpg' >\n                      </div>`}),e})(),e}},d={create:()=>{let e=document.createElement("div");return e.classList.add("content-body-contact"),e.innerHTML="<div content-body-contact-email>\n                                  <h1>EMAIL</h1>\n                                  <h2>pizza@pizza.com</h2>\n                                </div>\n                                <div content-body-contact-phone>\n                                  <h1>PHONE</h1>\n                                  <h2>+52777625189</h2>\n                                </div>",e}},s=(()=>{let e=document.getElementById("content");const t=()=>{document.getElementsByClassName("content-nav-list-item__selected")[0].classList.remove("content-nav-list-item__selected")},n=()=>{let e=document.getElementById("content-body").firstElementChild;b(e)},s=e=>(e.classList.add("content-init"),e),u=e=>{switch(e){case"Menu":p(s(l.create()));break;case"Contact":p(s(d.create()));break;case"About":p(s(i.create()))}},m=e=>{e.classList.add("content-nav-list-item__selected")},p=e=>{document.getElementById("content-body").appendChild(e)},b=e=>{document.getElementById("content-body").removeChild(e)};return{load:()=>{e.appendChild((()=>o.create())()),e.appendChild((()=>a.create())()),e.appendChild((()=>c.create())()),e.appendChild((()=>r.create())())},init:()=>{let e=document.getElementById("About");m(e);let a=s(i.create());p(a),(()=>{let e=document.getElementsByClassName("content-nav-list-item");for(let a=0;a<e.length;a+=1)e[a].addEventListener("click",e=>{t(),n(),m(document.getElementById(e.target.id)),u(e.target.id)})})()}}})();s.load(),s.init()}]);