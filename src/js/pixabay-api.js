
import axios from 'axios';
import { perPage } from '../main';


export async function sendQuery(imageName, pageNumber) {
  axios.defaults.baseURL = 'https://pixabay.com';

  const params = {
    key: '44428976-d6e941eddcd51cc03234da6bf',
    q: imageName,
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