export const CURRENT_WEATHER_REQUEST = 'CURRENT_WEATHER_REQUEST';
export const CURRENT_WEATHER_RECEIVE = 'CURRENT_WEATHER_RECEIVE';
export const CURRENT_WEATHER_FAILURE = 'CURRENT_WEATHER_FAILURE';

export const NEXT_DAYS_WEATHER_REQUEST = 'NEXT_DAYS_WEATHER_REQUEST';
export const NEXT_DAYS_WEATHER_RECEIVE = 'NEXT_DAYS_WEATHER_RECEIVE';
export const NEXT_DAYS_WEATHER_FAILURE = 'NEXT_DAYS_WEATHER_FAILURE';

const isFetchingCurrent = () => {
	return {
		type: CURRENT_WEATHER_REQUEST
	}
};

export function fetchCurrentWeatherData(location) {
	const { lat, lng } = location.location;
	isFetchingCurrent();

	//requesting current day data
	fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=bf23050b48cf91b8e12d5164884f86b0`, {
		method: 'get',
		mode: 'cors'
	}).then(response => response.json())
		.then(resp => {
			if (resp.cod >= 200 && resp.cod < 400) {
				return {
					type: CURRENT_WEATHER_RECEIVE,
					payload: resp
				}
			} else {
				return {
					type: CURRENT_WEATHER_FAILURE
				}
			}
		})
		.catch(err => {
			throw(err)
		});
}

const isFetchingNext = () => {
	return {
		type: NEXT_DAYS_WEATHER_REQUEST
	}
};

export function fetchNextDaysWeatherData(location) {
	const { lat, lng } = location.location;
	isFetchingNext()

	//requesting data for next five days
	fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lng}&mode=json&cnt=5&APPID=bf23050b48cf91b8e12d5164884f86b0`, {
		method: 'get',
		mode: 'cors'
	}).then(response => response.json())
		.then(resp => {
			if (resp.cod >= 200 && resp.cod < 400) {
				return {
					type: NEXT_DAYS_WEATHER_RECEIVE,
					payload: resp.list
				}
			} else {
				return {
					type: NEXT_DAYS_WEATHER_FAILURE
				}
			}
		})
		.catch(err => {
			throw(err)
		});
}
