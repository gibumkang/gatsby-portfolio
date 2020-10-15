import styled from "styled-components"
import { motion } from "framer-motion"

export const Portfolio = styled.div`
    text-align: left;
    background: #f1f1f1;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PortfolioContainer = styled.div`
    padding: 0 rem ${props => props.theme.padding};
    width: 60rem;
    color: red;
`