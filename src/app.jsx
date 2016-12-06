import './index.scss';
import React from 'react';
import pic from './weather.jpg';
import CityInput from './components/CityInput/CityInput';
import CurrentDayCard from './components/CurrentDayCard/CurrentDayCard';
import NextDayCard from './components/NextDayCard/NextDayCard';

export default class App extends React.Component {
  render() {
		var bgImage = {
			backgroundImage: 'url(' + pic + ')'
		};

    return (
      <div style={bgImage} className="clearfix">
				<CityInput/>
				<div id="cards-container">
					<CurrentDayCard city="Lahore" temperature="23" weatherType="Sunny"/>
					<NextDayCard day="Monday" iconClass="wi-day-cloudy" weatherType = "Cloudy" maxTemp="25" minTemp="18"/>
					<NextDayCard day="Tuesday" iconClass="wi-day-rain" weatherType = "Rainy" maxTemp="21" minTemp="14"/>
					<NextDayCard day="Wednesday" iconClass="wi-day-sunny" weatherType = "Sunny" maxTemp="23" minTemp="15"/>
				</div>
      </div>
    )
  }
}
