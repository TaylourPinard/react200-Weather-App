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
    this.handleCityButton = this.handleCityButton.bind(this);
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

  handleCityButton(event){
    const { dispatch } = this.props;
    const button = document.getElementById(event.target.id);
    if((button.innerText || button.textContent) != 'Washington D.C.') dispatch(getWeather(button.innerText || button.textContent));
    else dispatch(getWeather('Washington'));
  }

  render() {
    return (
      <form className='col-md-12'>
        <div className='row'>
          <div className='btn-group'>
            <button type='button' className='btn btn-primary' id='San Diego' onClick={ this.handleCityButton }>San Diego</button>
            <button type='button' className='btn btn-primary' id='New York' onClick={ this.handleCityButton }>New York</button>
            <button type='button' className='btn btn-primary' id='Washington' onClick={ this.handleCityButton }>Washington D.C.</button>
            <button type='button' className='btn btn-primary' id='London' onClick={ this.handleCityButton }>London</button>
            <button type='button' className='btn btn-primary' id='Tokyo' onClick={ this.handleCityButton }>Tokyo</button>
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