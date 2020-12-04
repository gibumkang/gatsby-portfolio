import React, { useState, useEffect } from 'react';
import SEO from '../components/seo';
import Splash from '../components/Splash';
import Layout from '../layouts/';
import Footer from '../components/Footer';
import Logo from '../assets/benjaminkang-2.svg';
import * as GS from '../styles/styles';
import Portfolio from '../components/Portfolio';

const IndexPage = () => {
	const [hideLogo, setHideLogo] = useState(false);
	useEffect(() => {
		!hideLogo &&
			setTimeout(() => {
				setHideLogo(true);
			}, 3000);
	}, [hideLogo]);

	return (
		<Layout>
			<SEO title="Home" />
			{!hideLogo && (
				<GS.IntroLogo>
					<Logo />
				</GS.IntroLogo>
			)}
			{hideLogo && (
				<>
					<Splash />
					<Portfolio />
					<Footer />
				</>
			)}
		</Layout>
	);
};

export default IndexPage;
