import React, { Component } from 'react';

export class Age extends Component {

	constructor(props) {
		super(props);
		
		this.handleChange = this.handleChange.bind(this);
	}	

	handleChange(event) {
		this.props.handleInput(event.target.value);
	}

	render() {
		return (
			<div className='age-div'>
				Age: <input type="text" name="age" value={this.props.value} placeholder="Choose your age" onChange={this.handleChange} />
			</div>
		)
	}
}