// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImages } from './js/pixabay-api';
import { displayImages, addLoader, removeLoader } from './js/render-functions';


const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

const loader = document.getElementById('loader');
const ulEl = document.querySelector('.gallery');
const loadMoreBtnEl = document.querySelector('.load-more__button');

let lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250
});
        
export const perPage = 15;
export let pageNumber = 1;


let query = '';
let gallery = new SimpleLightbox('.gallery a');
let totalPages;

function clearGallery() {
  ulEl.innerHTML = '';
}

function increasePage() {
  return (pageNumber = pageNumber + 1);
}

function hideLoadMoreBtn() {
  loadMoreBtnEl.classList.remove('active');
}
function showLoadMoreBtn() {
  loadMoreBtnEl.classList.add('active');
}

function resetPageNumber() {
  return (pageNumber = 1);
}

function checkEndPages() {
  if (pageNumber >= totalPages) {
    hideLoadMoreBtn();

    return iziToast.error({
      class: 'izt-toast-message',
      message: "We're sorry, but you've reached the end of search results.",
      messageSize: '16',
      messageLineHeight: '24',
      messageColor: '#ffffff',

      backgroundColor: '#b51b1b',
      position: 'topRight',
      theme: 'dark',
    });
  } else {
    showLoadMoreBtn();
  }
}
function scrollElem() {
  const liEl = ulEl.children[0];
  const heightOfLiEl = liEl.getBoundingClientRect().height;

  window.scrollBy({
    top: heightOfLiEl * 2,
    behavior: 'smooth',
  });
}

searchForm.addEventListener('submit', async event => {
    event.preventDefault();
    
  query = searchInput.value.trim();
  if (query === '' || query === !query) {
        iziToast.error({
            title: 'Error',
            message: 'Search query cannot be empty!'
        });
        return;
    }

    resetPageNumber();

  hideLoadMoreBtn();
  
  
    
if (query.length !== 0) {
    addLoader(loader);

    try {
      
      const data = await searchImages(query, pageNumber); 
      // console.log(data);

      totalPages = Math.ceil(data.totalHits / perPage);
      

      if (data.hits.length === 0) {
        
        iziToast.show({
          class: 'izt-toast-message',

          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageSize: '16',
          messageLineHeight: '24',
          messageColor: '#ffffff',

          backgroundColor: '#b51b1b',
          iconUrl: iconClose,
          position: 'topRight',
          theme: 'dark',
        });

        
        clearGallery();

        
      } else {
        clearGallery();
        const markup = displayImages(data.hits);
        ulEl.innerHTML = markup; 
        
        gallery.refresh();
        checkEndPages();
      }
      

    } catch (err) {
      console.log(err);
    }
    removeLoader(loader);
  }
  searchForm.reset();
});

loadMoreBtnEl.addEventListener('click', async () => {
  increasePage();
  try {
    const data = await searchImages(query, pageNumber);
    
    addLoader(loader);

    ulEl.insertAdjacentHTML('beforeend', displayImages(data.hits));
    
    gallery.refresh();
    scrollElem();
    removeLoader(loader);
    increasePage();

    checkEndPages(totalPages);
  } catch (err) {
    console.log(err);
  }
});




