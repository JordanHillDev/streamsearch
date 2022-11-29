import React from "react";

// Styles
import { Wrapper, Content, Image } from "./Thumb.styles";

const Thumb = ({ image, setMovieSelection, movie }) => {
    const releaseDate = movie.first_air_date || movie.release_date || null;
    let title = movie.name || movie.title || null;

    if (title.length > 20) title = title.slice(0, 20) + "...";

    return (
        <Wrapper>
            <Content>
                <h2>{title}</h2>
                <span>{`(${releaseDate && releaseDate.split("-")[0]})`}</span>
            </Content>
            <Image
                onClick={() => setMovieSelection(movie)}
                src={image}
                alt="movie-thumb"
            />
        </Wrapper>
    );
};

export default Thumb;
