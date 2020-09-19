// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe  extends React.Component {

  handleLeaving = () => {
    console.log('Entering password...')
    
  }

  render() {
    return (
      <div>
        <input
          type="password"
          onKeyUp={this.handleLeaving}
        />
      </div>
    )
  }
}