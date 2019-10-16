import React from 'react';
import { NavLink, Route } from 'react-router-dom';

export default class Playback extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      Curtime: <p>00:00</p>,
      duration: <p>00:00</p>
    }
    this.songSrc = this.songSrc.bind(this)
    this.playing = this.playing.bind(this)
    this.pausePlay = this.pausePlay.bind(this)
    this.currentTimeDiv = this.currentTimeDiv.bind(this)
    this.mouseMove = this.mouseMove.bind(this)
    this.mouseDown = this.mouseDown.bind(this)
    this.mouseUp = this.mouseUp.bind(this)
    this.durationP = this.durationP.bind(this)
    this.artistInfo = this.artistInfo.bind(this)
    this.songInfo = this.songInfo.bind(this)
  }

  componentDidMount(e) {
    let songPlayer = document.getElementById("MainPlayer"); 
    songPlayer.addEventListener("timeupdate", () => {
      
      let ratio = songPlayer.currentTime / songPlayer.duration;
      let position = this.timeline.offsetWidth * ratio;
      this.positionHandle(position);
      this.currentTimeDiv()
      this.durationP()
    });

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

  progressBar(){

  }

  artistInfo(){
    if (this.props.curentSong){
      return(
        <NavLink to={`/users/${this.props.curentSong.user.id}`} className={'playbackArtist'}><p>{this.props.curentSong.user.f_name} {this.props.curentSong.user.l_name}</p></NavLink>
      )
    }
  }

  songInfo(){
    if (this.props.curentSong) {
      return (
        <NavLink to={`/songs/${this.props.curentSong.song.id}`} className={'playbackSongName'}><p>{this.props.curentSong.song.name}</p></NavLink>
      )
    }
  }

  currentTimeDiv(){
    let songPlayer = document.getElementById("MainPlayer");
    if (songPlayer){
      
      if (this.props.curentSong) {
        
        let seconds;
        if (Math.floor(songPlayer.currentTime % 60) < 10) {
          
          seconds = "0" + Math.floor(songPlayer.currentTime % 60)
        } else {
          seconds = Math.floor(songPlayer.currentTime % 60)
        }
        
        this.setState({Curtime: <p>{Math.floor(songPlayer.currentTime / 60)}:{seconds}</p>})
      } else {
      this.setState({ Curtime: <p>00:00</p>})
      }
  
  }
}

  

  durationP(){
    let songPlayer = document.getElementById("MainPlayer");
   
    if (this.props.curentSong) {
      
      let seconds;
      if (Math.floor(songPlayer.duration % 60) < 10) {
        seconds = "0" + Math.floor(songPlayer.duration % 60)
      } else {
        seconds = Math.floor(songPlayer.duration % 60)
      }
      this.setState({ duration: <p>{Math.floor(songPlayer.duration / 60)}:{seconds}</p>})
    } else {
      this.setState({ duration: <p>00:00</p>})
    }
  }

  pausePlay(){
 
    if (this.props.playing){
      return (<i className="fas fa-pause-circle" onClick={this.props.pauseAsong}></i>)
    } else{
      return (<i className="fas fa-play" onClick={this.props.justPlayIt}></i>)
    }
  }

  mouseMove (e) {
    // // Width of the timeline
    // var timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;

    // // Left position of the handle
    // var handleLeft = e.pageX - this.timeline.offsetLeft;

    // if (handleLeft >= 0 && handleLeft <= timelineWidth) {
    //   this.handle.style.marginLeft = handleLeft + "px";
    // }
    // if (handleLeft < 0) {
    //   this.handle.style.marginLeft = "0px";
    // }
    // if (handleLeft > timelineWidth) {
    //   this.handle.style.marginLeft = timelineWidth + "px";
    // }
    let songPlayer = document.getElementById("MainPlayer");

    this.positionHandle(e.pageX);
    if (this.props.curentSong){
    songPlayer.currentTime = ((e.pageX - 500) / this.timeline.offsetWidth) * songPlayer.duration;
    }
  }


  mouseDown (e) {
    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('mouseup', this.mouseUp);
  };
  mouseUp (e) {
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseup', this.mouseUp);
  };


  positionHandle (position) {
    
    let timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
    let handleLeft = (this.timeline.offsetWidth - 105) + (position - this.timeline.offsetLeft);
    if (handleLeft <= timelineWidth) {
      this.handle.style.marginLeft = handleLeft + "px";
    }
    if (handleLeft < 0) {
      this.handle.style.marginLeft = "0px";
    }
    if (handleLeft > timelineWidth) {
      this.handle.style.marginLeft = timelineWidth + "px";
    }
  };




  render(){
   let art;
    if (this.props.curentSong) {
        art = {
          backgroundImage: `url('${this.props.curentSong.song.song_art}')`
        }
      } else {
        art = {

        }
      }
    return (
      <div className={"playbackBarBack"}>
        <div className={"playbackBarInner"}>
          <div>{this.pausePlay()}</div>
          <div className={"currentTime"}>{this.state.Curtime}</div>
          <div id="timeline" onClick={this.mouseMove} ref={(timeline) => { this.timeline = timeline }}>
            <div id="handle" onMouseDown={this.mouseDown} ref={(handle) => { this.handle = handle }} />
          </div>
          <div className={"duration"}>{this.state.duration}</div>
          <div className={"playbackSongArt"} style={art}></div>
          <div>
            {this.artistInfo()}
            {this.songInfo()}
          </div>
          <audio src={this.songSrc()} id={"MainPlayer"}></audio>
        </div>
      </div>
    )
  }

}