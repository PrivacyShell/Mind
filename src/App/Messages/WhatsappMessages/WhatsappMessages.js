import React, { Fragment } from 'react';
import styled from 'styled-components';

import data from '../../../data/data.json';

const AllMessagesContainer = styled.div`
    
`;

const MainMessagesContainer = styled.div`
    display: flex;
    /* justify-content: space-between; */
    color: #fff;
    padding: 20px 0;
    border-bottom: 1px solid #fff;
`;

const Body = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-self: flex-start;
    font-size: 1.6rem;
`;

const Sender = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.6rem;
`;

const Type = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.6rem;
`;

const Date = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.6rem;
`;

const SenderContainer = styled.div`
    width: 25%;
    margin-left: 20px;
`;

const BodyContainer = styled.div`
    width: 35%;
`;

const TypeContainer = styled.div`
    width:20%;
    margin-left: 50px;
`;

const DateContainer = styled.div`
    width: 20%;
    display: flex;
    justify-content: flex-end;
`;

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

const emails = data[0].applications.email;
const whatsapp = data[0].applications.whatsapp;
const telegram = data[0].applications.telegram;
const skype = data[0].applications.skype;

const messages = emails.concat(whatsapp, telegram, skype);

const Whatsapp = () => {
    return whatsapp.map(item => {
        console.log(item)
        return (
            <AllMessagesContainer>
                <MainMessagesContainer>
                    <i class="far fa-plus-square"></i>
                    <SenderContainer>
                        <Sender>{item.sender}</Sender>
                    </SenderContainer>
                    <BodyContainer>
                        <Body>{item.body}</Body>
                    </BodyContainer>
                    <TypeContainer>
                        <Type>{item.type}</Type>
                    </TypeContainer>
                    <DateContainer>
                        <Date>{item.sentDate}</Date>
                    </DateContainer>
                </MainMessagesContainer>
            </AllMessagesContainer>
        )  
    })
}

const WhatsappMessages = () => {
    return (
        <MessagesContainer>
            <HeaderContainer>
                <HeaderSubContainer>
                    <HeaderTitle>Whatsapp Pending</HeaderTitle>
                    <HeaderDesc>Priority</HeaderDesc>
                </HeaderSubContainer>
            </HeaderContainer>
            <MainContainer>
                <Whatsapp />
            </MainContainer>
        </MessagesContainer>
    ) 
}

export default WhatsappMessages;
