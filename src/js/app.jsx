import React from 'react';
import CurrentWeather from './components/CurrentWeather';
//import Search from './components/Search';
import History from './components/History';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h1>SDCS Weather Application</h1>
          <p>Always know if you'll need an umbrella!</p>
        </div>

        <div className='row'>
          <CurrentWeather />
          <History />
        </div>
          
      </div>
    );
  }
}