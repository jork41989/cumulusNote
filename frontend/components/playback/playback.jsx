import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { cpus } from 'os';

export default class Playback extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      Curtime: <p>00:00</p>,
      duration: <p>00:00</p>,
    }
    this.songSrc = this.songSrc.bind(this)
    this.playing = this.playing.bind(this)
    this.pausePlay = this.pausePlay.bind(this)
    this.currentTimeDiv = this.currentTimeDiv.bind(this)

    this.durationP = this.durationP.bind(this)
    this.artistInfo = this.artistInfo.bind(this)
    this.songInfo = this.songInfo.bind(this)
    this.mute = this.mute.bind(this)
    this.unmute = this.unmute.bind(this)
    this.seekUp = this.seekUp.bind(this)
    this.seekDown = this.seekDown.bind(this)

  }

  componentDidMount(e) {
    let songPlayer = document.getElementById("MainPlayer"); 

    
    
    songPlayer.addEventListener("timeupdate", () => {
      
      let ratio = songPlayer.currentTime / songPlayer.duration;
      

      this.currentTimeDiv()
      this.durationP()
      this.progressBar()
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

 


  mute(){
    let songPlayer = document.getElementById("MainPlayer");
    songPlayer.muted = true
  }

  unmute(){
    let songPlayer = document.getElementById("MainPlayer");
    songPlayer.muted = false
  }

  volOn(){
    let songPlayer = document.getElementById("MainPlayer");
    if(songPlayer){
      if (songPlayer.muted){
        return (<i class="fas fa-volume-mute" onClick={this.unmute}></i>)
      } else if (songPlayer.volume <= .5){
        return (<i class="fas fa-volume-down" onClick={this.mute}></i>)
      } else{
        return (<i className="fas fa-volume-up" onClick={this.mute}></i>)
      }
    } else {
      return (<i class="fas fa-volume-mute" onClick={this.unmute}></i>)
    }
  }

  setvol(e){
    console.log(e.target.value)
    let songPlayer = document.getElementById("MainPlayer");
    songPlayer.volume = e.target.value/100
  }
  progressBar() {
    let songPlayer = document.getElementById("MainPlayer");
    let seekslider = document.getElementById("seekslider");
    if (songPlayer){
      if(songPlayer.duration){
        seekslider.value = ((songPlayer.currentTime / songPlayer.duration) * 100)
      }
    }
  }

  seekDown(e){
    let songPlayer = document.getElementById("MainPlayer");
    let seekslider = document.getElementById("seekslider");
    if (songPlayer) {
      if (songPlayer.duration) {
        
        songPlayer.currentTime = (Math.floor(e.target.value / 100 * songPlayer.duration))
        console.log(Math.floor(e.target.value / 100 * songPlayer.duration))
      }  
    }
  }

  seekUp(e){
    let songPlayer = document.getElementById("MainPlayer");
    let seekslider = document.getElementById("seekslider");
    if (songPlayer) {
      if (songPlayer.duration) {
        songPlayer.currentTime = (Math.floor(e.target.value / 100 * songPlayer.duration))
        songPlayer.play()
    
      }
    }
  }

  
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

    let rangeValue
    if (document.getElementById("MainPlayer")){
      if (document.getElementById("MainPlayer").duration){
        rangeValue = (document.getElementById("MainPlayer").currentTime / document.getElementById("MainPlayer").duration) * 100
      } else {
        rangeValue = 0
      }
    }
    return (
      <div className={"playbackBarBack"}>
        <div className={"playbackBarInner"}>
          <div className={"playPauseDiv"}>{this.pausePlay()}</div>
          <div className={"currentTime"}>{this.state.Curtime}</div>
          {/* <div id="timeline" onClick={this.mouseMove} ref={(timeline) => { this.timeline = timeline }}>
            <div id="handle" onMouseDown={this.mouseDown} ref={(handle) => { this.handle = handle }} />
          </div> */}
          <div className={'seekslider'}>
          <input type="range" min="0" max="100" defaultValue="0" step=".001" id={"seekslider"} onClick={this.seekDown} />
          </div>
          <div className={"duration"}>{this.state.duration}</div>
          <div id="volume_control">
            <div className="volIconDiv">
            {this.volOn()}
            </div>
            <div className={'volSliderDiv'}>
              <input type="range" orient="vertical" min="0" max="100" defaultValue="100" step="1" id={"volSlide"} onChange={this.setvol}/>
            </div>
          </div>
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