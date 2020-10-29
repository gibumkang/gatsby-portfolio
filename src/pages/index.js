import React from "react"
import SEO from "../components/seo"
import Splash from "../components/splash"
import Layout from "../layouts/"
import "../styles/global.scss"

const IndexPage = () => {

	return (
		<Layout>
			<SEO title="Home" />
			<Splash />
		</Layout>
	)
}

export default IndexPage
