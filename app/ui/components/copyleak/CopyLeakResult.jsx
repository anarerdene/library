import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../layout/Layout.jsx';
import ResultLoader from './ResultLoader.jsx';
import ResultSlider from './ResultSlider.jsx';
import ResultInfo from './ResultInfo.jsx';

// Login
class CopyLeakResult extends React.Component {

  componentWillMount() {
    function show_result(){
      $(".result-loader").hide();
      $("#result-info, .box").removeClass('invisible');
    };

    window.setTimeout( show_result, 2000 ); // 5 seconds
  }

  render(){
    const style = {
      width: '90%',
    };

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
        <ResultLoader/>
        <div id="result-info" className="invisible row">
          <div className="col-8">
            <ResultInfo/>
          </div>
          <div className="col-4">
            <ResultSlider/>
          </div>
        </div>
      </Layout>
    )
  }
}

export default CopyLeakResult