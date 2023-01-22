import React, { useState } from "react";
// Config
import { IMAGE_BASE_URL } from "../config";
// Hook
import { useHomeFetch } from "../hooks/useHomeFetch";
// Components
import Header from "./Header";
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Movie from "./Movie";
import Button from "./Button";
import Spinner from "./Spinner";
// Types


const Home = () => {
    const {
        state,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        setIsLoadingMore,
        movieSelection,
        setMovieSelection,
        fetchStreamingInfo,
    } = useHomeFetch();

    const [pagePosition, setPagePosition] = useState(0);

    if (error) return <div>Something Went Wrong</div>;

    return (
        <>
            <Header>
                <SearchBar
                    setSearchTerm={setSearchTerm}
                    setMovieSelection={setMovieSelection}
                />
            </Header>

            {movieSelection ? (
                <>
                    {loading && <Spinner />}

                    <Movie
                        movie={movieSelection}
                        image={IMAGE_BASE_URL + movieSelection.poster_path}
                        setMovieSelection={setMovieSelection}
                    />
                </>
            ) : (
                <>
                    <Grid
                        header={
                            searchTerm ? "Search Results" : "Popular Titles"
                        }
                        pagePosition={pagePosition}
                    >
                        {state.results.map((movie) => (
                            <Thumb
                                key={movie.id}
                                setMovieSelection={fetchStreamingInfo}
                                image={ movie.poster_path ? IMAGE_BASE_URL + movie.poster_path : null }
                                movie={movie}
                                setPagePosition={setPagePosition}
                            />
                        ))}
                    </Grid>
                    {loading && <Spinner />}
                    {state.page < state.total_pages && (
                        <Button
                            text={"Load More"}
                            callback={() => setIsLoadingMore(true)}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default Home;
