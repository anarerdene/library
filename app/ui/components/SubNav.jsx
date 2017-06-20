import React from 'react';
import { NavLink } from 'react-router-dom';

import CollapseMenu from './CollapseMenu.jsx';

// Sub Navigation
export default class SubNav extends React.Component {

  renderLinks(links) {
    return links.map((item) => {
      return (
        <li><NavLink to={item.path} exact activeClassName="active"><i className={item.icon}></i> {item.name}</NavLink></li>
      )
    })
  }

  renderMenu() {
    if(this.props.links) {
      return(
        <ul className="tabnav col clear">
          {this.renderLinks(this.props.links) }
        </ul>
      )
    }
    return (
      <ul className="col clear">
        <li><NavLink to="/" exact activeClassName="active"><i className="fa fa-home pr-1"></i> Нүүр</NavLink></li>
        <li><NavLink to="#" activeClassName="active"><i className="fa fa-book"></i> Ном</NavLink></li>
        <li><NavLink to="#" activeClassName="active"><i className="fa fa-newspaper-o"></i> Сонин</NavLink></li>
        <li><NavLink to="#" activeClassName="active"><i className="fa fa-file-text-o"></i> Сэтгүүл</NavLink></li>
        <li><NavLink to="/categories" activeClassName="active"><i className="fa fa-file-text-o"></i> Судалгааны ажил</NavLink></li>
        <li><NavLink to="#" activeClassName="active"><i className="fa fa-file-text-o"></i> Эрдэмийн ажил</NavLink></li>
        <li><NavLink to="#" activeClassName="active"><i className="fa fa-graduation-cap"></i> Дипломийн ажил</NavLink></li>
        <NavLink to="#" className="upload-content float-right mr-0">
          <i className="fa fa-upload mr-2"></i> Агуулга оруулах
        </NavLink>
      </ul>
    )
  }

  render(){
    return(
      <div className="subnav">
        <div className="container">
          {this.renderMenu()}
        </div>
      </div>
    )
  }
}