import React from 'react';
import Search from './components/Search';
import History from './components/History';
import CurrentWeather from './components/CurrentWeather';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h1 className='display-3 text-center'>SDCS Weather Application</h1>
          <h3 className='display-3 text-center'>Always know if you'll need an umbrella!</h3>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <Search />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <CurrentWeather />
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-6'>
            <History />
          </div>
        </div>
      </div>
    );
  }
}