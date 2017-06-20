import React from 'react';
import { Link } from 'react-router-dom';

// Layout
import Layout from '../layout/Layout.jsx';

// Components
import Item from '../components/Item.jsx';
import PageHeader from '../components/PageHeader.jsx';
import SidebarFilter from '../components/sidebar/SidebarFilter.jsx';

export default class SubCategory extends React.Component {
  render(){
    return(
    <Layout sidebar={<SidebarFilter/>} sidebarTitle="Хүн амын хөгжил">
        <PageHeader title="Мэдээлэл, харилцаа холбоо" />
        <Item column="col-4"/>
    </Layout>
    )
  }
}
