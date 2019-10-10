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

  profileEdit(){

    if (this.props.currentUser){
    if( this.props.user.id === this.props.currentUser.id) {
      return(
        <button className={"profile_edit_button"} onClick={() => this.props.openModal('profilePhoto')}><img src={window.photoEdit} className={"profile_edit_photo"} alt={"edit profile photos"} /></button>
      )
    } else {
      return (
        <div className={"profile_photo_form_div"}>

        </div>
      )
    }
  }
  }

  render() {
    if (this.state.user){
      return (
          <div className={"profile_background"}>
            <div className={"profile_info"}>
              <div className={"profile_photo"}>

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