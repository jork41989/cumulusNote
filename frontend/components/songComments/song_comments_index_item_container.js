import {removeASignlecomment} from '../../actions/comments_actions';
import { connect } from 'react-redux';
import SongCommentsIndexItem from './song_comments_index_item';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeASignlecomment: (commentId) => dispatch(removeASignlecomment(commentId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongCommentsIndexItem)