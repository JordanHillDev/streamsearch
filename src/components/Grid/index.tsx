import React, { useEffect } from "react";
//Styles
import { Wrapper, Content } from "./Grid.styles";
// Types
type Props = {
    header: string;
    pagePosition: number;
    children?: React.ReactNode;
};

const Grid: React.FC<Props> = ({ header, children, pagePosition }) => {
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
