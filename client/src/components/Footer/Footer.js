import React, { useEffect, useState } from 'react';
import * as S from './Footer.styles';
import { AnimatePresence } from 'framer-motion';

const Footer = () => {
	const [footer, setFooter] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY >= 600 ? setFooter(true) : setFooter(false);
		});
	});

	return (
		<>
			<AnimatePresence>
				{footer && (
					<S.MainFooter
						variants={S.footerVariants}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						&copy; {new Date().getFullYear()} All Rights Reserved.{' '}
						<span>Made with React, Gatsby, and Strapi.</span>
					</S.MainFooter>
				)}
			</AnimatePresence>
		</>
	);
};

export default Footer;
