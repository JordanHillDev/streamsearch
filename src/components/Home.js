import React, {useEffect, useRef} from "react";
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
        setMovieSelection,
    } = useHomeFetch();

    const fetchSelection = async (movie) => {
        try {
            const streamers = await (await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/watch/providers?api_key=4ffa92374b7f648218c020deb99f5905`)).json()
            setMovieSelection({...movie, streamers})
        } catch (error) {
            console.log(error)
        }
    }

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
                            setMovieSelection={fetchSelection}
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
