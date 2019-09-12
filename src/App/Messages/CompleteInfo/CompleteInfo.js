import React, { Component } from 'react';
import styled from 'styled-components';

import data from '../../../data/data.json';
import Range from '../../Range';

const InfoContainer = styled.div`
`;

const Heading = styled.h2`
    color: #fff;
    font-size: 2rem;
    text-align: left;
    margin-top: 20px;
`;

const Message = styled.h2`
    color: #fff;
    font-size: 1.6rem;
    text-align: left;
    margin: 10px 0;
`;

const InfoSection = styled.h2`
    display: flex;
    justify-content: space-between;
`;

const emails = data[0].applications.email;
const whatsapp = data[0].applications.whatsapp;
const telegram = data[0].applications.telegram;
const skype = data[0].applications.skype;

const messages = emails.concat(whatsapp, telegram, skype);

class CompleteInfo extends Component {
        
    render() {
        return messages.map( item => {
            if(item.id === this.props.id) {
                return (
                    <InfoSection>
                        <InfoContainer>
                            <Heading>Message</Heading>
                            <Message>{item.body}</Message>
                        </InfoContainer>
                        <InfoContainer>
                            <Heading>Priority</Heading>
                            <Message><Range /></Message>
                        </InfoContainer>
                    </InfoSection>
                )
            }
        })
      }
}
    


export default CompleteInfo;
