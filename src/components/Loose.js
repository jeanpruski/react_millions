import React from 'react';
import Button from './core/Button';

class Loose extends React.Component {
  render() {
    return(
      <div>
        <h1>Perdu !</h1>
        <Button 
        onClickFn={this.props.displayPage}
        title='Retour Home'></Button>
      </div>
    );
  }
}

export default Loose;