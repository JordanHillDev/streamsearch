import React from "react";
// Styles
import { Wrapper, Content } from "./Header.styles";

const Header = ({children}) => (
    <Wrapper>
        <Content>
            <h1>Stream Search</h1>
            {children}
        </Content>
    </Wrapper>
)

export default Header;