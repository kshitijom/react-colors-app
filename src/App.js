import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';
import Palette from './Palette';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' render={() => <h1>palette list goes here</h1>}/>
				<Route exact path='/palette/:id' render={() => <h1>individual palette</h1>}/>
			</Switch>
			
			// {/* <div className="App">
			// 	<Palette palette={generatePalette(seedColors[4])} />
			// </div> */}
		);
	}
}

export default App;
