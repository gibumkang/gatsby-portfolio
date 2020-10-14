import React from "react"
import styled, { ThemeProvider } from "styled-components"
import Theme from "../themes/theme"
import GlobalStyle from "../global/global.js"

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<main>{children}</main>
		</ThemeProvider>
	)
}

export default Layout
