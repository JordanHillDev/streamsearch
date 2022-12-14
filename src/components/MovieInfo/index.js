import React from "react";
// Styles
import { Wrapper } from "./MovieInfo.styles";

const MovieInfo = ({ movie, streamingServices }) => (
    <Wrapper>
        <h2>Synopsis</h2>
        <p>{movie.overview}</p>
        <h2>Where To Watch</h2>
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
            <span>This title is currently not on streaming services</span>
        )}
    </Wrapper>
);

export default MovieInfo;

