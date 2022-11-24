import { SEARCH_URL, POPULAR_URL } from "./config";

const apiSettings = {
    fetchMovies: async (searchTerm, page) => {
        const endpoint = searchTerm
            ? `${SEARCH_URL}${searchTerm}&page=${page}`
            : `${POPULAR_URL}&page=${page}`;
            return await (await fetch(endpoint)).json()
    },
};

export default apiSettings;