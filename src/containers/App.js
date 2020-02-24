import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import Advantages from './Advantages';
import Services from './Services';
import HowWeWork from './HowWeWork';
import Price from './Price';
import Examples from './Examples';

const App = styled.div`
    position: relative;
    width: 100%;
`;

export default () => (
    <App>
        <Header />
        <Main />
        <Services />
        <Advantages />
        <HowWeWork />
        <Price />
        <Examples />
    </App>
);
