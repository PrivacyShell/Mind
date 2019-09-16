import React, { Component } from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    background: #B3BCC8;
    padding: 20px;
    border-radius: 5px;
    /* TEST */
    /* z-index: 100; */
`;

const RangeInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Value = styled.h3`
  margin-left: 10px;
`;

const ValueName = styled.h2`
  color: #1E2330;
  font-size: 1.6rem;
  width: 25%;
`;

const TotalName = styled.h2`
  color: #1E2330;
  font-size: 1.6rem;
  margin-right: 10px;
  margin-top: 20px;
`;

const Total = styled.h2`
  color: #247D74;
  font-size: 1.6rem;
  margin-right: 10px;
  margin-top: 20px;
`;

const TotalInfo = styled.div`
  display: flex;
`;

const SubmitButton = styled.button`
  color: #fff;
  font-size: 1.6rem;
  margin-top: 10px;
  border: 1px solid #247D74;
  padding: 7px 15px;
  background: #247D74;
  text-transform: uppercase;

  :hover {
    background: none;
    color: #247D74;
  }
`;

class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dealSizeValue: 0,
        urgencyValue: 0,
        relevanceValue: 0,
        totalValue: 0
    }
  }

  handleClick = () => {
    alert(`Message priority submitted`)
  }
    

    // handleOnChangeDealSize = (event) => {
    //   this.setState({ dealSizeValue: event.target.value });
    // }
    
    // handleOnChangeUrgency = (event) => {
    //   this.setState({ urgencyValue: event.target.value });
    // }
    
    // handleOnChangeRelevance = (event) => {
    //   this.setState({ relevanceValue: event.target.value });
    // }

    handleInputChange = (event, settingName) => {
      this.setState({
        [settingName]: Number(event.target.value),
      })
    }

    render() {
        const total = this.state.dealSizeValue + this.state.urgencyValue + this.state.relevanceValue;
        const { dealSizeValue, urgencyValue, relevanceValue } = this.state;

        return (
            <Styles>
                <RangeInfo>
                  <ValueName>Deal Size</ValueName>
                  <input type="range" min={0} max={33.3} 
                    // onChangeComplete={value => console.log(value)}
                    value={dealSizeValue}
                    onChange={(e) => this.handleInputChange(e, 'dealSizeValue')}

                  />
                  <Value>{this.state.dealSizeValue}</Value>
                </RangeInfo>
                <RangeInfo>
                  <ValueName>Urgency</ValueName>
                  <input type="range" min={0} max={33.3} 
                    value={urgencyValue}
                    onChange={(e) => this.handleInputChange(e, 'urgencyValue')}
                />
                  <Value>{this.state.urgencyValue}</Value>
                </RangeInfo>
                <RangeInfo>
                  <ValueName>Relevance</ValueName>
                  <input type="range" min={0} max={33.3}
                    value={this.state.relevanceValue}
                    onChange={(e) => this.handleInputChange(e, 'relevanceValue')}
                  />
                  <Value>{relevanceValue}</Value>
                </RangeInfo>
                <TotalContainer>
                  <TotalInfo>
                    <TotalName>Total</TotalName>
                    <Total>{total}</Total>
                  </TotalInfo>
                  <TotalInfo>
                      <SubmitButton onClick={this.handleClick}>
                          Submit
                      </SubmitButton>
                  </TotalInfo>
                </TotalContainer>
            </Styles>
        )
    }
}

export default Range;