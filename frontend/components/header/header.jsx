import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import Search from '../search/search'
import GreetingContainer from "../greeting/greeting_container";


export default class Header extends Component {

  constructor(props) {
    super(props);
  }

componentDidMount(){
  this.vis()
}
componentDidUpdate(prevProps){
  this.vis()
  console.log(prevProps)
}

vis(){
  var currentLocation = window.location.hash;
  console.log(this.props)

  if (this.props.location.pathname){
    if (this.props.location.pathname === '/') {
      return (
        <div className="HeaderBarHome" >
          <Link to={"/"} className={"logocontainerHome"}><i class="fab fa-soundcloud -HeadyInvis"></i><p> cumulusNote</p></Link>
          <GreetingContainer />
        </div>
        )
  } else {
      return (<div className="HeaderBar" id={'HeaderBar'}>
        <Link to={"/"} className={"logocontainer"}><i class="fab fa-soundcloud -HeadyVis"></i><p>cumulusNote</p></Link>
        <Search />
        <GreetingContainer />
      </div>)
  }
}
}

render(){
  return(
    <div> {this.vis()}</div>
  )
}


}
;