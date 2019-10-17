import React from 'react';
import { NavLink } from 'react-router-dom';


export default class ProfileSongIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      song: this.props.song
    }



    this.pauseOrPlay = this.pauseOrPlay.bind(this)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.justplay = this.justplay.bind(this)
  }
  play() {
    this.props.playAsong(this.state)

  }

  justplay() {
    this.props.justPlayIt()
  }

  pause() {
    this.props.pauseAsong()

  }

  pauseOrPlay() {

    if (this.props.currentSong) {

      if (this.props.currentSong.song.id === this.props.song.id && this.props.playback) {
        return (<i class="fas fa-pause-circle pauseDiscover" onClick={this.pause}></i>)
      } else if (this.props.currentSong.song.id === this.props.song.id && !this.props.playback) {
        return (<i className="fas fa-play PlayDiscoverPlaying" onClick={this.justplay}></i>)
      } else {
        return (<i className="fas fa-play PlayDiscover" onClick={this.play}></i>)
      }
    } else {
      return (<i className="fas fa-play PlayDiscover" onClick={this.play}></i>)
    }
  }

  render() {
    let art;
    let del;
    if (this.props.song) {
      if (this.props.song.song_art) {

        art = {
          backgroundImage: `url('${this.props.song.song_art}')`
        }
      } else {

        art = {}
      }
    }



    return (
      <div className={"songDiscover"}>
        <div className={"songDiscoverArt"} style={art}>
          {this.pauseOrPlay()}
        </div>
        <p className={'discoverSongName'}>{this.props.song.name}</p>
        <p className={'discoverArtistName'}>{this.state.user.f_name} {this.state.user.l_name}</p>
      </div>

    )
  }
}