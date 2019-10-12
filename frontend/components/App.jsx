import React from "react";
import { Link } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/sign_up_container';
import { AuthRoute } from '../util/route_util'
import { Route } from 'react-router-dom';
import Modal from './modal/modal'
import UserProfileContaner from "./userProfile/user_profile_container"
import SongFormContainer from "./songForm/song_form_container"




const App = () => (
  <div className={"mainBack"}>
    <header className="HeaderBar">
      <Link to={"/"} className={"logocontainer"}><img src={window.logoURL} className={"logoimg"}/><p>cumulusNote</p></Link>
      <GreetingContainer />
    </header>
    
    <div className="userbar">
       
    </div>
    <div className={"main_content_div"}>
      <Route path='/users/:id' component={UserProfileContaner} />
      <Route path='/createSong' component={SongFormContainer} />
    </div>
    <Modal />
  </div>
);

export default App;