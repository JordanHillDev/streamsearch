import {
    SEARCH_URL,
    POPULAR_URL,
    STREAMING_MOVIE_URL,
    STREAMING_TV_URL,
    STREAMING_URL_END,
} from "./config";

// Types
export type Movie = {
    backdrop_path: string;
    id: number;
    original_title: string;
    overview: string;
    title?: string | undefined
    media_type: string
    poster_path: string;
    first_air_date: string;
    release_date: string;
    name? : string | undefined;
    US: []
}

export type Movies = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
};

export type StreamingServices = {
    id: number;
    results: {}
    US: []
}


const apiSettings = {
    fetchMovies: async (searchTerm: string, page: number): Promise<Movies> => {
        const endpoint: string = searchTerm
            ? `${SEARCH_URL}${searchTerm}&page=${page}`
            : `${POPULAR_URL}&page=${page}`;
        return await (await fetch(endpoint)).json();
    },
    fetchStreamingInfo: async (movie: Movie): Promise<[] | undefined> => {
        const url: string =
            movie.media_type === "tv"
                ? `${STREAMING_TV_URL}${movie.id}${STREAMING_URL_END}`
                : `${STREAMING_MOVIE_URL}${movie.id}${STREAMING_URL_END}`;

        return await (await fetch(url)).json();
    },
};

export default apiSettings;

