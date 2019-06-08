import React, { Component } from 'react';

export class MailingState extends Component {

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
			<div className='mailing-state-div'>		
			</div>
		)
	}
}