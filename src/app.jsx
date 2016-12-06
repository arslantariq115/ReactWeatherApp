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
					<CurrentDayCard/>
					<NextDayCard day="Monday" weatherType = "Sunny"/>
					<NextDayCard day="Tuesday" weatherType = "Sunny"/>
					<NextDayCard day="Wednesday" weatherType = "Sunny"/>
				</div>
      </div>
    )
  }
}
