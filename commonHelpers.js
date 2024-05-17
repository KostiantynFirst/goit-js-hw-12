import{a as b,S as q,i as L}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const v=(e,t)=>{const s=t.map(r=>`
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
  `).join("");e.insertAdjacentHTML("beforeend",s)},M="31511712-b53d42f48d96ff6235f6befd4";b.defaults.baseURL="https://pixabay.com/api/";async function w(e,t,s=15){try{return(await b.get(`?key=${M}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${s}`)).data}catch(r){throw r}}const u=document.querySelector(".gallery"),S='<div id="loader" class="loader"></div>',P=document.querySelector(".search-form"),T=document.querySelector("input.form-control");let l=[],i=1,y=0,m=0,c=null,E=15;const h=new q(".gallery a"),$=document.querySelector(".btn-submit"),a=document.querySelector('[data-action="load-more"]');P.addEventListener("submit",I);T.addEventListener("input",A);a.addEventListener("click",C);async function I(e){e.preventDefault(),x(),c=e.currentTarget.elements.searchQuery.value.trim(),c?(a.style.display="none",await R(c),P.reset()):p("Please type something in the search input")}function A(){$.disabled=!T.value.trim()}async function R(e){H(),g();const t=await w(e,i,E);t&&t.hits.length>0?(l=[...t.hits],y=t.totalHits,m=Math.ceil(y/15),d(),v(u,l),$.disabled=!0,h.refresh(),i>=1&&(a.style.display="block"),i>=m&&(a.style.display="none",p("We're sorry, but you've reached the end of search results."))):(d(),a.style.display="none",N("Sorry, there are no images matching your search query"),g(),h.refresh())}async function C(){O(),i++;try{l=[...(await w(c,i)).hits],i>=m&&(a.style.display="none",p("We're sorry, but you've reached the end of search results.")),d(),v(u,l),B(),h.refresh()}catch(e){console.log(e),d()}}function H(){u.insertAdjacentHTML("beforebegin",S)}function O(){a.insertAdjacentHTML("beforebegin",S)}function d(){const e=document.querySelector("#loader");e&&e.remove()}function g(){u.innerHTML=""}function x(){i=1}function B(){const e=document.querySelector(".photo-card");if(e){const t=e.getBoundingClientRect();j(t.height)}}function j(e){const s=setTimeout(()=>{window.scrollBy({top:e*1.5,left:0,behavior:"smooth"}),clearTimeout(s)},500)}function p(e){L.info({title:e,position:"topRight"})}function N(e){L.error({title:e,position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
