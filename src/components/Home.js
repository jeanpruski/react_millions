import React from 'react';
import styled from 'styled-components';
import Button from './core/Button';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const HomeTitle = styled.h1`
  text-align: center;
  margin-bottom: 50px;

`

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Qui veut gagner du Faf ?'
    }
  }

  render() {

    console.log(this.state.title)

    return(
      <HomeWrapper>
        <HomeTitle>{this.state.title}</HomeTitle>
        <Button

          title="Commencer une partie"
          onClickFn={this.props.onClickFn}  
        ></Button>
      </HomeWrapper>
    );
  }
}

export default Home;