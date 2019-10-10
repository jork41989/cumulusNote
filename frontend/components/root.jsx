
import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Route } from 'react-router-dom';
import UserProfileContaner from "./userProfile/user_profile_container"
import App from './App';



export default ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
      
    </HashRouter>

  </Provider>
);

