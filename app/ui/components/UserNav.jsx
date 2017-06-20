import React from 'react';
import { Link } from 'react-router-dom';

// Login
class UserNav extends React.Component {
  render(){
    return(
      <ul className="usernav clear mr-3">
        <li className="notification dropdown">
          <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-exclamation-circle"></i>
            <span>2</span>
          </button>
          <div className="dropdown-menu dropdown-menu-right dark arrow" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">Миний тохиргоо</a>
            <a className="dropdown-item" href="#">Гүйлгээний мэдээлэл</a>
            <a className="dropdown-item" href="#">Гарах</a>
          </div>
        </li>
        <li className="notification dropdown">
          <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-shopping-cart"></i>
            <span>4</span>
          </button>
          <div className="dropdown-menu dropdown-menu-right dark arrow" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="user-account dropdown">
          <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="https://d1qb2nb5cznatu.cloudfront.net/users/1914374-medium_jpg?1454149863" alt="" width="32"/>
          </button>
          <div className="dropdown-menu dropdown-menu-right dark arrow arrow-right" aria-labelledby="dropdownMenuLink">
            <div className="preview row pb-2 mb-3">
              <div className="col-3 pr-0">
                <img src="https://d1qb2nb5cznatu.cloudfront.net/users/1914374-medium_jpg?1454149863" className="img-fluid rounded" alt=""/>
              </div>
              <div className="col-9">
                <div>Anar-Erdene Batjargal</div>
                <span>b.anarerdene@gmail.com</span>
                <Link to="/profile" className="dropdown-item" href="#">
                  Миний тохиргоо
                </Link>
              </div>
            </div>
            <small className="float-left">Багцийн мэдээлэл<br/> Итвэхтэй (2017-08-02)</small>
            <Link to="/login" className="btn btn-primary btn-sm float-right mt-1">
              <i className="fa fa-sign-out"></i> Гарах
            </Link>
          </div>
        </li>
      </ul>
    )
  }
}

export default UserNav