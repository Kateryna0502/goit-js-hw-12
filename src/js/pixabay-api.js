
import axios from 'axios';
import { perPage } from '../main';


export async function searchImages(query, pageNumber) {
  axios.defaults.baseURL = 'https://pixabay.com';

  const params = {
    key: '44428976-d6e941eddcd51cc03234da6bf',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page: pageNumber,
  };

  try {
    const response = await axios.get('/api/', { params });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}



// /*-------------------------*
// export function searchImages(query) {
//   const BASE_URL = 'https://pixabay.com';
//   const END_POINT = '/api/';
//   const params = new URLSearchParams({
//     key: '44428976-d6e941eddcd51cc03234da6bf',
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   });
//   const url = `${BASE_URL}${END_POINT}?${params}`;
//   console.log(url);
//   return fetch(url)
//     .then(data => data.json())
//     .catch(err => {});
// }
