import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {

  render(){
    return(
      <div className="search-container">
        <input type="text" className="search-keyword" placeholder="Хайх агуулгаа энд бичнэ үү ..." />
      </div>
    )
  }
}

export default Search