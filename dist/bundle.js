(()=>{"use strict";window.addEventListener("DOMContentLoaded",(()=>{const e={from:"",to:"",weight:"",method:"",type:"",danger:"",price:"",regime:!1,minRegime:"-21",maxRegime:"+23",radioChecked:"",comment:""};document.querySelector("form").addEventListener("input",(function(){for(let t in e)if(!e[t]&&"regime"!==t)return;t("app__warning-message").style.display="none"}));const t=e=>document.querySelector(`.${e}`),n=e=>document.querySelectorAll(`.${e}`);!function(){const a=n("app__param-input");for(let n of a)n.addEventListener("input",(({target:n})=>{"min-regime"!==n.name&&"max-regime"!==n.name||(n.value=n.value.replace(/[ /a-z A-Z а-я А-Я ]/gim,"")),e[n.name]=n.value;const a=t(`adress[name="${n.name}"]`);a&&(a.textContent=n.value?n.value:"Адрес не указан")}))}(),function(){const t=n("app__param-select");for(let e of t){const{span:t,ul:n,img:o}=a(e);o.addEventListener("click",(({target:e})=>{var a;e.classList.toggle("drop-rotate"),a=n,"none"!==getComputedStyle(a).display?a.style.display="none":a.style.display="block",i(n,t,o)}))}function a(e){const t={};for(let n of e.children)t[n.nodeName.toLowerCase()]=n;return t}function i(t,n,a){for(let i of t.children)i.addEventListener("click",(function t(){var o,r;o=i.textContent,(r=n).textContent=o,r.classList.add("filled"),e[r.getAttribute("name")]=o,i.parentElement.style.display="none",a.classList.remove("drop-rotate"),this.removeEventListener("click",t)}))}}(),function(){const n=t("checkbox");n.addEventListener("click",(({target:t})=>{const a=document.querySelectorAll("#regime");n.classList.toggle("checked"),e.regime=1===n.className.split(" ").indexOf("checked");for(let t of a)e.regime?t.style.display="block":t.style.display="none"}))}(),function(){const n=t('app__param-radio .radio[name="from"]'),a=t('app__param-radio .radio[name="to"]');function i(t,n){t.classList.add("checked");const a=t.nextElementSibling;e.radioChecked=a.textContent,a.nextElementSibling.classList.add("selected"),n.classList.remove("checked"),n.nextElementSibling.nextElementSibling.classList.remove("selected")}n.addEventListener("click",(()=>{i(n,a)})),a.addEventListener("click",(()=>{i(a,n)}))}(),t("app__param-textarea").addEventListener("input",(({target:t})=>{e[t.name]=t.value}))}))})();