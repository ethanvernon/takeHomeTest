import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class TravelDates extends Component {

	constructor(props) {
		super(props);

		this.handleChangeStart = this.handleChangeStart.bind(this);
		this.handleChangeEnd = this.handleChangeEnd.bind(this);
	}

	handleChangeStart (event) {
		this.props.handleStartDateChange(event);
	}

	handleChangeEnd (event) {
		this.props.handleEndDateChange(event);
	}

	render() {
		return (
			<div className='travel-dates-div'>
				<DatePicker
					placeholderText='Start Date'
					selected={this.props.startDate}
					selectsStart
					startDate={this.props.startDate}
					endDate={this.props.endDate}
					onChange={this.handleChangeStart}
				/>

				<DatePicker
					placeholderText='End Date'
					selected={this.props.endDate}
					selectsEnd
					startDate={this.props.startDate}
					endDate={this.props.endDate}
					onChange={this.handleChangeEnd}
					minDate={this.props.startDate}
				/>
			</div>
		)
	}
}