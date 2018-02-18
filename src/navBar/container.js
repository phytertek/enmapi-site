import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { logout } from '../auth/async';
import NavBarPresentation from './presentation';

class NavBar extends Component {
  componentDidMount() {
    // if (!this.props.auth.isAuth) this.props.push('/login');
  }
  logoutHandler = () => {
    this.props.logout();
  };
  render() {
    return (
      <NavBarPresentation
        isAuth={this.props.auth.isAuth}
        logout={this.logoutHandler}
        push={this.props.push}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authStore
});

export default connect(mapStateToProps, {
  push,
  logout
})(NavBar);
