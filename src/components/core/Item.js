import React from 'react';
import styled from 'styled-components';


const ItemWrapper = styled.div`
  transition: 0.5s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  width: calc(48% - 2px);
  min-height: 50px;
  border-radius: 15px;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.6;
    background-color: grey;
    color: white;
  }

  @media (max-width: 700px) {
    width: 90%;
    margin: auto;
    margin-bottom: 20px;

  }
`

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isClicked: false,
    }
  }

  render() {
    // console.log('Coucou', this.props)
    return (
      <ItemWrapper

        // style={{
        //   backgroundColor:
        //   this.state.isClicked ?
        //   'lightgrey' : 'white',
        //   color:
        //   this.state.isClicked ?
        //   'white' : 'black'
        // }}

        onClick={() => {
          this.props.onClickFn(this.props.children[1]);
          this.setState({
            isClicked : !this.state.isClicked
          })
        }}
      >{this.props.children[1]}</ItemWrapper>
    );
  }
}

export default Item;