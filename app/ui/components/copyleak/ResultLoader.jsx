import React from 'react';

// Result Loader
export default class ResultLoader extends React.Component {

  render(){
    var style = {
      width: '90%',
    };

    const data = [{
      name: 'Шалгуур',
      path: '/copyleak',
      icon: 'fa fa-clone',
    },{
      name: 'Шалгалтын түүхүүд',
      path: '/#',
      icon: 'fa fa-list-ul',
    }]

    return(
      <div className="result-loader box clear col-sm-5 mx-auto text-center">
        <div className="result-progress">
          <h3 className="title">
            Шалгалт хийгдэж байна.
          </h3>
          <div className="progress my-3">
            <div
              className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
              role="progressbar"
              style={style}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100">
              90%
            </div>
          </div>
          <div className="text-muted">
            We’re searching billions of files for similar text to your input. This may take some time, depending on the size of your input and other factors.
          </div>
        </div>
      </div>
    )
  }
}