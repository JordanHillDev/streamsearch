import React from "react";

// Home
import { useHomeFetch } from "../hooks/useHomeFetch";
// Components
import SearchBar from "./SearchBar";

const Home = () => {
    const {
        // state,
        // loading,
        error,
        // searchTerm,
        setSearchTerm,
        // setIsLoadingMore,
    } = useHomeFetch();

    if(error) return <div>Something Went Wrong</div>

    return (
        <>
        <SearchBar setSearchTerm={setSearchTerm} />
        </>
    )
};

export default Home;
