import React from 'react';

export default class SongForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      user_id: '',
      songFile: null,
      songUrl: null,
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
    this.refresh = this.refresh.bind(this)
  }

  refresh(){
    this.props.history.push(`/users/${this.props.currentUser.id}`)
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
      formData.append('song[name]', this.state.name);
      formData.append('song[user_id]', this.props.currentUser.id);
    if (this.state.songFile) {

      formData.append('song[song_mp3]', this.state.songFile);

    }
    this.setState({loading: true})
    this.props.processForm(formData).then(this.refresh);
  }

  update(feild) {
    return (e) => {
      this.setState({ [feild]: e.target.value })
    }
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ songFile: file, songUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  loadingIcon (){
    if (this.state.loading){
      return(<div>Loading!</div>)
    }
  }
  render(){

    
    return (
      <div className={"uploadFormDiv"}>
        <form onSubmit={this.handleSubmit}>

          <div>
            <input type="file" onChange={(e) => this.handleFile(e)}/>
          </div>
          <input type="text"
            value={this.state.name}
            onChange={this.update('name')}
            className="login-input"
            placeholder="Song Name"
          />

          <input className="session-submit" type="submit" value={this.props.formType} />
        </form>
        {this.loadingIcon()}
      </div>
    )
  }


}