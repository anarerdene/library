import React from 'react';
import { Link } from 'react-router-dom';

// Layout
import Layout from '../layout/Layout.jsx';
import Header from '../layout/Header.jsx';
import Sidebar from '../layout/Sidebar.jsx';

// Components
import Item from '../components/Item.jsx';
import Search from '../components/Search.jsx';

class Home extends React.Component {
  render(){
    return(
      <Layout hideSidebar showSlider>
        <Item column="col-3"/>
      </Layout>
    )
  }
}

export default Home