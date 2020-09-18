import React, { Component } from 'react';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';
import Palette from './Palette';

class App extends Component {
	render() {
    console.log(generatePalette(seedColors[4]));
		return (
			<div className="App">
				<Palette {...seedColors[4]} />
			</div>
		);
	}
}

export default App;
