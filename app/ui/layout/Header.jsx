import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Logo
class Brand extends React.Component {
  render(){
    return(
      <div className="col">
        <div className="logo">
          <a href="/">Library.mn</a>
        </div>
      </div>
    )
  }
}

// Navigation
class Nav extends React.Component {
  render(){
    return(
      <div className="col">
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Book">Book</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
      </div>
    )
  }
}

// Login
class Login extends React.Component {
  render(){
    return(
      <div className="col">
        <div className="btn btn-primary mr-3">нэвтрэх</div>
        <div className="btn btn-primary">Бүртгүүлэх</div>
      </div>
    )
  }
}

// Main Header
class Header extends React.Component {
  render() {
    return (

      <div id="header" className="nav">
        <div className="container">
          <div className="row">
            <Brand />
            <Nav />
            <Login />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;


