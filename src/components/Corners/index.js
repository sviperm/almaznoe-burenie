import styled from 'styled-components';

const corner = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
`;

export const LeftTopCorner = styled(corner)`
    top: 0;
    left: 0;
    border-top: 8px solid #f8c408;
    border-left: 8px solid #f8c408;
`;

export const BottomRightCorner = styled(corner)`
    right: 0;
    bottom: 0;
    border-bottom: 8px solid #f8c408;
    border-right: 8px solid #f8c408;
`;
