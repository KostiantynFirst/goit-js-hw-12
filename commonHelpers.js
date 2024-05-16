import{a as L,S as $,i as g}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const P=(t,e)=>{const s=e.map(r=>`
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
  `).join("");t.insertAdjacentHTML("beforeend",s)},q="31511712-b53d42f48d96ff6235f6befd4";L.defaults.baseURL="https://pixabay.com/api/";async function p(t,e,s=15){try{return(await L.get(`?key=${q}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=${s}`)).data}catch(r){throw r}}const d=document.querySelector(".gallery"),w='<div id="loader" class="loader"></div>',S=document.querySelector(".search-form"),b=document.querySelector('input[class="form-control"]');let c=[],l=null,i=1,h=0,u=15,T=new $(".gallery a");const y=document.querySelector(".btn-submit"),a=document.querySelector('[data-action="load-more"]');S.addEventListener("submit",E);function E(t){t.preventDefault(),I(),l=t.currentTarget.elements.searchQuery.value.trim(),l===null||l===""?g.info({title:"Please type something in the search input",position:"topRight"}):(a.style.display="none",M(l),S.reset())}b.addEventListener("input",()=>{b.value.trim()?y.disabled=!1:y.disabled=!0});async function M(t){try{d.insertAdjacentHTML("beforebegin",w),v();const e=await p(t,i,u);e&&e.hits.length>0?(c=[...e.hits],h=e.totalHits,m(),P(d,c),a.style.display="block",y.disabled=!0):(m(),a.style.display="none",g.error({title:"Sorry, there are no images matching your search query",position:"topRight"}),v()),T.refresh()}catch(e){console.log(e)}}function m(){const t=document.querySelector("#loader");t&&t.remove()}a.addEventListener("click",()=>R(l));async function R(t){a.insertAdjacentHTML("beforebegin",w),A();try{let e=h/15,s=Math.ceil(e);c=[...(await p(t,i,u)).hits],i===s&&(a.style.display="none",u=h,c=[...(await p(t,i,u)).hits],m(),g.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"})),m(),P(d,c),H(),T.refresh()}catch(e){console.log(e)}}function v(){d.innerHTML=""}function I(){i=1}function A(){i+=1}function x(t){const s=setTimeout(()=>{window.scrollBy({top:t*1.5,left:0,behavior:"smooth"}),clearTimeout(s)},500)}function H(){const e=document.querySelector(".photo-card").getBoundingClientRect();x(e.height)}
//# sourceMappingURL=commonHelpers.js.map
