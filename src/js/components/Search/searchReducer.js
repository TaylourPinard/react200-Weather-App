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

    case 'GET_WEATHER': {
      return {
        ...state,
        city: payload.name,
        lat: payload.coord.lat,
        lon: payload.coord.lon,
        temp: payload.main.temp,
        pressure: payload.main.pressure,
        humidity: payload.main.humidity,
        low: payload.main.temp_min,
        high: payload.main.temp_max,
        wind: payload.wind.speed
      }
    }

    default: {
      return state;
    }
  }
}