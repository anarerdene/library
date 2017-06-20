import React from 'react';
import { Link } from 'react-router-dom';

// Import custom components
import Header from './Header.jsx';
import SubNav from '../components/Subnav.jsx';
import MainSlider from '../layout/MainSlider.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';

// Default
export default class Layout extends React.Component {
  render(){
    return(
      <div className={this.props.className}>
        {this.props.hideHeader ? null : <Header/>}
        {this.props.hideSubnav ? null :  <SubNav links={this.props.links} />}
        {this.props.showSlider ?  <MainSlider /> : null }
        <div id="wrapper" className="container">
          <div className="row">
            {this.props.hideSidebar ? null : <Sidebar sidebar={this.props.sidebar} title={this.props.sidebarTitle} catList={this.props.sidebarCategory}/>}
            <main className="col">
              {this.props.children}
            </main>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}