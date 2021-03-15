import styled from '@emotion/styled';
import React from 'react';

const Content = styled.div`
    min-height: 100vh;
    display: grid;       
`; 

const Header = styled.header`
    background-color: green;
    text-align: center;
    grid-column: 1 / span 6;
    grid-row: 1;
`;
const Menu = styled.div`
    background-color:blue;
    text-align:center;
    grid-column: 1/ span 2;
    grid-row: 2;
    grid-template-columns:1fr;
    grid-template-rows:1fr 1fr;
    min-height: 100%;
    display: grid;
`;

const Main = styled.div`
    background-color:red;
    text-align:center;
    grid-column: 3/ span 3;
    grid-row: 2/ span 2;
`;
const Ad = styled.div`
    background-color:purple;
    text-align: center;
    grid-column: 1/ span 2;
    grid-row: 3;
`;
const Footer = styled.footer`
    background-color:pink;
    text-align:center;
    grid-column: 1 / span 6;
    grid-row: 4;
`;

const Menuup = styled.div`
    background-color:yellow;
    text-align:center;
    grid-column: 1 / span 3;
    grid-row: 1;
`;
const Menudown = styled.div`
    background-color:blue;
    text-align:center;
    grid-column: 1 / span 3;
    grid-row: 2 / span 4;
`;
export default function App(){

    
    return(
        <Content>
            <Header>Header</Header>
            <Menu>
                <Menuup>Menu up</Menuup>
                <Menudown>Menu down</Menudown>
            </Menu>
            <Ad>Ad</Ad>
            <Main>Main</Main>
            <Footer>Footer</Footer>
        </Content>
    );
}