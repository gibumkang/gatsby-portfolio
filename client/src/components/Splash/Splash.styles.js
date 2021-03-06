import styled from 'styled-components';
import { motion } from 'framer-motion';

export const introVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.5,
		},
	},
};

export const childVariants = {
	initial: {
		opacity: 0,
		y: -10,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: 'easeInOut',
		},
	},
};

export const Flex = styled.div`
	display: flex;
	height: ${props => props.size.height}px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const Container = styled(motion.div)`
	max-width: 100rem;
	margin: 0 auto;
	padding: 3rem;
	position: relative;
	p {
		padding: 3rem 0rem;
	}
`;

export const Animation = styled.div`
	width: 30rem;
	height: 30rem;
	border: 0.1rem solid teal;
	border-radius: 50%;
	position: absolute;
	bottom: -17rem;
	right: 6rem;
	z-index: 1;
	@media screen and (max-width: 60rem) {
		position: static;
		display: block;
		bottom: 5rem;
		margin: 3rem auto;
	}
`;

export const Navigation = styled(motion.ul)`
	list-style: none;
	li {
		display: inline;
		padding-right: ${props => props.theme.padding};
		font-size: 3rem;
		font-weight: bold;
		font-family: ${props => props.theme.fonts.header};
		@media screen and (max-width: 60rem) {
			margin: 2rem auto;
			text-align: center;
			display: block;
		}
	}
`;

export const Header = styled(motion.h1)`
	text-align: left;
	@media screen and (max-width: 60rem) {
		text-align: center;
	}
`;
export const Paragraph = styled(motion.p)`
	line-height: 3.5rem;
	max-width: 70rem;
	text-align: left;
	@media screen and (max-width: 60rem) {
		text-align: center;
	}
`;
