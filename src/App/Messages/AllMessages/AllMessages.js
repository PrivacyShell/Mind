import React, { Component } from 'react';
import styled from 'styled-components';

import data from '../../../data/data.json';

import CompleteInfoAll from '../../Messages/AllMessages/CompleteInfo';

const AllMessagesContainer = styled.div`
    border-bottom: 1px solid #fff;
`;

const MainMessagesContainer = styled.div`
    display: flex;
    /* justify-content: space-between; */
    color: #fff;
    padding: 20px 0;
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

const BoxButtonContainer = styled.div`
    width: 20px;
`;


const BoxButton = styled.div`
    text-align: left;
`;


const Test = styled.div`
    /* width: 500px; */
`;

const emails = data[0].applications.email;
const whatsapp = data[0].applications.whatsapp;
const telegram = data[0].applications.telegram;
const skype = data[0].applications.skype;

const messages = emails.concat(whatsapp, telegram, skype);

const sorted = messages.sort(function(a, b) {
    return b - a;
});

class AllMessages extends Component {

    constructor (props) {
        super(props)
  
        this.state = {
            // id: '',
            type: '',
            boxOpen: false,
        };
    }

    handleBoxOpen(id, e) {
        // Do something with the id for example
        if (this.state[id]) {
            this.setState({
                [id]: false,
            })
        } else {
            this.setState({
                [id]: true,
            })
        }
        // old working solution
        // this.setState({ [id]: !this.state[id] });

        // Or
        // this.setState({ boxOpen: !this.state.boxOpen });
    }
        
        Messages = () => {
        return sorted.map((item, i) => {
            return (
                <AllMessagesContainer>
                    <MainMessagesContainer>
                        <BoxButtonContainer key={i} dataId={item.id}>
                            <BoxButton id={item.id} onClick={(e) => { this.handleBoxOpen(item.id, e); }}>
                                <i className="far fa-plus-square"></i>
                            </BoxButton>
                        </BoxButtonContainer>
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
                        <div>
                            { this.state[item.id] ? <Test><CompleteInfoAll id={item.id} /> </Test> : '' }
                        </div>
                </AllMessagesContainer>
            )  
        })
    }

    render(){
        return (
            <MessagesContainer>
                <HeaderContainer>
                    <HeaderSubContainer>
                        <HeaderTitle>All Pending</HeaderTitle>
                        <HeaderDesc>Priority</HeaderDesc>
                    </HeaderSubContainer>
                </HeaderContainer>
                <MainContainer>
                    {this.Messages()}
                </MainContainer>
            </MessagesContainer>
        ) 
    }
}

export default AllMessages;
