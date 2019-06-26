export function updateCityName(city) {
  return {
    type: 'UPDATE_CITY_NAME',
    payload: { city }
  };
}

export function getWeather(city){
  return new Promise((resolve, reject) => {
    axios.get(`/search/${city}`)
    .then(response => response.json())
    .then(response => {
      if(response.errors) reject(response.errors);
      else resolve(response);
    })
    .catch(reject);
  });
}