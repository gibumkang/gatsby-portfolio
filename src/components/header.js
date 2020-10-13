import { Link } from "gatsby";
import React from "react";

const Header = ({ siteTitle }) => (
	<header
		style={{
			background: `rebeccapurple`,
			marginBottom: `1.45rem`,
		}}
	>
		<h1>
			<Link
				to="/"
				style={{
					color: `white`,
					textDecoration: `none`,
				}}
			>
				{siteTitle}
			</Link>
		</h1>
	</header>
);

export default Header;
