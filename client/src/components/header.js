import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';

const Menu = styled(motion.div)`
	color: #001;
	font-size: 2rem;
`;

const Header = () => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return <Menu>{data.site.siteMetadata.title}</Menu>;
};

export default Header;
