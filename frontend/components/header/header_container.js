import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from "react-router";

const mapStateToProps = (state) => {
  if (state.session.currentUser) {
    return { currentUser: state.entities.users[state.session.currentUser.id] }
  } else {
    return {}
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(
 connect(mapStateToProps, mapDispatchToProps)(Header)
);