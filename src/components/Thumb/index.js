import React from "react";

// Styles
import { Wrapper, Content, Image } from "./Thumb.styles";

const Thumb = ({ image, setMovieSelection, movie }) => {
    const releaseDate = movie.first_air_date || movie.release_date || null;
    const title = movie.name || movie.title || null;

    return (
        <Wrapper>
            <Image
                onClick={() => setMovieSelection(movie)}
                src={image}
                alt="movie-thumb"
            />
            <Content>
                <h2>{title}</h2>
                <span>{releaseDate && releaseDate.split("-")[0]}</span>
            </Content>
        </Wrapper>
    );
};

export default Thumb;
