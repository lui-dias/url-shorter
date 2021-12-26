import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: hsl(180, 66%, 49%);
        --secondary: hsl(257, 27%, 26%);    

        --error: hsl(0, 87%, 67%);

        --sweet-white: #f1f1f7;
        --little-red-white: ##f0f1f6;
        --gray: hsl(0, 0%, 75%);
        --grayish-violet: hsl(257, 7%, 63%);
        --very-dark-blue: hsl(255, 11%, 22%);
        --very-dark-violet: hsl(260, 8%, 14%);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ::selection {
        color: white;
        background: var(--primary);
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: #555;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: #888;
    }

    html, body, #__next {
        @media (max-width: 1080px) { font-size: 93.5%; }
        @media (max-width: 720px) { font-size: 87%; }
        @media (max-width: 600px) { font-size: 80%; }
        @media (max-width: 480px) { font-size: 75%; }
        @media (max-width: 360px) { font-size: 70%; }
    }

    #__next {
        display: flex;
    }

    body {
        font-weight: 500;
    }

    body, button {
        font-family: Poppins, sans-serif;
    }

    button, input {
        border: none;
    }

    input {
        outline: none;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`
