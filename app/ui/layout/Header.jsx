import React from 'react';
import { Button } from 'reactstrap';


class Header extends React.Component {
  render() {
    return (

      <div id="header">
        <h1>Library.mn for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
        <Button color="success">Danger!</Button>
      </div>
    );
  }
}

export default Header;

