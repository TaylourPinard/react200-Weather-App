import React from 'react';

export default class ExpenseEntries extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div className='col-6 col-md-6'>
        <div className='card'>
          <h6 className='card-header alert alert-primary'>Search History</h6>
          <div className='card-body'>
            <table className='table table-striped border-0'>
              <thead>
                
              </thead>
              <tbody>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}