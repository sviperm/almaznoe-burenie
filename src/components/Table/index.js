import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
    text-align: center;
`;
const HeaderText = styled.th`
    padding: 5px 10px;
    border-bottom: 4px solid #f8c408;
`;
const BodyRow = styled.tr`
    height: 50px;
    &:hover {
        background-color: #e9e9e9;
    }
`;
const Text = styled.td`
    font-size: 24px;
    border-bottom: 4px solid #f8c408;
`;

export default ({ table }) => (
    <Table>
        <thead>
            <tr>
                {table.header.map((text, i) => (
                    <HeaderText key={i}>{text}</HeaderText>
                ))}
            </tr>
        </thead>
        <tbody>
            {table.rows.map((row, i) => (
                <BodyRow key={i}>
                    {row.map((text, i) => (
                        <Text key={i}>{text}</Text>
                    ))}
                </BodyRow>
            ))}
        </tbody>
    </Table>
);
