import React, { PureComponent } from 'react';
import WeatherForm from './WeatherForm';
import Location from './Location';

class MyCity extends PureComponent {
  render() {
    return (
      <div>
        <Location />
        <WeatherForm />
      </div>
    )
  }
}

export default MyCity;
