import React from 'react';
import { NavLink } from 'react-router-dom';


export default ({ song, user, removeASignleSong, requestAllUserSongs}) => {
  let art;
  if (song.song_art){
    art = <img src={song.song_art} className={"songArt"}/> 
  } else {
    art = <div className={"songArt"}></div>
  }
  return (
    <div className={"songDiv"}>
      {art}
      <div className={"songInfoDiv"}>
        <div className={"songNameDiv"}>
          <NavLink to={`/songs/${song.id}`}>{song.name}</NavLink>
          <p>{user.f_name} {user.l_name}</p>
        </div>
        <div>
          <audio
            controls
            src={song.song_mp3}>
            Your browser does not support the
              <code>audio</code> element.
          </audio>
        </div>

      </div>
      
      <button onClick={() => removeASignleSong(song.id)}>Delete Song</button>

    </div>
  
  )
}