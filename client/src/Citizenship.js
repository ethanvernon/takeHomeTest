import React, { Component } from 'react';

export class Citizenship extends Component {

	constructor(props) {
		super(props);
		
		this.handleChange = this.handleChange.bind(this);
	}	

	handleChange(event) {
		this.props.handleInput(event.target.value);
	}

	render() {
		return (
			<div className='citizenship-div'>
				Citizenship: <input type="text" name="citizenship" value={this.props.value} placeholder="Choose Your Country of Citizenship" onChange={this.handleChange} />
			</div>
		)
	}
}