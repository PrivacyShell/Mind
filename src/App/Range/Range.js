import React, { Component } from 'react';
import styled from 'styled-components';
import { Slider, InputNumber, Row, Col } from 'antd';

const Styles = styled.div`
    
`;

class Range extends Component {
    state = {
        inputValue: 1
    }

    onChange = value => {
        this.setState({
          inputValue: value,
        });
      };

    render() {
        const { inputValue } = this.state;
        return (
            <Styles>
                <Slider
            min={1}
            max={20}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
          <InputNumber
            min={1}
            max={20}
            style={{ marginLeft: 16 }}
            value={inputValue}
            onChange={this.onChange}
          />
            </Styles>
        )
    }
}

export default Range;