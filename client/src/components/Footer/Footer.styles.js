import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

export const footerVariants = {
	initial: {
		y: 100,
	},
	animate: {
		y: 0,
	},
	exit: {
		y: 100,
	},
};

export const MainFooter = styled(motion.footer)`
	font-size: 1.5rem;
	position: fixed;
	bottom: 0rem;
	padding: 1rem;
	text-align: center;
	color: #777;
	width: 100%;
	background: #fff;
	border-top: 0.1rem solid #eee;
	span {
		white-space: nowrap;
	}
`;
