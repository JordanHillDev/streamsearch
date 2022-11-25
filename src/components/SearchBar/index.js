import React, { useState, useEffect, useRef } from "react";

import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm, setMovieSelection }) => {
    const [state, setState] = useState("");
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
            setMovieSelection(null)
        }, 500);

        return () => clearTimeout(timer);
    }, [setSearchTerm, state, setMovieSelection]);

    return (
        <Wrapper>
            <Content>
                <input
                    type="text"
                    placeholder="Search Movie"
                    onChange={(event) => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;
