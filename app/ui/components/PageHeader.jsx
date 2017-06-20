import React from 'react';
import { Link } from 'react-router-dom';
import PathWay from '../components/PathWay.jsx';

export default class PageHeader extends React.Component {
  render(){
    return(
    <div>
      <div className="page-header">
        <div className="row">
          <div className="col">
            <span className="title">Нийт 123 агуулгаас 30 харуулж байна.</span>
          </div>
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
            </div>
        </div>
      </div>
    </div>
    )
  }
}



