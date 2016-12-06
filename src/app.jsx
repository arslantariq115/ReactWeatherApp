import './index.scss';
import React from 'react';
import pic from './weather.jpg';

export default class App extends React.Component {
  render() {
		var bgImage = {
			backgroundImage: 'url(' + pic + ')'
		};

    return (
      <div style={bgImage} className="clearfix">
				<input id="city-input" placeholder="Enter city's name"></input>
				<div id="cards-container">
					<div id="card-active">
						<h1>Lahore</h1>
						Today
						<p id="current-temperature">23<i className="wi wi-degrees"></i>C</p>
						<p id="active-weather-type">Sunny</p>
					</div>
					<div className="cards-next-days">
						<h3 className="card-heading">Monday</h3>
						<i className="wi wi-day-sunny-overcast icon-size"></i>
						<p className="min-max-temperature">25 <i className="wi wi-degrees"></i>C / 18 <i className="wi wi-degrees"></i>C</p>
						<h3>Cloudy</h3>
					</div>
					<div className="cards-next-days">
						<h3 className="card-heading">Tuesday</h3>
						<i className="wi wi-day-sunny icon-size"></i>
						<p className="min-max-temperature">25 <i className="wi wi-degrees"></i>C / 18 <i className="wi wi-degrees"></i>C</p>
						<h3>Sunny</h3>
					</div>
					<div className="cards-next-days">
						<h3 className="card-heading">Wednesday</h3>
						<i className="wi wi-day-sunny icon-size"></i>
						<p className="min-max-temperature">25 <i className="wi wi-degrees"></i>C / 18 <i className="wi wi-degrees"></i>C</p>
						<h3>Sunny</h3>
					</div>
				</div>
      </div>
    )
  }
}
