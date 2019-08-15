import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import data from '../../data/data.json';
import logo from '../../shared/images/logo.png';

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

    /* :last-child {
        padding-bottom: 20px;
    } */

    :hover {
        background: #247D74;
    }
`;

const Logo = styled.div`
    img {
        width: 100%;
    }
`;

class Sidebar extends Component {
    constructor () {
        super()
  
        this.state = {
            dropdownOpen: false,
            secondaryDropdown: false 
        };
    }

    toggleDropdown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    toggleSecondaryDropdown = () => {
        this.setState({
            secondaryDropdown: !this.state.secondaryDropdown
        })
    }

    showDropdown = () => {
        const userOneApplications = Object.keys(data[0].applications);

        if(this.state.dropdownOpen) {
            return userOneApplications.map( item => {
                return (
                    <div>
                        <SidebarListButton onClick={this.toggleSecondaryDropdown}>{item}<i class="fas fa-chevron-down"></i></SidebarListButton>
                        {this.showSecondaryDropdown()}
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
                    <SidebarListButton onClick={this.toggleSecondaryDropdown}>1<i class="fas fa-chevron-down"></i></SidebarListButton>
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
                    <SidebarButtonContainer>
                        <SidebarButton>My rewards</SidebarButton>
                    </SidebarButtonContainer>
                    <SidebarButtonContainer>
                        <SidebarButton onClick={this.toggleDropdown}>Applications</SidebarButton>
                        {this.showDropdown()}
                    </SidebarButtonContainer>
                </SidebarMenu>
            </Fragment>
        )
    }
}

export default Sidebar;