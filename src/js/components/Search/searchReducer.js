const defaultState = {
  city: '',
  lat: 0.0,
  lon: 0.0,
  temp: 0.0,
  pressure: 0,
  humidity: 0,
  low: 0,
  high: 0,
  wind: 0.0,
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
        city: payload.data.name,
        lat: payload.data.coord.lat,
        lon: payload.data.coord.lon,
        temp: payload.data.main.temp,
        pressure: payload.data.main.pressure,
        humidity: payload.data.main.humidity,
        low: payload.data.main.temp_min,
        high: payload.data.main.temp_max,
        wind: payload.data.wind.speed
      }
    }

    default: {
      return state;
    }
  }
}