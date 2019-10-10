import React from 'react';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')} className="loginbtn">Login</button>
      <button onClick={() => openModal('signup')} className="signupbtn">Create account</button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <NavLink to={`/users/${currentUser.id}`}> <p className="header-name">{currentUser.f_name} {currentUser.l_name}</p></NavLink>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return (
    currentUser ?
      personalGreeting(currentUser, logout) :
      sessionLinks()
  );
};