import React from 'react';
import styled from 'styled-components';
import heartUrl from '../../static/icons/heart.png';
import Section from '../../components/Section';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: white;
    font-size: 14px;
    width: 100%;
`;
const Heart = styled.div`
    display: inline-block;
    margin: 0 5px;
    width: 18px;
    height: 18px;
    background-image: url(${heartUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`;
const Text = styled.div`
    display: flex;
    align-items: center;
`;
const Link = styled.a`
    color: white;
    text-decoration: none;
    margin: 0 5px;
    color: #f8c408;
`;

const date = new Date();

export default params => (
    <Section id='copyrites' bgColor='#353535'>
        <Wrapper>
            <Text>
                Сделано с <Heart /> by<Link href='https://github.com/sviperm'>sviperm</Link>
            </Text>
            <Text>
                Иконки за автороством
                <Link href='https://www.flaticon.com/authors/eucalyp' title='Eucalyp'>
                    Eucalyp
                </Link>
            </Text>
            <Text>{date.getFullYear() === 2020 ? '2020 г.' : `2020 - ${date.getFullYear()} гг.`} </Text>
        </Wrapper>
    </Section>
);
