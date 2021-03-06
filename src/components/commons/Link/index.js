/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import get from 'lodash/get'
import styled from 'styled-components'

const StyledLink = styled.a`
    color: inherit;
    ${({ theme, color }) => (color
        ? `color: ${get(theme, `colors.${color}.color`)}`
        : 'color: inherit;')};
        text-decoration: none;
        opacity: 1;
        transition: opacity ${({ theme }) => theme.transition};
    &:hover,
    &:focus {
        opacity: .5;
    }
`;

function Link({ href, children, ...props }) {
    return (
        <NextLink href={href} passHref>
            <StyledLink {...props}>
                {children}
            </StyledLink>
        </NextLink>
    );
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Link

