import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../layout/Layout.jsx';

// Login
export default class CopyLeakHistory extends React.Component {

  render(){
    const data = [{
      name: 'Шалгуур',
      path: '/copyleak',
      icon: 'fa fa-clone',
    },{
      name: 'Шалгалтын түүхүүд',
      path: '/copyleak-history',
      icon: 'fa fa-list-ul',
    }]

    return(
      <Layout hideSidebar links={data}>
        <div className="box rounded p-5">
          <div className="text-muted mb-4">
            <span>Нийт <strong>123</strong> байгаас эхний <strong>10-г</strong> харуулж байна.</span>
          </div>
          <table className="table table-striped">
            <thead className="thead-default">
              <tr>
                <th><i className="fa fa-calendar mr-1"></i> Огноо</th>
                <th><i className="fa fa-check-circle mr-1"></i> Шалгасан агуулга</th>
                <th><i className="fa fa-file-text mr-1"></i> Хэлбэр</th>
                <th><i className="fa fa-list-ul mr-1"></i> Илэрц</th>
                <th>Хуулбар</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10 минутын өмнө</td>
                <td>Европын цөмийн судалгааны төвийн хурдасгуурд ...</td>
                <td>Бичвэр</td>
                <td>14 ширхэг</td>
                <td>61% </td>
              </tr>
              <tr>
                <td>2 өдөрын өмнө</td>
                <td>Европын цөмийн судалгааны төвийн хурдасгуурд ...</td>
                <td>Файл</td>
                <td>12 ширхэг</td>
                <td>30%</td>
              </tr>
              <tr>
                <td>11 өдөрын өмнө</td>
                <td>Европын цөмийн судалгааны төвийн хурдасгуурд ...</td>
                <td>Файл</td>
                <td>14 ширхэг</td>
                <td>80%</td>
              </tr>
              <tr>
                <td>2017-05-1</td>
                <td>Европын цөмийн судалгааны төвийн хурдасгуурд ...</td>
                <td>Файл</td>
                <td>14 ширхэг</td>
                <td>66%</td>
              </tr>
              <tr>
                <td>2017-05-1</td>
                <td>Европын цөмийн судалгааны төвийн хурдасгуурд ...</td>
                <td>Бичвэр</td>
                <td>14 ширхэг</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>11 өдөрын өмнө</td>
                <td>Европын цөмийн судалгааны төвийн хурдасгуурд ...</td>
                <td>Бичвэр</td>
                <td>14 ширхэг</td>
                <td>80%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    )
  }
}