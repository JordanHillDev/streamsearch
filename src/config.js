//TMDB Configuration

const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;
const TMDB_URL = 'https://api.themoviedb.org/3/';

const SEARCH_URL = `${TMDB_URL}search/movie?api_key=${TMDB_KEY}&language=en-US&query=`
const POPULAR_URL = `${TMDB_URL}movie/popular?api_key=${TMDB_KEY}&language=en-US`;
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w780';


// Watchmode Configuration

// const WM_KEY = process.env.REACT_APP_WM_KEY;
// const WM_URL = `https://api.watchmode.com/v1/title/${movieId}/sources/?apiKey=${WM_KEY}`

export {
    SEARCH_URL,
    POPULAR_URL,
    IMAGE_BASE_URL,
    // WM_URL
}