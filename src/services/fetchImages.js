import axios from 'axios';

const KEY = '32700249-946444406968560521eecb27d';

const PER_PAGE = 20;

axios.defaults.baseURL = 'https://pixabay.com/api/';
export async function fetchImages(searchQuery, page = 1) {
  const response = await axios.get(
    `?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
  );
  return response.data;
}
