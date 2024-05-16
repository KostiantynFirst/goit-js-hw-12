import{a as g,S as $,i as p}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const b=(t,e)=>{const s=e.map(r=>`
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
  `).join("");t.insertAdjacentHTML("beforeend",s)},q="31511712-b53d42f48d96ff6235f6befd4";g.defaults.baseURL="https://pixabay.com/api/";async function v(t,e,s=15){try{return(await g.get(`?key=${q}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=${s}`)).data}catch(r){throw r}}const c=document.querySelector(".gallery"),L='<div id="loader" class="loader"></div>',P=document.querySelector(".search-form"),h=document.querySelector('input[class="form-control"]');let u=[],a=null,l=1,S=0,w=15,T=new $(".gallery a");const m=document.querySelector(".btn-submit"),i=document.querySelector('[data-action="load-more"]');P.addEventListener("submit",E);function E(t){t.preventDefault(),I(),a=t.currentTarget.elements.searchQuery.value.trim(),a===null||a===""?p.info({title:"Please type something in the search input",position:"topRight"}):(i.style.display="none",M(a),P.reset())}h.addEventListener("input",()=>{h.value.trim()?m.disabled=!1:m.disabled=!0});async function M(t){try{c.insertAdjacentHTML("beforebegin",L),y();const e=await v(t,l,w);e&&e.hits.length>0?(u=[...e.hits],S=e.totalHits,f(),b(c,u),i.style.display="block",m.disabled=!0):(f(),i.style.display="none",p.error({title:"Sorry, there are no images matching your search query",position:"topRight"}),y()),T.refresh()}catch(e){console.log(e)}}function f(){const t=document.querySelector("#loader");t&&t.remove()}i.addEventListener("click",()=>R(a));async function R(t){i.insertAdjacentHTML("beforebegin",L),A();try{let e=S/15,s=Math.ceil(e);u=[...(await v(t,l,w)).hits],l===s?(i.style.display="none",p.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(f(),b(c,u),H(),T.refresh())}catch(e){console.log(e)}}function y(){c.innerHTML=""}function I(){l=1}function A(){l+=1}function x(t){const s=setTimeout(()=>{window.scrollBy({top:t*1.5,left:0,behavior:"smooth"}),clearTimeout(s)},500)}function H(){const e=document.querySelector(".photo-card").getBoundingClientRect();x(e.height)}
//# sourceMappingURL=commonHelpers.js.map
