import React from "react";
import styled from "@emotion/styled";

const Footer = styled.div`
	background: red;
	margin-top: 2rem;
`;

const footer = () => {
	return (
		<Footer>
			© {new Date().getFullYear()}, Wow! Built with
			{` `}
			<a href="https://www.gatsbyjs.com">Gatsby</a>
		</Footer>
	);
};

export default footer;
