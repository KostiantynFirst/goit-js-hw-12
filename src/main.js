import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { renderGallery } from "./js/render-functions"; 
import { fetchArticles } from "./js/pixabay-api";

const articleContainer = document.querySelector('.gallery');
const loaderMarkup  = '<div id="loader" class="loader"></div>';

const searchForm = document.querySelector('.search-form');

let currentPage = 1;


const searchBtn = document.querySelector('.btn-submit');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');


searchForm.addEventListener('submit', handleFormSubmit);
  
  function handleFormSubmit(e) { 
  e.preventDefault();

  let form = (e.currentTarget.elements.searchQuery.value).trim();
   if (form === null || form === '') {
    iziToast.info({
    title: 'Please type something in the search input',
      position: 'topRight',
    });
   } else {
     main(form)
    //  console.log(form);
     searchForm.reset();
     
  }

}

async function main(value) {
 
  try {

    articleContainer.insertAdjacentHTML("beforebegin", loaderMarkup);
    clearArticlesContainer();

    const photos = await fetchArticles(value, currentPage);
    const photo = photos.data.hits;
    let totalImages = photos.data.totalHits;
   

    const loaderSpinner = document.querySelector('#loader');
    if (loaderSpinner) {
      loaderSpinner.remove();
    }
    
    if (photo.length === 0) {
        
      iziToast.error({
        title: 'Sorry, there are no images matching your search query',
        position: 'topRight',
      });
       clearArticlesContainer();
                loadMoreBtn.style.display = 'none';
                return;
    } else {
      renderGallery(articleContainer, photo);
      loadMoreBtn.style.display = 'block';
      searchBtn.disabled = true;
      }
      
  
  let lightbox = new SimpleLightbox('.gallery a');
      lightbox.refresh();
      
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



