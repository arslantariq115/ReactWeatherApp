import './CurrentDayCard.scss';
import React from 'react'

export default class CurrentDayCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { city, temperature, weatherType, iconClass } = this.props

		return(
			<div id="card-active">
				<h1 id="city-name">{city}</h1>
				Today
				<p id="current-temperature">{temperature }<i className="wi wi-degrees"></i>C</p>
				<div>
					<p id="active-weather-type">{weatherType}</p>
					<i className={"wi icon-size current-weather-icon"+" "+iconClass}></i>
				</div>
			</div>
		);
	}
}
