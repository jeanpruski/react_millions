import React from 'react';
import Item from './core/Item';
import ProgressBar from './core/ProgressBar.js';
import Button from './core/Button';
import styled from 'styled-components';

const QuestionWrapper = styled.div`
  text-align: center;
`

const QuestionTitle = styled.h1`
  margin-top: 30px;
  margin-bottom: 10px;
`

const QuestionAuthor = styled.p`
  margin-top: 0;
  margin-bottom: 50px;

  em {
    color: grey;
  }
`

const SubQuestionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`


class Question extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      isSelected: false,
      isClickedSplitBonus: false, 
      usedSplitBonus: false,
      usedSplitBonusCont: 0,
      floor: 1,
      question: 'Suis-je un super-héro ?',
      response: 'Evidemment',
      fake1: 'Non 1',
      fake2: 'Non 2',
      fake3: 'Non 3',
      author: 'Jean P.',
      responseSelected: '',
      random: 0,
      randomBonus: 1,
      winFloor: 10,
      pourcentage: 0,
    };

    this.isSelectedFn = this.isSelectedFn.bind(this);
    this.splitBonus = this.splitBonus.bind(this);
    this.compareResponseFn = this.compareResponseFn.bind(this);
    this.calculPourcentage = this.calculPourcentage.bind(this);
  }

  componentDidMount() {
    let random = Math.floor(Math.random() * 4) + 1;

    let randomBonus = Math.floor(Math.random()* 3) + 1 ;

    this.setState({
      random,
      randomBonus,
    });
    // console.log('random', this.state.random)
    this.calculPourcentage();
  }

  splitBonus() {
    if(this.state.isClickedSplitBonus === false && this.state.usedSplitBonusCont === 0) {
      const temp = this.state.usedSplitBonusCont + 1;

      this.setState({
        isClickedSplitBonus: true,
        usedSplitBonusCont: temp,
       });
      console.log('true');
      console.log(this.state.usedSplitBonusCont);
    } else {
      console.log('false');
      console.log(this.state.usedSplitBonusCont);
    }

  }

  calculPourcentage() {
    let pourcentage = (this.state.floor / this.state.winFloor)*100;
    this.setState({
      pourcentage,
    });
    // console.log('Pourcentage', pourcentage);

  }

  isSelectedFn(responseItem) {
    this.setState({
      responseSelected : responseItem,
    });
  }

  compareResponseFn() {
    if (this.state.response === this.state.responseSelected) {
      // console.log('gagné');
      this.riseUpFloor();
    } else {
      // console.log('perdu')
      this.onLoose();
    }
    this.setState({
      responseSelected : '',
    });
  }

  riseUpFloor() {
    let floor = this.state.floor + 1;
    let pourcentage = (floor / this.state.winFloor)*100;
    let random = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

    if(pourcentage > 100) {
      console.log('gagné');
      this.props.displayPageCreate();
    }
    else {
      this.setState({
        floor,
        pourcentage,
        isClickedSplitBonus: false,
        random,
      });
    }
  }

  onLoose() {
    let floor = 1;
    let pourcentage = (floor / this.state.winFloor)*100;
    this.setState({
      floor,
      pourcentage,
    });
    this.props.displayPage();
  }

  render() {
    const questionItem = [];
    const questionItemBonus = [];

    if (this.state.random === 1) {
      questionItem.push(this.state.response, this.state.fake1, this.state.fake2, this.state.fake3);
    } else if (this.state.random === 2) {
      questionItem.push(this.state.fake3, this.state.response, this.state.fake1, this.state.fake2);
    } else if (this.state.random === 3) {
      questionItem.push(this.state.fake2, this.state.fake3, this.state.response, this.state.fake1);
    } else {
      questionItem.push(this.state.fake1, this.state.fake2, this.state.fake3, this.state.response);
    }

    let fakeBonusItem;

    if(this.state.randomBonus === 1) {
      fakeBonusItem = this.state.fake1;
    } else if (this.state.randomBonus === 2){
      fakeBonusItem = this.state.fake2;
    } else {
      fakeBonusItem = this.state.fake3;
    }


    if (this.state.random%2 === 0) {
      questionItemBonus.push(this.state.response, fakeBonusItem);
    } else {
      questionItemBonus.push(fakeBonusItem, this.state.response);
    }

    
    let questionList; 
    
    if (this.state.isClickedSplitBonus === true) {
      questionList = questionItemBonus.map(
        (item, index) => {
          return <Item
                  key={index}
                  onClickFn={this.isSelectedFn}
                  > {item} </ Item>
        });
    } else {
      questionList = questionItem.map(
        (item, index) => {
          return <Item
                  key={index}
                  onClickFn={this.isSelectedFn}
                  > {item} </ Item>
        });
    }
    
    let splitBonus = '';

    if(this.state.usedSplitBonusCont ===  0){
      splitBonus = <Button
                      title='50:50'
                      onClickFn={this.splitBonus}
                    ></Button>
    }



    return(
      <QuestionWrapper>
        <ProgressBar pourcentage={this.state.pourcentage}></ProgressBar>
        {/* <h1>{this.state.floor}</h1> */}
        <QuestionTitle>{this.state.question}</QuestionTitle>
        <QuestionAuthor>Question proposée par <em>{this.state.author}</em></QuestionAuthor>
        <SubQuestionWrapper>
          { questionList }
        </SubQuestionWrapper>

        { splitBonus }

        <Button
          title='Valider'
          onClickFn={this.compareResponseFn}
        ></Button>
        <Button
          title='Arrêter'
          onClickFn={this.compareResponseFn}
        ></Button>

      </QuestionWrapper>
    );
  }
}

export default Question;