import React from 'react';

export default class SongForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      user_id: '',
      song_mp3: null,
      song_art_cur: null,
      songArtFile: null,
      songArtUrl: null,
      loading: false,
      songError: "",
      song_id: null
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
    this.refresh = this.refresh.bind(this)
    this.owner = this.owner.bind(this)
  }
  componentDidMount(e) {
    console.log(this.props)
    this.props.requestSingleSong(this.props.songId).then(response => {

      this.setState({ name: response.payload.song.name, user_id: response.payload.user.id, song_mp3: response.payload.song.song_mp3, song_id: response.payload.song.id, song_art_cur: response.payload.song.song_art });
      this.owner()
    })
  }

  owner(){
    if(this.props.currentUser.id != this.state.user_id){
      this.props.history.push(`/songs/${this.state.song_id}`)
    }
  }
  renderErrors() {
    if (Object.values(this.props.errors).length) {
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

  refresh() {
    this.props.history.push(`/songs/${this.state.song_id}`)
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('song[name]', this.state.name);
    formData.append('song[user_id]', this.state.user_id);
    if (this.state.songArtFile) {
      formData.append('song[song_art]', this.state.songArtFile);
    }
    this.setState({ loading: true })
    this.props.processForm(this.state.song_id, formData).then(this.refresh);
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

  loadingIcon() {
    if (this.state.loading) {
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
      </div>)
    } else {
      return (
        <div></div>
      )
    }
  }
  render() {

    let songArtBg;
    if (this.state.songArtUrl) {
      songArtBg = {
        backgroundImage: `url('${this.state.songArtUrl}')`
      }
    } else if (this.state.song_art_cur){
      songArtBg = {
        backgroundImage: `url('${this.state.song_art_cur}')`
      }
    }else {
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
                <audio src={this.state.song_mp3} controls></audio>
              </div>

            </div>
            <div className={"songDetailsDiv"}>

              <div>
                <h3 className={"songInfoHeader"}>Song information!</h3>
                <div className={"songArtUploadDiv"}>
                  <div className={"previewSongArtDiv"} style={songArtBg}>
                    <input type="file" accept="image/*" onChange={(e) => this.handleFile(e, "songArt")} name="songArt" id="songArt" className={"songArtfile"} />
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