import React, {useEffect} from "react";
// Components
import Button from "../Button";
import MovieInfo from "../MovieInfo";
// Styles
import { Wrapper, Content } from "./Movie.styles";


const Movie = ({ movie, image, setMovieSelection }) => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'auto'})
    }, [])

    const title = movie.name || movie.title || null;
    const releaseDate = movie.first_air_date || movie.release_date || null;

    let streamingServices;
    // Handles error when movie isn't available in United States
    if ("US" in movie.streamingServices.results) {
        streamingServices = movie.streamingServices.results.US.flatrate || null;
    } else streamingServices = null;

    return (
        <Wrapper>
            <h1>{title}</h1>
            <h3>{`(${releaseDate.split('-')[0]})`}</h3>
            <Content>
                <img src={image} alt="movie poster" />
                <MovieInfo movie={movie} streamingServices={streamingServices} />
            </Content>
            <footer>
                <Button
                    text={"Back"}
                    callback={() => setMovieSelection(null)}
                />
            </footer>
        </Wrapper>
    );
};

export default Movie;
