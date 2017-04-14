import './NextDayCard.scss';
import React from 'react';

export default class NextDayCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { day, iconClass, weatherType, minTemp, maxTemp } = this.props

		return(
			<div className="cards-next-days">
				<h3 className="card-heading">{day}</h3>
				<i className={"wi icon-size"+" "+iconClass}></i>
				<p className="min-max-temperature">{maxTemp} <i className="wi wi-degrees"></i>C / {minTemp} <i className="wi wi-degrees"></i>C</p>
				<h3>{weatherType}</h3>
			</div>
		);
	}
}
