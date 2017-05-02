import './index.scss';
import React from 'react';
import Loader from 'react-loading-overlay'
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
			city: props.city,
			country: props.country,
			weatherData: props.weatherData,
			nextDaysData: props.nextDaysData,
			isFetchingCurrentWeatherData: props.isFetchingCurrentWeatherData,
			isFetchingNextDaysWeatherData: props.isFetchingNextDaysWeatherData
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
		};

		this.getWeatherData(location);
	}

	getWeatherData(location) {
		const { fetchCurrentWeatherData, fetchNextDaysWeatherData } = this.props;

		fetchCurrentWeatherData(location);
		fetchNextDaysWeatherData(location);
	}

	renderNextDaysData() {
		if(this.state.nextDaysData) {
			return this.state.nextDaysData.map((item, index) => {
				return (
					<NextDayCard
						key={index}
						day={getNextDays()[index]}
						iconClass= {checkMainWeatherType(item.weather[0].main)}
						weatherType= {item.weather[0].main}
						maxTemp= {kelvinToCelsius(item.temp.max)}
						minTemp= {kelvinToCelsius(item.temp.min)}
					/>
				)
			})
		}
	}

	render() {
		var bgImage = {
			backgroundImage: 'url(' + pic + ')'
		};

		return (
			<Loader
				active={this.state.isFetchingCurrentWeatherData || this.state.isFetchingNextDaysWeatherData}
				spinner
				text='Loading weather data...'
			>
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
						{
							this.renderNextDaysData()
						}
					</div>
				</div>
			</Loader>
    )
  }
}
