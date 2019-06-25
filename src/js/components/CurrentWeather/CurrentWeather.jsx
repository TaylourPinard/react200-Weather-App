import React from 'react';

export default class ExpenseEntries extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    const { name, temp, pressure, humidity, low, high, wind  } = this.props;
    return (
      <div className='col-12 mb-4'>
        <div className='card text-center'>
          <h3 className='card-header'>City Information</h3>
          <div className='card-body'>
            <div className='row'>
              <div className='card-body'>
                <h5>Temperature (F)</h5>
                <p></p>
              </div>
              <div className='card-body'>
                <h5>Pressure</h5>
              </div>
              <div className='card-body'>
                <h5>Humidity</h5>
              </div>
            </div>
            <div className='row'>
              <div className='card-body'>
                <h5>Lowest Temp (F)</h5>
              </div>
              <div className='card-body'>
                <h5>Highest Temp (F)</h5>
              </div>
              <div className='card-body'>
                <h5>Wind Speed</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}