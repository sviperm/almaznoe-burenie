import React from 'react';
import Section from '../../components/Section';
import Title from '../../components/Title';
import Gallery from '../../components/Gallery';
import drill_1_or from '../../static/images/examples/originals/drill_1.jpg';
import drill_2_or from '../../static/images/examples/originals/drill_2.jpg';
import drill_3_or from '../../static/images/examples/originals/drill_3.jpg';
import drill_4_or from '../../static/images/examples/originals/drill_4.jpg';
import drill_5_or from '../../static/images/examples/originals/drill_5.jpg';
import drill_1_th from '../../static/images/examples/thumbnails/drill_1.jpg';
import drill_2_th from '../../static/images/examples/thumbnails/drill_2.jpg';
import drill_3_th from '../../static/images/examples/thumbnails/drill_3.jpg';
import drill_4_th from '../../static/images/examples/thumbnails/drill_4.jpg';
import drill_5_th from '../../static/images/examples/thumbnails/drill_5.jpg';

const images = [
    {
        original: drill_1_or,
        thumbnail: drill_1_th,
        thumbnailClass: 'thumbnail',
    },
    {
        original: drill_2_or,
        thumbnail: drill_2_th,
        thumbnailClass: 'thumbnail',
    },
    {
        original: drill_3_or,
        thumbnail: drill_3_th,
        thumbnailClass: 'thumbnail',
    },
    {
        original: drill_4_or,
        thumbnail: drill_4_th,
        thumbnailClass: 'thumbnail',
    },
    {
        original: drill_5_or,
        thumbnail: drill_5_th,
        thumbnailClass: 'thumbnail',
    },
];

export default () => (
    <Section id='examples'>
        <Title>Примеры работ</Title>
        <Gallery images={images} />
    </Section>
);
