/* eslint-disable eol-last */
import React from 'react';
import PropTypes from 'prop-types';

import {
  updateCityName,
  getWeather,
} from './searchActions';

export default class Search extends React.Component {
  constructor(props){
    super(props);

    this.handleGetWeather = this.handleGetWeather.bind(this);
    this.handleUpdateCity = this.handleUpdateCity.bind(this);
  }

  handleUpdateCity(event){
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateCityName(value));
  }

  handleGetWeather(event){
    event.preventDefault();
    const { dispatch, city } = this.props;
    dispatch(getWeather(city));
  }

  render() {
    return (
      <form className='col-md-12'>
        <div className='row'>
          <div className='btn-group'>
            <button type='button' className='btn btn-primary'>San Diego</button>
            <button type='button' className='btn btn-primary'>New York</button>
            <button type='button' className='btn btn-primary'>Washington D.C.</button>
            <button type='button' className='btn btn-primary'>London</button>
            <button type='button' className='btn btn-primary'>Tokyo</button>
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

Search.propTypes = {
  store: PropTypes.object
};