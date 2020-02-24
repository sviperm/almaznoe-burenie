import React from 'react';
import styled from 'styled-components';
import NavLink from '../../../components/NavLink';

const links = [
    { href: '#services', text: 'Услуги' },
    { href: '#price', text: 'Цены' },
    { href: '#examples', text: 'Примеры' },
];

const Navbar = styled.nav`
    display: grid;
    column-gap: 10px;
    grid-template-columns: repeat(${links.length}, 1fr);
    justify-items: center;
`;

export default () => (
    <Navbar>
        {links.map(({ href, text }, i) => (
            <NavLink key={i} href={href}>
                {text}
            </NavLink>
        ))}
    </Navbar>
);
