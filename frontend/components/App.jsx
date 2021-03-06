import React from "react";
import { Link } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/sign_up_container';
import { AuthRoute } from '../util/route_util'
import { Route } from 'react-router-dom';
import Modal from './modal/modal'
import PlayBackContainer from './playback/playback_container' 
import UserProfileContaner from "./userProfile/user_profile_container"
import SongFormContainer from "./songForm/song_form_container"
import SongShowContainer from "./songShow/song_show_container"
import SongEditFormContainer from "./songForm/song_edit_form_container"
import DiscoverContainer from "./discover/discover_container"
import Search from './search/search'
import HeaderContainer from './header/header_container'




const App = () => (
  <div className={"mainBack"}>
    <header >
      <HeaderContainer />
    </header>
    
    <div className="userbar">
       
    </div>
    <div className={"main_content_div"}>
      <Route path='/users/:id' component={UserProfileContaner} />
      <Route exact path='/songs/:id' component={SongShowContainer} /> 
      <AuthRoute path='/createSong' component={SongFormContainer} />
      <AuthRoute path='/songs/:id/edit' component={SongEditFormContainer}/>
      <Route exact path='/' component={DiscoverContainer} />
    </div>
    <Modal />
    <PlayBackContainer />
  </div>
);

export default App;