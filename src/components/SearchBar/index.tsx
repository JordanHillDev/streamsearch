import React, { useState, useEffect } from "react";
// Styles
import { Wrapper, Content } from "./SearchBar.styles";
// Types
type Props = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    setMovieSelection: any;
}


const SearchBar: React.FC<Props> = ({ setSearchTerm, setMovieSelection }) => {
    const [state, setState] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTerm(state);
            setMovieSelection(null);
        }, 500);

        return () => clearTimeout(timer);
    }, [setSearchTerm, state, setMovieSelection]);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.value === "") e.target.placeholder = "Search Titles";
        setState(e.currentTarget.value);
    };

    return (
        <Wrapper>
            <Content>
                <input
                    type="text"
                    placeholder="Search Titles"
                    onChange={(e) => handleChange(e)}
                    value={state}
                />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;
