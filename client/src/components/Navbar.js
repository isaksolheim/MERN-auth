import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return(
      <nav>
        <ul>
          <li>
            <Link to='/'>Expensive</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/login'>Log in</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;