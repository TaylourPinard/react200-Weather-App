/* eslint-disable eol-last */
import React from 'react';

export default class ExpenseEntries extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    // const {   } = this.props;
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
          <input className='form-control col-sm-11' type='text'></input>
          <button className='col-sm-1'>Go!</button>
        </div>
      </form>
    );
  }
}