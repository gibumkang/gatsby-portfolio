import React from 'react';
import { Link } from 'gatsby';
import * as S from './Splash.styles';
import useWindowSize from '../../hooks/useWindowSize';

const INITIAL_STATE = {
	width: undefined,
	height: undefined,
};

const Splash = ({ props }) => {
	const size = useWindowSize(INITIAL_STATE);
	return (
		<S.Flex size={size}>
			<S.Container variants={S.introVariants} initial="initial" animate="animate">
				<S.Animation />
				<S.Header variants={S.childVariants}>
					I'm a UX Designer and Frontend Developer.
				</S.Header>
				<S.Paragraph variants={S.childVariants}>
					Thank you for taking the time to view my portfolio, where you will find some of
					my latest work. I also use this space to write about my work process, thoughts,
					and ideas. If you have any questions, feel free to contact me via email.
				</S.Paragraph>
				<S.Navigation variants={S.childVariants}>
					<li>Portfolio</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</S.Navigation>
			</S.Container>
		</S.Flex>
	);
};

export default Splash;
