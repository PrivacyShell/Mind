import React, {Component} from 'react';
import styled from 'styled-components';
import data from '../../data/data.json';
import {Doughnut} from 'react-chartjs-2';

const RewardsContainer = styled.div`
    width: 100%;
    height: auto;
    margin: 30px 0;
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

const MainContainer = styled.div`
    margin-top: 70px;
    display: flex;
`;

const RewardsTitle = styled.h2`
    font-size: 2rem;
    color: #fff;
    text-transform: capitalize;
`;

const RewardsDesc = styled.h2`
    font-size: 5rem;
    color: #237971;
    text-transform: capitalize;
`;

const LeftContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const RightContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const LeftSubcContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
`;

const Accuracy = styled.h2`
    color: #fff;
    font-size: 7rem;
    text-align: center;
    position: absolute;
    margin-top: 20px;
`;

class Rewards extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            chartData : {
                labels: ['Accuracy'],
                datasets: [
                    {
                        label: 'Accuracy',
                        data: [
                            80,
                            20
                        ],
                        backgroundColor: [
                            'rgb(35,121,113)',
                            'rgb(151,151,151)'   
                        ],
                        borderColor: 'rgb(30,35,48)',                     
                    }
                ]
            }
        }
    }
    render() {
        const rewards = data[0].rewards;

        const donutOptions = {
            responsive: false,
            cutoutPercentage: 80,
          };
        
        return (
            <RewardsContainer>
                <HeaderContainer>
                    <HeaderSubContainer>
                        <HeaderTitle>My rewards</HeaderTitle>
                    </HeaderSubContainer>
                </HeaderContainer>
                <MainContainer>
                    <LeftContainer>
                        <LeftSubcContainer>
                            <RewardsDesc>{rewards.total}</RewardsDesc>
                            <RewardsTitle>Total matches</RewardsTitle>
                        </LeftSubcContainer>
                        <LeftSubcContainer>
                            <RewardsDesc>{rewards.pending}</RewardsDesc>
                            <RewardsTitle>Pending</RewardsTitle>
                        </LeftSubcContainer>
                        <LeftSubcContainer>
                            <RewardsDesc>{rewards.accuracy}</RewardsDesc>
                            <RewardsTitle>Accuracy</RewardsTitle>
                        </LeftSubcContainer>
                    </LeftContainer>
                    <RightContainer>
                        <Doughnut 
                            data={this.state.chartData} 
                            width={300}
                            height={300}
                            options={donutOptions}
                        />
                        <Accuracy>{rewards.accuracy}</Accuracy>
                    </RightContainer>
                </MainContainer>
            </RewardsContainer>
        )  
    }

}

export default Rewards;
