import React from 'react';
import { Link } from 'react-router-dom';

// Layout
import Layout from '../../layout/Layout.jsx';

// Components
import CommentFilter from './CommentFilter.jsx';
import CommentList from './CommentList.jsx';


class DetailComments extends React.Component {
  render(){

    var data = [{
      name: 'Танилцуулга',
      path: '/detail',
      icon: 'fa fa-file-text-o pr-1'
    }, {
      name: 'Уншигчдын сэтгэгдэлүүд',
      path: '/detail-comments',
      icon: 'fa fa-comment-o'
    }];

    return(
      <Layout hideSidebar links={data}>
        <div className="detail-container rounded">
          <div className="row no-gutters p-4">
            <div className="col-auto">
              <img src="https://about.canva.com/wp-content/uploads/sites/3/2015/01/business_bookcover.png" className="img-fluid mr-3" width="30" alt=""/>
            </div>
            <div className="col mr-5">
              <div className="detail-header border-bottom-0">
                <h1 className="title mb-2">Европын цөмийн судалгааны төвийн LHC хурдасгуурд ажиглагдах үзэгдлийн онолын судалгаа</h1>
                <ul className="info clear">
                  <li>Kendra Elliot<span>(Зохиолч)</span>,</li>
                  <li className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><span>(1234 уншигч үнэлсэн)</span></li>
                  <li>13000 уншигдсан,</li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <button type="button" className="btn btn-secondary mr-2">Хадгалах</button>
              <button type="button" className="btn btn-primary">Уншиж эхлэх</button>
            </div>
          </div>
        </div>
        <CommentFilter />
        <CommentList />
      </Layout>
    )
  }
}

export default DetailComments