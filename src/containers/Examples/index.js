import React from 'react';
import Section from '../../components/Section';
import Title from '../../components/Title';
import Gallery from '../../components/Gallery';
import drill_1 from '../../static/images/examples/originals/drill_1.jpg';
import drill_2 from '../../static/images/examples/originals/drill_2.jpg';
import drill_3 from '../../static/images/examples/originals/drill_3.jpg';
import drill_4 from '../../static/images/examples/originals/drill_4.jpg';
import drill_5 from '../../static/images/examples/originals/drill_5.jpg';
import drill_1_tn from '../../static/images/examples/thumbnails/drill_1_tn.jpg';
import drill_2_tn from '../../static/images/examples/thumbnails/drill_2_tn.jpg';
import drill_3_tn from '../../static/images/examples/thumbnails/drill_3_tn.jpg';
import drill_4_tn from '../../static/images/examples/thumbnails/drill_4_tn.jpg';
import drill_5_tn from '../../static/images/examples/thumbnails/drill_5_tn.jpg';

const images = [
    {
        original: drill_1,
        thumbnail: drill_1_tn,
        thumbnailClass: 'thumbnail',
    },
    {
        original: drill_2,
        thumbnail: drill_2_tn,
        thumbnailClass: 'thumbnail',
    },
    {
        original: drill_3,
        thumbnail: drill_3_tn,
        thumbnailClass: 'thumbnail',
    },
    {
        original: drill_4,
        thumbnail: drill_4_tn,
        thumbnailClass: 'thumbnail',
    },
    {
        original: drill_5,
        thumbnail: drill_5_tn,
        thumbnailClass: 'thumbnail',
    },
];

export default () => (
    <Section id='examples'>
        <Title>Примеры работ</Title>
        <Gallery images={images} />
    </Section>
);
