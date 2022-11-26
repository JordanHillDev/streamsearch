import { SEARCH_URL, POPULAR_URL } from "./config";

const apiSettings = {
    fetchMovies: async (searchTerm, page) => {
        const endpoint = searchTerm
            ? `${SEARCH_URL}${searchTerm}&page=${page}`
            : `${POPULAR_URL}&page=${page}`;
            return await (await fetch(endpoint)).json()
    },
    fetchStreamers: async (movieId) => {
        return await (await (await fetch(`https://api.watchmode.com/v1/title/${movieId}/sources/?apiKey=ZkeTfqdkKcrF2X8r4tC1aeCJfcjcKbjdTbgneU5f`)).json())
    }
};

export default apiSettings;