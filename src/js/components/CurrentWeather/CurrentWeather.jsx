import React from 'react';

export default class CurrentWeather extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { icon, weather, lat, lon, temp, pressure, humidity, low, high, wind, history } = this.props;
    return (
      <div className='col-6'>
        <div className='card'>
          <h6 className='card-header alert alert-primary'>City Information</h6>
          <div className='card-body .bg-secondary'>
            <div className='row justify-content-center'>
              { history.length ? <img style={{width: '100px', height: '100px', margin: '0px', padding: '0px'}} src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={weather}></img> : '' } 
              <h2 className='mr-3 mt-4'>{ history.length ? history[history.length - 1].city : ''}</h2>
            </div>
            <p className='text-center'>{ history.length ? `lat: ${lat}, lon: ${lon}` : ''}</p>
            <div className='row'>
              <div className='card-body'>
                <h6>Temperature (F)</h6>
                <p>{ temp }</p>
              </div>
              <div className='card-body'>
                <h6>Pressure</h6>
                <p>{ pressure }</p>
              </div>
              <div className='card-body'>
                <h6>Humidity</h6>
                <p>{ humidity }</p>
              </div>
            </div>
            <div className='row'>
              <div className='card-body'>
                <h6>Lowest Temp (F)</h6>
                <p>{ low }</p>
              </div>
              <div className='card-body'>
                <h6>Highest Temp (F)</h6>
                <p>{ high }</p>
              </div>
              <div className='card-body'>
                <h6>Wind Speed</h6>
                <p>{ wind }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}