import React from 'react';
import ProfileSongIndexItem from './profile_song_index_item';

export default class ProfileSongIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      songs: null
    }
    this.hasSongs = this.hasSongs.bind(this)

  }
  componentDidMount() {
    console.log()
    this.props.requestAllUserSongs(this.props.user.id).then( songs  => 
      {console.log(songs)
      this.setState({songs: songs.songs})})
  }

  hasSongs () {
    if (this.state.songs) {
  
      return (
        Object.values(this.state.songs).map(song => (
    
          
          <ProfileSongIndexItem song={song}/>
        ))
      )} else {
        return (
          <div>Nothing to see here!</div>
        )
      }
    
  }

  render() {
    
    return (
      <div>
  
        {this.hasSongs()}
      </div>
    )
  }
}