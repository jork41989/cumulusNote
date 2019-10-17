import { connect } from 'react-redux';
import CommentForm from './comment_form';
import {createAcomment} from '../../actions/comments_actions';


const mapStateToProps = (state, ownProps) => {
  let commentInfo = { body: "", user_id: "", song_id: "" };
  return {
    commentInfo,
    currentUser: state.entities.users[state.session.currentUser.id]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (comment) => dispatch(createAcomment(comment)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)