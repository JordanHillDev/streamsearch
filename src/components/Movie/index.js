import React from "react";
// Components

// Styles
import { Wrapper, Content } from './Movie.styles'

const Movie = ({ movie, image, setMovieSelection }) => (
    <Wrapper>
        <Content>
            <button onClick={() => setMovieSelection(null)}>Back</button>
            <h1>{movie.title}</h1>
            <img src={image} alt='movie poster' />
        </Content>
    </Wrapper>
)

export default Movie