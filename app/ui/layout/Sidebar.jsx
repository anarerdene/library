import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// Main Sidebar
export default class Sidebar extends React.Component {

  renderList(catList) {
    return catList.map((item) => {
      return(
        <li>
          <Link
            to={item.path}
            activeClassName="active">
            <i className="fa fa-angle-right pr-2 text-muted"></i>
            {item.name}
            <span>({item.total})</span>
          </Link>
        </li>
      )
    })
  }

  renderCategory() {
    if(this.props.catList) {
      return(
        <ul
          className="nav-list">
          {this.renderList(this.props.catList) }
        </ul>
      )
    }
  }

  render(){
    return(
      <aside id="sidebar">
        <div className="title row no-gutters">
          <div className="col-auto">
            <i className="fa fa-angle-left rounded"></i>
          </div>
          <h3 className="col pl-0">
            {this.props.title}
          </h3>
        </div>
        {this.renderCategory()}
        {this.props.sidebar}
      </aside>
    )
  }
}