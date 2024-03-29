import { useState, useEffect } from "react";
// API
import API, { Movie } from "../API";

const initialState = {
  page: 0,
  results: [] as Movie[],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [movieSelection, setMovieSelection] = useState<Movie | null>(null);

  const fetchMovies = async (page: number, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);

      // Filters out results that return People
      const filteredMedia = movies.results.filter(
        (media) => media.media_type !== "person"
      );

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...filteredMedia] : [...filteredMedia],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const fetchStreamingInfo = async (movie: Movie) => {
    try {
      setError(false);
      setLoading(true);

      const processResults = (source: any[]) =>
        source
          .filter((obj: { provider_name?: string }) => obj?.provider_name)
          .map((obj: { provider_name: string }) => obj.provider_name);

      const { flatrate = [], ads = [] } = (await API.fetchStreamingInfo(movie))
        .results["US"];

      const streamingServices = [
        ...processResults(flatrate),
        ...processResults(ads),
      ];

      setMovieSelection({ ...movie, streamingServices });
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Search and Initial
  useEffect(() => {
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  // Load More
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  return {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
    movieSelection,
    setMovieSelection,
    fetchStreamingInfo,
  };
};
