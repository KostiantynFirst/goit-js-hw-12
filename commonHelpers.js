import{a as b,S as q,i as p}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const v=(t,e)=>{const s=e.map(n=>`
    <div class="photo-card">
        <a class ="thumb" href="${n.largeImageURL}"><img class="img" src="${n.webformatURL}" alt="${n.tags}" loading="lazy" /> </a> 
      <div class="info">
        <p class="info-item">
          <b>Likes</b>
          ${n.likes}
        </p>
        <p class="info-item">
          <b>Views</b>
          ${n.views}
        </p>
        <p class="info-item">
          <b>Comments</b>
          ${n.comments}
        </p>
        <p class="info-item">
          <b>Downloads</b>
          ${n.downloads}
        </p>
      </div>
    </div>
  `).join("");t.insertAdjacentHTML("beforeend",s)},$="31511712-b53d42f48d96ff6235f6befd4";b.defaults.baseURL="https://pixabay.com/api/";async function L(t,e){try{return(await b.get(`?key=${$}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=15`)).data}catch(s){throw s}}const c=document.querySelector(".gallery"),S='<div id="loader" class="loader"></div>',w=document.querySelector(".search-form"),h=document.querySelector('input[class="form-control"]');let u=[],a=null,l=1,y=0,P=0;const T=new q(".gallery a"),m=document.querySelector(".btn-submit"),i=document.querySelector('[data-action="load-more"]');w.addEventListener("submit",E);function E(t){t.preventDefault(),R(),a=t.currentTarget.elements.searchQuery.value.trim(),a===null||a===""?p.info({title:"Please type something in the search input",position:"topRight"}):(i.style.display="none",M(a),w.reset())}h.addEventListener("input",()=>{h.value.trim()?m.disabled=!1:m.disabled=!0});async function M(t){try{c.insertAdjacentHTML("beforebegin",S),g();const e=await L(t,l);e&&e.hits.length>0?(u=[...e.hits],y=e.totalHits,P=Math.ceil(y/15),f(),v(c,u),i.style.display="block",m.disabled=!0):(f(),i.style.display="none",p.error({title:"Sorry, there are no images matching your search query",position:"topRight"}),g()),T.refresh()}catch(e){console.log(e)}}function f(){const t=document.querySelector("#loader");t&&t.remove()}i.addEventListener("click",()=>I(a));async function I(t){i.insertAdjacentHTML("beforebegin",S),A();try{u=[...(await L(t,l)).hits],l>=P&&(i.style.display="none",p.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"})),f(),v(c,u),O(),T.refresh()}catch(e){console.log(e)}}function g(){c.innerHTML=""}function R(){l=1}function A(){l+=1}function H(t){const s=setTimeout(()=>{window.scrollBy({top:t*1.5,left:0,behavior:"smooth"}),clearTimeout(s)},500)}function O(){const e=document.querySelector(".photo-card").getBoundingClientRect();H(e.height)}
//# sourceMappingURL=commonHelpers.js.map
