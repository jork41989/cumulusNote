import React from 'react';
import { NavLink, Route } from 'react-router-dom';

export default class Playback extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
  
    }
    this.songSrc = this.songSrc.bind(this)
    this.playing = this.playing.bind(this)
    this.pausePlay = this.pausePlay.bind(this)
  }

  componentDidMount(e) {
   

  }

  componentDidUpdate(prevProps){

    this.songSrc()
    this.playing()

  }
  playing(){
    let songPlayer = document.getElementById("MainPlayer"); 
    if (songPlayer){
      if(this.props.playing){
        songPlayer.play()
      } else {
        songPlayer.pause()
      }
  }
  }

  songSrc (){
    if (this.props.curentSong) {
      
      return (this.props.curentSong.song.song_mp3)

    } 
  }

  pausePlay(){
 
    if (this.props.playing){
      return (<i class="fas fa-pause-circle" onClick={this.props.pauseAsong}></i>)
    } else{
      return (<i class="fas fa-play" onClick={this.props.justPlayIt}></i>)
    }
  }
  render(){
  
    return (
      <div className={"playbackBarBack"}>
        <div className={"playbackBarInner"}>
          <div>{this.pausePlay()}</div>
          <audio src={this.songSrc()} id={"MainPlayer"}></audio>
        </div>
      </div>
    )
  }

}