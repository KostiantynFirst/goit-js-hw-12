import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { renderGallery } from "./js/render-functions"; 
import { fetchArticles } from "./js/pixabay-api";

const articleContainer = document.querySelector('.gallery');
const loaderMarkup = '<div id="loader" class="loader"></div>';
const searchForm = document.querySelector('.search-form');
const searchInputElement = document.querySelector('input.form-control');

let photos = [];
let currentPage = 1;
let totalImages = 0;
let maxPageNumber = 0;
let form = null;
let perPage = 15;
const lightbox = new SimpleLightbox('.gallery a');
const searchBtn = document.querySelector('.btn-submit');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');

searchForm.addEventListener('submit', handleFormSubmit);
searchInputElement.addEventListener('input', handleSearchInputChange);
loadMoreBtn.addEventListener('click', handleLoadMoreButtonClick);

async function handleFormSubmit(e) { 
  e.preventDefault();
  resetPage();
  form = e.currentTarget.elements.searchQuery.value.trim();
  if (!form) {
    showInfoToast('Please type something in the search input');
  } else {
    loadMoreBtn.style.display = 'none';
    await main(form);
    searchForm.reset();
  }
}

function handleSearchInputChange() {
  searchBtn.disabled = !searchInputElement.value.trim();
}

async function main(value) {
  showLoader();
  clearArticlesContainer();
  const images = await fetchArticles(value, currentPage, perPage);
 
  if (images && images.hits.length > 0) {
    photos = [...images.hits];
    totalImages = images.totalHits;
    maxPageNumber = Math.ceil(totalImages / 15);
    hideLoader();
    renderGallery(articleContainer, photos);
    searchBtn.disabled = true;
    lightbox.refresh();

    if (currentPage >= 1) {
      loadMoreBtn.style.display = 'block';
    }
    if (currentPage >= maxPageNumber) {
      loadMoreBtn.style.display = 'none';
      showInfoToast("We're sorry, but you've reached the end of search results.");
    }

    

  } else {
    hideLoader();
    loadMoreBtn.style.display = 'none';
    showErrorToast('Sorry, there are no images matching your search query');
    clearArticlesContainer();
    lightbox.refresh();
  }
}

// async function main(value) {
//   showLoader(); // Показываем загрузчик
//   clearArticlesContainer(); // Очищаем контейнер для статей

//   try {
//     const images = await fetchArticles(value, currentPage, perPage); // Получаем статьи

//     if (images && images.hits.length > 0) { // Проверяем, есть ли изображения
//       photos = [...images.hits];
//       totalImages = images.totalHits;
//       maxPageNumber = Math.ceil(totalImages / perPage); // Используем переменную perPage для расчета

//       hideLoader(); // Скрываем загрузчик
//       renderGallery(articleContainer, photos); // Отображаем галерею
//       loadMoreBtn.style.display = 'block'; // Показываем кнопку "Загрузить ещё"
//       searchBtn.disabled = true; // Отключаем кнопку поиска

//     } else {
//       if (currentPage === 1) { // Проверяем, если это первая страница
//         showErrorToast('Sorry, there are no images matching your search query'); // Показ ошибки, если нет изображений
//         clearArticlesContainer(); // Очищаем контейнер
//       }

//       if (currentPage >= 1) {
//         loadMoreBtn.style.display = 'none';
//       }
      
//       if (currentPage >= maxPageNumber) {
//         loadMoreBtn.style.display = 'none'; // Прячем кнопку "Загрузить ещё"
//         showInfoToast("We're sorry, but you've reached the end of search results."); // Показ уведомления о конце результатов
//       }

//       // else {
//       //   loadMoreBtn.style.display = 'none'; // Прячем кнопку "Загрузить ещё"
//       //   showInfoToast("We're sorry, but you've reached the end of search results."); // Показ уведомления о конце результатов
//       // }
//     }
//   } catch (error) {
//     hideLoader(); // Скрываем загрузчик в случае ошибки
//     showErrorToast('An error occurred while fetching images'); // Показ ошибки, если произошла ошибка при получении изображений
//     console.error(error); // Логируем ошибку для отладки
//   } finally {
//     hideLoader(); // Гарантируем, что загрузчик будет скрыт в любом случае
//     lightbox.refresh(); // Обновляем lightbox
//   }
// }

async function handleLoadMoreButtonClick() {
  showLoaderAddcard();
  currentPage++;
  try {
    const restPhoto = await fetchArticles(form, currentPage);
    photos = [...restPhoto.hits];
    if (currentPage >= maxPageNumber) {
      loadMoreBtn.style.display = 'none';
      showInfoToast("We're sorry, but you've reached the end of search results.");
    }
    hideLoader();
    renderGallery(articleContainer, photos);
    scrollToElementHeight();
    lightbox.refresh();
  } catch (error) {
    console.log(error);
    hideLoader();
  }
}

function showLoader() {
  articleContainer.insertAdjacentHTML("beforebegin", loaderMarkup);
}

function showLoaderAddcard() {
  loadMoreBtn.insertAdjacentHTML("beforebegin", loaderMarkup);
}

function hideLoader() {
  const loaderSpinner = document.querySelector('#loader');
  if (loaderSpinner) loaderSpinner.remove();
}

function clearArticlesContainer() {
  articleContainer.innerHTML = '';
}

function resetPage() {
  currentPage = 1;
}

function scrollToElementHeight() {
  const galleryItemElement = document.querySelector('.photo-card');
  if (galleryItemElement) {
    const galleryItemRect = galleryItemElement.getBoundingClientRect();
    scrollToDistance(galleryItemRect.height);
  }
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
}

function showInfoToast(message) {
  iziToast.info({
    title: message,
    position: 'topRight',
  });
}

function showErrorToast(message) {
  iziToast.error({
    title: message,
    position: 'topRight',
  });
}