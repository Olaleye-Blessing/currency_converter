import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    *, *::before, *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    body {
        line-height: 1.5;
        font-size: 1.8rem;
        background-color: #333;
        color: #fff;
    }

    .root {
        min-height: 100vh;
        min-width: 100vw;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
    }

    header {
        margin-block-end: 1rem;
        text-align: center;
    }

    main {
        width: 100%;
    }

    input, button, select {
        --moz-appearance: none;
        --webkit-appearance: none;
        appearance: none;
        border: none;
        outline: none;
        background-color: transparent;
        transition: color 0.2s ease-in, background 0.2s ease-in;
        cursor: pointer;
    }

    input:disabled {
        cursor: not-allowed;
    }

    .process {
        text-align: center;
        margin-top: 2rem;
        min-height: 3rem;
    }
`;
