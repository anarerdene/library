import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../layout/Layout.jsx';


// Login
class CopyLeak extends React.Component {

  componentDidMount() {
    $('.custom-file-input').on('change',function(){
      var fileName = $(this).val().split('\\').pop();;
      $(this).next('.form-control-file').addClass("selected").html(fileName);
    });

    $('textarea').on('click',function(){
      $('.overlay').hide();
    });
  }
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
        <div className="row">
          <div className="col-12">
            <div id="flipboard" className="box rounded p-5 mb-3">
              <div className="text-muted mb-4">
                <span>Та хамгын ихдээ <strong>1000</strong> тэмдэгт оруулна !</span>
                <span className='float-right'>
                  <i className='mx-1 fa fa-copyright' />
                </span>
              </div>
              <textarea id="text-check" className="w-100 rounded mb-4 p-3" name="" id="" rows="15"></textarea>
              <div className="overlay">Бичвэр шалгах!</div>
              <div className="row justify-content-md-center">
                <label className="custom-file col-4">
                  <input type="file" id="file" className="custom-file-input" />
                  <span className="custom-file-control form-control-file"></span>
                </label>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col">
                <form className="form-group">
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">
                      <input className="form-check-input mr-2" type="radio" name="checkfor" value="option1" />
                      Library.mn сангаас хайх
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">
                      <input className="form-check-input mr-2" type="radio" name="checkfor" value="option2" checked />
                      Интернэтээс хайх
                    </label>
                  </div>
                </form>
              </div>
              <div className="col">
                <NavLink to="/copyleak-result" className="btn btn-primary float-right">Шалгаж эхлэх</NavLink>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default CopyLeak