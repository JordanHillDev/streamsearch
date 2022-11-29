import React from "react";

// Styles
import { Wrapper, Content, Image, NoImage } from "./Thumb.styles";

const Thumb = ({ image, setMovieSelection, movie }) => {
    const releaseDate = movie.first_air_date || movie.release_date || null;
    let title = movie.name || movie.title || null;

    if (title.length > 20) title = title.slice(0, 20) + "...";

    return (
        <Wrapper>
            <Content>
                <h2>{title}</h2>
                {releaseDate ? <span>{`(${releaseDate.split("-")[0]})`}</span> : null}
            </Content>
            {image ? <Image
                onClick={() => setMovieSelection(movie)}
                src={image}
                alt="movie-thumb"
            /> : <NoImage><h2>No Image Available</h2></NoImage>}
        </Wrapper>
    );
};

export default Thumb;
