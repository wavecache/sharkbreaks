import React, { useState, useEffect } from 'react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { blueColor, blueTextStyle } from '../../layouts/style';
import { getWeatherDataByCoordinate } from '../../../api/weatherData/weatherData';

class SurfBreakConditions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weatherData: {
        temperature: 'no data',
        windSpeed: 'no data',
        windDir: 'no data',
        weatherDescription: 'no data',
      },
    };

    this.runPeriodically = (setInterval(this.getRelevantWeatherData(this.props.lat, this.props.lon), 10000));
  }

  getRelevantWeatherData(lat, lon) {

    const weatherData = {
      temperature: 'no data',
      windSpeed: 'no data',
      windDir: 'no data',
      weatherDescription: 'no data',
    };

    getWeatherDataByCoordinate(lat, lon).then((response) => {
      if (response) {
        weatherData.weatherDescription = response.weather[0].description;
        const main = response.main;
        weatherData.temperature = main.temp;
        weatherData.windSpeed = response.wind.speed;
        weatherData.windDir = response.wind.deg;
      }
      return weatherData;
    });

  render() {

    return (
      <Segment.Group compact size='large' style={{ ...blueTextStyle, ...{ borderColor: blueColor } }} >
        <Segment>
          <h4 style={ { ...blueTextStyle, ...{ fontSize: '2rem' } } }>Surfing Conditions</h4>
        </Segment>
        <Segment.Group style={{ borderColor: blueColor }}>
          <Segment>
            <p>Temperature: {this.state.weatherData.temperature} °F</p>
          </Segment>
          <Segment>
            <p>Wind Speed: {this.state.weatherData.windSpeed} mph</p>
          </Segment>
          <Segment>
            <p>Wind Direction: {this.state.weatherData.windDir}</p>
          </Segment>
          <Segment>
            <p>Weather Description: {this.state.weatherData.weatherDescription} </p>
          </Segment>
        </Segment.Group>
      </Segment.Group>
    );
  }
}

SurfBreakConditions.propTypes = {
  lat: PropTypes.string.isRequired,
  lon: PropTypes.string.isRequired,
};

export default SurfBreakConditions;
