import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/sign_up_container';
import { AuthRoute } from '../util/route_util'
const App = () => (
  <div >
    <header className="HeaderBar">
      <h1>Welcome to cumulusNote</h1>
      <GreetingContainer />
    </header>
    
    <div className="userbar">
      
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
    </div>

  </div>
);

export default App;