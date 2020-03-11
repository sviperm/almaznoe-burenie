import React from 'react';
import styled from 'styled-components';
import StyledSection from '../../components/Section';
import image from '../../static/images/background.jpg';
import StyledTitle from '../../components/Title';
import StyledGrid from '../../components/Grid';
import GridItem from './GridItem';
import wall from '../../static/icons/wall.svg';
import ruler from '../../static/icons/ruler.svg';
import cup from '../../static/icons/cup.svg';
import cleaning from '../../static/icons/cleaning.svg';

const items = [
    {
        icon: wall,
        title: 'Любой материал',
        text: 'Выполнение работ по алмазному бурению технологических отверстий в кирпиче, бетоне, асфальте и дереве',
    },
    {
        icon: ruler,
        title: 'Любые размеры',
        text: 'Технологические отверстия любых размеров, под все виды коммуникаций (вентиляция, сантехника, электричество и т.д.)',
    },
    {
        icon: cup,
        title: 'Гарантируем чистоту',
        text: 'Применяем пылесос и водосборное кольцо, обклеиваем стены целлофаном для чистоты помещения.',
    },
    {
        icon: cleaning,
        title: 'Уберем за собой',
        text: 'Бурение без пыли в помещениях с чистовой отделкой. Вывоз мусора',
    },
];

const Section = styled(StyledSection)`
    padding-top: 100px !important;
`;
const Title = styled(StyledTitle)`
    margin: 0;
`;
const BackgroundImage = styled.div`
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transform: scale(1.1);
    filter: blur(10px);
    z-index: -1;
`;
const Grid = styled(StyledGrid)`
    @media (max-width: 945px) {
        & {
            margin-top: 50px;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(4, 1fr);
            gap: 10px;
        }
    }
    @media (max-width: 750px) {
        & {
            margin: 0;
        }
    }
`;

export default () => (
    <Section id='main' fit>
        <BackgroundImage />
        <Title>
            Алмаз Основа
            <br />
            Алмазное бурение в казани
        </Title>
        <Grid>
            {items.map((props, i) => (
                <GridItem key={i} {...props} />
            ))}
        </Grid>
    </Section>
);
