import styled from "styled-components";

export const Form = styled.form`
    margin: auto;
    max-width: 40rem;

    div {
        position: relative;
    }

    label {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: 0.1rem solid #aaa;
        border-radius: 1.2rem;
        padding: 0 1rem;

        span {
            flex: 0 0 auto;
            max-width: max-content;
        }

        span:nth-child(1) {
            color: #777;
            font-size: 1.6rem;
        }

        span:last-child {
            font-weight: 700;
            color: #ddd;
            font-size: 1.5rem;
        }

        input {
            flex: 1;
            padding: 1.2rem 0.3rem 1.2rem 1rem;
            color: #fff;
        }
    }

    label:hover {
        background-origin: #aaa;
    }

    select {
        position: relative;
        display: block;
        padding: 0.3rem 1rem;
        margin-top: 0.9rem;
        font-size: 1.6rem;
        color: #ccc;
        width: 100%;
    }

    select option {
        background-color: #555;
        color: #eee;
    }

    .dropdown {
        position: absolute;
        top: 2rem;
        right: 1rem;
        transform: translateY(-50%);
        padding: 0;
        border: none;
        font-size: 3rem;
        color: #888;
        font-weight: 900;
    }
`;
