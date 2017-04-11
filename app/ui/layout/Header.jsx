import React from 'react';
import { Button } from 'reactstrap';


class Header extends React.Component {
  render() {
    return (

      <div id="header">
        <div className="logo">Library.mn</div>
        <ul classNAme="nav">
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
        <Button color="success">Login</Button>
      </div>
    );
  }
}

export default Header;

