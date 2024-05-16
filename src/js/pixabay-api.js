import axios from 'axios';

const API_KEY  = '31511712-b53d42f48d96ff6235f6befd4';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchArticles(value, currentPage, perPage = 15) {
  try {
    const res = await axios.get(`?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${currentPage}&per_page=${perPage}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

// export async function fetchArticles(value, currentPage) {
//   try {
//     const res = await axios.get(`?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${currentPage}&per_page=15`);
    
//     // Проверяем, если количество изображений на сервере меньше 15
//     const remainingImages = res.data.totalHits - (currentPage - 1) * 15;
//     const imagesToFetch = Math.min(remainingImages, 15);
    
//     // Если осталось меньше 15 изображений, загружаем только их
//     const finalRes = {
//       ...res.data,
//       hits: res.data.hits.slice(0, imagesToFetch)
//     };
    
//     return finalRes;
//   } catch (error) {
//     throw error;
//   }
// }