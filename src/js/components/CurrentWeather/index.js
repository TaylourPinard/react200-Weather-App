import { connect } from 'react-redux';
import CurrentWeather from './CurrentWeather';

function mapStoreToProps(store){
  return {
    city: store.search.city,
    lat: store.search.lat,
    lon: store.search.lon,
    temp: store.search.temp,
    pressure: store.search.pressure,
    humidity: store.search.humidity,
    low: store.search.low,
    high: store.search.high,
    wind: store.search.wind
  };
}

export default connect(mapStoreToProps)(CurrentWeather);