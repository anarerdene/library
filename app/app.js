import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Stylesheet
import './assets/scss/main.scss';
import 'bootstrap/dist/css/bootstrap.css';

// Import custom components
import Header from './ui/layout/Header.jsx';
import Footer from './ui/layout/Footer.jsx';

// Import custom Pages
import Main from './ui/layout/Home.jsx';
import Book from './ui/pages/Book.jsx';

render(
    <Router>
        <div>
          <Header />
          <div className="container">
            <div className="row">
              <Route exact path="/" component={Main}/>
              <Route path="/book" component={Book}/>
            </div>
          </div>
          <Footer />
        </div>
      </Router>,
    document.getElementById('app')
);


