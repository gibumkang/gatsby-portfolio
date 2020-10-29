import React, { useEffect, useState } from "react";
import splash from "../images/halls100.mp4";
import { Link as GatsbyLink } from 'gatsby';
import styled from "styled-components";
import { motion } from "framer-motion";

const parentVariant = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.5,
			when: "beforeChildren",
			delayChildren: .25,
			staggerChildren: .5,
		}
	},
	exit: {
		y: -500,
	}
}

const childVariant = {
	initial: {
		opacity: 0,
		y: 25,
	},
	animate: {
		opacity: .5,
		y: 0,
		transition: {
			duration: 1,
		}
	},
	hover: {
		y: -10,
		scale: 1.2,
		opacity: 1,
		transition: {
			duration: .5,
			ease: 'easeInOut',
		}
	}
}

const Splash = ({ props }) => {
	const [positionX, setPositionX] = useState(1);
	const [screenSize, setScreenSize] = useState(1);
	const [time, setTime] = useState(1);
	useEffect(() => {
		const size = window.innerWidth;
		//on resize
		window.addEventListener("resize", e => {
			setScreenSize(size);
		});
		//on mousemove
		window.addEventListener("mousemove", e => {
			const location = e.clientX;
			setPositionX(location);
		});
		//default
		setScreenSize(size);
		setTime(Math.ceil((positionX * 60) / screenSize));
		document.querySelector("#video").currentTime = time;
		console.log(`time: ${time}`);
	}, [positionX, screenSize, time]);

	useEffect(() => {
		positionX === 1 ? document.querySelector("#video").play() : document.querySelector("#video").pause();
	}, [positionX])

	return (
		<>
			<SplashPage>
				<SplashContainer
					variants={parentVariant}
					initial="initial"
					animate="animate"
					exit="exit"
				>
					<IntroHeader>
						My name is Benjamin Kang and I am a UX/UI Developer.
					</IntroHeader>
					<LinkContainer>
						<LinkList>
							<LinkItem whileHover="hover" variants={childVariant}><MotionLink to="/portfolio">Portfolio</MotionLink></LinkItem>
							<LinkItem whileHover="hover" variants={childVariant}><MotionLink to="/blog">Blog</MotionLink></LinkItem>
							<LinkItem whileHover="hover" variants={childVariant}><MotionLink to="/about">About Me</MotionLink></LinkItem>
						</LinkList>
					</LinkContainer>
				</SplashContainer>
			</SplashPage>
			<SplashVideo src={splash} id="video" muted loop />
			<p>{`Position: ${positionX} Screensize: ${screenSize} Window%: ${Math.ceil(
				(positionX * 100) / screenSize
			)}`}</p>
		</>
	);
};

const LinkContainer = styled(motion.div)`
	position: absolute;
	bottom: 0;
	width: 100%;
	left: 0;
	z-index: 2;
`

const MotionLink = styled(motion.custom(GatsbyLink))`
	color: #fff;
	&:hover {
		cursor: pointer;
	}
`

const LinkList = styled(motion.div)`
	display: flex;
`

const LinkItem = styled(motion.div)`
	flex: 1;
	color: #fff;
	font-size: 2rem;
	font-weight: bold;
	letter-spacing: .3rem;
	text-transform: uppercase;
	padding: ${props => props.theme.padding};
`

const SplashPage = styled.div`
	text-align: left;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
`;

const SplashVideo = styled.video`
	width: 100vw;
	height: 100vh;
	background: #999;
	object-fit: cover;
	position: asbolute;
	top: 0;
`;

const SplashContainer = styled(motion.div)`
	padding: 0rem ${props => props.theme.padding};
	text-align: center;
`;

const IntroHeader = styled(motion.h1)`
	text-align: center;
	padding-bottom: 1rem;
	color: #fff;
`;

export default Splash;