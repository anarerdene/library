import React from 'react';

// Layout
import Layout from '../layout/Layout.jsx';
import Header from '../layout/Header.jsx';

class Profile extends React.Component {
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
      <div>
        <Layout hideSidebar links={data}>
          <div className='box rounded p-5'>
            <form className='row no-gutters'>
              <div className="profile-pic p-5">
                <img src="https://d1qb2nb5cznatu.cloudfront.net/users/1914374-medium_jpg?1454149863" alt=""/>
                <button type='submit' className='btn btn-secondary w-100 my-3'>
                  Зураг солих
                </button>
                <small>Хамгийн ихдээ 1mb хүртэл хэмжээтэй зураг оруулах боломжтой</small>
              </div>
              <div className="col">
                <div className='form-group'>
                  <label>Хэрэглэгчийн нэр</label>
                  <input
                    name='username'
                    className='form-control' />
                </div>

                <div className='form-group'>
                  <label>Имэйл</label>
                  <input
                    name='email'
                    className='form-control' />
                </div>

                <div className='form-group'>
                  <label>Нууц үг солих (Хуучин нууц үг)</label>
                  <input type='password' name='currentPassword' className='form-control' />
                </div>

                <div className='form-group'>
                  <label>Шинэ нууц үг</label>
                  <input type='password' name='newPassword' className='form-control' />
                </div>

                <div className='form-group'>
                  <label>Шинэ нууц үг давтах</label>
                  <input type='password' name='newPasswordConfirmation' className='form-control' />
                </div>

                <button type='submit' className='btn btn-primary'>
                  Хадгалах
                </button>
              </div>
            </form>
          </div>
        </Layout>
      </div>

    )
  }
}

export default Profile