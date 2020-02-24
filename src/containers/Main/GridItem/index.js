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
    &:hover {
        transform: scale(1.05);
    }
`;
const Text = styled(StyledText)`
    color: #646464;
`;

export default ({ icon, title, text }) => (
    <ItemWrapper>
        <IconSquare icon={icon} />
        <StyledTextWrapper>
            <StyledTitle>{title}</StyledTitle>
            <Text>{text}</Text>
        </StyledTextWrapper>
    </ItemWrapper>
);
