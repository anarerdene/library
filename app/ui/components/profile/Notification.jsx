import React from 'react';
import { Link } from 'react-router-dom';

// Layout
import Layout from '../../layout/Layout.jsx';

class Notification extends React.Component {
  render(){

    const data = [{
      name: 'Миний тохиргоо',
      path: '/profile',
      icon: 'fa fa-file-text-o pr-1'
    }, {
      name: 'Гүйлгээний мэдээлэл',
      path: '/payment-info',
      icon: 'fa fa-credit-card'
    }, {
      name: 'Сонордуулга',
      path: '/notification',
      icon: 'fa fa-info'
    }];

    return(
      <Layout hideSidebar links={data}>
        <div className='box rounded p-5'>
          <table className='table table-striped'>
            <tbody>
              <tr key="">
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nam alias eos, perspiciatis beatae at, illum et suscipit, magnam iure architecto eum veritatis praesentium sit accusamus in amet corporis sequi!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    )
  }
}

export default Notification