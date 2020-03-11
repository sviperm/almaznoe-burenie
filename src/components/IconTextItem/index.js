import styled from 'styled-components';

export const StyledItemWrapper = styled.li`
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: white;
    transition: all 0.5s ease-in-out;

    @media (max-width: 450px) {
        & {
            padding: 10px;
        }
    }
`;

export const StyledTextWrapper = styled.div`
    padding: 0 25px;
`;
export const StyledTitle = styled.h3`
    display: inline-block;
    font-size: 16px;
    font-weight: normal;
    line-height: 21px;
    text-transform: uppercase;
    padding-bottom: 5px;
    margin-bottom: 5px;
    border-bottom: 3px solid #f8c408;
`;
export const StyledText = styled.p`
    font-size: 16px;
    line-height: 21px;
`;
