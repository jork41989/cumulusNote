import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";


// Entry file for react.

document.addEventListener("DOMContentLoaded", () => {
  let rootEl = document.getElementById("root");
  // Grabs the root element from the HTML file.

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUser: { id: window.currentUser.id, username: window.currentUser.username, f_name: window.currentUser.f_name, l_name: window.currentUser.l_name } }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // Checks to see if there is a current user, of there is it adds that user to the session and users slice of state.

  
  window.getState = store.getState;
  ReactDOM.render(<Root store={store} />, rootEl)
});