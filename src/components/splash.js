import React from "react"
import styled from "@emotion/styled"

const Splash = styled.div`
	text-align: left;
	background: #ccc;
`

const Header = styled.h1``

const Intro = styled.p`
	font-size: 2rem;
`

const splash = () => {
	return (
		<Splash>
			<Header>Intro</Header>
			<Intro>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
				sodales ipsum. Morbi sit amet magna sed arcu bibendum porta nec
				sit amet lacus. Quisque sed arcu tempor, ullamcorper ligula non,
				aliquet ante. Suspendisse id viverra sapien.
			</Intro>
		</Splash>
	)
}

export default splash
