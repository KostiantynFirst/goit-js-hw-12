import{a as p,i as f,S as L}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const h=(o,e)=>{const s=e.map(r=>`
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
  `).join("");o.insertAdjacentHTML("beforeend",s)},P="31511712-b53d42f48d96ff6235f6befd4";p.defaults.baseURL="https://pixabay.com/api/";async function y(o,e){try{return(await p.get(`?key=${P}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=15`)).data}catch(s){throw s}}const c=document.querySelector(".gallery"),w='<div id="loader" class="loader"></div>',g=document.querySelector(".search-form");let a=[],i=null,l=1,b=0;const S=document.querySelector(".btn-submit"),d=document.querySelector('[data-action="load-more"]');g.addEventListener("submit",$);function $(o){o.preventDefault(),i=o.currentTarget.elements.searchQuery.value.trim(),i===null||i===""?f.info({title:"Please type something in the search input",position:"topRight"}):(q(i),g.reset())}async function q(o){try{c.insertAdjacentHTML("beforebegin",w),m();const e=await y(o,l);a=[...e.hits],b=e.totalHits;const s=document.querySelector("#loader");if(s&&s.remove(),a===0){f.error({title:"Sorry, there are no images matching your search query",position:"topRight"}),m(),d.style.display="none";return}else h(c,a),v(),d.style.display="block",S.disabled=!0;new L(".gallery a").refresh()}catch(e){console.log(e)}}d.addEventListener("click",()=>M(i));async function M(o){try{let e=b/15,s=Math.ceil(e);a=[...(await y(o,l)).hits],l===s?(d.style.display="none",f.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(h(c,a),v())}catch(e){console.log(e)}}function m(){c.innerHTML=""}function v(){l+=1}
//# sourceMappingURL=commonHelpers.js.map
