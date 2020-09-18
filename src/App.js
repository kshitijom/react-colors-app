import React, { Component } from 'react';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';
import Palette from './Palette';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Palette palette={generatePalette(seedColors[4])} />
			</div>
		);
	}
}

export default App;
