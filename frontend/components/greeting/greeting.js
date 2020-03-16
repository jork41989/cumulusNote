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
      <div class="devDiv">
        <div class="devTop">Dev Info</div>
        <div className="devLinks">
          <a href="https://github.com/jork41989" className="devLink"><i class="fab fa-github"></i> Github</a>
          <a href="https://www.linkedin.com/in/ackermanjordan/" className="devLink"><i class="fab fa-linkedin"></i> LinkedIn</a>
          <a href="https://angel.co/jordan-ackerman-1" className="devLink"><i class="fab fa-angellist"></i> AngelList</a>
          <a href="http://jordanackerman.com/" className="devLink">Portfolio</a>
        </div>
      </div>
    </nav>
  );
  const personalGreeting = () => (
    
    <hgroup className="header-group">
      <NavLink to={'/createSong'} className="upload-a-button" > Upload </NavLink>
      <NavLink to={'/createSong'} className="upload-mobile" ><i class="fas fa-upload"></i> </NavLink>
      <NavLink to={`/users/${currentUser.id}`} className={"headerCurrentUser"}> {profileP()}<p className="header-name"> {currentUser.f_name} {currentUser.l_name}</p></NavLink>
      
      <div class="devDiv">
        <div class="devTop"> <p className="devText">Dev Info</p> <i class="fas fa-laptop-code"></i> </div>
        <div className="devLinks">
          <a href="https://github.com/jork41989" className="devLink"><i class="fab fa-github"></i> Github</a>
          <a href="https://www.linkedin.com/in/ackermanjordan/" className="devLink"><i class="fab fa-linkedin"></i> LinkedIn</a>
          <a href="https://angel.co/jordan-ackerman-1" className="devLink"><i class="fab fa-angellist"></i> AngelList</a>
          <a href="http://jordanackerman.com/" className="devLink">Portfolio</a>
        </div>
      </div>
      <button className="logout-button" onClick={logout}> <p className="logoutText">Log Out</p> <i class="fas fa-sign-out-alt"></i> </button>
    </hgroup>
  );

  return (
    currentUser ?
      personalGreeting(currentUser, logout) :
      sessionLinks()
  );
};