import React from 'react';
import { Link } from 'react-router-dom';

// Layout
import Layout from '../layout/Layout.jsx';
import Header from '../layout/Header.jsx';
import Sidebar from '../layout/Sidebar.jsx';

// Components
import Item from '../components/Item.jsx';
import PathWay from '../components/PathWay.jsx';

class Payment extends React.Component {
  render(){
    return(
      <Layout hideSidebar>
        <div id="payment" className="box w-50 mx-auto p-5">
          <div className="box-header">
            <h3 className="title">Гүйлгээ хийх</h3>
            <div className="text-muted mb-4">
              <span>Та дараах сонголтуудыг ашиглан төлбөр төлөх боломтжой</span>
              <span className='price float-right'>
                  19900<sup>₮</sup>
              </span>
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='cardNumber'><strong>Картын дугаар</strong></label>
            <input
              type='text'
              className='form-control'
              id='cardNumber'
              placeholder='Картын дугаар'
              name='cardNumber'
              required
            />
          </div>

          <div className='form-group'>
            <div className='row'>
              <div className='col-lg-6'>
                <label htmlFor='expireYear'><strong>Он</strong></label>
                <select
                  type='text'
                  className='form-control'
                  id='expireYear'
                  name='expireYear'
                  required
                >
                  <option value=''>----</option>
                  <option value='16'>2016</option>
                  <option value='17'>2017</option>
                  <option value='18'>2018</option>
                  <option value='19'>2019</option>
                  <option value='20'>2020</option>
                  <option value='21'>2021</option>
                </select>
              </div>
              <div className='col-lg-6'>
                <label htmlFor='expireMonth'><strong>Cар</strong></label>
                <select
                  type='text'
                  className='form-control'
                  id='expireMonth'
                  name='expireMonth'
                  required
                >
                  <option value=''>--</option>
                  <option value='01'>1</option>
                  <option value='02'>2</option>
                  <option value='03'>3</option>
                  <option value='04'>4</option>
                  <option value='05'>5</option>
                  <option value='06'>6</option>
                  <option value='07'>7</option>
                  <option value='08'>8</option>
                  <option value='09'>9</option>
                  <option value='10'>10</option>
                  <option value='11'>11</option>
                  <option value='12'>12</option>
                </select>
              </div>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='cvv'><strong>CVV</strong></label>

            <div className='input-group mb-2 mr-sm-2 mb-sm-0'>
              <input
                type='text'
                className='form-control'
                id='cvv'
                placeholder='CVV'
                name='cvv'
                required
              />
              <div className='input-group-addon'>
                <img src='data:image/png;base64,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' width='80' />
              </div>
            </div>

          </div>
          <button type='submit' className='w-100 p-3 my-2 btn btn-primary'>Үргэлжлүүлэх</button>
        </div>
      </Layout>
    )
  }
}

export default Payment