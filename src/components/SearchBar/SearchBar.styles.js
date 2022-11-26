import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    padding: 0 20px;
`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 55px;
    background: white;
    margin: 0 auto;
    border-radius: 40px;
    color: white;
    text-align: center;

    input {
        margin: 8px 0;
        padding: 0;
        border: 0;
        width: 95%;
        background: transparent;
        height: 40px;
        color: gray;
        font-size: 1.5rem;
        text-align: center;
        

        :focus {
            outline: none;
        }

        ::placeholder {
            color: gray;
        }
    }
`;
