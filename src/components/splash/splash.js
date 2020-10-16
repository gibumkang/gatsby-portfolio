import React, { useEffect, useState } from "react";
import { CgArrowDown } from "react-icons/cg";
import {
	SplashPage,
	SplashContainer,
	Logo,
	Intro,
	Navigation,
	NavItem,
	IntroHeader,
	ScrollArrow,
} from "./styles";

const Splash = ({ props }) => {
	const [showArrow, setShowArrow] = useState(true);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 25 ? setShowArrow(false) : setShowArrow(true);
		});
	});
	return (
		<>
			<SplashPage>
				<SplashContainer>
					<Logo src="https://via.placeholder.com/250x100" />
					<IntroHeader>Hello</IntroHeader>
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
			</SplashPage>
			<ScrollArrow
				animate={{ y: [0, 10], opacity: showArrow ? 0 : 1 }}
				transition={{ duration: 1 }}
			>
				<CgArrowDown />
			</ScrollArrow>
		</>
	);
};

export default Splash;
