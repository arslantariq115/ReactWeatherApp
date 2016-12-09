import './index.scss';
import React from 'react';
import pic from './weather.jpg';
import CityInput from './components/CityInput/CityInput';
import CurrentDayCard from './components/CurrentDayCard/CurrentDayCard';
import NextDayCard from './components/NextDayCard/NextDayCard';
//import mainWeatherTypes from './weathertypes.json';

export default class App extends React.Component {
	constructor(props){
		super(props);

		this.kelvinToCelsius = this.kelvinToCelsius.bind(this);
		this.getWeatherData = this.getWeatherData.bind(this);
		this.getNextDays = this.getNextDays.bind(this);
		this.checkMainWeatherType = this.checkMainWeatherType.bind(this);

		this.state = {
			city: '',
			weatherData: {
				temperature: '',
				weatherType: ''
			},
			nextDaysData: {
				list: [
					{
						temp: {
							max: '',
							min: '',
						},
						weather: [
							{
								main: ''
							}
						]
					},
					{
						temp: {
							max: '',
							min: '',
						},
						weather: [
							{
								main: ''
							}
						]
					},
					{
						temp: {
							max: '',
							min: '',
						},
						weather: [
							{
								main: ''
							}
						]
					}
				]
			}
		};
	}

	componentWillMount() {
		//requesting current day data
		fetch('http://api.openweathermap.org/data/2.5/weather?q=lahore&APPID=bf23050b48cf91b8e12d5164884f86b0', {
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
				} else {
					//alert("The data can not be fetched.");
				}
			})
			.catch(err => {
				throw(err)
			});

		//requesting data for next three days
		fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q=lahore&mode=json&cnt=3&APPID=bf23050b48cf91b8e12d5164884f86b0', {
			method: 'get',
			mode: 'cors'
		}).then(response => response.json())
			.then(resp => {
				if (resp.cod >= 200 && resp.cod < 400) {
					this.setState({
						nextDaysData: resp
					})
				} else {
					//alert("The data can not be fetched.");
				}
			})
			.catch(err => {
				throw(err)
			});
	}

	kelvinToCelsius(kelvinTemp) {
		var celsiusTemp = kelvinTemp - 273.15;
		celsiusTemp = Math.round(celsiusTemp);
		return celsiusTemp;
	}

	getNextDays() {
		var d = new Date();
		var weekday = new Array(7);
		weekday[0] = "Sunday";
		weekday[1] = "Monday";
		weekday[2] = "Tuesday";
		weekday[3] = "Wednesday";
		weekday[4] = "Thursday";
		weekday[5] = "Friday";
		weekday[6] = "Saturday";

		var n = weekday[d.getDay()];

		var nextDays = new Array(3);
		nextDays[0] = weekday[(d.getDay()+1) % weekday.length];
		nextDays[1] = weekday[(d.getDay()+2) % weekday.length];
		nextDays[2] = weekday[(d.getDay()+3) % weekday.length];

		return nextDays;
	}

	getWeatherData(city) {
		//requesting current day data
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
				} else {
					//alert("The data can not be fetched for an empty input.");
				}
			})
			.catch(err => {
				throw(err)
			});

		//requesting data for next three days
		fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&mode=json&cnt=3&APPID=bf23050b48cf91b8e12d5164884f86b0', {
			method: 'get',
			mode: 'cors'
		}).then(response => response.json())
			.then(resp => {
				if (resp.cod >= 200 && resp.cod < 400) {
					this.setState({
						nextDaysData: resp
					})
				} else {
					//alert("The data can not be fetched.");
				}
			})
			.catch(err => {
				throw(err)
			});
	}

	checkMainWeatherType(weatherType) {
		if(weatherType=="Thunderstorm"){
			return "wi-storm-showers";
		}
		else if(weatherType=="Drizzle"){
			return "wi-showers";
		}
		else if(weatherType=="Rain"){
			return "wi-rain";
		}
		else if(weatherType=="Snow"){
			return "wi-snow";
		}
		else if(weatherType=="Mist" || weatherType=="Smoke" || weatherType=="Haze" || weatherType=="Fog"){
			return "wi-fog";
		}
		else if(weatherType=="Clear"){
			return "wi-day-sunny";
		}
		else if(weatherType=="Clouds"){
			return "wi-cloudy";
		}
		else {
			return "wi-na"
		}

	}

	render() {
		var bgImage = {
			backgroundImage: 'url(' + pic + ')'
		};

		var nextDays = this.getNextDays();

    return (
      <div style={bgImage} className="clearfix">
				<CityInput weatherDataFunc={this.getWeatherData}/>
				<div id="cards-container">
					<CurrentDayCard
						city={this.state.city}
						temperature={this.state.weatherData.temperature}
						weatherType={this.state.weatherData.weatherType}
					/>
					<NextDayCard
						day={nextDays[0]}
						iconClass= {this.checkMainWeatherType(this.state.nextDaysData.list[0].weather[0].main)}//"wi-day-cloudy"
						weatherType= {this.state.nextDaysData.list[0].weather[0].main}
						maxTemp= {this.kelvinToCelsius(this.state.nextDaysData.list[0].temp.max)}
						minTemp= {this.kelvinToCelsius(this.state.nextDaysData.list[0].temp.min)}
					/>
					<NextDayCard
						day={nextDays[1]}
						iconClass= {this.checkMainWeatherType(this.state.nextDaysData.list[1].weather[0].main)}//"wi-day-rain"
						weatherType= {this.state.nextDaysData.list[1].weather[0].main}
						maxTemp= {this.kelvinToCelsius(this.state.nextDaysData.list[1].temp.max)}
						minTemp= {this.kelvinToCelsius(this.state.nextDaysData.list[1].temp.min)}
					/>
					<NextDayCard
						day={nextDays[2]}
						iconClass= {this.checkMainWeatherType(this.state.nextDaysData.list[2].weather[0].main)}//"wi-day-sunny"
						weatherType= {this.state.nextDaysData.list[2].weather[0].main}
						maxTemp= {this.kelvinToCelsius(this.state.nextDaysData.list[2].temp.max)}
						minTemp= {this.kelvinToCelsius(this.state.nextDaysData.list[2].temp.min)}
					/>
				</div>
      </div>
    )
  }
}
