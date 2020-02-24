import React from 'react';
import styled from 'styled-components';

const Square = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s ease-in-out;
`;
const BgSquare = styled(Square)`
    background-color: #fdf0bf;
`;
const IconSquare = styled(Square)`
    background-color: #f8c408;
`;
const Icon = styled.img`
    width: 100%;
    height: 100%;
    padding: 20%;
`;
const StyledWrapper = styled.div`
    position: relative;
    min-height: ${props => (props.size === 'l' ? '220px' : '110px')};
    min-width: ${props => (props.size === 'l' ? '220px' : '110px')};

    ${Square} {
        height: ${props => (props.size === 'l' ? '200px' : '100px')};
        width: ${props => (props.size === 'l' ? '200px' : '100px')};
    }
    ${IconSquare} {
        top: ${props => (props.size === 'l' ? '20px' : '10px')};
        left: ${props => (props.size === 'l' ? '20px' : '10px')};
    }
    ${props =>
        props.size === 'l'
            ? `@media (max-width: 850px) {
                    & {
                        display: none;
                    }
                }`
            : ''}
`;
const AnimatedWrapper = styled(StyledWrapper)`
    &:hover ${BgSquare}, &:hover ${IconSquare} {
        top: ${props => (props.size === 'l' ? '10px' : '5px')};
        left: ${props => (props.size === 'l' ? '10px' : '5px')};
    }
`;

export default ({ icon, size, mergeOnHover }) => {
    const Wrapper = mergeOnHover ? AnimatedWrapper : StyledWrapper;
    return (
        <Wrapper size={size}>
            <BgSquare />
            <IconSquare>
                <Icon src={icon} />
            </IconSquare>
        </Wrapper>
    );
};
