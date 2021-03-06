import React from 'react';
import Section from '../../components/Section';
import Title from '../../components/Title';
import GridItem from './GridItem';
import calculating from '../../static/icons/calculating.svg';
import windowSvg from '../../static/icons/window.svg';
import vacuumCleaner from '../../static/icons/vacuum-cleaner.svg';

const list = [
    {
        icon: calculating,
        title: 'Технология алмазного бурения применяется',
        text: (
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>при монтаже в здании системами отопления, вентиляции, сантехники;</li>
                <li>алмазное сверление отверстия в бетоне в перекрытиях под стояки отопления;</li>
                <li>
                    алмазное сверление отверстия в бетоне для подключения различных отопительных приборов;
                </li>
                <li>алмазное сверление отверстия в бетоне для установки сантехнических приборов;</li>
                <li>алмазное сверление отверстий и проемы для трубной разводки;</li>
                <li>алмазное сверление отверстий в плоской кровле для монтажа внутренних стояков сливов;</li>
                <li>бурение отверстий для установки воздуховодов воздушного отопления и вентиляции;</li>
                <li>бурение отверстий под сантехнику (раковины, унитазы, беде, трапы, душевые);</li>
                <li>
                    бурение отверстий в фундаменте для подключения систем отопления и водоснабжения здания
                    канализации к городским магистралям;
                </li>
                <li>отверстия для монтажа систем пожаротушения;</li>
                <li>в наружных стенах для установки систем кондиционирования;</li>
                <li>для прокладки интернет сетей;</li>
            </ul>
        ),
    },
    {
        icon: windowSvg,
        title: 'Выпиливание/расширение оконных и дверных проемов',
        text: (
            <>
                Вас интересует расширение существующего проема? Хотите совместить комнату и балкон для
                увеличения жилой площади? Нет проблем: расширение проема и перепланировка
                <b>позволят сделать помещение максимально комфортным.</b> Резка осуществляется при помощи
                специального инструмента: бензореза (фирма Stihl) и стенорезки (фирма Hilti).
                <br />
                <br />
                Мы осуществляем расширение проемов с усилением при помощи швеллеров, металлических уголков и
                пластин. Работы по расширению проемов выполняются в строгом соответствии с правилами
                безопасности, быстро, качественно и надежно
            </>
        ),
    },
    {
        icon: vacuumCleaner,
        title: 'Применение водосборного кольца',
        text: (
            <>
                Водосборное кольцо предназначено для сбора воды и грязи при работах по сверлению отверстий в
                различных поверхностях. Применяют с целью
                <b>не допускания загрязнений мест обработки</b>, а также затопления нижних помещений.
            </>
        ),
    },
];

export default () => (
    <Section id='services'>
        <Title>Наши услуги</Title>
        <ul>
            {list.map((props, i) => (
                <GridItem key={i} reversed={!!(i % 2)} {...props} />
            ))}
        </ul>
    </Section>
);
