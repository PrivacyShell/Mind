import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import '../../shared/styles/main.css';

import Sidebar from '../Sidebar/Sidebar';
import WelcomeBox from '../WelcomeBox/WelcomeBox';
import Messages from '../Messages/Messages';

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

    render() {
        return (
            <Fragment>
                <Sidebar />
                <MainContainer>
                    <TopContainer>
                        <WelcomeBox />
                        <i class="fas fa-cog fa-3x"></i>
                    </TopContainer>
                    <Messages />
                </MainContainer>
            </Fragment>
        )
    }
}

export default Main;