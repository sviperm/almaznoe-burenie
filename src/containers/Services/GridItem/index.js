import React from 'react';
import styled from 'styled-components';
import {
    StyledItemWrapper,
    StyledTextWrapper,
    StyledTitle,
    StyledText,
} from '../../../components/IconTextItem';
import IconSquare from '../../../components/IconSquare';

const ItemWrapper = styled(StyledItemWrapper)`
    ${props => (props.reversed ? 'flex-direction: row-reverse;' : '')}
`;

const TextWrapper = styled(StyledTextWrapper)`
    @media (max-width: 850px) {
        & {
            padding: 0 !important;
        }
    }
`;

export default ({ icon, title, text, reversed }) => (
    <ItemWrapper reversed={reversed}>
        <IconSquare icon={icon} size='l' mergeOnHover />
        <TextWrapper>
            <StyledTitle>{title}</StyledTitle>
            <StyledText>{text}</StyledText>
        </TextWrapper>
    </ItemWrapper>
);
