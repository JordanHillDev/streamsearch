import styled from "styled-components";

export const Wrapper = styled.div`
    /* display: flex; */
    /* justify-content: center; */
    color: white;
    margin-top: 200px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    img {
        width: clamp(300px, 50vw, 600px);
        border-radius: 20px;
    }

    h2 {
        color: white;
    }

    footer {
        background-color: hsla(0, 0%, 0%, 0.8);
        width: 100%;
        height: 50px;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
            font-size: 1.2rem;
            padding: 0.5em 1em;
            color: black;
        }
    }
`;
