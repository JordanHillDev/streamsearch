import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Content = styled.div`
    text-align: center;
    color: white;
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
