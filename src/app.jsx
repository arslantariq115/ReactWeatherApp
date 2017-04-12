import './index.scss';
import React from 'react';
import pic from './weather.jpg';
import CurrentDayCard from './components/CurrentDayCard/CurrentDayCard';
import NextDayCard from './components/NextDayCard/NextDayCard';
import NotificationSystem from 'react-notification-system';
import LocationDropDown from './components/LocationDropDown/LocationDropDown'
import { kelvinToCelsius, getNextDays, checkMainWeatherType } from './helpers/utils'

export default class App extends React.Component {
	_notificationSystem = null;

	constructor(props){
		super(props);

		this.getWeatherData = this.getWeatherData.bind(this);
		this._addNotification = this._addNotification.bind(this);

		this.state = {
			city: '',
			country: '',
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

	_addNotification() {
		this._notificationSystem.addNotification({
			message: 'Sorry! The weather data can not be fetched at the moment.',
			level: 'error'
		});
	}

	componentDidMount() {
		this._notificationSystem = this.refs.notificationSystem;
	}

	componentWillMount() {
		//by default Lahore's data
		const location = {
			location: {
				lat: 31.5546,
				lng: 74.3572
			}
		}

		this.getWeatherData(location);
	}

	getWeatherData(location) {
		const { lat, lng } = location.location

		//requesting current day data
		fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=bf23050b48cf91b8e12d5164884f86b0`, {
			method: 'get',
			mode: 'cors'
		}).then(response => response.json())
			.then(resp => {
				if (resp.cod >= 200 && resp.cod < 400) {
					this.setState({
						city: resp.name,
						country: resp.sys.country,
						weatherData: {
							temperature: kelvinToCelsius(resp.main.temp),
							weatherType: resp.weather[0].main
						}
					})
				} else {
					this._addNotification();
				}
			})
			.catch(err => {
				throw(err)
			});

		//requesting data for next three days
		fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lng}&mode=json&cnt=5&APPID=bf23050b48cf91b8e12d5164884f86b0`, {
			method: 'get',
			mode: 'cors'
		}).then(response => response.json())
			.then(resp => {
				if (resp.cod >= 200 && resp.cod < 400) {
					this.setState({
						nextDaysData: resp
					})
				} else {
					this._addNotification();
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

		var nextDays = getNextDays();

    return (
      <div style={bgImage} className="clearfix">
				<div>
					<NotificationSystem ref="notificationSystem"/>
				</div>

				<CurrentDayCard
					city={this.state.city}
					country={this.state.country}
					iconClass={checkMainWeatherType(this.state.weatherData.weatherType)}
					temperature={this.state.weatherData.temperature}
					weatherType={this.state.weatherData.weatherType}
				/>

				<LocationDropDown onSelect={this.getWeatherData}/>

				<div id="cards-container">
					<NextDayCard
						day={nextDays[0]}
						iconClass= {checkMainWeatherType(this.state.nextDaysData.list[0].weather[0].main)}
						weatherType= {this.state.nextDaysData.list[0].weather[0].main}
						maxTemp= {kelvinToCelsius(this.state.nextDaysData.list[0].temp.max)}
						minTemp= {kelvinToCelsius(this.state.nextDaysData.list[0].temp.min)}
					/>

					<NextDayCard
						day={nextDays[1]}
						iconClass= {checkMainWeatherType(this.state.nextDaysData.list[1].weather[0].main)}
						weatherType= {this.state.nextDaysData.list[1].weather[0].main}
						maxTemp= {kelvinToCelsius(this.state.nextDaysData.list[1].temp.max)}
						minTemp= {kelvinToCelsius(this.state.nextDaysData.list[1].temp.min)}
					/>

					<NextDayCard
						day={nextDays[2]}
						iconClass= {checkMainWeatherType(this.state.nextDaysData.list[2].weather[0].main)}
						weatherType= {this.state.nextDaysData.list[2].weather[0].main}
						maxTemp= {kelvinToCelsius(this.state.nextDaysData.list[2].temp.max)}
						minTemp= {kelvinToCelsius(this.state.nextDaysData.list[2].temp.min)}
					/>

					<NextDayCard
						day={nextDays[3]}
						iconClass= {checkMainWeatherType(this.state.nextDaysData.list[3].weather[0].main)}
						weatherType= {this.state.nextDaysData.list[3].weather[0].main}
						maxTemp= {kelvinToCelsius(this.state.nextDaysData.list[3].temp.max)}
						minTemp= {kelvinToCelsius(this.state.nextDaysData.list[3].temp.min)}
					/>

					<NextDayCard
						day={nextDays[4]}
						iconClass= {checkMainWeatherType(this.state.nextDaysData.list[4].weather[0].main)}
						weatherType= {this.state.nextDaysData.list[4].weather[0].main}
						maxTemp= {kelvinToCelsius(this.state.nextDaysData.list[4].temp.max)}
						minTemp= {kelvinToCelsius(this.state.nextDaysData.list[4].temp.min)}
					/>
				</div>
      </div>
    )
  }
}
