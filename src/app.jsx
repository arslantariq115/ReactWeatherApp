import './index.scss';
import React from 'react';
import pic from './weather.jpg';
import CityInput from './components/CityInput/CityInput';
import CurrentDayCard from './components/CurrentDayCard/CurrentDayCard';
import NextDayCard from './components/NextDayCard/NextDayCard';

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.kelvinToCelsius = this.kelvinToCelsius.bind(this);
		this.getWeatherData = this.getWeatherData.bind(this);

		this.state = {
			city: '',
			weatherData: {
				temperature: '',
				weatherType: ''
			}
		};
	}

	kelvinToCelsius(kelvinTemp) {
		var celsiusTemp = kelvinTemp - 273.15;
		celsiusTemp = Math.round(celsiusTemp);// * 100) / 100;
		return celsiusTemp;
	}

	getWeatherData(city) {
		fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=bf23050b48cf91b8e12d5164884f86b0', {
			method: 'get',
			mode: 'cors'
		}).then(response => response.json())
			.then(resp => {
				if (resp.cod >= 200 && resp.cod < 400) {
					this.setState({
						city: resp.name,
						weatherData: {
							temperature: this.kelvinToCelsius(resp.main.temp),
							weatherType: resp.weather[0].main
						}
					})
					console.log(this.state);
				} else {
					alert("The data can not be fetched for an empty input.");
				}
			})
			.catch(err => {
				throw(err)
			});
	}

	render() {
		var bgImage = {
			backgroundImage: 'url(' + pic + ')'
		};

    return (
      <div style={bgImage} className="clearfix">
				<CityInput weatherDataFunc={this.getWeatherData}/>
				<div id="cards-container">
					<CurrentDayCard
						city={this.state.city!=''?this.state.city:"No Data"}
						temperature={this.state.weatherData.temperature!=''?this.state.weatherData.temperature:"-"}
						weatherType={this.state.weatherData.weatherType!=''?this.state.weatherData.weatherType:"No Data"}
					/>
					<NextDayCard day="Monday" iconClass="wi-day-cloudy" weatherType = "Cloudy" maxTemp="25" minTemp="18"/>
					<NextDayCard day="Tuesday" iconClass="wi-day-rain" weatherType = "Rainy" maxTemp="21" minTemp="14"/>
					<NextDayCard day="Wednesday" iconClass="wi-day-sunny" weatherType = "Sunny" maxTemp="23" minTemp="15"/>
				</div>
      </div>
    )
  }
}
