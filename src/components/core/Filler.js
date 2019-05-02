import React from 'react';
import styled from 'styled-components';

const FillerWrapper = styled.div`
  background-color: lightgrey;
  height: 100%;
  transition: all 0.5s;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`

class Filler extends React.Component {
  render() {
    // console.log(this.props)
    return(
      <FillerWrapper style={{ width: `${this.props.pourcentage}%` }} ></FillerWrapper>
    );
  }
}

export default Filler;