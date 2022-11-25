import React from "react";

// Styles
import { Image } from './Thumb.styles'

const Thumb = ({ image, setMovieSelection, movie }) => (
    <Image onClick={() => setMovieSelection(movie)} src={image} alt='movie-thumb'/>
)

export default Thumb;