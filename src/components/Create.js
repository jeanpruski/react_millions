import React from 'react';
import Button from './core/Button';

class Create extends React.Component {
  render() {
    return(
      <div>
        <h1>Gagné & create à question !!!!</h1>
        <Button 
          onClickFn={this.props.displayPage}
          title='Retour Home'></Button>
      </div>
    );
  }
}

export default Create;