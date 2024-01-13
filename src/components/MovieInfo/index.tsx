import React from "react";
// Styles
import { Wrapper } from "./MovieInfo.styles";
// Types
type Props = {
    movie: {
        overview: string;
        streamingServices: string[];
    };
};

const MovieInfo: React.FC<Props> = ({ movie }) => {
    
    
    return (
        <Wrapper>
            <h2>Synopsis</h2>
            <p>{movie.overview}</p>
            <h2>Where To Watch</h2>
            {movie.streamingServices && (
                <ul>
                    {movie.streamingServices?.map((prov) => (
                        prov && <li key={prov}>{prov}</li>
                    ))}
                </ul>
            )}
            {!movie.streamingServices && (
                <span>This title is currently not on streaming services</span>
            )}
        </Wrapper>
    );
};

export default MovieInfo;
