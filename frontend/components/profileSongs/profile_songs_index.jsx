import React from 'react';
import ProfileSongIndexItem from './profile_song_index_item';

export default class ProfileSongIndex extends React.Component{
  constructor(props){
    super(props)
    
    this.hasSongs = this.hasSongs.bind(this)
    

  }
  componentDidMount() {
    this.props.requestAllUserSongs(this.props.user.id)

  }

  componentDidUpdate(prevProps){
    console.log(prevProps, this.props)
    if(this.props.user.id != prevProps.user.id){
      this.props.requestAllUserSongs(this.props.user.id)
      }
    } 
    
  

  hasSongs () {
    if (Object.values(this.props.songs).length) {
  
      return (
        Object.values(this.props.songs).map(song => (
    
          
          <ProfileSongIndexItem song={song} key={song.id} user={this.props.user} removeASignleSong={this.props.removeASignleSong} currentUser={this.props.currentUser}/>
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
        <h2>All Songs</h2>
        {this.hasSongs()}
      </div>
    )
  }
}