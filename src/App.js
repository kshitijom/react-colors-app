import React, { Component } from 'react';
import seedColors from './seedColors';
import Palette from './Palette';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Palette {...seedColors[4]}/>
      </div>
    );
  }
}

export default App;
