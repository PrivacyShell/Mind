import React, { Fragment } from 'react';
import styled from 'styled-components';

import AllMessages from './AllMessages';
import SkypeMessages from './SkypeMessages';

const MessagesContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: 30px;
    background-color: #1E2330;
    padding: 30px;
    border-radius: 34px 34px 0px 0px;
    box-shadow: 4px 4px 9px 0px rgba(0,0,0,0.75);
    position: relative;
`;

const HeaderContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #10151C;
    border-radius: 34px 34px 0px 0px;
`;

const HeaderSubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
`;

const HeaderTitle = styled.h2`
    color: #fff;
    text-transform: capitalize;
    font-size: 2rem;
`;

const HeaderDesc = styled.h2`
    color: #fff;
    text-transform: uppercase;
    font-size: 2rem;
`;

const MainContainer = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
`;

const Messages = () => {
    return (
        <MessagesContainer>
            <HeaderContainer>
                <HeaderSubContainer>
                    <HeaderTitle>Pending</HeaderTitle>
                    <HeaderDesc>Priority</HeaderDesc>
                </HeaderSubContainer>
            </HeaderContainer>
            <MainContainer>
                {/* <AllMessages /> */}
            </MainContainer>
        </MessagesContainer>
    ) 
}

export default Messages;