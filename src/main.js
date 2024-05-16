import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { renderGallery } from "./js/render-functions"; 
import { fetchArticles } from "./js/pixabay-api";

const articleContainer = document.querySelector('.gallery');
const loaderMarkup  = '<div id="loader" class="loader"></div>';

const searchForm = document.querySelector('.search-form');
const searchInputElement = document.querySelector('input[class="form-control"]');


let photos = [];
let form = null;
let currentPage = 1;
let totalImages = 0;
let perPage = 15;

let lightbox = new SimpleLightbox('.gallery a');


const searchBtn = document.querySelector('.btn-submit');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');


searchForm.addEventListener('submit', handleFormSubmit);
  
  function handleFormSubmit(e) { 
    e.preventDefault();
    resetPage();

  form = (e.currentTarget.elements.searchQuery.value).trim();
   if (form === null || form === '') {
    iziToast.info({
    title: 'Please type something in the search input',
      position: 'topRight',
    });
   } else {
     loadMoreBtn.style.display = 'none';
     main(form)
     searchForm.reset();
  }

  }


searchInputElement.addEventListener('input', () => {
  const inputValue = searchInputElement.value.trim();
  if (inputValue) {
    searchBtn.disabled = false;
  } else {
    searchBtn.disabled = true;
  }
});

async function main(value) {
  try {
    articleContainer.insertAdjacentHTML("beforebegin", loaderMarkup);
    clearArticlesContainer();

    const images = await fetchArticles(value, currentPage, perPage);
    if (images && images.hits.length > 0) {
      photos = [...images.hits];
      totalImages = images.totalHits;
      removeLoaderSpinner();
      renderGallery(articleContainer, photos);
      loadMoreBtn.style.display = 'block';
      searchBtn.disabled = true;
    } else {
      removeLoaderSpinner();
      loadMoreBtn.style.display = 'none';
      iziToast.error({
        title: 'Sorry, there are no images matching your search query',
        position: 'topRight',
      });
      clearArticlesContainer();
    }
    

    lightbox.refresh();
  } catch (error) {
    console.log(error);
  }
}


function removeLoaderSpinner() {
  const loaderSpinner = document.querySelector('#loader');
  if (loaderSpinner) {
    loaderSpinner.remove();
  }
}

loadMoreBtn.addEventListener('click', () => addCards(form));

async function addCards(form) {
  loadMoreBtn.insertAdjacentHTML("beforebegin", loaderMarkup);
  incrementPage();

  try {
    
  let maxPageNumber = totalImages / 15;
  let maxPageNumberRoundUp = Math.ceil(maxPageNumber);
   
    const restPhoto = await fetchArticles(form, currentPage, perPage);
    photos = [...restPhoto.hits];

   if (currentPage === maxPageNumberRoundUp) { 
    loadMoreBtn.style.display = 'none';
     iziToast.info({
       title: "We're sorry, but you've reached the end of search results.",
       position: 'topRight',
     });
    
  
   } else {
     removeLoaderSpinner();
     renderGallery(articleContainer, photos);
     scrollToElementHeight();
     lightbox.refresh();

  }
  } catch (error) {
    console.log(error)
  }

}


function clearArticlesContainer() {
  articleContainer.innerHTML = '';
}


function resetPage() {
  currentPage = 1;
} 

function incrementPage() {
  currentPage += 1;
}


function scrollToDistance(distance) {
  const delay = 500;
  const scrollTimeout = setTimeout(() => {
    window.scrollBy({
      top: distance * 1.5,
      left: 0,
      behavior: 'smooth',
    });
    clearTimeout(scrollTimeout);
  }, delay);
};

function scrollToElementHeight(){
  const galleryItemElement = document.querySelector('.photo-card');
  const galleryItemRect = galleryItemElement.getBoundingClientRect();
  scrollToDistance(galleryItemRect.height);
};




