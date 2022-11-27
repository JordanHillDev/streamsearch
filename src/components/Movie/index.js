import React from "react";
// Components

// Styles
import { Wrapper, Content } from "./Movie.styles";

const Movie = ({ movie, image, setMovieSelection }) => {
    let streamers = null;
    if (Object.keys(movie.streamers.results).length > 0) {
        streamers = movie.streamers.results.US.flatrate;
    }

    return (
        <Wrapper>
            <Content>
                <h1>{movie.title}</h1>
                <h3>{}</h3>
                <img src={image} alt="movie poster" />
                {streamers ? (
                    streamers.map((provider) => (
                        <h2 key={provider.provider_name}>
                            {provider.provider_name}
                        </h2>
                    ))
                ) : (
                    <h2>There are no providers</h2>
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
