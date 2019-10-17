import React from 'react';
import DiscoverSongIndexItemContainer from './discover_song_index_item_container';

export default class ProfileSongIndex extends React.Component {
  constructor(props) {
    super(props)
  
    this.hasSongs = this.hasSongs.bind(this)


  }

  hasSongs() {
    if (Object.values(this.props.songs).length) {

      return (
        Object.values(this.props.songs).map(song => (


          <DiscoverSongIndexItemContainer song={song} key={song.id} user={song.user} />
        ))
      )
    } else {
      return (
        <div>Nothing to see here!</div>
      )
    }

  }
  render() {
    return (
      <div className={'discoverSongsFlex'}>
        
        {this.hasSongs()}
      </div>
    )
  }
}