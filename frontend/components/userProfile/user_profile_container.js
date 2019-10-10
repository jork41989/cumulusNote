import {connect} from 'react-redux';
import UserProfile from './user_profile'
import { requestSingleUser } from '../../actions/users_actions'
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.match.params.id);
  let user = state.entities.users[userId];
  
  if (user) {
    user = Object.assign({}, user)
  }

  return {
    user: user,
    errors: state.errors,
    currentUser: state.session.currentUser
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const userId = parseInt(ownProps.match.params.id);
  return {
    requestSingleUser: () => dispatch(requestSingleUser(userId)),
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);