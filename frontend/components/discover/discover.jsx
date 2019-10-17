import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import DiscoverSongIndexContainer from '../discoverSongs/discover_songs_index_container'


export default class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.songId = parseInt(this.props.match.params.id);
    this.state = {
    }

    this.hasSongs = this.hasSongs.bind(this)
    this.loggedIn = this.loggedIn.bind(this)
  
  }

  componentDidMount(){
    this.props.requestDiscoverySongs().then(response => {
      this.setState({ songs: response.songs });
    })
  }


  loggedIn() {
    if (this.props.currentUser) {
      return (<div>
        <p className={'welcomeMessage'}>Welcome Back </p> 
        <p className={'welcomeMessage'}>{this.props.currentUser.f_name}{this.props.currentUser.l_name}</p>
      </div>)
    } else {
      return (
        <div className={'discoverMessageDivOut'}>
          <div className={'discoverMessageDivIn'}>
          <p className={'discoverMessageL'}>What's next in music is first on SoundCloud</p>
          <p className={'discoverMessages'}>Upload your first track and begin your journey. SoundCloud gives you space to create, find your fans, and connect with other artists.</p>
          </div>
          <button onClick={() => this.props.openModal('login')} className="loginbtnDiscover">Login</button>
          <button onClick={() => this.props.openModal('signup')} className="signupbtnDiscover">Create account</button>
        </div>
      )
    }
  }
  
  hasSongs(){
    if(this.state.songs){
      return (
        <DiscoverSongIndexContainer songs={this.state.songs}/>
      )
    }
  }

  render(){
    console.log(this.state)
    let hereoImg = {
      backgroundImage: `url('${window.hero}')`
    }
    
    return (<div className={"contentDiv"}>
      <div style={hereoImg} className={'heroBack'}>
        {this.loggedIn()}
      </div>
      <div className={"discoverSongsDiv"}>
        <h3 className={'SongsHeader'}>Hear what’s trending for free in the cumulusNote community</h3>
        {this.hasSongs()}
      </div>
     </div>)
  }

}