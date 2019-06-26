import React from 'react';

export default class ExpenseEntries extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    //const {   } = this.props;
    return (
      <div className='col-6 col-md-6'>
        <div className='card text-center'>
          <h3 className='card-header alert alert-primary'>Search History</h3>
          <div className='card-body'>
            <table className='table table-striped border-0'>
              <thead>
                <tr>
                  
                </tr>
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