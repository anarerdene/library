import React from 'react';
import { Link } from 'react-router-dom';

class PathWay extends React.Component {
  render(){
    return(
      <div className="pathway">
        <div className="row">
          <ol className="breadcrumb col">
            <li className="breadcrumb-item"><a href="#">Нүүр</a></li>
            {this.props.children}
          </ol>
          <div className="filter col float-right">
            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-signal pr-1"></i> Эрэмблэх
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-calendar-o pr-1"></i> Огноо
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-star-o pr-1"></i> Онцлох
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PathWay;
