import React from 'react';
import { Link } from 'react-router-dom';

import DropdownCategory from './DropdownCategory.jsx';
import FilterSubCat from './FilterSubCat.jsx';

export default class SidebarFilter extends React.Component {
  render(){
    return(
      <div className="side-filter">
        <FilterSubCat />
      </div>
    )
  }
}
