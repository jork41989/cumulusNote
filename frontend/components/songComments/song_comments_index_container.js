import { connect } from 'react-redux';
import SongCommentsIndex from './song_comments_index'
import { removeASignlecomment } from '../../actions/comments_actions'

const mapStateToProps = (state, ownProps) => {

return {
  currentUser: state.session.currentUser
}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeASignlecomment: (commentId) => dispatch(removeASignlecomment (commentId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongCommentsIndex)