import styled from 'styled-components';

export default styled.section`
    position: relative;
    padding: 50px 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background-color: ${props => (props.bgColor ? props.bgColor : 'white')};
    ${props => (props.fit ? 'min-height: 100vh;' : '')}
    z-index: 0;

    @media (max-width: 1300px) {
        & {
            padding: 50px 100px;
        }
    }
    @media (max-width: 1100px) {
        & {
            padding: 50px;
        }
    }
    @media (max-width: 750px) {
        & {
            padding: 25px 5px;
        }
    }
`;
