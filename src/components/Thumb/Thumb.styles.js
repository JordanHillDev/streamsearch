import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

export const Content = styled.div`
    text-align: center;
    color: white;
    margin-bottom: 10px;

    h2 {
        font-size: 1.2rem;
        margin: 0;
    }

`;

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    object-fit: cover;
    border-radius: 20px;

    :hover {
        opacity: 0.8;
    }
`;
