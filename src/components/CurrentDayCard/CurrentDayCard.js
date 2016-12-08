import './CurrentDayCard.scss';
import React from 'react'

export default class CurrentDayCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { city, temperature, weatherType } = this.props

		return(
			<div id="card-active">
				<h1>{city}</h1>
				Today
				<p id="current-temperature">{temperature}<i className="wi wi-degrees"></i>C</p>
				<p id="active-weather-type">{weatherType}</p>
			</div>
		);
	}
}
