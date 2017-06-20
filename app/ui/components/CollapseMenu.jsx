import React from 'react';
import { Link } from 'react-router-dom';

export default class CollapseMenu extends React.Component {
  render() {
    return(
      <ul className="collapse-menu clear">
        <i className="fa fa-bars"></i>
        <li>
          <Link to="/"></Link>
        </li>
      </ul>
    )
  }
}