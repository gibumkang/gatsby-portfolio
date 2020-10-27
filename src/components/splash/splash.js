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
					<IntroHeader>
					Hello, my name is Benjamin Kang and I am a UX/UI Developer.
					I create interactive web experiences in Sketch &amp; HTML/CSS/JS.
					This is a JAMstack website built on Gatsby, React, and Strapi.
					</IntroHeader>
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
