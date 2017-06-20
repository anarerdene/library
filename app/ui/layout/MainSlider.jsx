import React from 'react';

// Main Slider
export default class MainSlider extends React.Component {
  render() {
    return (
      <div className="main-slider">
        <div className="container">
          <h1>Best Source for knowledge</h1>
          <div className="slider-search">
            <div className="dropdown d-inline">
              <a className="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Бүх төрлөөс
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">Ном</a>
                <a className="dropdown-item" href="#">Сонин</a>
                <a className="dropdown-item" href="#">Сэтгүүл</a>
                <a className="dropdown-item" href="#">Судалгааны материал</a>
                <a className="dropdown-item" href="#">Эрдэм шинжилгээ</a>
              </div>
            </div>
            <input type="search" className="search" placeholder="Хайх үгээ энд бичнэ үү ..."/>
            <a href="#" className="search-btn float-right">
              <i className="fa fa-search"></i>
            </a>
          </div>
          <div className="dropdown d-inline mr-2">
              <a className="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <img width="16" className="mr-1" src="http://findicons.com/files/icons/662/world_flag/256/flag_of_mongolia.png" alt=""/>
               монгол хэл
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">English</a>
                <a className="dropdown-item" href="#">Russia</a>
                <a className="dropdown-item" href="#">Japan</a>
              </div>
            </div>
           <span className="text-muted">дээрх 98,908 материал байна.</span>
        </div>
      </div>
    );
  }
}

