import React from 'react';

export default class ExpenseEntries extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { name, temp, pressure, humidity, low, high, wind  } = this.props;
    return (
      <div className='col-6'>
        <div className='card'>
          <h6 className='card-header alert alert-primary'>City Information</h6>
          <div className='card-body'>
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