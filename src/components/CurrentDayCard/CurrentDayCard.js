import './CurrentDayCard.scss';
import React from 'react'

export default class CurrentDayCard extends React.Component {
	render() {
		return(
			<div id="card-active">
				<h1>Lahore</h1>
				Today
				<p id="current-temperature">23<i className="wi wi-degrees"></i>C</p>
				<p id="active-weather-type">Sunny</p>
			</div>
		);
	}
}
