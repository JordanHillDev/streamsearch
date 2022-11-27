import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: black;
    padding: 10px;
    z-index: 2;
`;

export const Content = styled.div`
    h1 {
        font-size: clamp(1.8rem, 4vw, 4rem);
        color: white;
        margin: 0;
        text-align: center;
    }
`;
