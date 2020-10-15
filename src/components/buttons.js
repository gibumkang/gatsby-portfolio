import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link as GatsbyLink } from 'gatsby';
import { BiRightArrow } from 'react-icons/bi';

const MyButton = styled(motion.custom(GatsbyLink))`
    border: .2rem solid red;
    margin: 2.5rem 0rem;
    display: block;
    padding: 1.5rem 1rem;
    text-align: center;
    max-width: 15rem;
    text-decoration: none;
    svg {
        font-size: 1.5rem;
        position: relative;
        bottom: .1rem;
    }
`

const Button = ({link, cta}) => {
    return (
        <MyButton to={link}>{cta} <BiRightArrow /></MyButton>
    )
}

export default Button;