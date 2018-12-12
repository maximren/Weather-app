import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getOtherWeather } from '../actions/weatherAction';

import SearchForm from './SearchForm';

class OtherCity extends PureComponent {

  getWeatherDetails() {
    if (this.props.otherWeather) {
      return <div className="collection other">
        <img alt="icon" src={this.props.otherWeather.current.condition.icon} />
        <div>{this.props.otherWeather.current.condition.text}</div>
        <div>Temperature is {this.props.otherWeather.current.temp_c}°C</div>
        <div>Wind is {this.props.otherWeather.current.wind_dir},
    speed is {this.props.otherWeather.current.wind_kph} k/h </div>
      </div>
    }
    return null
  }

  render() {
    return (
      <div>
        <SearchForm onAdd={this.props.getOtherWeather} />
        {this.getWeatherDetails()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  otherWeather: state.otherCityReducer.item
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getOtherWeather
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(OtherCity);
