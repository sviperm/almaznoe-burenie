import React from 'react';
import styled from 'styled-components';
import { LeftTopCorner, BottomRightCorner } from '../Corners';
import ImageGallery from 'react-image-gallery';

const Gallery = styled.div`
    position: relative;
    padding: 25px;
    width: 100%;
`;

export default ({ images }) => (
    <Gallery>
        <LeftTopCorner />
        <BottomRightCorner />
        <ImageGallery items={images} lazyLoad showPlayButton={false} />
    </Gallery>
);

// autoPlay
