import React, { PureComponent } from 'react';

import WeatherForm from './WeatherForm';
import LocationForm from './LocationForm';
import '../App.css';

class MyCity extends PureComponent {
  render() {
    return (
      <div className="collection my-city">
        <LocationForm />
        <WeatherForm />
      </div>
    )
  }
}

export default MyCity;
