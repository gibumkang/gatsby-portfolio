import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const About = styled.div`
	max-width: 60rem;
	p {
		font-size: 1.7rem;
	}
`;

const about = () => {
	return (
		<About>
			<h2>Thanks again for stopping by.</h2>
			<p>
				I have been developing websites for over ten years, with humble beginnings as a
				email specialist. Little did I know that wrangling HTML tables and running countless
				litmus tests would be the start of my digital journey as a frontend developer.
			</p>
			<p>
				I consider myself very fortunate to be doing what I do, designing and developing for
				the web. Though it seems most developers prefer not to design and vice versa, I
				can't help but enjoy both worlds. From the prototyping process in Sketch to
				finalizing my code for deployment, the sheer amount of building a complete website
				is challenging, yet rewarding.
			</p>
			<p>I am currently an MBA/MIS student at UNLV, set to graduate in 2022.</p>
			<p>
				If you need to contact me, please email me at{' '}
				<a href="mailto:hello@benjaminkang.com">hello@benjaminkang.com</a>.
			</p>
		</About>
	);
};

export default about;
