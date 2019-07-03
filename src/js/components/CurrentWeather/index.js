import { connect } from 'react-redux';
import CurrentWeather from './CurrentWeather';

function mapStoreToProps(store){
  return {
    city: store.search.city,
    icon: store.search.icon,
    lat: store.search.lat,
    lon: store.search.lon,
    temp: store.search.temp,
    pressure: store.search.pressure,
    humidity: store.search.humidity,
    low: store.search.low,
    high: store.search.high,
    wind: store.search.wind,
    history: store.search.history
  };
}

export default connect(mapStoreToProps)(CurrentWeather);