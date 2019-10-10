import { connect } from 'react-redux';
import ProfilePhotoForm from './profile_photo_form';
import { requestSingleUser, updateAuser } from '../../actions/users_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom'
const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.match.params.id);
  let user = state.entities.users[userId];
  if (user) {
    user = Object.assign({}, user)
  }

  return {
    user: user,
    errors: state.errors
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const userId = parseInt(ownProps.match.params.id);
  return {
    requestSingleUser: () => dispatch(requestSingleUser(userId)),
    closeModal: () => dispatch(closeModal()),
    updateAuser: (user) => dispatch(updateAuser(user))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePhotoForm))