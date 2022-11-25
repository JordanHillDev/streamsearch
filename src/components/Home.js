import React from "react";
// Config
import { IMAGE_BASE_URL } from "../config";
// Hook
import { useHomeFetch } from "../hooks/useHomeFetch";

// Components
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Movie from "./Movie";

const Home = () => {
    const {
        state,
        // loading,
        error,
        searchTerm,
        setSearchTerm,
        // setIsLoadingMore,
        movieSelection,
        setMovieSelection
    } = useHomeFetch();

    if (error) return <div>Something Went Wrong</div>;

    return (
        <>
            <SearchBar setSearchTerm={setSearchTerm} setMovieSelection={setMovieSelection} />
            {movieSelection ? (
                <Movie
                    movie={movieSelection}
                    image={IMAGE_BASE_URL + movieSelection.poster_path}
                    setMovieSelection={setMovieSelection}
                />
            ) : (
                <Grid header={searchTerm ? "Search Result" : "Popular Titles"}>
                    {state.results.map((movie) => (
                        <Thumb
                            key={movie.id}
                            setMovieSelection={setMovieSelection}
                            image={IMAGE_BASE_URL + movie.poster_path}
                            movie={movie}
                        />
                    ))}
                </Grid>
            )}
        </>
    );
};

export default Home;
