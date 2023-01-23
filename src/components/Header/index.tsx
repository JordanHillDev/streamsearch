import React from "react";
// Styles
import { Wrapper, Content } from "./Header.styles";
// Types
type Props = {
    children: React.ReactElement
}

const Header: React.FC<Props> = ({children}) => (
    <Wrapper>
        <Content>
            <h1>Stream Search</h1>
            {children}
        </Content>
    </Wrapper>
)

export default Header;