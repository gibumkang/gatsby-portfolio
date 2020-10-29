import React from "react"
import SEO from "../components/seo"
import Splash from "../components/Splash"
import Layout from "../components/Layout"
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
