import React from 'react';
import {Link} from 'react-router-dom';

export default ({currentUser, logout}) => {
  const display = currentUser ? (
    <div className="userbar" >
      <p>Hello, {currentUser.username}</p>
      <button onClick={logout}>logout</button>
    </div>
  ) : (
      <div className="userbar" >
        <Link className="userbtn" to="/signup">Sign Up</Link>

        <br></br>
        <Link className="userbtn" to="/login">Log In</Link>
      </div>
    )
  return (
    <header >
      <div >
        {display}
      </div>
    </header>
  )
}