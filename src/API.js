import { SEARCH_URL, POPULAR_URL, STREAMING_MOVIE_URL, STREAMING_TV_URL, STREAMING_URL_END } from "./config";

const apiSettings = {
    fetchMovies: async (searchTerm, page) => {
        const endpoint = searchTerm
            ? `${SEARCH_URL}${searchTerm}&page=${page}`
            : `${POPULAR_URL}&page=${page}`;
        return await (await fetch(endpoint)).json();
    },
    fetchStreamingInfo: async (movie) => {
        const url =
            movie.media_type === "tv"
                ? `${STREAMING_TV_URL}${movie.id}${STREAMING_URL_END}`
                : `${STREAMING_MOVIE_URL}${movie.id}${STREAMING_URL_END}`;

        return await (await fetch(url)).json();
    },
};

export default apiSettings;
