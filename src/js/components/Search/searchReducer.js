const defaultState = {
  id: -1,
  city: '',
  lat: '',
  lon: '',
  temp: '',
  pressure: '',
  humidity: '',
  low: '',
  high: '',
  wind: '',
  history: []
}

export default function searchReducer(state = defaultState, action){
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_CITY_NAME': {
      return{
        ...state,
        city: payload.city
      }
    }

    case 'GET_WEATHER_FULFILLED': {
      return {
        ...state,
        id: payload.data.id,
        city: payload.data.name,
        weather: payload.data.weather[0].description,
        lat: payload.data.coord.lat,
        lon: payload.data.coord.lon,
        icon: payload.data.weather[0].icon,
        temp: payload.data.main.temp,
        pressure: payload.data.main.pressure,
        humidity: payload.data.main.humidity,
        low: payload.data.main.temp_min,
        high: payload.data.main.temp_max,
        wind: payload.data.wind.speed,
        history: [
          ...state.history,
          {
            city: payload.data.name,
            date: new Date().toLocaleString(),
          }
        ]
      }
    }

    default: {
      return state;
    }
  }
}