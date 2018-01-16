import React, { Component } from 'react';
import logo from './logo.svg';

class Hello extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<button onClick={this.props.doSomething} value="fromButton"></button>
			</div>
		);
	}
}

export default Hello;
