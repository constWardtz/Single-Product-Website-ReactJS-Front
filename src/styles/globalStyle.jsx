import { createGlobalStyle } from 'styled-components'

export const globalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body{
        scroll-behavior: smooth;
        overflow-y: scroll;
        overflow-x: hidden;
        color: var(--dark-color);
    }

        :root {
        /* Color palette */
        --primary-color: #b828e5;
        --secondary-color: #d191f7;
        --light-color: #e7ddea;
        --dark-color: #2e2e2e;
        --thin-color: #6e6e6e;
        --hover-color:  #941ab9;
        /* Font weight */
        --font-weight-500: 500;
        --font-weight-400: 400;
        /* Font Size*/
        --primary-text-size: 3rem;
        --secondary-text-size: 1rem;
        --small-text-size: .8rem;
    }

    input,
    button {
        outline: none;
        border: none;
    }

    ul, li{
        list-style: none;
    }

    a {
        text-decoration: none;
        color: var(--secondary-color);
    }
    /* Costum Scrollbar */

        ::-webkit-scrollbar {
        width: 6px;
    }
    /* Background */

        ::-webkit-scrollbar-track {
        background: var(--secondary-color);
    }
    /* handle */

        ::-webkit-scrollbar-thumb {
        background: var(--primary-color);
    }
`