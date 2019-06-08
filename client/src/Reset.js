import React, { Component } from 'react';

export class Reset extends Component {

	constructor(props) {
		super(props);

		this.state = {
			myState: null
		};
		
		//this.handleClick = this.handleClick.bind(this);
	}		

	handleClick() {
		return null;
	}

	render() {
		return (
			<div className='reset-div'>		
			</div>
		)
	}
}