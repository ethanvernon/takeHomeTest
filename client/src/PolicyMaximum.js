import React, { Component } from 'react';

export class PolicyMaximum extends Component {

	constructor(props) {
		super(props);
		
		this.handleChange = this.handleChange.bind(this);
	}	

	handleChange(event) {
		this.props.handleSelect(event.target.value);
	}

	render() {
		return (
			<div className='policy-maximum'>
				<label for="policy-maximum">Policy Maximum</label>
				<select name="policy-maximum" value={this.props.value} onChange={this.handleChange}>
					<option value="" disabled selected>Choose your policy maximum</option>
					<option value="50">50,000</option>
					<option value="100">100,000</option>
					<option value="250">250,000</option>
					<option value="500">500,000</option>
				</select>
			</div>
		)
	}
}