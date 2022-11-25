import React from "react";
// Config
import { IMAGE_BASE_URL } from "../config";
// Hook
import { useHomeFetch } from "../hooks/useHomeFetch";

// Components
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import Thumb from "./Thumb";

const Home = () => {
    const {
        state,
        // loading,
        error,
        searchTerm,
        setSearchTerm,
        // setIsLoadingMore,
    } = useHomeFetch();

    if (error) return <div>Something Went Wrong</div>;

    return (
        <>
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={searchTerm ? "Search Result" : "Popular Titles"}>
                {state.results.map((movie) => (
                    <Thumb
                        key={movie.id}
                        clickable
                        image={IMAGE_BASE_URL + movie.poster_path}
                        movieOd={movie.id}
                    />
                ))}
            </Grid>
        </>
    );
};

export default Home;
