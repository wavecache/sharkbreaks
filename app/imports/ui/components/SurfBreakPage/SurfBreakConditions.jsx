import React, { useState, useEffect } from 'react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { blueColor, blueTextStyle } from '../../layouts/style';

export default function SurfBreakConditions(props) {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = 'e456f65bff56a2386bbd869fad5f0b2d';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}`;

      // eslint-disable-next-line no-undef
      await fetch(url)
        .then(res => res.json())
        .then(response => {
          const weatherData = {
            temperature: 'no data',
            windSpeed: 'no data',
            windDir: 'no data',
            weatherDescription: 'no data',
          };

          if (response) {
            weatherData.weatherDescription = response.weather[0].description;
            const main = response.main;
            weatherData.temperature = main.temp;
            weatherData.windSpeed = response.wind.speed;
            weatherData.windDir = response.wind.deg;
          }
          setData(weatherData);
        });
    };
    fetchData();
  }, [data]);

  return (
    <Segment.Group compact size='large' style={{ ...blueTextStyle, ...{ borderColor: blueColor } }} >
      <Segment>
        <h4 style={ { ...blueTextStyle, ...{ fontSize: '2rem' } } }>Surfing Conditions</h4>
      </Segment>
      <Segment.Group style={{ borderColor: blueColor }}>
        <Segment>
          <p>Temperature: {(data.temperature - 273).toFixed(1)} °C</p>
        </Segment>
        <Segment>
          <p>Wind Speed: {data.windSpeed} mph</p>
        </Segment>
        <Segment>
          <p>Wind Direction: {data.windDir}</p>
        </Segment>
        <Segment>
          <p>Weather Description: {data.weatherDescription} </p>
        </Segment>
      </Segment.Group>
    </Segment.Group>
  );
}

SurfBreakConditions.propTypes = {
  lat: PropTypes.string.isRequired,
  lon: PropTypes.string.isRequired,
};
