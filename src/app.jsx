import './index.scss';
import React from 'react';
import pic from './weather.jpg';

export default class App extends React.Component {
  render() {
		var bgImage = {
			backgroundImage: 'url(' + pic + ')'
		};

		var inputStyle = {
			float: "right",
			backgroundColor: "#ccdef9",
			marginTop: 30,
			marginRight: 50,
			marginBottom: 10,
			height: 35,
			width: 220,
			border: "#5092fc",
			paddingLeft: 10
 		};

 		var cardsDiv = {
 			marginTop: 400,
		};

		var cardActive = {
			width: 200,
			marginLeft: 50,
			color: "white",
			display: "inline-block"
		};

		var tempValue = {
			fontSize: 80,
			marginTop: 1,
			marginBottom: 1
		};

		var minMaxTemp = {
			fontSize: 25,
			marginTop: 20,
			marginBottom: 1
		};


		var weatherText = {
			fontSize: 30,
			marginTop: 1
		};

		var iconSize = {
			fontSize: 80,
			marginLeft: 70
		};

    return (
      <div style={bgImage} className="clearfix">
				<input id="city_name" placeholder="Enter city's name" style={inputStyle}></input>
				<div style={cardsDiv}>
					<div style={cardActive}>
						<h1>Lahore</h1>
						Today
						<p style={tempValue}>23 &#8451;</p>
						<p style={weatherText}>Sunny</p>
					</div>
					<div className="cardNextDays">
						<h3 className="removeTopMargin">Monday</h3>
						<i className="wi wi-day-sunny-overcast" style={iconSize}></i>
						<p style={minMaxTemp}>25 &#8451; / 18 &#8451;</p>
						<h3>Cloudy</h3>
					</div>
					<div className="cardNextDays">
						<h3 className="removeTopMargin">Tuesday</h3>
						<i className="wi wi-day-sunny" style={iconSize}></i>
						<p style={minMaxTemp}>25 &#8451; / 18 &#8451;</p>
						<h3>Sunny</h3>
					</div>
					<div className="cardNextDays">
						<h3 className="removeTopMargin">Wednesday</h3>
						<i className="wi wi-day-sunny" style={iconSize}></i>
						<p style={minMaxTemp}>25 &#8451; / 18 &#8451;</p>
						<h3>Sunny</h3>
					</div>
				</div>
      </div>
    )
  }
}
