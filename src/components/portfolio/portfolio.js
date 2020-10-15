import React from "react"
import {
	Portfolio,
	PortfolioContainer,
} from './styles'
import Button from '../buttons';
import { Controller, Scene } from 'react-scrollmagic';

const portfolio = () => {
	return (
		<Portfolio>
			<Controller>
				<Scene duration={200} indicators={true}>
					<PortfolioContainer>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
						libero cupiditate natus, debitis necessitatibus perspiciatis illum
						similique minima doloribus voluptatibus quam non dolorem sed modi
						nisi pariatur itaque. Quaerat, autem.
						<Button
							link="example"
							cta="Hello!"
						/>
					</PortfolioContainer>
				</Scene>
			</Controller>
		</Portfolio>
	)
}

export default portfolio
