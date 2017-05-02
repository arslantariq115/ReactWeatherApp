import { connect } from 'react-redux'

import { fetchCurrentWeatherData, fetchNextDaysWeatherData } from '../modules/actions'
import app from '../app'

const mapActionCreators = {
	fetchCurrentWeatherData,
	fetchNextDaysWeatherData
}

const mapStateToProps = (state) => {
	return {
		isFetchingCurrentWeatherData: state.currentWeather.isFetchingCurrentWeatherData,
		city: state.currentWeather.city,
		country: state.currentWeather.country,
		weatherData: {
			temperature: state.currentWeather.weatherData.temperature,
			weatherType: state.currentWeather.weatherData.weatherType
		},
		nextDaysData: state.nextDaysWeather.nextDaysData
	}
}

export default connect(mapStateToProps, mapActionCreators)(app)
