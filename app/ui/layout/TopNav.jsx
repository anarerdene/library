import React from 'react';
import { NavLink } from 'react-router-dom';

// Header
export default class TopNav extends React.Component {
  render() {
    return (
      <ul className="topnav clear">
        <li><NavLink to="/copyleak"><i className="fa fa-clone mr-2"></i>Хуулбар шалгуур</NavLink></li>
        <li><NavLink to="#"><i className="fa fa-bookmark mr-2"></i>Миний номын сан</NavLink></li>
        <li><NavLink to="#"><i className="fa fa-question-circle-o mr-2"></i>Тусламж</NavLink></li>
      </ul>
    );
  }
}

