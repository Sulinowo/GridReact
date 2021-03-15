import styled from '@emotion/styled';
import React from 'react';

const Content = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-areas:
    'header header header header header header'
    'menu menu main main main .'
    'ad ad main main main .'
    'footer footer footer footer footer footer';       
`; 

const Header = styled.header`
    background-color: green;
    text-align: center;
    grid-area: header;
`;
const Menu = styled.div`
    background-color:blue;
    text-align:center;
    grid-template-columns:1fr;
    grid-template-rows:1fr 1fr;
    min-height: 100%;
    display: grid;
    grid-area: menu;
    grid-template-areas:
    'menuup'
    'menudown';
`;

const Main = styled.div`
    background-color:red;
    text-align:center;
    grid-area: main;
`;
const Ad = styled.div`
    background-color:purple;
    text-align: center;
    grid-area: ad;
    
`;
const Footer = styled.footer`
    background-color:pink;
    text-align:center;
    grid-area: footer;
`;

const Menuup = styled.div`
    background-color:yellow;
    text-align:center;
    grid-area: menuup;
`;
const Menudown = styled.div`
    background-color:blue;
    text-align:center;
    grid-area: menudown;
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