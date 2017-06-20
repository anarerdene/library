import React from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from '../../layout/Header.jsx';
import Layout from '../../layout/Layout.jsx';

class PaymentInfo extends React.Component {
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
          <div className="text-muted mb-4">
            <span>Та нийт 35 удаагын гүйлгээ хийсэн байна</span>
            <span className='cards float-right'>
              <i className='mx-1 fa fa-cc-mastercard' />
              <i className='mx-1 fa fa-cc-visa' />
              <i className='mx-1 fa fa-cc-paypal' />
              <i className='mx-1 fa fa-cc-discover' />
              <i className='mx-1 fa fa-cc-amex' />
            </span>
          </div>
          <table className="table table-striped">
            <thead className="thead-default">
              <tr>
                <th># Дугаар</th>
                <th>Огноо</th>
                <th>Нэр</th>
                <th>Төлбөрийн хэлбэр</th>
                <th>Мөнгөн дүн</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td># 1234235</td>
                <td>2017-05-1</td>
                <td>Эдийн засгийн судалгаа</td>
                <td>Цахим карт</td>
                <td>20499₮</td>
                <td>Амжилттай</td>
              </tr>
              <tr>
                <td># 1234235</td>
                <td>2017-05-1</td>
                <td>Эдийн засгийн судалгаа</td>
                <td>Цахим карт</td>
                <td>20499₮</td>
                <td>Амжилттай</td>
              </tr>
              <tr>
                <td># 1234235</td>
                <td>2017-05-1</td>
                <td>Эдийн засгийн судалгаа</td>
                <td>Цахим карт</td>
                <td>20499₮</td>
                <td>Амжилттай</td>
              </tr>
              <tr>
                <td># 1234235</td>
                <td>2017-05-1</td>
                <td>Эдийн засгийн судалгаа</td>
                <td>Цахим карт</td>
                <td>20499₮</td>
                <td>Амжилттай</td>
              </tr>
              <tr>
                <td># 1234235</td>
                <td>2017-05-1</td>
                <td>Эдийн засгийн судалгаа</td>
                <td>Цахим карт</td>
                <td>20499₮</td>
                <td>Амжилттай</td>
              </tr>
              <tr>
                <td># 1234235</td>
                <td>2017-05-1</td>
                <td>Эдийн засгийн судалгаа</td>
                <td>Цахим карт</td>
                <td>20499₮</td>
                <td>Амжилттай</td>
              </tr>
              <tr>
                <td># 1234235</td>
                <td>2017-05-1</td>
                <td>Эдийн засгийн судалгаа</td>
                <td>Цахим карт</td>
                <td>20499₮</td>
                <td>Амжилттай</td>
              </tr>
              <tr>
                <td># 1234235</td>
                <td>2017-05-1</td>
                <td>Эдийн засгийн судалгаа</td>
                <td>Цахим карт</td>
                <td>20499₮</td>
                <td>Амжилттай</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    )
  }
}

export default PaymentInfo