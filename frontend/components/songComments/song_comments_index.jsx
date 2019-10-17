import React from 'react';
import SongCommentIndexItemContainer from './song_comments_index_item_container';

export default class CommentSongIndex extends React.Component {
  constructor(props) {
    super(props)

    this.hasComments = this.hasComments.bind(this)


  }
  componentDidMount() {
    

  }

  componentDidUpdate(prevProps) {

      console.log(this.props)
      console.log(prevProps)
  }



  hasComments() {
    if (Object.values(this.props.comments).length) {

      return (
        Object.values(this.props.comments).map(comment => (
          
          <SongCommentIndexItemContainer comment={comment} key={comment.id}/>
        ))
      )
    } else {
      return (
        <div>Nothing to see here!</div>
      )
    }

  }



  render() {
    return (
      <div className={'CommentDivs'} >
        {this.hasComments()}
      </div>
    )
  }
}