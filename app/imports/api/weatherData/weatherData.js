export async function getWeatherData(city) {
  const apiKey = 'e456f65bff56a2386bbd869fad5f0b2d';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  // eslint-disable-next-line no-undef
  const response = await fetch(url);
  const weatherData = await response.json();
  return weatherData;
}
