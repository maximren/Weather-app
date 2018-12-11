import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getWeather } from '../actions/weatherAction';



class WeatherForm extends PureComponent {
  componentDidMount() {
    this.props.getWeather();
  }

  render() {
    if (this.props.weather) {
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
    return null;
  }
}


const mapStateToProps = state => ({
  weather: state.weatherReducer.item
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getWeather
    },
    dispatch
  );



export default connect(mapStateToProps, mapDispatchToProps)(WeatherForm);
