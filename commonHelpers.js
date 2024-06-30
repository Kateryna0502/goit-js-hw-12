import{a as h,S,i as f}from"./assets/vendor-f144e563.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();async function y(e,r){h.defaults.baseURL="https://pixabay.com";const o={key:"44428976-d6e941eddcd51cc03234da6bf",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:w,page:r};try{return(await h.get("/api/",{params:o})).data}catch(i){console.log(i)}}document.getElementById("gallery");function L(e){return e.map(o=>`
        <li class="gallery-item">
            <a href="${o.largeImageURL}" class="gallery-link">
                <img src="${o.webformatURL}" alt="${o.tags}">
            </a>
            <div class="info">
                <p><strong>Likes:</strong> ${o.likes}</p>
                <p><strong>Views:</strong> ${o.views}</p>
                <p><strong>Comments:</strong> ${o.comments}</p>
                <p><strong>Downloads:</strong> ${o.downloads}</p>
            </div>
        </li>`).join("")}function b(e){e.classList.remove("loader-hidden")}function v(e){e.classList.add("loader-hidden")}const p=document.getElementById("search-form"),k=document.getElementById("search-input"),c=document.getElementById("loader"),l=document.querySelector(".gallery"),g=document.querySelector(".load-more__button");let E=new S(".gallery a",{captionsData:"alt",captionDelay:250});const w=15;let a=1,n="",m;function u(){l.innerHTML=""}function M(){return a=a+1}function P(){g.classList.remove("active")}function q(){g.classList.add("active")}function B(){return a=1}function I(){if(a>=m)return P(),f.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",position:"topRight",theme:"dark"});q()}function O(){const r=l.children[0].getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}p.addEventListener("submit",async e=>{if(e.preventDefault(),n=k.value.trim(),n===""||n===!n){f.error({title:"Error",message:"Search query cannot be empty!"});return}if(B(),P(),n.length!==0){b(c);try{const r=await y(n,a);if(m=Math.ceil(r.totalHits/w),r.hits.length===0)u(),f.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",position:"topRight",theme:"dark"}),u();else{u();const o=L(r.hits);l.innerHTML=o,E.refresh(),I()}}catch(r){console.log(r)}v(c)}p.reset()});g.addEventListener("click",async()=>{M();try{const e=await y(n,a);b(c),l.insertAdjacentHTML("beforeend",L(e.hits)),E.refresh(),O(),v(c),I(m)}catch(e){console.log(e)}});
//# sourceMappingURL=commonHelpers.js.map
