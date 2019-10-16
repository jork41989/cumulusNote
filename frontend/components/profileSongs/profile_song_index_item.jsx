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
        return (<i class="fas fa-pause-circle pauseIndex" onClick={this.pause}></i>)
      } else if (this.props.currentSong.song.id === this.props.song.id && !this.props.playback) {
        return (<i className="fas fa-play Playindex" onClick={this.justplay}></i>)
      } else {
        return (<i className="fas fa-play Playindex" onClick={this.play}></i>)
      }
    } else {
      return (<i className="fas fa-play Playindex" onClick={this.play}></i>)
    }
  }

  render(){
  let art;
  let del;
    if (this.props.song){
  if (this.props.song.song_art) {
    art = <img src={this.props.song.song_art} className={"songArt"} />
  } else {
    art = <div className={"songArt"}></div>
  }
}
    if (this.props.currentUser) {
      if (this.props.user.id === this.props.currentUser.id) {
        del = <button onClick={() => removeASignleSong(this.props.song.id)} className={"removeSongProfile"}>X</button>
    } else {
      del = <div></div>
    }
  }
    
  
  return (
    <div className={"songDiv"}>
      {art}
      <div className={"songInfoDiv"}>
        <div className={"songInfoDivOrg"}>
        <div className={"songNamePlayDiv"}>
            <div className={"playPauseIndex"}>{this.pauseOrPlay()}</div>
            <div className={"songNameDiv"}>
              <p className={"songArtist"}>{this.props.user.f_name} {this.props.user.l_name}</p>
              <NavLink to={`/songs/${this.props.song.id}`} className={"songTitleLink"}>{this.props.song.name}</NavLink>
            </div>
        </div>
        <div>{del}</div>
        </div>
        <div>
          
        </div>

      </div>
      
      

    </div>
  
  )
}
}