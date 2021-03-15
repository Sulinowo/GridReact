import styled from '@emotion/styled';
import React from 'react';
import Animate from 'animate.css-react'
import 'animate.css/animate.css'

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
    grid-template-areas:
    'animacja';
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
    grid-area: main;
    text-align:center;

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
const Animacja = styled.div`
    grid-area: animacja;
    top:35%;
    left:30%;
    position:relative;
    float:left;
    font-size:1.8em;
    font-family:"Courier New", monospace;
    background-color:green;    
    & > span {      
        position:absolute;
        top:0;
        right:0;
        height:100%;
        background-color:green;
        border-left:1px solid transparent;
        -webkit-animation:pisz 8s steps(11,start) infinite, znak 1s step-end infinite;
    }
    @-webkit-keyframes pisz
    {
        0% { width:100%; }
        100% { width:0; }
    }

    @-webkit-keyframes znak
    {
        0% { border-left-color:transparent; }
        50% { border-left-color:black; }
        100% { border-left-color:transparent; }
    }
`;
export default function App(){

    
    return(
        <Content>
            <Header><Animacja>Jakiś tekst<span></span></Animacja></Header>
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