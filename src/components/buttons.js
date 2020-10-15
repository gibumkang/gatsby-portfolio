import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link as GatsbyLink } from 'gatsby';

export const Button = styled(motion.custom(GatsbyLink))`
    border: 1px solid red;
    margin: 1.5rem 0rem;
    display: block;
    padding: 1rem;
    text-align: center;
    max-width: 15rem;
`