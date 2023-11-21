const URL = 'https://pixabay.com/api/';
const KEY = '39882571-8c4775acb37a3d7cba8ebb9f4';
const FILTER = '&image_type=photo&orientation=horizontal&per_page=12';

function fetchImages(query, page = 1) {
  return fetch(`${URL}?q=${query}&page=${page}&key=${KEY}${FILTER}`).then(
    response => response.json()
  );
}

export default fetchImages;