import React, { useEffect, useState } from "react";
import { CgArrowDown } from "react-icons/cg";
import splash from '../../images/splash.mp4';
import {
	SplashPage,
	SplashContainer,
	Logo,
	Intro,
	Navigation,
	NavItem,
	IntroHeader,
	ScrollArrow,
	SplashVideo,
} from "./styles";

const Splash = ({ props }) => {
	const [positionX, setPositionX] = useState(1);
	const [screenSize, setScreenSize] = useState(1);
	const [time, setTime] = useState(1);
	useEffect(() => {
		window.addEventListener('resize', e => {
			const size = window.innerWidth;
			setScreenSize(size);
		});
		window.addEventListener("mousemove", e => {
			const location = e.clientX;
			setPositionX(location);
		})
		const size = window.innerWidth;
		setScreenSize(size);
		setTime(Math.ceil((positionX * 50)/screenSize));
		setInterval(() => {
			//document.querySelector('#video').currentTime = time;
			console.log(time);
		}, 1000)
	});
	return (
		<>
			<SplashVideo src={splash} id="video" />
			{/* <SplashPage>
				<SplashContainer>
					<Logo src="https://via.placeholder.com/250x100" />
					<IntroHeader>
					Hello, my name is Benjamin Kang and I am a UX/UI Developer.
					I create interactive web experiences in Sketch &amp; HTML/CSS/JS.
					This is a JAMstack website built on Gatsby, React, and Strapi.
					</IntroHeader>
				</SplashContainer>
			</SplashPage> */}
			<p>{`Position: ${positionX} Screensize: ${screenSize} Window%: ${Math.ceil((positionX * 50)/screenSize)}`}</p>
			<ScrollArrow
				transition={{ duration: 1 }}
			>
				<CgArrowDown />
			</ScrollArrow>
		</>
	);
};

export default Splash;
