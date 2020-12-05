import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '../styles/theme';
import GlobalStyle from '../styles/global.js';

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<main>{children}</main>
		</ThemeProvider>
	);
};

export default Layout;
