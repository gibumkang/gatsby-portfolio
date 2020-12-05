import styled from 'styled-components';
import { motion } from 'framer-motion';

export const portfolioVariants = {
	hover: {
		scale: 1.01,
		transition: { duration: 0.5 },
	},
	tap: {
		scale: 1,
		transition: { duration: 0.2 },
	},
};

export const Grid = styled.div`
	margin: 10rem auto;
	display: grid;
	max-width: 140rem;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 3rem;
	div {
		min-height: 40vh;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0rem 3rem;
		flex-direction: column;
		&:hover {
			cursor: pointer;
		}
	}

	transition: all 0.25s ease-in-out;
	@media screen and (max-width: 80rem) {
		display: block;
	}
`;

export const Full = styled(motion.div)`
	grid-area: 1 / 1 / 1 / 7;
	background: #ccc;
`;

export const LeftHalf = styled(motion.div)`
	grid-area: 2 / 1 / 6 / 4;
	background: red;
`;

export const RightHalf = styled(motion.div)`
	grid-area: 2 / 4 / 6 / 7;
	background: purple;
`;

export const Small = styled(motion.div)`
	grid-area: 6 / 1 / 6 / 3;
	background: pink;
`;
export const Wide = styled(motion.div)`
	grid-area: 6 / 3 / 6 / 7;
	background: brown;
`;
