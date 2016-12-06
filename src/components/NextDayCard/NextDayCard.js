import './NextDayCard.scss';
import React from 'react';

export default class NextDayCard extends React.Component {
	render() {
		return(
			<div className="cards-next-days">
				<h3 className="card-heading">{this.props.day}</h3>
				<i className={"wi icon-size"+" "+this.props.iconClass}></i>
				<p className="min-max-temperature">{this.props.maxTemp} <i className="wi wi-degrees"></i>C / {this.props.minTemp} <i className="wi wi-degrees"></i>C</p>
				<h3>{this.props.weatherType}</h3>
			</div>
		);
	}
}
