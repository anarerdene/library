import React from 'react';
import { Link } from 'react-router-dom';

// Layout
import Layout from '../layout/Layout.jsx';

// Components
import Item from '../components/Item.jsx';
import PageHeader from '../components/PageHeader.jsx';

class Categories extends React.Component {

  render(){

    const data = [{
      name: 'Боловсрол, шинжлэх ухаан',
      path: '/SubCategory',
      total: '300',
    },{
      name: 'Эрүүл мэнд, биеийн тамир',
      path: '/SubCategory',
      total: '300',
    },{
      name: 'Хүнс, био технологи',
      path: '/SubCategory',
      total: '300',
    },{
      name: 'Мэдээлэл, харилцаа холбоо',
      path: '/SubCategory',
      total: '300',
    },{
      name: 'Хөдөлмөр, нийгмийн/хам',
      path: '/SubCategory',
      total: '300',
    },{
      name: 'Уул уурхай, үйлдвэрлэл',
      path: '/SubCategory',
      total: '300',
    },{
      name: 'Аялал, жуулчлал',
      path: '/SubCategory',
      total: '300',
    },{
      name: 'Байгал орчин',
      path: '/SubCategory',
      total: '300',
    },{
      name: 'Хүн амын хөгжил',
      path: '/SubCategory',
      total: '300',
    },{
      name: 'Зам, тээвэр',
      path: '/SubCategory',
      total: '300',
    },{
      name: 'Эдийн засаг',
      path: '/SubCategory',
      total: '300',
    },{
      name: 'Хэл шинжлэл',
      path: '/SubCategory',
      total: '300',
    },{
      name: 'Хөдөө аж ахуй',
      path: '/SubCategory',
      total: '300',
    },{
      name: 'Эрчим хүч',
      path: '/SubCategory',
      total: '300',
    },{
      name: 'Соёл урлаг',
      path: '/SubCategory',
      total: '300',
    }];

    return(
      <Layout sidebarCategory={data} sidebarTitle="Судалгааны ажил">
        <PageHeader title="Судалгааны ажил"/>
        <Item column="col-4" />
      </Layout>
    )
  }
}

export default Categories