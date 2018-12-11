import React, { PureComponent } from 'react'

import { connect } from 'react-redux';

import { getWeather } from '../actions/weatherAction';
import { bindActionCreators } from 'redux';


class WeatherForm extends PureComponent {
  componentDidMount() {
    this.props.getWeather();
  }

  render() {
    return (
      <div>
        <img className="icon" alt="icon" src={this.props.weather.current.condition.icon} />
        <div>{this.props.weather.current.condition.text}</div>
        <div>Temperature is {this.props.weather.current.temp_c}°C</div>
        <div>Wind is {this.props.weather.current.wind_dir},
        speed is {this.props.weather.current.wind_kph} k/h </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  weather: state.weatherReducer.weatherItem
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getWeather
    },
    dispatch
  );



export default connect(mapStateToProps, mapDispatchToProps)(WeatherForm);
