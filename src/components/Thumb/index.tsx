import React from "react";
// Styles
import { Wrapper, Content, Image, NoImage } from "./Thumb.styles";
// Types
import { Movie } from "../../API"
type Props = {
    image: string | null;
    setMovieSelection: any
    movie: Movie;
    setPagePosition: React.Dispatch<React.SetStateAction<number>>
}




const Thumb: React.FC<Props> = ({ image, setMovieSelection, movie, setPagePosition }) => {
    const releaseDate = movie.first_air_date || movie.release_date || null;
    let title = movie.name || movie.title || null;

    // Cuts off long movie titles with "...""
    if ( title && title.length > 20) title = title.slice(0, 20) + "...";

    const handleClick = () => {
        setPagePosition(window.scrollY);
        setMovieSelection(movie);
    };

    return (
        <Wrapper>
            <Content>
                <h2>{title}</h2>
                {releaseDate ? (
                    <span>{`(${releaseDate.split("-")[0]})`}</span>
                ) : null}
            </Content>
            {image ? (
                <Image
                    onClick={() => handleClick()}
                    src={image}
                    alt="movie-thumb"
                />
            ) : (
                <NoImage>
                    <h2>No Image Available</h2>
                </NoImage>
            )}
        </Wrapper>
    );
};

export default Thumb;
