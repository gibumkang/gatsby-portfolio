import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    body, html {
        padding: 0;
        margin: 0;
        color:  ${props => props.theme.primary};
		font-family: ${props => props.theme.fonts.main};
    }

    h1, h2, h3, h4, h5 {
        margin: 0;
        font-family: ${props => props.theme.fonts.header};
    }

    h1 {
        font-size: 3.5rem;
    }

    h2 {
        font-size: 3.5rem;
    }

    h3 {
        font-size: 3rem;
    }

    h4 {
        font-size: 2.75rem;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    p, div, li {
        font-size: 1.7rem;
    }

    p {
        line-height: 2.9rem;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
