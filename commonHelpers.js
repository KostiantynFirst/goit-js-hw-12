import{a as p,S as q,i as y}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const g=(e,t)=>{const s=t.map(r=>`
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
  `).join("");e.insertAdjacentHTML("beforeend",s)},M="31511712-b53d42f48d96ff6235f6befd4";p.defaults.baseURL="https://pixabay.com/api/";async function b(e,t,s=15){try{return(await p.get(`?key=${M}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${s}`)).data}catch(r){throw r}}const u=document.querySelector(".gallery"),L='<div id="loader" class="loader"></div>',v=document.querySelector(".search-form"),w=document.querySelector("input.form-control");let l=[],a=1,m=0,S=0,c=null;const T=new q(".gallery a"),P=document.querySelector(".btn-submit"),i=document.querySelector('[data-action="load-more"]');v.addEventListener("submit",E);w.addEventListener("input",I);i.addEventListener("click",R);async function E(e){e.preventDefault(),O(),c=e.currentTarget.elements.searchQuery.value.trim(),c?(i.style.display="none",await A(c),v.reset()):$("Please type something in the search input")}function I(){P.disabled=!w.value.trim()}async function A(e){C(),h();const t=await b(e,a);t&&t.hits.length>0?(l=[...t.hits],m=t.totalHits,S=Math.ceil(m/15),d(),g(u,l),i.style.display="block",P.disabled=!0):(d(),i.style.display="none",j("Sorry, there are no images matching your search query"),h()),T.refresh()}async function R(){H(),a++;try{l=[...(await b(c,a)).hits],a>=S&&(i.style.display="none",$("We're sorry, but you've reached the end of search results.")),d(),g(u,l),x(),T.refresh()}catch(e){console.log(e),d()}}function C(){u.insertAdjacentHTML("beforebegin",L)}function H(){i.insertAdjacentHTML("beforebegin",L)}function d(){const e=document.querySelector("#loader");e&&e.remove()}function h(){u.innerHTML=""}function O(){a=1}function x(){const e=document.querySelector(".photo-card");if(e){const t=e.getBoundingClientRect();B(t.height)}}function B(e){const s=setTimeout(()=>{window.scrollBy({top:e*1.5,left:0,behavior:"smooth"}),clearTimeout(s)},500)}function $(e){y.info({title:e,position:"topRight"})}function j(e){y.error({title:e,position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
