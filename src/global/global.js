import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    body, html {
        padding: 0;
		margin: 0;
		font-family: ${props => props.theme.fonts.main}
    }

    h1, h2, h3, h4, h5 {
        margin: 0;
    }

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 2rem;
    }

    h4 {
        font-size: 5rem;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    p, div {
        font-size: 1.6rem;
    }
`

export default GlobalStyle
