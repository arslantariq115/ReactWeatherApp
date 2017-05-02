import { combineReducers } from 'redux'
import { kelvinToCelsius } from '../helpers/utils'
import {
CURRENT_WEATHER_REQUEST,
CURRENT_WEATHER_RECEIVE,
CURRENT_WEATHER_FAILURE,

NEXT_DAYS_WEATHER_REQUEST,
NEXT_DAYS_WEATHER_RECEIVE,
NEXT_DAYS_WEATHER_FAILURE,
} from './actions'

const initStateCurrent = {
	isFetchingCurrentWeatherData: false,
	city: '',
	country: '',
	weatherData: {},

};

const initStateNext = {
	isFetchingNextDaysWeatherData: false,
	nextDaysData: null,
};

function currentWeatherReducer(state = initStateCurrent, action) {
	switch(action.type) {
		case CURRENT_WEATHER_REQUEST:
			return state.setState({
				isFetchingCurrentWeatherData: true
			});

		case CURRENT_WEATHER_RECEIVE:
			return state.setState({
				isFetchingCurrentWeatherData: false,
				city: action.payload.name,
				country: action.payload.sys.country,
				weatherData: {
					temperature: kelvinToCelsius(action.payload.main.temp),
					weatherType: action.payload.weather[0].main
				}
			});

		case CURRENT_WEATHER_FAILURE:
			return;

		default:
			return initStateCurrent;
	}
}

function nextDaysWeatherReducer(state = initStateNext, action) {
	switch(action.type) {
		case NEXT_DAYS_WEATHER_REQUEST:
			return state.setState({
				isFetchingNextDaysWeatherData: true
			});

		case NEXT_DAYS_WEATHER_RECEIVE:
			return state.setState({
				isFetchingNextDaysWeatherData: false,
				nextDaysData: action.payload
			});

		case NEXT_DAYS_WEATHER_FAILURE:
			return;

		default:
			return initStateNext;
	}
}

export default combineReducers({
	currentWeather: currentWeatherReducer,
	nextDaysWeather: nextDaysWeatherReducer
})
