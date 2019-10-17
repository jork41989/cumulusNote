import React from 'react';
import { NavLink } from 'react-router-dom';


export default class ProfileSongIndex extends React.Component {
  constructor(props) {
    super(props)
    this.dateConvert = this.dateConvert.bind(this)
  }

  dateConvert(){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(this.props.comment.created_at).toLocaleDateString([], options);
  }

  render(){
    let userProfile;
    if (this.props.comment.profile_photo){
      userProfile = {
        backgroundImage: `url('${this.props.comment.profile_photo}')`
      }
    } else{
      userProfile = {

      }
    }
    return (
      <div className={'songCommentDivWPhoto'}>
        <NavLink to={`/users/${this.props.comment.user_id}`} className={'noLineLink'} >
          <div className={'commentUserPhoto'} style={userProfile}>

          </div>
        </NavLink>
        <div className={'songCommentDiv'}>
          
          <NavLink to={`/users/${this.props.comment.user_id}`} className={'noLineLink'} ><p className={'commentUsername'}>{this.props.comment.user_f_name} {this.props.comment.user_l_name}</p></NavLink>
          <p className={'commentBody'}>{this.props.comment.body}</p>
        </div>
        <div className={'commentDate'}>
          <p>{this.dateConvert()}</p>

        </div>


      </div>
    )
  }

}