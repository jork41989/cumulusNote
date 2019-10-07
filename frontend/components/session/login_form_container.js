import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => {
  const errors = state.errors.session.errors;
  let userInfo = {username: "", password: ""}
  return {
    userInfo,
    formType: "login",
    errors: errors
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: formUser => dispatch(login(formUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)