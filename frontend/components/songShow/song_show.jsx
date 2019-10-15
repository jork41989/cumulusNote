import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import SongShowContainer from './song_show_container'

export default class SongShow extends React.Component {
  constructor(props) {
    super(props);
    this.songId = parseInt(this.props.match.params.id);
    this.state = {}
  }

  componentDidMount(e) {
    // this.poke = this.props.requestSinglePokemon(this.pokeId);
    this.props.requestSingleSong(this.songId).then(response => {

      this.setState({ song: response.payload.song, user: response.payload.user });
    })
  }

  render(){
    let art;
    console.log(this.state.user)
    
    if (this.state.song){
      
    if (Object.values(this.state.song).length){
      if (this.state.song.song_art) {
        art = <img src={this.state.song.song_art} className={"songShowArt"} />
      } else {
        art = <div className={"songShowArt"}></div>
      }
      return (
        <div className={"contentDiv"}>

          <div className={"songShowDiv"}>
            <div className="songShowInfoArt">
              <div className="songShowplayback">
                <div className="songShowInfo">
                  <h3>{this.state.song.name}</h3>
                  <h4>{this.state.user.f_name} {this.state.user.l_name} </h4>
                </div>
              </div>
              
              {art}
            </div>
          </div>

          <div>
            comments go here!
          </div>
        </div>
      )
    }} else{
      return (<div>no song </div>)
    }

  }
}