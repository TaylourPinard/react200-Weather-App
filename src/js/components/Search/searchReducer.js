const defaultState = {
  city: '',
  temp: 0.0,
  pressure: 0,
  humidity: 0,
  low: 0,
  high: 0,
  wind: 0.0
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

    default: {
      return state;
    }
  }
}