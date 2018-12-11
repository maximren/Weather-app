import React, { PureComponent } from 'react'

const locationApi = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCTbv6-mpOqcBaO0RUBZRmXElCDWK0pNOU";

class Location extends PureComponent {
  render() {
    return (
      <div>
        My location
      </div>
    )
  }
}

export default Location;
