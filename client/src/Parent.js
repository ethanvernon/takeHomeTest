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
			policyMaximum: 'Choose your policy maximum',
			age: '',
			startDate: '',
			endDate: '',
			citizenship: '',
			mailingState: ''
		};

		this.handlePolicyMaximumChange = this.handlePolicyMaximumChange.bind(this);
		this.handleAgeChange = this.handleAgeChange.bind(this);
		this.handleStartDateChange = this.handleStartDateChange.bind(this);
		this.handleEndDateChange = this.handleEndDateChange.bind(this);
		this.handleCitizenshipChange = this.handleCitizenshipChange.bind(this);
		this.handleMailingStateChange = this.handleMailingStateChange.bind(this);
		this.handleGetQuotes = this.handleGetQuotes.bind(this);
	}	

	handlePolicyMaximumChange(val) {
		this.setState({
			policyMaximum: val
		});
	}

	handleAgeChange(val) {
		this.setState({
			age: val
		});
	}

	handleStartDateChange(val) {
		this.setState({
			startDate: val
		})
	}

	handleEndDateChange(val) {
		this.setState({
			endDate: val
		})
	}

	handleCitizenshipChange(val) {
		this.setState({
			citizenship: val
		})
	}

	handleMailingStateChange(val) {
		this.setState({
			mailingState: val
		})
	}

	handleGetQuotes() {
		//button clicked
	}

	render() {
		return (
			<div className='parent-div'>
				<Title/>
				<PolicyMaximum
					value={this.state.PolicyMaximum}
					handleSelect={this.handlePolicyMaximumChange}
				/>
				<Age
					value={this.state.age}
					handleInput={this.handleAgeChange}
				/>
				<TravelDates
					startDate={this.state.startDate}
					endDate={this.state.endDate}
					handleStartDateChange={this.handleStartDateChange}
					handleEndDateChange={this.handleEndDateChange}
				/>
				<Citizenship
					handleInput={this.handleCitizenshipChange}
					value={this.state.citizenship}
				/>
				<MailingState
					handleInput={this.handleMailingStateChange}
					value={this.state.mailingState}
				/>
				<GetQuotes
					handleGetQuotes={this.handleGetQuotes}
				/>
				<Reset/>				
			</div>
		)
	}
}