import './CityInput.scss';
import React from 'react';

export default class CityInput extends React.Component {
	constructor(props) {
		super(props);

		this.updateState = this.updateState.bind(this);
		this.handleCityChange = this.handleCityChange.bind(this);

		this.state = {
			city: ''
		}
	}

	updateState(cityName) {
		this.setState({
			city: cityName
		})
	}

	handleCityChange(e) {
		var cityName = e.target.value;
		this.updateState(cityName);
	}

	render() {
		return(
			<input
				id="city-input"
				placeholder="Enter city's name"
				value={this.state.city}
				onChange={this.handleCityChange}>
			</input>
		);
	}
}
