import React from "react";
// Components

// Styles
import { Wrapper, Content } from "./Movie.styles";

const Movie = ({ movie, image, setMovieSelection }) => {
    const title = movie.name || movie.title || null;

    let streamingServices;
    // Handles error when movie isn't available in United States
    if ("US" in movie.streamingServices.results) {
        streamingServices = movie.streamingServices.results.US.flatrate || null;
    } else streamingServices = null;

    return (
        <Wrapper>
            <Content>
                <h1>{title}</h1>
                <img src={image} alt="movie poster" />
                {streamingServices && (
                    <ul>
                        {streamingServices.map((provider) => (
                            <li key={provider.provider_name}>
                                {provider.provider_name}
                            </li>
                        ))}
                    </ul>
                )}
                {!streamingServices && (
                    <h2>Currently this title is not on streaming services</h2>
                )}
                <footer>
                    <button onClick={() => setMovieSelection(null)}>
                        Back
                    </button>
                </footer>
            </Content>
        </Wrapper>
    );
};

export default Movie;
