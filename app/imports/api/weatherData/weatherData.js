import PropTypes, { number } from 'prop-types';

async function getWeatherDataByCoordinate(lat, lon) {
  const apiKey = 'e456f65bff56a2386bbd869fad5f0b2d';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  // eslint-disable-next-line no-undef
  const response = await fetch(url);
  const weatherData = await response.json();
  return weatherData;
}

export function getRelevantWeatherData(lat, lon) {

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
      return weatherData;
    }
    return 'no temperature found';
  });
}
