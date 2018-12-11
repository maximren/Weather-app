import React, { PureComponent } from 'react';
import WeatherForm from './WeatherForm';
import LocationForm from './LocationForm';

class MyCity extends PureComponent {
  render() {
    return (
      <div>
        <LocationForm />
        <WeatherForm />
      </div>
    )
  }
}

export default MyCity;
