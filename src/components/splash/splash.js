import React from "react"
import { CgArrowDown } from "react-icons/cg"
import {
	Splash,
	SplashContainer,
	Logo,
	Intro,
	Navigation,
	NavItem,
	IntroHeader,
	ScrollArrow,
} from "./styles"
import { Controller, Scene } from 'react-scrollmagic';

const splash = ({ props }) => {
	return (
		<>
			<Splash>
					<SplashContainer>
					<Logo src="https://via.placeholder.com/250x100" />
					<Controller>
						<Scene duration={100} indicators={true}>
							<>
							<IntroHeader>Welcome</IntroHeader>
							<Intro>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Sed vel sodales ipsum. Morbi sit amet magna sed arcu
								bibendum porta nec sit amet lacus. Quisque sed arcu
								tempor, ullamcorper ligula non, aliquet ante.
								Suspendisse id viverra sapien!
							</Intro>
							</>
						</Scene>
					</Controller>
					<Navigation>
						<NavItem>Item 1</NavItem>
						<NavItem>Item 2</NavItem>
						<NavItem>Item 3</NavItem>
						<NavItem>Item 4</NavItem>
					</Navigation>
				</SplashContainer>
			</Splash>
			<ScrollArrow 
				animate={{ y: [0, 10], opacity: [0, .75] }}
				transition={{ duration: 1, yoyo: Infinity }}
			>
				<CgArrowDown />
			</ScrollArrow>
		</>
	)
}

export default splash;
