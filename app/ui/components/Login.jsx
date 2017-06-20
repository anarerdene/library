import React from 'react';
import Layout from '../layout/Layout.jsx';

// Login
class Login extends React.Component {
  render(){
    return(
      <Layout hideSidebar hideHeader hideSubnav hideFooter>
        <div className="login-container">
          <div id="login">
            <img src="http://i.imgur.com/YkMwON7.png" alt="" className="logo"/>
            <form>
              <input type="text" placeholder="Хэрэглэгчийн цахим хаяг" />
              <input type="text" placeholder="Нууц үг" />
              <button className="btn btn-primary">Нэвтрэх</button>
              <p className="mt-2">
                <span><input type="checkbox"/> намайг сана.</span>
                <a href="#" className="float-right"><i className="icon-help-circled"></i> Нууц үгээ мартсан</a>
              </p>
            </form>
            <div className="social">
              <a href="#" className="facebook"><i className="fa fa-facebook"></i> facebook</a>
              <a href="#" className="google"><i className="fa fa-google"></i> google</a>
              <a href="#" className="twitter"><i className="fa fa-twitter"></i> twitter</a>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Login