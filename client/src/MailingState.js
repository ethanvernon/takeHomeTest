import React, { Component } from 'react';

export class MailingState extends Component {

	constructor(props) {
		super(props);
		
		this.handleChange = this.handleChange.bind(this);
	}	

	handleChange(event) {
		this.props.handleInput(event.target.value);
	}

	render() {
		return (
			<div className='mailing-state-div'>		
				Mailing State: <input type="text" name="citizenship" value={this.props.value} placeholder="Choose State" onChange={this.handleChange} />
			</div>
		)
	}
}