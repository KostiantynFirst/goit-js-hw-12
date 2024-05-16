import{a as p,S as M,i as y}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const g=(e,t)=>{const s=t.map(n=>`
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
  `).join("");e.insertAdjacentHTML("beforeend",s)},$="31511712-b53d42f48d96ff6235f6befd4";p.defaults.baseURL="https://pixabay.com/api/";async function b(e,t){try{return(await p.get(`?key=${$}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=15`)).data}catch(s){throw s}}const u=document.querySelector(".gallery"),L='<div id="loader" class="loader"></div>',v=document.querySelector(".search-form"),w=document.querySelector("input.form-control");let l=[],a=1,m=0,S=0,c=null;const T=new M(".gallery a"),P=document.querySelector(".btn-submit"),i=document.querySelector('[data-action="load-more"]');v.addEventListener("submit",E);w.addEventListener("input",I);i.addEventListener("click",R);async function E(e){e.preventDefault(),O(),c=e.currentTarget.elements.searchQuery.value.trim(),c?(i.style.display="none",await A(c),v.reset()):q("Please type something in the search input")}function I(){P.disabled=!w.value.trim()}async function A(e){C(),h();const t=await b(e,a);t&&t.hits.length>0?(l=[...t.hits],m=t.totalHits,S=Math.ceil(m/15),d(),g(u,l),i.style.display="block",P.disabled=!0):(d(),i.style.display="none",j("Sorry, there are no images matching your search query"),h()),T.refresh()}async function R(){H(),a++;try{l=[...(await b(c,a)).hits],a>=S&&(i.style.display="none",q("We're sorry, but you've reached the end of search results.")),d(),g(u,l),x(),T.refresh()}catch(e){console.log(e),d()}}function C(){u.insertAdjacentHTML("beforebegin",L)}function H(){i.insertAdjacentHTML("beforebegin",L)}function d(){const e=document.querySelector("#loader");e&&e.remove()}function h(){u.innerHTML=""}function O(){a=1}function x(){const e=document.querySelector(".photo-card");if(e){const t=e.getBoundingClientRect();B(t.height)}}function B(e){const s=setTimeout(()=>{window.scrollBy({top:e*1.5,left:0,behavior:"smooth"}),clearTimeout(s)},500)}function q(e){y.info({title:e,position:"topRight"})}function j(e){y.error({title:e,position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
