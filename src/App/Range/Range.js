import React, { Component } from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    background: #B3BCC8;
    padding: 20px;
    border-radius: 5px;
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

const TotalInfo = styled.div`
  display: flex;
`;

const SubmitButton = styled.button`
  color: #1E2330;
  font-size: 1.6rem;
  margin-top: 15px;
  border: 1px solid #1E2330;
  padding: 5px 10px;
`;

class Range extends Component {
    state = {
        dealSizeValue: 10,
        urgencyValue: 20,
        relevanceValue: 70,
        totalValue: 0
    }

    handleClick () {

    }

    handleOnChange = (event) => {
      this.setState({ dealSizeValue: event.target.value })
    }

    render() {

        return (
            <Styles>
                <RangeInfo>
                  <ValueName>Deal Size</ValueName>
                  <input type="range" min={0} max={33.3} value={this.state.dealSizeValue} onChange={this.handleOnChange} />
                  <Value>{this.state.dealSizeValue}</Value>
                </RangeInfo>
                <RangeInfo>
                  <ValueName>Urgency</ValueName>
                  <input type="range" min={0} max={33.3} value={this.state.urgencyValue} onChange={this.handleOnChange} />
                  <Value>{this.state.urgencyValue}</Value>
                </RangeInfo>
                <RangeInfo>
                  <ValueName>Relevance</ValueName>
                  <input type="range" min={0} max={33.3} value={this.state.relevanceValue} onChange={this.handleOnChange} />
                  <Value>{this.state.relevanceValue}</Value>
                </RangeInfo>
                <TotalContainer>
                  <TotalInfo>
                    <TotalName>Total</TotalName>
                    <TotalName>{this.state.dealSizeValue + this.state.urgencyValue + this.state.relevanceValue}</TotalName>
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