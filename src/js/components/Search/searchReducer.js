// const defaultState = {
//   city: '',
//   temp: 0.0,
//   pressure: 0,
//   humidity: 0,
//   low: 0,
//   high: 0,
//   wind: 0.0
// }

// export default function searchReducer(state = defaultState, amount){
//   const { type, payload } = action;

//   switch (type) {
//     case 'UPDATE_CITY_VALUE': {
//       return{
//         ...state,
//         city: payload.city
//       }
//     }

//     case 'GET_WEATHER': {
//       return {
//         ...state,
//         city: payload.city,
//         temp: payload.temp,
//         pressure: payload.pressure,
//         humidity: payload.humidity,
//         low: payload.low,
//         high: payload.high,
//         wind: payload.wind
//       }
//     }

//     default: {
//       return state;
//     }
//   }
// }