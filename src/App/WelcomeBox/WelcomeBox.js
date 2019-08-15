import React from 'react';
import styled from 'styled-components';

import data from '../../data/data.json';

const WelcomeBoxContainer = styled.div`
    width: 550px;
    height: auto;
    background-color: #1E2330;
    padding: 30px;
    border-radius: 0px 34px 0px 34px;
    box-shadow: 4px 4px 9px 0px rgba(0,0,0,0.75);
`;

const Header =styled.h2`
    font-size: 4rem;
    color: #fff;
    text-transform: uppercase;
`;

const Subheader =styled.h2`
    font-size: 2rem;
    color: #fff;
`;

const WelcomeBox = () => {
    return data.map(item => {
        if(item.id === "63826-bsjue-h4i8s")
        return (
            <WelcomeBoxContainer>
                <Header>Welcome {item.firstName}!</Header>
                <Subheader>Have a wonderful day.</Subheader>
            </WelcomeBoxContainer>
        )
    })
}

export default WelcomeBox;