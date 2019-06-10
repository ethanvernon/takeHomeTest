import React, { Component } from 'react';
import axios from "axios";
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
			emptyValuesError: false,
			ageError: false,
			results: null
		};

		this.handlePolicyMaximumChange = this.handlePolicyMaximumChange.bind(this);
		this.handleAgeChange = this.handleAgeChange.bind(this);
		this.handleStartDateChange = this.handleStartDateChange.bind(this);
		this.handleEndDateChange = this.handleEndDateChange.bind(this);
		this.handleCitizenshipChange = this.handleCitizenshipChange.bind(this);
		this.handleMailingStateChange = this.handleMailingStateChange.bind(this);
		this.handleGetQuotes = this.handleGetQuotes.bind(this);
		this.makeRequest = this.makeRequest.bind(this);
	}

	handlePolicyMaximumChange(val) {
		this.setState({
			policyMaximum: val,
			citizenshipError: false,
			mailingStateError: false,
			emptyValuesError: false,
			ageError: false
		});
	}

	handleAgeChange(val) {
		this.setState({
			age: val,
			citizenshipError: false,
			mailingStateError: false,
			emptyValuesError: false,
			ageError: false
		});
	}

	handleStartDateChange(val) {
		this.setState({
			startDate: val,
			citizenshipError: false,
			mailingStateError: false,
			emptyValuesError: false,
			ageError: false
		})
	}

	handleEndDateChange(val) {
		this.setState({
			endDate: val,
			citizenshipError: false,
			mailingStateError: false,
			emptyValuesError: false,
			ageError: false
		})
	}

	handleCitizenshipChange(val) {
		this.setState({
			citizenship: val,
			citizenshipError: false,
			mailingStateError: false,
			emptyValuesError: false,
			ageError: false
		})
	}

	handleMailingStateChange(val) {
		this.setState({
			mailingState: val,
			citizenshipError: false,
			mailingStateError: false,
			emptyValuesError: false,
			ageError: false
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
		let currentYear=new Date().getFullYear();
		let lowestYear=currentYear-100;
		let success=1;

		//check if any fields are empty
		if (!citizenship || !mailingState || !policyMaximum || !age || !startDate || !endDate) {
			this.setState({
				emptyValuesError: true
			});
			success=0;
		}

		//run checks for special chars and numbers in citizenship and mailing state
		if (!/^[A-Za-z ]+$/.test(citizenship)) {
			this.setState({
				citizenshipError: true
			});
			success=0;
		}

		if (!/^[A-Za-z ]+$/.test(mailingState)) {
			this.setState({
				mailingStateError: true
			});
			success=0;
		}

		//run checks for >100 in age
		if (0 <= age && age <= 100) {
			console.log('user between 0 and 100 years old')
		} else if (age >= lowestYear && age > 100 && age <= currentYear) {
			console.log('user birthyear between '+lowestYear+ ' and '+currentYear);
		} else {
			this.setState({
				ageError: true
			});
			success=0;
		}

		//check for unchanged success var and send api request
		if (success == 1) {
			this.makeRequest();
		}
	}

	makeRequest() {

		//builds query
		let formQuery="http://localhost:8080/api/quotes";

		axios.get(formQuery)
			.then(data => {
				//sets data to state
				this.setState({ results: data.data });
			}).catch(err =>{
				//handle error
				console.log(err);
				this.setState({results: 'error'});
			}).then(data => {
				//logs data
				console.log(this.state.results)
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
				<Age
					value={this.state.age}
					handleInput={this.handleAgeChange}
				/>
				{this.state.ageError &&
					<span>Age must be between 0 and 100</span>
				}
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