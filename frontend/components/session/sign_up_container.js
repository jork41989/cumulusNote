import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions'
import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => {
  const errors = state.errors.session.errors;
  let userInfo = {username: "", password: "", email: ""}
  return {
    userInfo,
    formType: "signup",
    errors: errors
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: formUser => dispatch(signup(formUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);