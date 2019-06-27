export function updateCityName(city) {
  return {
    type: 'UPDATE_CITY_NAME',
    payload: { city }
  };
}