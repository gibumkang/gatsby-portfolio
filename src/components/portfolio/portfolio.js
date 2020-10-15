import React from "react"
import {
	Portfolio,
	PortfolioContainer,
} from './styles'
import {
	Button,
} from '../buttons';
import {Link} from 'gatsby';

const portfolio = () => {
	return (
		<Portfolio>
			<PortfolioContainer>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
				libero cupiditate natus, debitis necessitatibus perspiciatis illum
				similique minima doloribus voluptatibus quam non dolorem sed modi
				nisi pariatur itaque. Quaerat, autem.
				<Button>
					<Link to="/">Hello World!</Link>
				</Button>
			</PortfolioContainer>
		</Portfolio>
	)
}

export default portfolio
