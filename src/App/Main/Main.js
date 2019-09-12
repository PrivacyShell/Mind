import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import data from '../../data/data.json';
import '../../shared/styles/main.css';
import logo from '../../shared/images/logo.png';

import AllMessages from '../Messages/AllMessages';
import EmailMessages from '../Messages/EmailMessages';
import Rewards from '../Rewards';
import Sidebar from '../Sidebar/Sidebar';
import WelcomeBox from '../WelcomeBox/WelcomeBox';
import Messages from '../Messages/Messages';
import SkypeMessages from '../Messages/SkypeMessages';
import TelegramMessages from '../Messages/TelegramMessages/index.js';
import WhatsappMessages from '../Messages/WhatsappMessages/WhatsappMessages.js';

const SidebarMenu = styled.div`
    width: 280px;
    position: fixed;
    background-color: #10151C;
    color: #fff;
    height: 100vh;
    box-shadow: 4px 0px 9px 0px rgba(0,0,0,0.75);
`;

const SidebarButtonContainer = styled.div`
    background-color: #1E2330;
    margin: 30px 0;
`;

const SidebarButton = styled.button`
    color: #fff;
    text-transform: capitalize;
    font-family: 'PT Sans', sans-serif;
    font-size: 2.4rem;
    padding: 20px;
    display: flex;
    flex-direction: column;

    :hover {
        color: #247D74;
    }
`;

const SecondarySidebarListButton = styled.button`
    color: #fff;
    font-family: 'PT Sans', sans-serif;
    font-size: 2rem;
    padding: 10px 0 10px 80px;
    text-transform: capitalize;
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;

    :hover {
        background: #247D74;
    }
`;

const SidebarListButton = styled.button`
    color: #fff;
    font-family: 'PT Sans', sans-serif;
    font-size: 2rem;
    padding: 10px 0 10px 40px;
    text-transform: capitalize;
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;

    :hover {
        background: #247D74;
    }
`;

const Logo = styled.div`
    img {
        width: 100%;
    }
`;

const MainContainer = styled.div`
    margin-left: 340px;
    width: 68.5%;
    padding-top: 30px;
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

class Main extends Component {
    constructor () {
        super()
  
        this.state = {
            dropdownOpen: false,
            secondaryDropdown: false,
            rewardsOpen: false ,
            currentScreen: ''
        };
    }

    getScreen(currentScreen) {
        const screens =  {
            screen1: <AllMessages />,
            screen2: <Rewards />,
            screen3: <SkypeMessages />,
            screen4: <EmailMessages />,
            screen5: <TelegramMessages />,
            screen6: <WhatsappMessages />
        };
        return screens[currentScreen];
    }

    // toggleScreen(currentScreen) {
    //     this.setState({ currentScreen });
    //   }

    toggleScreen = (currentScreen) => {
        this.setState({ currentScreen });
    }

    // handleRewards = () => {
    //     this.setState({
    //         rewardsOpen: !this.state.rewardsOpen
    //     })
    // }

    toggleDropdown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    toggleSecondaryDropdown = (e) => {
        const { id } = e.target;
        console.log(id, "iiid")
        this.setState({
            secondaryDropdown: !this.state.secondaryDropdown
        })
    }

    // showRewards = () => {
    //     if(this.state.rewardsOpen) {
    //         return (
    //             <Rewards />
    //         )
    //     }
    // }

    showDropdown = () => {
        const userOneApplications = Object.keys(data[0].applications);

        if(this.state.dropdownOpen) {
            return userOneApplications.map( (item, id) => {
                console.log(id, "item")
                return (
                    <div>
                        <SidebarListButton onClick={this.toggleSecondaryDropdown}>{item}<i class="fas fa-chevron-down"></i></SidebarListButton>
                        {item === "email" ? this.showSecondaryDropdown() : ''}
                    </div>
                )
            })
        }

        return '';
    }

    showSecondaryDropdown = () => {
        const userOneApplications = Object.keys(data[0].applications);
        console.log(data[0].applications, "hello")

        if(this.state.secondaryDropdown) {
            return (
                <div>
                    <SecondarySidebarListButton onClick={this.toggleSecondaryDropdown}>Sorted<i class="fas fa-chevron-down"></i></SecondarySidebarListButton>
                    <SecondarySidebarListButton onClick={this.toggleSecondaryDropdown}>Pending<i class="fas fa-chevron-down"></i></SecondarySidebarListButton>
                </div>
            ) 
        }

        return '';
    }

    render() {
        return (
            <Fragment>
                <SidebarMenu>
                    <Logo>
                        <img src={logo} alt="mind logo"/>
                    </Logo>
                    {/* <SidebarButtonContainer>
                        <SidebarButton onClick={this.handleRewards}>My rewards</SidebarButton>
                    </SidebarButtonContainer> */}
                    <Sidebar toggleScreen={this.toggleScreen} />
                    {/* <SidebarButtonContainer>
                        <SidebarButton onClick={this.toggleDropdown}>Applications</SidebarButton>
                        {this.showDropdown()}
                    </SidebarButtonContainer> */}
                </SidebarMenu>
                <MainContainer>
                    <TopContainer>
                        <WelcomeBox />
                        <i class="fas fa-cog fa-3x"></i>
                    </TopContainer>
                    {/* <Messages /> */}
                    {/* {this.showRewards()} */}
                    <div>
                        {this.getScreen(this.state.currentScreen)}
                    </div>
                </MainContainer>
            </Fragment>
        )
    }
}

export default Main;