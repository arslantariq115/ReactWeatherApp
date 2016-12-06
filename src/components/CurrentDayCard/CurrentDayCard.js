import './CurrentDayCard.scss';
import React from 'react'

export default class CurrentDayCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			city: this.props.city,
			temperature: this.props.temperature,
			weatherType: this.props.weatherType
		}
	}
	render() {
		return(
			<div id="card-active">
				<h1>{this.state.city}</h1>
				Today
				<p id="current-temperature">{this.state.temperature}<i className="wi wi-degrees"></i>C</p>
				<p id="active-weather-type">{this.state.weatherType}</p>
			</div>
		);
	}
}
