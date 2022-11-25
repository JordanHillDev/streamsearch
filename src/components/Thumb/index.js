import React from "react";

// Styles
import { Image } from './Thumb.styles'

const Thumb = ({ image }) => (
    <Image src={image} alt='movie-thumb'/>
)

export default Thumb;