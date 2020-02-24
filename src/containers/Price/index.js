import React from 'react';
import Section from '../../components/Section';
import Title from '../../components/Title';
import Table from '../../components/Table';

const table = {
    header: ['Диаметр, мм', 'Кирпич/бетон, руб/см', 'Железобетон, руб/см'],
    rows: [
        [62, 18, 20],
        [82, 20, 23],
        [102, 22, 25],
        [132, 27, 32],
        [152, 27, 32],
        [152, 29, 34],
        [182, 34, 38],
        [202, 35, 42],
        [252, 43, 52],
        [302, 54, 65],
    ],
};

export default () => (
    <Section id='price' bgColor='#f6f6f6'>
        <Title>Цены</Title>
        <Table table={table} />
    </Section>
);
