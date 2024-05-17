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

