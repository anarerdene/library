import React from 'react';
import { Link } from 'react-router-dom';

// Layout
import Layout from '../layout/Layout.jsx';

class Detail extends React.Component {
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
          <div className="row no-gutters">
            <div className="col p-5">
              <div className="row no-gutters">
                <div className="col-auto">
                  <img src="https://about.canva.com/wp-content/uploads/sites/3/2015/01/business_bookcover.png" className="img-fluid mr-4" width="200" alt=""/>
                </div>
                <div className="col pr-5">
                  <div className="detail-header mb-3 pb-3">
                    <h1 className="title mb-2">Европын цөмийн судалгааны төвийн LHC хурдасгуурд ажиглагдах үзэгдлийн онолын судалгаа</h1>
                    <ul className="info clear">
                      <li>Kendra Elliot<span>(Зохиолч)</span>,</li>
                      <li className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><span>(1234 уншигч үнэлсэн)</span></li>
                      <li>13000 уншигдсан,</li>
                    </ul>
                  </div>
                  <p>Энэхүү тайланд БСШУЯ-ы сайдын нэрэмжит докторын дараах инновацын тэтгэлэгт шалгарсан "Европийн цөмийн судалгааны төвийн LHC хурдасгуур дээр ажиглагдах үзэгдлийн онолын судалгаа" сэдвийн хүрээнд хийгдсэн ажлыг тайлагнав.</p>
                  <p>Гол үр дүн нь Стандарт онолыг өнгөний найман хэмжээст скаляр, вектор бөөмсөөр өргөтгөхөд Хигс хос төрөх үзэгдэл даруй хэдэн арав дахин ихсэж LHC хурдасгуур дээр ажиглагдах болмжтойг харуулав. Мөн харгалзах кинематик түгэлтүүдийг судлан өндөр энергитэй Хигс хосуудыг таних детекторын судалгааг эдгээр өргөтгөлүүдийн хувьд хийх шаардлага үүсч байгааг харуулав</p>

                  <div className="share">
                    <span className="text-muted mr-2">Түгээх:</span>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-google"></i></a>
                    <a href="#"><i className="fa fa-embed"></i></a>
                  </div>
                </div>
              </div>

            </div>
            <div className="detail-action col-auto">
              <div className="price pb-3">
                <i className="fa fa-question-circle text-muted mr-2"></i>19'900₮
              </div>
              <ul className="text-muted pl-3 my-4">
                <li>Publisher: Nepko Publishing </li>
                <li>Publication Date: 2017-05-11</li>
                <li>File Size: 1830 KB</li>
                <li>Print Length: 302 pages</li>
                <li>ISBN: 1503943658</li>
                <li>Language: English</li>
                <li>Text-to-Speech: Enabled</li>
              </ul>
              <button type="button" className="btn btn-secondary my-3 w-100">Хадгалах</button>
              <Link to="/payment" className="btn btn-primary w-100">Уншиж эхлэх</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="item rounded mb-4">
              <div className="item-header">
                <Link to="/detail"><h3>Монгол банкны судалгаа</h3></Link>
                <span>Судалгааны ажил</span>
              </div>
              <div className="row item-summary p-3">
                <div className="col-3 pr-1">
                  <img className="img-fluid" src="http://i.imgur.com/2A9gcWy.png" />
                </div>
                <p className="col">Уг ном нь түүний илтгэх урлагийн “Y.M.C.A” академийн сургалтанд хэрэглэгддэг байсан</p>
              </div>
              <div className="clearfix"></div>
              <ul className="item-footer px-4 clear">
                <li className="mr-3 pr-3"><i className="fa fa-eye"></i> 1234</li>
                <li className="mr-3 pr-3"><i className="fa fa-thumbs-up"></i> 234</li>
                <li className="float-right border-right-0"><span>10.500₮</span></li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="item rounded mb-4">
              <div className="item-header">
                <h3>Санхүүгийн тайлан</h3>
                <span>Эрдэм шинжилгээ</span>
              </div>
              <div className="row item-summary p-3">
                <div className="col-3 pr-1">
                  <img src="http://i.imgur.com/qI8GXas.png" alt="" className="img-fluid"/>
                </div>
                <p className="col">Уг ном нь түүний илтгэх урлагийн “Y.M.C.A” академийн сургалтанд хэрэглэгддэг байсан.</p>
              </div>
              <div className="clearfix"></div>
              <ul className="item-footer px-4 clear">
                <li className="mr-3 pr-3"><i className="fa fa-eye"></i> 1234</li>
                <li className="mr-3 pr-3"><i className="fa fa-thumbs-up"></i> 234</li>
                <li className="float-right border-right-0"><span>Үнэгүй</span></li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="item rounded mb-4">
              <div className="item-header">
                <h3>Мэдээллийн аюулгүй байдал</h3>
                <span>Мэргэжлийн диплом</span>
              </div>
              <div className="row item-summary p-3">
                <div className="col-3 pr-1">
                  <img src="http://i.imgur.com/n7meIIP.png" alt="" className="img-fluid"/>
                </div>
                <p className="col">Уг ном нь түүний илтгэх урлагийн “Y.M.C.A” академийн сургалтанд хэрэглэгддэг байсан.</p>
              </div>
              <div className="clearfix"></div>
              <ul className="item-footer px-4 clear">
                <li className="mr-3 pr-3"><i className="fa fa-eye"></i> 1234</li>
                <li className="mr-3 pr-3"><i className="fa fa-thumbs-up"></i> 234</li>
                <li className="float-right border-right-0"><span>Багцийн</span></li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="item rounded mb-4">
              <div className="item-header">
                <Link to="/detail"><h3>Монгол банкны судалгаа</h3></Link>
                <span>Судалгааны ажил</span>
              </div>
              <div className="row item-summary p-3">
                <div className="col-3 pr-1">
                  <img className="img-fluid" src="http://i.imgur.com/2A9gcWy.png" />
                </div>
                <p className="col">Уг ном нь түүний илтгэх урлагийн “Y.M.C.A” академийн сургалтанд хэрэглэгддэг байсан</p>
              </div>
              <div className="clearfix"></div>
              <ul className="item-footer px-4 clear">
                <li className="mr-3 pr-3"><i className="fa fa-eye"></i> 1234</li>
                <li className="mr-3 pr-3"><i className="fa fa-thumbs-up"></i> 234</li>
                <li className="float-right border-right-0"><span>10.500₮</span></li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Detail