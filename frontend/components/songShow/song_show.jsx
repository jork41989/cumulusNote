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

      this.setState({ song: response.song });
    })
  }

  render(){
    console.log(this.state.song)
    if (this.state.song){
    if (Object.values(this.state.song).length){
      return (
        <div className={"contentDiv"}>

          <div className={"songShowDiv"}>
            <div className="songShowInfoArt">
                <div className={"songShowArt"}>

                </div>
              <div className="songShowInfo">
                <h3>{this.state.song.name}</h3>
                <h4>{this.state.song.userId}</h4>
              </div>
            </div>
          </div>
        </div>
      )
    }} else{
      return (<div>no song </div>)
    }

  }
}