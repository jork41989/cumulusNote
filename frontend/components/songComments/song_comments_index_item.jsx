import React from 'react';
import { NavLink } from 'react-router-dom';


export default class ProfileSongIndex extends React.Component {
  constructor(props) {
    super(props)
  
  }



  render(){
    console.log(this.props)
    return (
      <div className={'songCommentDiv'}>
        <NavLink to={`/users/${this.props.comment.user_id}`} ><p className={'commentUsername'}>{this.props.comment.user_f_name} {this.props.comment.user_l_name}</p></NavLink>
        <p className={'commentBody'}>{this.props.comment.body}</p>
      </div>
    )
  }

}