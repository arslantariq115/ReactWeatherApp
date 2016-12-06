import './NextDayCard.scss';
import React from 'react';

export default class NextDayCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			day: this.props.day,
			iconClass: this.props.iconClass,
			maxTemp: this.props.maxTemp,
			minTemp: this.props.minTemp,
			weatherType: this.props.weatherType
		}
	}

	render() {
		return(
			<div className="cards-next-days">
				<h3 className="card-heading">{this.state.day}</h3>
				<i className={"wi icon-size"+" "+this.state.iconClass}></i>
				<p className="min-max-temperature">{this.state.maxTemp} <i className="wi wi-degrees"></i>C / {this.state.minTemp} <i className="wi wi-degrees"></i>C</p>
				<h3>{this.state.weatherType}</h3>
			</div>
		);
	}
}
