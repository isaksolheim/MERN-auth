import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(userData);
  };

  render() {
    const { errors } = this.state;

    return(
      <section className="login">
        <Link to='/'>Back to home</Link>
        <p>
          Don't have an account? <Link to='/register'>Register</Link>
        </p>
        <form noValidate onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            id="email"
            type="email"
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            id="password"
            type="password"
          />
          <label htmlFor="password">Password</label>
          <button type="submit">Login</button>
        </form>
      </section>
    );
  }
}

export default Login;