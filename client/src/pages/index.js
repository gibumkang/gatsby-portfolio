import React, { useState, useEffect } from 'react';
import SEO from '../components/seo';
import Splash from '../components/Splash';
import Layout from '../layouts/';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import Logo from '../assets/benjaminkang-2.svg';
import * as GS from '../styles/styles';
import Portfolio from '../components/Portfolio';

const IndexPage = () => {
	// const [hideLogo, setHideLogo] = useState(false);
	// useEffect(() => {
	// 	!hideLogo &&
	// 		setTimeout(() => {
	// 			setHideLogo(true);
	// 		}, 2000);
	// }, [hideLogo]);

	return (
		<Layout>
			<SEO title="Home" />
			<GS.IntroLogo>
				<Logo />
			</GS.IntroLogo>
			<Splash />
			<Portfolio />
			<Blog />
			<Footer />
		</Layout>
	);
};

export default IndexPage;
