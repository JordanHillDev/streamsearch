import styled from "styled-components";

export const Wrapper = styled.div`
    color: white;
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    h3 {
        color: var(--font-color-bright)
    }

    h1,
    h3 {
        margin: 5px;
        
    }

    footer {
        background-color: var(--background-color);
        width: 100%;
        height: 50px;
        position: fixed;
        bottom: 0;
        padding-bottom: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px 0;
    gap: 80px;

    img {
        width: clamp(300px, 30vw, 600px);
        height: auto;
        border-radius: 20px;
    }

    h2 {
        color: white;
    }
`;
