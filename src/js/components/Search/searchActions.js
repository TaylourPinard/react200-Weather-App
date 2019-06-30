export function updateCityName(city) {
  return {
    type: 'UPDATE_CITY_NAME',
    payload: { city }
  };
}

export function getWeather(city){
  return {
    type: 'GET_WEATHER',
    async payload(city) {
      const weatherData = await fetch(`./search/${city}`);
      return weatherData;
    }
  }
}