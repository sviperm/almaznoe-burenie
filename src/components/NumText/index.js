import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
    display: grid;
    grid-template-columns: 50px auto;
    grid-template-rows: 50px;
    column-gap: 20px;
    justify-items: start;
    align-items: center;
`;
const Number = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8c408;
    color: white;
    width: 50px;
    border-radius: 50%;
    height: 50px;
    font-size: 24px;
    font-weight: 500;
    transition: all 0.5s ease-in-out;
    ${Wrapper}:hover & {
        box-shadow: 0 0 9px -3px black;
    }
`;

export default ({ num, children }) => (
    <Wrapper>
        <Number>{num}</Number>
        <div>{children}</div>
    </Wrapper>
);
