import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  HashRouter
} from 'react-router-dom';

// Stylesheet
import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/main.scss';

// Import custom components
import Header from './ui/layout/Header.jsx';
import Footer from './ui/layout/Footer.jsx';

// Import custom Pages
import Home from './ui/pages/Home.jsx';
import Login from './ui/components/Login.jsx';
import Categories from './ui/pages/Categories.jsx';
import SubCategory from './ui/pages/SubCategory.jsx';

// Detail
import Detail from './ui/pages/Detail.jsx';
import DetailComments from './ui/components/detail/DetailComments.jsx';

// Profile
import Profile from './ui/pages/Profile.jsx';
import PaymentInfo from './ui/components/profile/PaymentInfo.jsx';
import Notification from './ui/components/profile/Notification.jsx';

// Payment
import Payment from './ui/pages/Payment.jsx';

// Search
import AdvancedSearch from './ui/pages/AdvancedSearch.jsx';

// CopyLeak
import CopyLeak from './ui/pages/CopyLeak.jsx';
import CopyLeakHistory from './ui/components/copyleak/CopyLeakHistory.jsx';
import CopyLeakResult from './ui/components/copyleak/CopyLeakResult.jsx';

const App = (
    <HashRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/detail" component={Detail} />
        <Route path="/detail-comments" component={DetailComments} />
        <Route path="/categories" component={Categories} />
        <Route path="/subcategory" component={SubCategory} />
        <Route path="/profile" component={Profile} />
        <Route path="/payment-info" component={PaymentInfo} />
        <Route path="/notification" component={Notification} />
        <Route path="/payment" component={Payment} />
        <Route path="/search" component={AdvancedSearch} />
        <Route path="/copyleak" component={CopyLeak} />
        <Route path="/copyleak-result" component={CopyLeakResult} />
        <Route path="/copyleak-history" component={CopyLeakHistory} />
      </div>
    </HashRouter>
);

render( App, document.getElementById('app'));


