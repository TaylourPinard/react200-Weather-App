import { connect } from 'react-redux';
import Search from './Search';
import { 
  updateCityName,
  getWeather
 } from './searchActions';

function mapStoreToProps(store){
  return {
    city: store.city,
    lat: store.lat,
    lon: store.lon,
    temp: store.temp,
    pressure: store.pressure,
    humdity: store.humdity,
    low: store.low,
    high: store.high,
    wind: store.wind
  };
}

export default connect(mapStoreToProps)(Search);