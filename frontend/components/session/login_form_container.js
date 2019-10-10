import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';
import { clearErrors } from '../../actions/session_actions';

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
  processForm: (user) => dispatch(login(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('signup'))} className="loginFormButtons">
      Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)