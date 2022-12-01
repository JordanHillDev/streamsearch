import React, { useEffect } from "react";
//Styles
import { Wrapper, Content } from "./Grid.styles";

const Grid = ({ header, children, pagePosition }) => {
    useEffect(() => {
        window.scroll(0, pagePosition);
    }, [pagePosition]);

    return (
        <Wrapper>
            <h1>{header}</h1>
            <Content>{children}</Content>
        </Wrapper>
    );
};

export default Grid;
