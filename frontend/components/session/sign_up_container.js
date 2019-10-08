import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const errors = state.errors.session.errors;
  let userInfo = {username: "", password: "", email: "", f_name: "", l_name: ""}
  return {
    userInfo,
    formType: "signup",
    errors: errors
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('login'))} className="loginFormButtons">
      Login
      </button>
  ),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);