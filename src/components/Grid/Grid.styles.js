import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto 80px auto;
    padding: 0 20px;
    text-align: left;

    h1 {
        color: white;
        margin-bottom: 4rem;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-gap: 2rem;

    @media screen and (min-width: 640px) {
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    }
`;
