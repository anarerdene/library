import React from 'react';
import { Link } from 'react-router-dom';

class Item extends React.Component {
  render(){
    return(
      <div>
        <div className="row">
          <div className={ this.props.column}>
            <div className="item rounded mb-4">
              <div className="item-header">
                <Link to="/detail"><h3>Европын цөмийн судалгааны ...</h3></Link>
                <span>Судалгааны ажил</span>
              </div>
              <div className="row item-summary p-3">
                <div className="col-3 pr-1">
                  <img className="img-fluid" src="http://i.imgur.com/2A9gcWy.png" />
                </div>
                <p className="col">Европын цөмийн судалгааны төвийн LHC хурдасгуурд ажиглагдах үзэгдлийн онолын судалгаа</p>
              </div>
              <div className="clearfix"></div>
              <ul className="item-footer px-4 clear">
                <li className="mr-3 pr-3"><i className="fa fa-eye"></i> 1234</li>
                <li className="mr-3 pr-3"><i className="fa fa-thumbs-up"></i> 234</li>
                <li className="float-right border-right-0"><span>10.500₮</span></li>
              </ul>
            </div>
          </div>
          <div className={ this.props.column}>
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
          <div className={ this.props.column}>
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
          <div className={ this.props.column}>
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
          <div className={ this.props.column}>
            <div className="item rounded mb-4">
              <div className="item-header">
                <Link to="/detail"><h3>Европын цөмийн судалгааны ...</h3></Link>
                <span>Судалгааны ажил</span>
              </div>
              <div className="row item-summary p-3">
                <div className="col-3 pr-1">
                  <img className="img-fluid" src="http://i.imgur.com/2A9gcWy.png" />
                </div>
                <p className="col">Европын цөмийн судалгааны төвийн LHC хурдасгуурд ажиглагдах үзэгдлийн онолын судалгаа</p>
              </div>
              <div className="clearfix"></div>
              <ul className="item-footer px-4 clear">
                <li className="mr-3 pr-3"><i className="fa fa-eye"></i> 1234</li>
                <li className="mr-3 pr-3"><i className="fa fa-thumbs-up"></i> 234</li>
                <li className="float-right border-right-0"><span>10.500₮</span></li>
              </ul>
            </div>
          </div>
          <div className={ this.props.column}>
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
          <div className={ this.props.column}>
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
          <div className={ this.props.column}>
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
          <div className={ this.props.column}>
            <div className="item rounded mb-4">
              <div className="item-header">
                <Link to="/detail"><h3>Европын цөмийн судалгааны ...</h3></Link>
                <span>Судалгааны ажил</span>
              </div>
              <div className="row item-summary p-3">
                <div className="col-3 pr-1">
                  <img className="img-fluid" src="http://i.imgur.com/2A9gcWy.png" />
                </div>
                <p className="col">Европын цөмийн судалгааны төвийн LHC хурдасгуурд ажиглагдах үзэгдлийн онолын судалгаа</p>
              </div>
              <div className="clearfix"></div>
              <ul className="item-footer px-4 clear">
                <li className="mr-3 pr-3"><i className="fa fa-eye"></i> 1234</li>
                <li className="mr-3 pr-3"><i className="fa fa-thumbs-up"></i> 234</li>
                <li className="float-right border-right-0"><span>10.500₮</span></li>
              </ul>
            </div>
          </div>
          <div className={ this.props.column}>
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
          <div className={ this.props.column}>
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
          <div className={ this.props.column}>
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
          <div className={ this.props.column}>
            <div className="item rounded mb-4">
              <div className="item-header">
                <Link to="/detail"><h3>Европын цөмийн судалгааны ...</h3></Link>
                <span>Судалгааны ажил</span>
              </div>
              <div className="row item-summary p-3">
                <div className="col-3 pr-1">
                  <img className="img-fluid" src="http://i.imgur.com/2A9gcWy.png" />
                </div>
                <p className="col">Европын цөмийн судалгааны төвийн LHC хурдасгуурд ажиглагдах үзэгдлийн онолын судалгаа</p>
              </div>
              <div className="clearfix"></div>
              <ul className="item-footer px-4 clear">
                <li className="mr-3 pr-3"><i className="fa fa-eye"></i> 1234</li>
                <li className="mr-3 pr-3"><i className="fa fa-thumbs-up"></i> 234</li>
                <li className="float-right border-right-0"><span>10.500₮</span></li>
              </ul>
            </div>
          </div>
          <div className={ this.props.column}>
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
          <div className={ this.props.column}>
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
          <div className={ this.props.column}>
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
      </div>
    )
  }
}

export default Item