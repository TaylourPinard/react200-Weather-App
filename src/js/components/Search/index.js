import { connect } from 'react-redux';
import Search from './Search';
//import /* { actions } */ from './searchActions';

function mapStoreToProps(store){
  return {
    // city: store.city,
    // lat: store.lat,
    // long: store.long,
    // temp: store.temp,
    // pressure: store.pressure,
    // humidity: store.humidity,
    // low: store.low,
    // high: store.high,
    // wind: store.wind
  };
}

export default connect(mapStoreToProps)(Search);