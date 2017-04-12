export const kelvinToCelsius = (kelvinTemp) => {
	var celsiusTemp = kelvinTemp - 273.15;
	celsiusTemp = Math.round(celsiusTemp);
	return celsiusTemp;
}

export const getNextDays = () => {
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
	var nextDays = new Array(5);

	for (let i=0; i<5; i++) {
		nextDays[i] = weekday[(d.getDay()+(i+1)) % weekday.length];
	}

	return nextDays;
}

export const checkMainWeatherType = (weatherType) => {
	switch(weatherType) {
		case "Thunderstorm":
			return "wi-storm-showers";

		case "Drizzle":
			return "wi-showers";

		case "Rain":
			return "wi-rain";

		case "Snow":
			return "wi-snow";

		case "Mist":
		case "Smoke":
		case "Haze":
		case "Fog":
			return "wi-fog";

		case "Clear":
			return "wi-day-sunny";

		case "Clouds":
			return "wi-cloudy";

		case "Dust":
			return "wi-dust";

		default:
			return "wi-na";
	}
}
