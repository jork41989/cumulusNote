import React from 'react';
import { NavLink } from 'react-router-dom';


export default ({ song, user, removeASignleSong, currentUser}) => {
  let art;
  let del;
  if (song.song_art){
    art = <img src={song.song_art} className={"songArt"}/> 
  } else {
    art = <div className={"songArt"}></div>
  }
 if (currentUser){
  if (user.id === currentUser.id){
    del = <button onClick={() => removeASignleSong(song.id)} className={"removeSongProfile"}>X</button>
  } else{
    del = <div></div>
  }}
  
  return (
    <div className={"songDiv"}>
      {art}
      <div className={"songInfoDiv"}>
        <div className={"songInfoDivOrg"}>
        <div className={"songNameDiv"}>
          <NavLink to={`/songs/${song.id}`}>{song.name}</NavLink>
          <p>{user.f_name} {user.l_name}</p>
        </div>
        <div>{del}</div>
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
      
      

    </div>
  
  )
}