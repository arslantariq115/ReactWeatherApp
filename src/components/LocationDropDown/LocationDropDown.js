import React from 'react'
import GeoSuggest from 'react-geosuggest'

class LocationDropDown extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<span className="filter-container">
				<GeoSuggest
					className="geosuggest"
					placeholder="Search Places"
					onSuggestSelect={this.props.onSelect}/>
			</span>
		)
	}
}

export default LocationDropDown
