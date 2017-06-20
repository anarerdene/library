import React from 'react';
import { Link } from 'react-router-dom';

// Components
import TopNav from './TopNav.jsx';
import UserNav from '../components/UserNav.jsx';
import Search from '../components/Search.jsx';

// Header
export default class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col">
              <Link to="/" className="logo">
                <img src="http://i.imgur.com/9VgzCct.png" alt="" width="45"/>
              </Link>
              <Search />
              <TopNav />
            </div>
            <div className="col-auto">
              <UserNav />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

