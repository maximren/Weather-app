import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getWeather } from '../actions/weatherAction';


class LocationForm extends PureComponent {
  componentDidMount(){
    this.props.getWeather();
  }

  render() {
    if(this.props.weather) {
    return (
      <div>
        <div>{this.props.weather.location.country}</div>
        <div>{this.props.weather.location.name}</div>
        <div>Local time: {this.props.weather.location.localtime}</div>
      </div>
    )}
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

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);
