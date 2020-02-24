import React from 'react';
import styled from 'styled-components';

const Chain = styled.ul`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 225px;
    margin-right: -40px;
`;

const Line = styled.div`
    position: absolute;
    width: 5px;
    height: 90%;
    background-color: gray;
    left: -27px;
`;

const Text = styled.li`
    position: relative;
    margin-bottom: 50px;
    cursor: default;
    &:hover {
        font-weight: 500;
    }
    &::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -40px;
        width: 30px;
        height: 30px;
        background-color: #f8c408;
        border-radius: 50%;
    }
`;

export default ({ list = [] }) => (
    <Chain>
        <Line />
        {list.map((text, i) => (
            <Text key={i}>{text}</Text>
        ))}
    </Chain>
);
