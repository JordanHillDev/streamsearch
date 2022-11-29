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

    span {
        color: var(--font-color-bright)
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

export const NoImage = styled.div`
    width: 100%;
    height: 100%;
    max-width: 720px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    padding: 0.2rem;

    h2 {
        text-align: center;
        font-size: 2rem;
        color: var(--background-color)
    }

    :hover {
        opacity: 0.8;
    }
`
