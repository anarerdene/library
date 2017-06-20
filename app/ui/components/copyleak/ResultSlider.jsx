import React from 'react';
import { NavLink } from 'react-router-dom';

// ResultSlider
class ResultSlider extends React.Component {


  slice (word, limit) {
    if (word.length > limit) {
      return `${word.slice(0, limit)} ...`
    }

    return word
  }

  render(){

    const data = [{
      url: 'http://library.mn/politics/kamala-harris-jeff',
      site: 'Library.mn',
      count: '4'
    },{
      url: 'http://library.mn/politics/kamala-harris-jeff',
      site: 'CNN.mn',
      count: '2'
    },{
      url: 'http://library.mn/politics/kamala-harris-jeff',
      site: 'Gogo.mn',
      count: '1'
    },{
      url: 'http://library.mn/politics/kamala-harris-jeff333',
      site: 'Natgeo.com',
      count: '1'
    }];

    const listResult = data.map(result => {
      return(
        <li className="d-block">
          <div className="result">
            <strong className="d-block">{result.count}</strong> <small className="text-muted">Илэрц</small>
          </div>
          <a href={result.url}>
            <strong className="d-block">{result.site}</strong>
            <small className="text-muted">{this.slice(result.url, 47)}</small>
          </a>
        </li>
      )
    });

    return(
      <div id="result-slider">
        <div className="box rounded">
          <div className="row box-header no-gutters py-3 px-4 align-items-center rounded-top">
            <div className="col btn btn-secondary mr-1"><i className="fa fa-angle-left"></i></div>
            <div className="col-9 text-center">
              <small className="info"><strong>4 </strong>эх сурвалжаас <strong>8</strong>  илэрц илэрлээ.</small>
            </div>
            <div className="col btn btn-secondary"><i className="fa fa-angle-right"></i></div>
          </div>
          <div className="p-4">
            <ul className="clear">
              {listResult}
            </ul>
          </div>
        </div>
        <div className="text-muted text-center mt-2">
          <div className="btn"><i className="fa fa-info-circle"></i></div>
          <div className="btn"><i className="fa fa-download"></i></div>
          <div className="btn"><i className="fa fa-share-alt"></i></div>
          <div className="btn"><i className="fa fa-trash"></i></div>
        </div>
      </div>
    )
  }
}

export default ResultSlider