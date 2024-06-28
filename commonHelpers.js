import{a as m,S as L,i as u}from"./assets/vendor-f144e563.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();async function b(e,r){m.defaults.baseURL="https://pixabay.com";const o={key:"44428976-d6e941eddcd51cc03234da6bf",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:P,page:r};try{return(await m.get("/api/",{params:o})).data}catch(a){console.log(a)}}document.getElementById("gallery");function v(e){return e.map(o=>`
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
        </li>`).join("")}function w(e){e.classList.remove("loader-hidden")}function E(e){e.classList.add("loader-hidden")}const h=document.getElementById("search-form"),k=document.getElementById("search-input"),c=document.getElementById("loader"),l=document.querySelector(".gallery"),g=document.querySelector(".load-more__button");new L(".gallery a",{captionsData:"alt",captionDelay:250});const P=15;let n=1,i="",B=new L(".gallery a"),f;function p(){l.innerHTML=""}function y(){return n=n+1}function I(){g.classList.remove("active")}function C(){g.classList.add("active")}function M(){return n=1}function S(){if(n>=f)return I(),u.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:iconClose,position:"topRight",theme:"dark"});C()}function q(){const r=l.children[0].getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}h.addEventListener("submit",async e=>{if(e.preventDefault(),i=k.value.trim(),i===""){u.error({title:"Error",message:"Search query cannot be empty!"});return}if(M(),I(),i.length!==0){w(c);try{const r=await b(i,n);if(f=Math.ceil(r.totalHits/P),r.hits.length===0)u.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:iconClose,position:"topRight",theme:"dark"}),p();else{p();const o=v(r.hits);l.innerHTML=o,B.refresh(),S()}}catch(r){console.log(r)}E(c)}h.reset()});g.addEventListener("click",async()=>{y();try{const e=await b(i,n);w(c),l.insertAdjacentHTML("beforeend",v(e.hits)),B.refresh(),q(),E(c),y(),S(f)}catch(e){console.log(e)}});
//# sourceMappingURL=commonHelpers.js.map
