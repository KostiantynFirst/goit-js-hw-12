import{a as d,i as u,S as m}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const p=(s,t)=>{const n=t.map(o=>`
    <div class="photo-card">
        <a class ="thumb" href="${o.largeImageURL}"><img class="img" src="${o.webformatURL}" alt="${o.tags}" loading="lazy" /> </a> 
      <div class="info">
        <p class="info-item">
          <b>Likes</b>
          ${o.likes}
        </p>
        <p class="info-item">
          <b>Views</b>
          ${o.views}
        </p>
        <p class="info-item">
          <b>Comments</b>
          ${o.comments}
        </p>
        <p class="info-item">
          <b>Downloads</b>
          ${o.downloads}
        </p>
      </div>
    </div>
  `).join("");s.insertAdjacentHTML("beforeend",n)},h="31511712-b53d42f48d96ff6235f6befd4";d.defaults.baseURL="https://pixabay.com/api/";async function y(s,t){try{return await d.get(`?key=${h}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=15`)}catch(n){throw n}}const a=document.querySelector(".gallery"),g='<div id="loader" class="loader"></div>',f=document.querySelector(".search-form");let b=1;const L=document.querySelector(".btn-submit"),c=document.querySelector('[data-action="load-more"]');f.addEventListener("submit",v);function v(s){s.preventDefault();let t=s.currentTarget.elements.searchQuery.value.trim();t===null||t===""?u.info({title:"Please type something in the search input",position:"topRight"}):(S(t),f.reset())}async function S(s){try{a.insertAdjacentHTML("beforebegin",g),l();const t=await y(s,b),n=t.data.hits;let o=t.data.totalHits;const e=document.querySelector("#loader");if(e&&e.remove(),n.length===0){u.error({title:"Sorry, there are no images matching your search query",position:"topRight"}),l(),c.style.display="none";return}else p(a,n),c.style.display="block",L.disabled=!0;new m(".gallery a").refresh()}catch(t){console.log(t)}}function l(){a.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
