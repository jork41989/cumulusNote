import React from "react";
import { Link } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/sign_up_container';
import { AuthRoute } from '../util/route_util'
import Modal from './modal/modal'




const App = () => (
  <div >
    <header className="HeaderBar">
      <Link to={"/"} className={"logocontainer"}><img src={window.logoURL} className={"logoimg"}/><p>cumulusNote</p></Link>
      <GreetingContainer />
    </header>
    
    <div className="userbar">
       
    </div>
    <Modal />
  </div>
);

export default App;