import React from 'react';
import styled from 'styled-components';

const MainFooter = styled.footer`
	font-size: 1.5rem;
	position: fixed;
	bottom: 0rem;
	padding: 1rem;
	text-align: center;
	color: #777;
	width: 100%;
	background: #fff;
	border-top: 0.1rem solid #eee;
`;

const Footer = () => {
	return (
		<MainFooter>
			&copy; {new Date().getFullYear()} All Rights Reserved. Made with React, Gatsby, and
			Strapi.
		</MainFooter>
	);
};

export default Footer;
