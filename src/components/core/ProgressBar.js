import React from 'react';
import Filler from './Filler';
import styled from 'styled-components';


const ProgressBarWrapper = styled.div`
  border-bottom: 2px solid grey;
  width: 100vw;
  height: 25px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
`

class ProgressBar extends React.Component {
  render() {
    return(
      <ProgressBarWrapper>
        <Filler pourcentage={this.props.pourcentage}></Filler>
      </ProgressBarWrapper>
    )
  }
}

export default ProgressBar;