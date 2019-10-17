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
    
    return (<div className={"contentDiv"}>
      <div className={"discoverSongsDiv"}>
        {this.hasSongs()}
      </div>
     </div>)
  }

}