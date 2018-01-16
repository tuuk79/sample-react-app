import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {status: false, buttonValue: ''};
	}

	handleClick(e) {
		// console.log(e.target.value);
		this.setState({buttonValue: e.target.value});
		console.log(this.state.buttonValue);
	}

	render() {
		return (
			<Hello doSomething={(e) => this.handleClick(e)}/>
		);
	}
}

export default App;
