import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import data from '../../data/data.json';
import logo from '../../shared/images/logo.png';

import Rewards from '../Rewards';

const SidebarMenu = styled.div`
    width: 280px;
    position: fixed;
    background-color: #10151C;
    color: #fff;
    /* min-height: 100vh; */
    box-shadow: 4px 0px 9px 0px rgba(0,0,0,0.75);
    overflow-y: scroll;
    top: 82px;
    bottom: 0;
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

    :hover {
        background: #247D74;
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

const Logo = styled.div`
    img {
        width: 100%;
    }
`;

class Sidebar extends Component {
    constructor () {
        super()
  
        this.state = {
            pendingDropdownOpen: false,
            sortedDropdownOpen: false,
            secondaryDropdown: false,
            rewardsOpen: false,
            key: 1,
            secondKey: 1 
        };
    }

    handleSelect(key, screenCategory) {
        this.props.toggleScreen(screenCategory);
        this.setState({ key });
    }

    handleSecondSelect(key, SecondscreenCategory) {
        this.props.toggleScreen(SecondscreenCategory);
        this.setState({ key });
    }

    showPendingDropdown = () => {
        const userOneApplications = Object.keys(data[0].applications);
        
        if(this.state.pendingDropdownOpen) {
            // return userOneApplications.map( (item, id) => {
                return (
                    // <div>
                    //     <SidebarListButton onClick={this.toggleSecondaryDropdown}>{item}<i class="fas fa-chevron-down"></i></SidebarListButton>
                    //     {/* <SecondarySidebarListButton>{this.showSecondaryDropdown()}</SecondarySidebarListButton> */}
                    //     {/* {item === id ? this.showSecondaryDropdown() : ''} */}
                    // </div>

                    <div bsStyle="tabs" activeKey={this.state.key}>
                        <SidebarListButton eventKey={1} title="All" onClick={() => this.handleSelect(1, 'screen1')}>All</SidebarListButton>
                        <SidebarListButton eventKey={3} title="Skype" onClick={() => this.handleSelect(3, 'screen3')}>Skype</SidebarListButton>
                        <SidebarListButton eventKey={4} title="Email" onClick={() => this.handleSelect(4, 'screen4')}>Email</SidebarListButton>
                        <SidebarListButton eventKey={5} title="Telegram" onClick={() => this.handleSelect(5, 'screen5')}>Telegram</SidebarListButton>
                        <SidebarListButton eventKey={6} title="Whatsapp" onClick={() => this.handleSelect(6, 'screen6')}>Whatsapp</SidebarListButton>
                    </div>
                )
            // })
        }

        return '';
    }

    showSortedDropdown = () => {
        const userOneApplications = Object.keys(data[0].applications);
        
        if(this.state.sortedDropdownOpen) {
            // return userOneApplications.map( (item, id) => {
                return (
                    // <div>
                    //     <SidebarListButton onClick={this.toggleSecondaryDropdown}>{item}<i class="fas fa-chevron-down"></i></SidebarListButton>
                    //     {/* <SecondarySidebarListButton>{this.showSecondaryDropdown()}</SecondarySidebarListButton> */}
                    //     {/* {item === id ? this.showSecondaryDropdown() : ''} */}
                    // </div>

                    <div bsStyle="tabs" activeKey={this.state.key}>
                        <SidebarListButton eventKey={7} title="All" onClick={() => this.handleSelect(7, 'screen7')}>All</SidebarListButton>
                        <SidebarListButton eventKey={3} title="Skype" onClick={() => this.handleSelect(3, 'screen8')}>Skype</SidebarListButton>
                        <SidebarListButton eventKey={4} title="Email" onClick={() => this.handleSelect(4, 'screen9')}>Email</SidebarListButton>
                        <SidebarListButton eventKey={4} title="Telegram" onClick={() => this.handleSelect(4, 'screen10')}>Telegram</SidebarListButton>
                        <SidebarListButton eventKey={4} title="Whatsapp" onClick={() => this.handleSelect(4, 'screen11')}>WhatsApp</SidebarListButton>
                    </div>
                )
            // })
        }

        return '';
    }

    showSecondaryDropdown = () => {
        const userOneApplications = Object.keys(data[0].applications);
        console.log(data[0].applications, "hello")

        if(this.state.secondaryDropdown) {
            return (
                <div>
                    <SidebarListButton onClick={this.toggleSecondaryDropdown}>Sorted<i class="fas fa-chevron-down"></i></SidebarListButton>
                    <SidebarListButton onClick={this.toggleSecondaryDropdown}>Pending<i class="fas fa-chevron-down"></i></SidebarListButton>
                </div>
            ) 
        }

        return '';
    }

    togglePendingDropdown = () => {
        this.setState({
            pendingDropdownOpen: !this.state.pendingDropdownOpen
        })
    }

    toggleSortedDropdown = () => {
        this.setState({
            sortedDropdownOpen: !this.state.sortedDropdownOpen
        })
    }

    // handleRewards = () => {
    //     this.setState({
    //         rewardsOpen: !this.state.rewardsOpen
    //     })
    // }

    // toggleDropdown = () => {
    //     this.setState({
    //         dropdownOpen: !this.state.dropdownOpen
    //     })
    // }

    toggleSecondaryDropdown = () => {
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

    // showDropdown = () => {
    //     const userOneApplications = Object.keys(data[0].applications);

    //     if(this.state.dropdownOpen) {
    //         return userOneApplications.map( item => {
    //             return (
    //                 <div>
    //                     <SidebarListButton onClick={this.toggleSecondaryDropdown}>{item}<i class="fas fa-chevron-down"></i></SidebarListButton>
    //                     {/* {this.showSecondaryDropdown()} */}
    //                 </div>
    //             )
    //         })
    //     }

    //     return '';
    // }

    // showSecondaryDropdown = () => {
    //     const userOneApplications = Object.keys(data[0].applications);

    //     if(this.state.secondaryDropdown) {
    //         return (
    //             <div>
    //                 <SidebarListButton onClick={this.toggleSecondaryDropdown}>1<i class="fas fa-chevron-down"></i></SidebarListButton>
    //             </div>
    //         ) 
    //     }

    //     return '';
    // }

    render() {
        return (
            <Fragment>
                <SidebarMenu>
                    {/* <Logo>
                        <img src={logo} alt="mind logo"/>
                    </Logo> */}
                    {/* <SidebarButtonContainer>
                        <SidebarButton onClick={this.handleRewards}>My rewards</SidebarButton>
                        {this.showRewards()}
                    </SidebarButtonContainer>
                    <SidebarButtonContainer>
                        <SidebarButton onClick={this.toggleDropdown}>Applications</SidebarButton>
                        {this.showDropdown()}
                    </SidebarButtonContainer> */}
                    <SidebarButtonContainer>
                        <SidebarButton onClick={this.togglePendingDropdown}>Pending Applications</SidebarButton>
                        {this.showPendingDropdown()}
                    </SidebarButtonContainer>
                    <SidebarButtonContainer>
                        <SidebarButton onClick={this.toggleSortedDropdown}>Sorted Applications</SidebarButton>
                        {this.showSortedDropdown()}
                    </SidebarButtonContainer>
                    <SidebarButtonContainer>
                        <SidebarButton eventKey={2} title="screen2" onClick={() => this.handleSelect(2, 'screen2')}>Rewards</SidebarButton>
                    </SidebarButtonContainer>
                    {/* <SidebarButtonContainer bsStyle="tabs" activeKey={this.state.key}>
                        <SidebarButton eventKey={1} title="screen1" onClick={() => this.handleSelect(1, 'screen1')}>All</SidebarButton>
                        
                        <SidebarButton eventKey={3} title="screen3" onClick={() => this.handleSelect(3, 'screen3')}>Form3</SidebarButton>
                        <SidebarButton eventKey={4} title="screen4" onClick={() => this.handleSelect(4, 'screen4')}>Form4</SidebarButton>
                    </SidebarButtonContainer> */}
                </SidebarMenu>
            </Fragment>
        )
    }
}

export default Sidebar;