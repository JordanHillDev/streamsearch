//TMDB Configuration

const TMDB_KEY: string | undefined = process.env.REACT_APP_TMDB_KEY;
const TMDB_URL: string = 'https://api.themoviedb.org/3/';

const SEARCH_URL: string = `${TMDB_URL}search/multi?api_key=${TMDB_KEY}&query=`
const POPULAR_URL: string = `${TMDB_URL}movie/popular?api_key=${TMDB_KEY}`;
const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/w780';

// Streaming Info
const STREAMING_URL_END: string = `/watch/providers?api_key=${TMDB_KEY}`
const STREAMING_TV_URL: string = `${TMDB_URL}tv/`
const STREAMING_MOVIE_URL: string = `${TMDB_URL}movie/`

export {
    SEARCH_URL,
    POPULAR_URL,
    IMAGE_BASE_URL,
    STREAMING_TV_URL,
    STREAMING_MOVIE_URL,
    STREAMING_URL_END
}