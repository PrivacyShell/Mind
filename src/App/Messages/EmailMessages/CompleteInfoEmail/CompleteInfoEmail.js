import React, { Component } from 'react';
import styled from 'styled-components';

import data from '../../../../data/data.json';
import Range from '../../../Range';

const InfoContainer = styled.div`
    width: 45%;
`;

const InfoContainerAbove = styled.div`
    width: 45%;
    z-index: 100;
`;

const Heading = styled.h2`
    color: #fff;
    font-size: 2rem;
    text-align: left;
`;

const Message = styled.h2`
    color: #fff;
    font-size: 1.6rem;
    text-align: left;
    margin: 10px 0;
`;

const InfoSection = styled.div`
    display: flex;
    justify-content: space-between; 
    /* min-width: 820px; */
`;

const emails = data[0].applications.email;
const whatsapp = data[0].applications.whatsapp;
const telegram = data[0].applications.telegram;
const skype = data[0].applications.skype;

const messages = emails.concat(whatsapp, telegram, skype);

class CompleteInfoEmail extends Component {
        
    render() {
        return emails.map( item => {
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

export default CompleteInfoEmail;
