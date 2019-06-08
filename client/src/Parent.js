import React, { Component } from 'react';
import {Title} from './Title';
import {PolicyMaximum} from './PolicyMaximum';
import {Age} from './Age';
import {TravelDates} from './TravelDates';
import {Citizenship} from './Citizenship';
import {MailingState} from './MailingState';
import {GetQuotes} from './GetQuotes';
import {Reset} from './Reset';

export class Parent extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	      	policyMaximum: 'Choose your policy maximum'
	    };
	    
	   this.handlePolicyMaximumChange = this.handlePolicyMaximumChange.bind(this);
	}	

	handlePolicyMaximumChange(val) {
		this.setState({
			policyMaximum: val
		});
	}

	render() {
		return (
			<div className='parent-div'>
				<Title/>
				<PolicyMaximum
					value={this.state.PolicyMaximum}
					handleSelect={this.handlePolicyMaximumChange}
				/>
				<Age/>
				<TravelDates/>
				<Citizenship/>
				<MailingState/>
				<GetQuotes/>
				<Reset/>				
			</div>
		)
	}
}