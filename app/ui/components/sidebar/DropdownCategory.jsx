import React from 'react';
import { Link } from 'react-router-dom';


class DropdownCategory extends React.Component {

  componentDidMount() {
    $( "#test" ).selectmenu();
  }

  render(){
    return(
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-danger dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          Хүнс, био технологи
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Хүнс, био технологи</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
    )
  }
}

export default DropdownCategory