import React from 'react';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default ({ currentUser, logout, openModal }) => {
  const profileP = () =>{
      if (currentUser.profile_photo){
        return (<img src={currentUser.profile_photo} className={"headerPhoto"} />)
      } else {
        return (<img src={window.profileP} className={"headerPhoto"} />)
      }
  }
  const sessionLinks = () => (
    
    <nav className="login-signup">
      <button onClick={() => openModal('login')} className="loginbtn">Login</button>
      <button onClick={() => openModal('signup')} className="signupbtn">Create account</button>
    </nav>
  );
  const personalGreeting = () => (
    
    <hgroup className="header-group">
      <NavLink to={'/createSong'} className="upload-a-button" > Upload a Song</NavLink>
      <NavLink to={`/users/${currentUser.id}`} className={"headerCurrentUser"}> {profileP()}<p className="header-name"> {currentUser.f_name} {currentUser.l_name}</p></NavLink>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return (
    currentUser ?
      personalGreeting(currentUser, logout) :
      sessionLinks()
  );
};