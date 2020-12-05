import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
	max-width: 142rem;
	margin: 0 auto;
	margin-bottom: 5rem;
`;

export const Header = styled.h2``;

export const Blog = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 1fr auto;
	& > div {
		margin: 0rem 1rem;
		img {
			width: 100%;
			display: block;
		}
	}
	@media screen and (max-width: 600px) {
		display: block;
		div {
			text-align: center;
		}
		img {
			max-width: 30rem;
			margin: 0 auto;
		}
	}
`;

export const Timestamp = styled.div`
	font-size: 1.5rem;
`;

export const Category = styled.div`
	font-size: 1.5rem;
	color: red;
`;

export const BlogImageOne = styled.div`
	grid-area: 1 / 1;
`;
export const BlogImageTwo = styled.div`
	grid-area: 1 / 2;
`;
export const BlogImageThree = styled.div`
	grid-area: 1 / 3;
`;

export const BlogContentOne = styled.div`
	grid-area: 2 / 1;
`;
export const BlogContentTwo = styled.div`
	grid-area: 2 / 2;
`;
export const BlogContentThree = styled.div`
	grid-area: 2 / 3;
`;
