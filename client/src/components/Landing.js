import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return(
      <section className="landing">
        <Link to='/register'>Register</Link>
        <Link to='/login'>Log In</Link>
      </section>
    );
  }
}

export default Landing;