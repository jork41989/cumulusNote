import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import UserProfileContainer from './user_profile_container';



export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.userId = parseInt(this.props.match.params.id);
    this.state = {}
    
    
  }

  
  componentDidMount(e) {
    // this.poke = this.props.requestSinglePokemon(this.pokeId);
    this.props.requestSingleUser(this.userId).then(response => {
      
      this.setState({ user: response.user});
    })
  }

  componentDidUpdate(prevProps){
 

    if (prevProps.match.params.id != this.props.match.params.id) {
    this.props.requestSingleUser(this.userId).then(response => {
      this.setState({ user: response.user });
    }) 
    } else if (prevProps.user) {
      if (prevProps.user.profile_photo) {
     if (prevProps.user.profile_photo != this.props.user.profile_photo) {
      this.props.requestSingleUser(this.userId).then(response => {
        this.setState({ user: response.user });
      }
      )
      } else if (prevProps.user.profile_background) {
        if (prevProps.user.profile_background != this.props.user.profile_background) {
      this.props.requestSingleUser(this.userId).then(response => {
        this.setState({ user: response.user });
      }
      )
    }
  }}
  }
}
  
  
  

  profileEdit(){

    if (this.props.currentUser && this.props.user){
    if( this.props.user.id === this.props.currentUser.id) {
      return(
        <button className={"profile_edit_button"} onClick={() => this.props.openModal('profilePhoto')}><img src={window.photoEdit} className={"profile_edit_photo"} alt={"edit profile photos"} /></button>
      )
    } else {
      return (
        <div >
         
        </div>
      )
    }
  }
  }

  render() {
    let profilepic
    let profileBg
    if (this.state.user){
      if (this.state.user.profile_background){
      profileBg = {
        backgroundImage: `url('${this.state.user.profile_background}')`
      }
    } else {
        profileBg = {
         
        }
    }

    if (this.state.user.profile_photo) {
      profilepic = this.state.user.profile_photo
      } else (
        profilepic = window.profileP
      )
      return (
        <div style={profileBg} className={'profile_background'}>
            <div className={"profile_info"}>
              <div className={"profile_photo"}>
                <img src={profilepic} alt=""/>
              </div>
              <div className={"profile_user_info"}>
                <p className={"profile_user_name"}>{this.state.user.f_name} {this.state.user.l_name}</p>
                <p className={"profile_user_username"}>aka: {this.state.user.username}</p>
              </div>
                {this.profileEdit()}
            </div>
            
          </div>
      )
    } else {
      return (<div>

      </div>)
    }
  }


}