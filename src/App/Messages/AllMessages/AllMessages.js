import React, { Fragment } from 'react';
import styled from 'styled-components';

import data from '../../../data/data.json';

const AllMessagesContainer = styled.div`

`;

const MainContainer = styled.div`
    display: flex;
    color: #fff;
    padding: 20px 0;
    border-bottom: 1px solid #fff;
`;


const emails = data[0].applications.email;
const whatsapp = data[0].applications.whatsapp;
const telegram = data[0].applications.telegram;
const skype = data[0].applications.skype;

const messages = emails.concat(whatsapp, telegram, skype);

const AllMessages = () => {
    return messages.map(item => {
        console.log(item)
        return (
            <AllMessagesContainer>
                <MainContainer>
                    <i class="far fa-plus-square"></i>
                    <h2>{item.sender}</h2>
                </MainContainer>
            </AllMessagesContainer>
        )  
    })

}

export default AllMessages;
