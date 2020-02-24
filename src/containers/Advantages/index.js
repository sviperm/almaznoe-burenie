import React from 'react';
import styled from 'styled-components';
import Section from '../../components/Section';
import Title from '../../components/Title';
import StyledGrid from '../../components/Grid';
import NumText from '../../components/NumText';

const advantages = [
    'Опыт работы более 10 лет',
    'Гарантия качества',
    'Выезд в день обращения',
    'Работаем в выходные',
    'Скидки от объемов',
    'Удобные сроки',
];

const Grid = styled(StyledGrid)`
    grid-template-columns: repeat(3, 180px);
    grid-template-rows: repeat(2, 1fr);
    gap: 50px;

    @media (max-width: 650px) {
        & {
            grid-template-columns: repeat(2, 170px);
            grid-template-rows: repeat(3, 1fr);
        }
    }
    @media (max-width: 400px) {
        & {
            grid-template-columns: repeat(1, 180px);
            grid-template-rows: repeat(4, 1fr);
        }
    }
`;

export default () => (
    <Section id='advantages' bgColor='#fdf0bf'>
        <Title>Наши приемущества</Title>
        <Grid>
            {advantages.map((text, i) => (
                <NumText key={i} num={i + 1}>
                    {text}
                </NumText>
            ))}
        </Grid>
    </Section>
);
