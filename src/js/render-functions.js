// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from 'izitoast';


const gallery = document.getElementById('gallery'); 
  
export let markup = '';
export function displayImages(images) {
  let markup = images
    .map(image => {
        return `
        <li class="gallery-item">
            <a href="${image.largeImageURL}" class="gallery-link">
                <img src="${image.webformatURL}" alt="${image.tags}">
            </a>
            <div class="info">
                <p><strong>Likes:</strong> ${image.likes}</p>
                <p><strong>Views:</strong> ${image.views}</p>
                <p><strong>Comments:</strong> ${image.comments}</p>
                <p><strong>Downloads:</strong> ${image.downloads}</p>
            </div>
        </li>`;
        })
    .join('');
  // gallery.insertAdjacentHTML('beforeend', markup);
  return (markup);
    
}
export function addLoader(loader) {
  loader.classList.remove('loader-hidden');
}
export function removeLoader(loader) {
  loader.classList.add('loader-hidden');
}
export function btnStatus(currentPage, maxPage) {
  if (page >= maxPage) {
    hideLoadMore();

    if (maxPage) {
      iziToast.info({
        title: 'The end!',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } else {
    showLoadMore();
  }
}