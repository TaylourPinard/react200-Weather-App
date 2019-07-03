import React from 'react';

export default class History extends React.Component {

  render() {
    const { history } = this.props;
    return (
      <div className='col-6 col-md-6'>
        <div className='card'>
          <h6 className='card-header alert alert-primary'>Search History</h6>
          <div className='card-body .bg-secondary'>
            <table className='table table-striped border-0'>
              <tbody>
                { history.map((entry, index) => {
                  return <tr key={index}><td>{ entry.city } - { entry.date }</td></tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}