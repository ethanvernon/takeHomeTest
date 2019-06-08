import React, { Component } from 'react';

export class GetQuotes extends Component {

	constructor(props) {
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
	}	

	handleClick() {
		this.props.handleGetQuotes();
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				GET QUOTES
			</button>
		)
	}
}