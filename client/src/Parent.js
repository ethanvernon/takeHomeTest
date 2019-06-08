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
			citizenshipError: false,
			mailingState: '',
			mailingStateError: false,
			emptyValuesError: false
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
			policyMaximum: val,
			citizenshipError: false,
			mailingStateError: false,
			emptyValuesError: false
		});
	}

	handleAgeChange(val) {
		this.setState({
			age: val,
			citizenshipError: false,
			mailingStateError: false,
			emptyValuesError: false
		});
	}

	handleStartDateChange(val) {
		this.setState({
			startDate: val,
			citizenshipError: false,
			mailingStateError: false,
			emptyValuesError: false
		})
	}

	handleEndDateChange(val) {
		this.setState({
			endDate: val,
			citizenshipError: false,
			mailingStateError: false,
			emptyValuesError: false
		})
	}

	handleCitizenshipChange(val) {
		this.setState({
			citizenship: val,
			citizenshipError: false,
			mailingStateError: false,
			emptyValuesError: false
		})
	}

	handleMailingStateChange(val) {
		this.setState({
			mailingState: val,
			citizenshipError: false,
			mailingStateError: false,
			emptyValuesError: false
		})
	}

	handleGetQuotes() {
		//store state in variables
		let citizenship = this.state.citizenship;
		let mailingState = this.state.mailingState;
		let policyMaximum = this.state.policyMaximum;
		let age = this.state.age;
		let startDate = this.state.startDate;
		let endDate = this.state.endDate;

		//check if any fields are empty
		if (!citizenship || !mailingState || !policyMaximum || !age || !startDate || !endDate) {
			this.setState({
				emptyValuesError: true
			})
		}

		//run checks on each variable
		if (!/^[A-Za-z ]+$/.test(citizenship)) {
			this.setState({
				citizenshipError: true
			});
		}

		if (!/^[A-Za-z ]+$/.test(mailingState)) {
			this.setState({
				mailingStateError: true
			});
		}
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
				{this.state.citizenshipError &&
					<span>Citizenship cannot contain numbers or special characters or be empty</span>
				}
				<MailingState
					handleInput={this.handleMailingStateChange}
					value={this.state.mailingState}
				/>
				{this.state.mailingStateError &&
					<span>Mailing State cannot contain numbers or special characters or be empty</span>
				}
				{this.state.emptyValuesError &&
					<span>All fields are required</span>
				}
				<GetQuotes
					handleGetQuotes={this.handleGetQuotes}
				/>
				<Reset/>				
			</div>
		)
	}
}