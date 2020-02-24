import React from 'react';
import Section from '../../components/Section';
import Title from '../../components/Title';
import Chain from '../../components/Chain';

const list = [
    'Заявка',
    'Бесплатная консультация',
    'Обсуждение стоимости',
    'Выезд на объект',
    'Выполнение работы',
    'Сдача объекта',
    'Оплата по окончанию работ',
];

export default () => (
    <Section id='how-we-work'>
        <Title>Как мы работаем</Title>
        <Chain list={list} />
    </Section>
);
