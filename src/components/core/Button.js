import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  width: 30%;
  margin: auto;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s;
  border-bottom: 2px solid darkgrey;

  &:hover {
    text-shadow: 2px 2px 0px lightgrey;
    color: grey;
    border-bottom: 20px solid white;
  }
`

class Button extends React.Component {
  render() {
    return(
      <ButtonWrapper
        onClick={this.props.onClickFn}
      >{this.props.title}</ButtonWrapper>
      );
  }
}

export default Button;