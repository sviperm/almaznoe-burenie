import React from 'react';
import styled from 'styled-components';

const NavLink = styled.a`
    padding: 5px 10px;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 21px;
    color: black;
    text-decoration: none;
    transition: all 0.5s ease-in-out;
    border-radius: 15px;
    &:hover {
        background-color: #f8c408;
    }
    ${props => (props.bordered ? 'border: 1px solid #f8c408;' : '')}
`;

export default ({ bordered = false, href, children }) => (
    <NavLink bordered={bordered} href={href}>
        {children}
    </NavLink>
);
