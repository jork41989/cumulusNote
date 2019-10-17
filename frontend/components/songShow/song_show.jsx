import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import SongShowContainer from './song_show_container'
import CommentFormContainer from '../commentsForm/comment_form_container'
import SongCommentsIndexContainer from '../songComments/song_comments_index_container'

export default class SongShow extends React.Component {
  constructor(props) {
    super(props);
    this.songId = parseInt(this.props.match.params.id);
    this.state = {
    }
    this.edit = this.edit.bind(this)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.pauseOrPlay = this.pauseOrPlay.bind(this)
    this.justplay = this.justplay.bind(this)
    this.commentsThere = this.commentsThere.bind(this)
    this.loggedIn = this.loggedIn.bind(this)
  }

  componentDidMount(e) {
    // this.poke = this.props.requestSinglePokemon(this.pokeId);

    this.props.requestSingleSong(this.songId).then(response => {
      this.setState({ song: response.payload.song, user: response.payload.user, comments: response.payload.comments });
    })
  }
  componentDidUpdate(prevProps){

  }

  edit(){
    if(this.props.currentUser){
    if (this.props.currentUser.id === this.state.user.id){
      return (
        <NavLink to={`/songs/${this.songId}/edit`} ><i className="fas fa-edit">Edit Song</i></NavLink>
      )
    }
  }
  }

  play(){
    this.props.playAsong(this.state)

  }

  justplay(){
    this.props.justPlayIt()
  }

  pause(){
    this.props.pauseAsong()
   
  }

  pauseOrPlay(){
    
    if (this.props.currentSong){
     
      if(this.props.currentSong.song.id === this.state.song.id && this.props.playback){
        return (<i class="fas fa-pause-circle SongShowPause" onClick={this.pause}></i>)
      } else if (this.props.currentSong.song.id === this.state.song.id && !this.props.playback){
        return (<i className="fas fa-play SongShowPlay" onClick={this.justplay}></i>)
      } else {
        return (<i className="fas fa-play SongShowPlay" onClick={this.play}></i>)
      }
    }else {
    return (<i className="fas fa-play SongShowPlay" onClick={this.play}></i>)
    }
  }
  commentsThere(){
    if (this.state.comments){
      return (<SongCommentsIndexContainer comments={this.state.comments} />)
    }
  }
  loggedIn(){
    if (this.props.currentUser){
      return (
        <CommentFormContainer songId={this.songId} />
      )
    } else{
      return(
        <div>You have to log in to comment!</div>
      )
    }
  }
  render(){
    let art;
    let pphoto;
    console.log(this.state)
    if (this.state.song){
      
    if (Object.values(this.state.song).length){
      if (this.state.song.song_art) {
        art = {
          backgroundImage: `url('${this.state.song.song_art}')`
        }
      } else {
        art = {

        }
      }
      if(this.state.user.profile_photo){
        pphoto = {
          backgroundImage: `url('${this.state.user.profile_photo}')`
        }
      } else {
        pphoto = {

        }
      }

      return (
        <div className={"contentDiv"}>

          <div className={"songShowDiv"}>
            <div className="songShowInfoArt">
              <div className="songShowplayback">
                
                <div className="songShowInfo">
                  <div className="playDivShow">{this.pauseOrPlay()}</div>
                  <div className="songShowInfoDetails">
                  <NavLink to={`/users/${this.state.user.id}`}><p className={"songShowUser"}>{this.state.user.f_name} {this.state.user.l_name} </p></NavLink>
                  <p className={"songShowSongName"}>{this.state.song.name}</p>
                  {this.edit()}
                  </div>
                </div>
              </div>
              
              <div className={"songShowArt"} style={art}></div>
            </div>
          </div>

          <div className={"commentAndArtistStuff"}>
            {this.loggedIn()}
           
            <div className={'commentArtistArea'}>
            <div className={"songShowArtistInfo"}>
                <div className={"songShowArtistPhoto"} style={pphoto}></div>
                <p className={"songShowArtistName"}>{this.state.user.f_name} {this.state.user.l_name}</p>
            </div>
            {this.commentsThere()}
            </div>
            
          </div>
        </div>
      )
    }} else{
      return (<div>no song </div>)
    }

  }
}