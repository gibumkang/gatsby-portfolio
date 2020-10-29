import React from "react";
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { motion } from 'framer-motion';

const Header = () => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<Menu>{data.site.siteMetadata.title}</Menu>
	)
}

const Menu = styled(motion.div)`
	color: #fff;
	font-size: 5rem;
	position: absolute;
	right: 2rem;
	top: 2rem;
`

export default Header;
