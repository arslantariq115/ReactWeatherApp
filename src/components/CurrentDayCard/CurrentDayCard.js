import './CurrentDayCard.scss';
import React from 'react'

export default class CurrentDayCard extends React.Component {
	render() {
		return(
			<div id="card-active">
				<h1>{this.props.city}</h1>
				Today
				<p id="current-temperature">{this.props.temperature}<i className="wi wi-degrees"></i>C</p>
				<p id="active-weather-type">{this.props.weatherType}</p>
			</div>
		);
	}
}
