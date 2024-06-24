// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox;

export function displayImages(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = images.map(image => `
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
        </li>
    `).join('');

    
}
export function addLoader(loader) {
  loader.classList.remove('loader-hidden');
}
export function removeLoader(loader) {
  loader.classList.add('loader-hidden');
}