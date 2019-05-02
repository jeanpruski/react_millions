import React from 'react';
import styled from 'styled-components';
import Question from './Question';
import Home from './Home';
import Create from './Create';
import Loose from './Loose';

const AppWrapper = styled.div`
  margin: auto;
  padding-top: 30px;
  height: 100vh;
  width: 96%;
  max-width: 800px;
`

class AppContainer extends React.Component {
  constructor(props){
    super(props);
    this.state={
      display: 'home',
      played: false,   
    };

    this.changePage4Question = this.changePage4Question.bind(this);
    this.changePage4Home = this.changePage4Home.bind(this);
    this.changePage4Create = this.changePage4Create.bind(this);
    this.changePage4Loose = this.changePage4Loose.bind(this);
  }

  changePage4Question() {
    this.setState({
      display: 'question',
    })
  }

  changePage4Home() {
    this.setState({
      display: 'home',
      played: true,
    })
  }

  changePage4Create() {
    this.setState({
      display: 'create',
      played: false,
    })
  }

  changePage4Loose() {
    this.setState({
      display: 'loose',
      played: false,
    })
  }

  render() {

    let display;

    if(this.state.display === 'home') {
      display = <Home onClickFn={this.changePage4Question}></Home>
    } else if(this.state.display === 'question') {
      display = <Question displayPageCreate={this.changePage4Create} displayPage={this.changePage4Loose}></Question>
    } else if (this.state.display === 'create') {
      display = <Create displayPage={this.changePage4Home}></Create>
    } else if (this.state.display === 'loose') {
      display = <Loose displayPage={this.changePage4Home}></Loose>
    }

    return(
      <AppWrapper>
        {display}
      </AppWrapper>
    );
  }
}

export default AppContainer;