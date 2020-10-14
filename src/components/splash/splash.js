import React from "react"
import { CgArrowDown } from "react-icons/cg"
import {
	Splash,
	SplashContainer,
	Logo,
	Intro,
	Navigation,
	NavItem,
	ScrollArrow,
} from "./styles"

const splash = ({ props }) => {
	return (
		<>
			<Splash>
				<SplashContainer>
					<Logo src="https://via.placeholder.com/250x100" />
					<Intro>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed vel sodales ipsum. Morbi sit amet magna sed arcu
						bibendum porta nec sit amet lacus. Quisque sed arcu
						tempor, ullamcorper ligula non, aliquet ante.
						Suspendisse id viverra sapien!
					</Intro>
					<Navigation>
						<NavItem>Item 1</NavItem>
						<NavItem>Item 2</NavItem>
						<NavItem>Item 3</NavItem>
						<NavItem>Item 4</NavItem>
					</Navigation>
				</SplashContainer>
			</Splash>
			<ScrollArrow animate={{ scale: 1.5 }}>
				<CgArrowDown />
			</ScrollArrow>
		</>
	)
}

export default splash
