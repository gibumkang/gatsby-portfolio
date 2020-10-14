import styled from "styled-components"
import { motion } from "framer-motion"
export const Splash = styled.div`
	text-align: left;
	background: #eee;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`

export const SplashContainer = styled.div`
	padding: 0rem ${props => props.theme.padding};
`

export const Logo = styled.img``

export const Intro = styled.p`
	font-size: 2rem;
	max-width: 60rem;
`

export const Navigation = styled.ul`
	padding: 0;
`

export const NavItem = styled.li`
	display: inline;
	font-size: 1.6rem;
	padding-right: 0.75rem;
`

export const ScrollArrow = styled(motion.div)`
	position: absolute;
	bottom: 1rem;
	left: 50%;
	font-size: 2.5rem;
`
