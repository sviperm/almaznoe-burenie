import React from 'react';
import styled from 'styled-components';
import { WhatsappSquare } from 'styled-icons/fa-brands/WhatsappSquare'
import Navbar from './Navbar';
import NavLink from '../../components/NavLink';

const Header = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: #fdf0bf;
    box-shadow: 0 0 7px -3px black;
    z-index: 100;

    @media (max-width: 900px) {
        & {
            flex-direction: column;
            justify-content: space-evenly;
            height: 75px;
        }
    }
`;
const WhatsApp = styled(WhatsappSquare)`
    width: 30px;
    color: #00d200;
`;
const PhoneNumber = styled.div`
    display: flex;
    position: absolute;
    right: 15px;

    @media (max-width: 900px) {
        & {
            position: static;
        }
    }
`;

export default () => (
    <Header>
        <Navbar />
        <PhoneNumber>
            <a href="https://api.whatsapp.com/send?phone=+79656092724" style={{ marginRight: 10 }}>
                <WhatsApp />
            </a>
            <NavLink bordered href='tel:+79656092724'>
                +7 (965) 609 - 27 - 24
            </NavLink>
        </PhoneNumber>
    </Header>
);
