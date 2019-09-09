import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  }

  componentDidMount() {
    // if logged in and user navigates to Register page,
    // redirect to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };


  render() {
    const { errors } = this.state;

    return(
      <section className="register">
        <Link to='/'>Back to home</Link>
        <b>Register</b>
        <p>
          Already have an account? <Link to='/login'>Log in</Link>
        </p>
        <form noValidate onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            value={this.state.name}
            error={errors.name}
            id="name"
            type="text"
            className={classnames("", {
              invalid: errors.name
            })}
          />
          <label htmlFor="name">Name</label>
          <p>{errors.name}</p>
          <input
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            id="email"
            type="email"
            className={classnames("", {
              invalid: errors.email
            })}
          />
          <label htmlFor="email">Email</label>
          <p>{errors.email}</p>
          <input
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            id="password"
            type="password"
            className={classnames("", {
              invalid: errors.password
            })}
          />
          <label htmlFor="password">Password</label>
          <p>{errors.password}</p>
          <input
            onChange={this.onChange}
            value={this.state.password2}
            error={errors.password2}
            id="password2"
            type="password"
            className={classnames("", {
              invalid: errors.password2
            })}
          />
          <label htmlFor="password2">Confirm Password</label>
          <p>{errors.password2}</p>
          <button type="submit">Sign up</button>
        </form>
      </section>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));