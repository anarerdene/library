import React from 'react';
import { Link } from 'react-router-dom';


class CommentList extends React.Component {
  render(){
    return(
      <ul className="comment-list rounded">
        <li className="row no-gutters">
          <div className="col-auto">
            <img src="https://randomuser.me/api/portraits/women/85.jpg" className="rounded mr-3" width="50" alt=""/>
          </div>
          <div className="col">
              <div className="comment-header mb-1">
                <a href="" className="float-left mr-3">Anar-Erdene</a>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                </div>
              </div>
              <div className="comment-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere lectus sit amet metus sollicitudin, quis ornare lacus pharetra. Vestibulum nibh quam, iaculis vel urna at, placerat hendrerit turpis. Vestibulum viverra, est sit amet pulvinar iaculis, orci urna viverra elit, eget sagittis leo lectus sed dui. Aenean laoreet fermentum pharetra.</p>
              </div>
          </div>
          <div className="col-auto pl-5 pt-3">
            <a href="#" className="btn btn-secondary mr-2"><i className="fa fa-thumbs-up mr-2"></i><small className="text-muted">232</small></a>
            <a href="#" className="btn btn-secondary"><i className="fa fa-thumbs-down mr-2"></i><small className="text-muted">32</small></a>
          </div>
        </li>
        <li className="row no-gutters">
          <div className="col-auto">
            <img src="https://randomuser.me/api/portraits/women/85.jpg" className="rounded mr-3" width="50" alt=""/>
          </div>
          <div className="col">
              <div className="comment-header mb-1">
                <a href="" className="float-left mr-3">Anar-Erdene</a>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                </div>
              </div>
              <div className="comment-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere lectus sit amet metus sollicitudin, quis ornare lacus pharetra. Vestibulum nibh quam, iaculis vel urna at, placerat hendrerit turpis. Vestibulum viverra, est sit amet pulvinar iaculis, orci urna viverra elit, eget sagittis leo lectus sed dui. Aenean laoreet fermentum pharetra.</p>
              </div>
          </div>
          <div className="col-auto pl-5 pt-3">
            <a href="#" className="btn btn-secondary mr-2"><i className="fa fa-thumbs-up mr-2"></i><small className="text-muted">232</small></a>
            <a href="#" className="btn btn-secondary"><i className="fa fa-thumbs-down mr-2"></i><small className="text-muted">32</small></a>
          </div>
        </li>
        <li className="row no-gutters">
          <div className="col-auto">
            <img src="https://randomuser.me/api/portraits/women/85.jpg" className="rounded mr-3" width="50" alt=""/>
          </div>
          <div className="col">
              <div className="comment-header mb-1">
                <a href="" className="float-left mr-3">Anar-Erdene</a>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                </div>
              </div>
              <div className="comment-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere lectus sit amet metus sollicitudin, quis ornare lacus pharetra. Vestibulum nibh quam, iaculis vel urna at, placerat hendrerit turpis. Vestibulum viverra, est sit amet pulvinar iaculis, orci urna viverra elit, eget sagittis leo lectus sed dui. Aenean laoreet fermentum pharetra.</p>
              </div>
          </div>
          <div className="col-auto pl-5 pt-3">
            <a href="#" className="btn btn-secondary mr-2"><i className="fa fa-thumbs-up mr-2"></i><small className="text-muted">232</small></a>
            <a href="#" className="btn btn-secondary"><i className="fa fa-thumbs-down mr-2"></i><small className="text-muted">32</small></a>
          </div>
        </li>
        <li className="row no-gutters">
          <div className="col-auto">
            <img src="https://randomuser.me/api/portraits/women/85.jpg" className="rounded mr-3" width="50" alt=""/>
          </div>
          <div className="col">
              <div className="comment-header mb-1">
                <a href="" className="float-left mr-3">Anar-Erdene</a>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                </div>
              </div>
              <div className="comment-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere lectus sit amet metus sollicitudin, quis ornare lacus pharetra. Vestibulum nibh quam, iaculis vel urna at, placerat hendrerit turpis. Vestibulum viverra, est sit amet pulvinar iaculis, orci urna viverra elit, eget sagittis leo lectus sed dui. Aenean laoreet fermentum pharetra.</p>
              </div>
          </div>
          <div className="col-auto pl-5 pt-3">
            <a href="#" className="btn btn-secondary mr-2"><i className="fa fa-thumbs-up mr-2"></i><small className="text-muted">232</small></a>
            <a href="#" className="btn btn-secondary"><i className="fa fa-thumbs-down mr-2"></i><small className="text-muted">32</small></a>
          </div>
        </li>
      </ul>
    )
  }
}

export default CommentList