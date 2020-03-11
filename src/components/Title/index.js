import styled from 'styled-components';

const Title = styled.h1`
    margin-bottom: 50px;
    text-align: center;
    font-weight: 500;
    font-size: 48px;
    line-height: 57px;
    text-transform: uppercase;
    text-shadow: 2px 2px #f8c408;

    @media (max-width: 750px) {
        & {
            margin-bottom: 25px;
            font-size: 30px;
            line-height: 35px;
        }
    }
`;

export default Title;
