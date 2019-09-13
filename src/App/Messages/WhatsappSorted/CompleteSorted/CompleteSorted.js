import React, { Component } from 'react';
import styled from 'styled-components';

import data from '../../../../data/data.json';
import Range from '../../../Range';

const InfoContainer = styled.div`
    width: 45%;
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
    width: 800px;
`;

const InfoSection = styled.div`
    display: flex;
    justify-content: space-between; 
    min-width: 820px;
`;

const emails = data[0].applications.email;
const whatsapp = data[0].applications.whatsapp;
const telegram = data[0].applications.telegram;
const skype = data[0].applications.skype;

const messages = emails.concat(whatsapp, telegram, skype);

class CompleteSorted extends Component {
        
    render() {
        return whatsapp.map( item => {
            if(item.id === this.props.id) {
                return (
                    <InfoSection>
                        <InfoContainer>
                            <Heading>Message</Heading>
                            <Message>{item.body}</Message>
                        </InfoContainer>
                    </InfoSection>
                )
            }
        })
      }
}
    


export default CompleteSorted;
