import React from 'react';

export default class SongForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      user_id: '',
      songFile: null,
      songUrl: null,
      songArtFile: null,
      songArtUrl: null,
      loading: false,
      songError: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
    this.refresh = this.refresh.bind(this)

    
  }

  renderErrors() {
    if (Object.values(this.props.errors).length){
        this.state.loading = false;
          return (
            <ul>
              {this.props.errors.map((error, i) => (

                <li key={`error-${i}`} className="formError">
                  {error}
                </li>
              ))}

            </ul>

          );
        }
  }

  refresh(){
    this.props.history.push(`/users/${this.props.currentUser.id}`)
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
      formData.append('song[name]', this.state.name);
      formData.append('song[user_id]', this.props.currentUser.id);
    if (this.state.songArtFile) {
      formData.append('song[song_art]', this.state.songArtFile);
    }
    if (this.state.songFile) {
      formData.append('song[song_mp3]', this.state.songFile);
      this.setState({ loading: true })
      this.props.processForm(formData).then(this.refresh);
    } else {
      this.setState({songError: "Please ensure you have a title and songfile!"})
    }
   
    
  }

  update(feild) {
    return (e) => {
      this.setState({ [feild]: e.target.value })
    }
  }

  handleFile(e, type) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    let obj;
    let el = document.getElementById(type.concat("Label"))
    fileReader.onloadend = () => {
      switch (type) {
        case 'songFile':
          obj = { songFile: file, songUrl: fileReader.result };
          break;
        case 'songArt':
          obj = { songArtFile: file, songArtUrl: fileReader.result };
          break;
        default:
          return null;
      }
      
      this.setState(obj);
      
    };
    if (file) {
      fileReader.readAsDataURL(file);
      let fname = file.name;
      el.innerHTML = fname.substring(fname.length - 20, fname.length);
    }
  }

  loadingIcon (){
    if (this.state.loading){
      return (<div className={"loadingDiv"}>
        <div className={"loadingDivChild"}>
        <div class="cssload-wrapper">
          
              <div class="cssload-square"></div>
              <div class="cssload-square"></div>
              <div class="cssload-square"></div>
              <div class="cssload-square"></div>
              <div class="cssload-square"></div>
            </div>
          </div>
          </div> )
    } else {
      return (
        <div></div>
      )
    }
  }
  render(){

    let songArtBg;
      if (this.state.songArtUrl) {
        songArtBg = {
          backgroundImage: `url('${this.state.songArtUrl}')`
        }
      } else {
        songArtBg = {

        }
      }

    
    return (
      <div className={"contentDiv"}>
      <div className={"uploadFormDiv"}>
        <form onSubmit={this.handleSubmit} >
            {this.renderErrors()}
            
          <div>
            <h2 className={"songInfoHeader"}>Song Upload!</h2>
              {this.state.songError}
            <div className={"songFileDiv"}>

            
            <input type="file" onChange={(e) => this.handleFile(e, "songFile")} accept="audio/*" name="songMp3" id="songMp3" className={"songMp3file"}/>
              <label htmlFor="songMp3" id={"songFileLabel"}>🎵 Upload your Song MP3 here!</label>
            </div>
          
          </div>
          <div className={"songDetailsDiv"}>
            
            <div>
              <h3 className={"songInfoHeader"}>Song information!</h3>
              <div className={"songArtUploadDiv"}>
                <div className={"previewSongArtDiv"} style={songArtBg}>
                  <input type="file" accept="image/*" onChange={(e) => this.handleFile(e, "songArt")} name="songArt" id="songArt" className={"songArtfile"}/>
                  <label htmlFor="songArt" id={"songArtLabel"}>📁 Upload Song Art!</label>
                </div>
                <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="songNameInput"
                  placeholder="Song Name"
                />
              </div>
            </div>
          </div>


          <div className={"submitDiv"}>
           <input className="song-submit" type="submit" value={"Upload your Song!"} />
          </div>
        </form>
        {this.loadingIcon()}
       

      
      </div>
      </div>
    )
  }


}