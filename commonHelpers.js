import{a as g,S as $,i as f}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const b=(t,e)=>{const s=e.map(r=>`
    <div class="photo-card">
        <a class ="thumb" href="${r.largeImageURL}"><img class="img" src="${r.webformatURL}" alt="${r.tags}" loading="lazy" /> </a> 
      <div class="info">
        <p class="info-item">
          <b>Likes</b>
          ${r.likes}
        </p>
        <p class="info-item">
          <b>Views</b>
          ${r.views}
        </p>
        <p class="info-item">
          <b>Comments</b>
          ${r.comments}
        </p>
        <p class="info-item">
          <b>Downloads</b>
          ${r.downloads}
        </p>
      </div>
    </div>
  `).join("");t.insertAdjacentHTML("beforeend",s)},q="31511712-b53d42f48d96ff6235f6befd4";g.defaults.baseURL="https://pixabay.com/api/";async function v(t,e,s=15){try{return(await g.get(`?key=${q}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=${s}`)).data}catch(r){throw r}}const c=document.querySelector(".gallery"),T='<div id="loader" class="loader"></div>',L=document.querySelector(".search-form"),p=document.querySelector('input[class="form-control"]');let u=[],i=null,a=1,P=0,S=15,w=new $(".gallery a");const m=document.querySelector(".btn-submit"),l=document.querySelector('[data-action="load-more"]');L.addEventListener("submit",E);function E(t){t.preventDefault(),i=t.currentTarget.elements.searchQuery.value.trim(),i===null||i===""?f.info({title:"Please type something in the search input",position:"topRight"}):(l.style.display="none",R(i),L.reset(),M())}p.addEventListener("input",()=>{p.value.trim()?m.disabled=!1:m.disabled=!0});async function R(t){try{c.insertAdjacentHTML("beforebegin",T),y();const e=await v(t,a,S);e&&e.hits.length>0?(u=[...e.hits],P=e.totalHits,h(),b(c,u),l.style.display="block",m.disabled=!0):(h(),l.style.display="none",f.error({title:"Sorry, there are no images matching your search query",position:"topRight"}),y()),w.refresh()}catch(e){console.log(e)}}function h(){const t=document.querySelector("#loader");t&&t.remove()}l.addEventListener("click",()=>I(i));async function I(t){x();try{let e=P/15,s=Math.ceil(e);u=[...(await v(t,a,S)).hits],a===s?(l.style.display="none",f.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(b(c,u),O(),w.refresh())}catch(e){console.log(e)}}function y(){c.innerHTML=""}function M(){a=1}function x(){a+=1}function A(t){const s=setTimeout(()=>{window.scrollBy({top:t*1.5,left:0,behavior:"smooth"}),clearTimeout(s)},500)}function O(){const e=document.querySelector(".photo-card").getBoundingClientRect();A(e.height)}
//# sourceMappingURL=commonHelpers.js.map
