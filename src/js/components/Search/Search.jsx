/* eslint-disable eol-last */
import React from 'react';

import {
  updateCityName,
  getWeather,
} from './searchActions';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleUpdateCity = this.handleUpdateCity.bind(this);
    this.handleGetWeather = this.handleGetWeather.bind(this);
  }

  handleUpdateCity(event){
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateCityName(value));
  }

  handleGetWeather(event){
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(getWeather(value));
  }

  render() {
    return (
      <form className='col-md-12'>
        <div className='row'>
          <div className='btn-group'>
            <button className='btn btn-primary'>San Diego</button>
            <button className='btn btn-primary'>New York</button>
            <button className='btn btn-primary'>Washington D.C.</button>
            <button className='btn btn-primary'>London</button>
            <button className='btn btn-primary'>Tokyo</button>
          </div>
        </div>
        <div className='row'>
          <input className='form-control col-sm-11' type='text' onChange={ this.handleUpdateCity }></input>
          <button type='button' className='col-sm-1' onClick={ this.handleGetWeather }>Go!</button>
        </div>
      </form>
    );
  }
}