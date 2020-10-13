import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
	margin: 0rem 5rem;
`

const Layout = ({ children }) => {
	return (
		<Container>
			<main>{children}</main>
		</Container>
	)
}

export default Layout
