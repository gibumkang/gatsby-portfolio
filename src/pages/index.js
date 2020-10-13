import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Splash from "../components/splash"
import Header from "../components/header"
import Footer from "../components/footer"
import { useStaticQuery, graphql } from "gatsby"
import "../global/global.scss"

const IndexPage = () => {
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
		<>
			<Header siteTitle={data.site.siteMetadata.title || `Title`} />
			<SEO title="Home" />
			{/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
			<Splash />
			<Footer />
		</>
	)
}

export default IndexPage
