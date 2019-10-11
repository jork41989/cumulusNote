import React from 'react';

export default class ProfilePhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      f_name: '',
      l_name: '',
      profilePhotoFile: null,
      profilePhotoUrl: null,
      profileBackgroundFile: null,
      profileBackgroundUrl: null,

    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
    this.userId = this.props.location.pathname.split("/")[2]
  }
  // 
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    if (this.state.profilePhotoFile) {

      formData.append('user[profile_photo]', this.state.profilePhotoFile);
    }
    if (this.state.profileBackgroundFile) {

      formData.append('user[profile_background]', this.state.profileBackgroundFile);
    }

    const id = this.userId
    this.props.updateAuser( id, formData).then(this.props.closeModal);
  }

  handleFile(e, type) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    let obj;
    
    fileReader.onloadend = () => {
      switch (type) {
        case 'profilePhoto':
          obj = { profilePhotoFile: file, profilePhotoUrl: fileReader.result };
          break;
        case 'backgroundPhoto':
          obj = { profileBackgroundFile: file, profileBackgroundUrl: fileReader.result };
          break;
        default:
          return null;
      }
      this.setState(obj);
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


  render() {
    const previewProfilePic = this.state.profilePhotoUrl ? <div> <img src={this.state.profilePhotoUrl} className={"profilePicPreview"} /> <br />  </div> : null;
    const previewProfileBg = this.state.profileBackgroundUrl ? <div><img src={this.state.profileBackgroundUrl} className={"profileBgPreview"} /> <br/> </div>: null;
    return (
      <div className={"profile_photo_form_div"}>
        <form onSubmit={this.handleSubmit} className={"profile_photo_form_form"}>
          <p className={"pFormL"}>Update Profile Photo</p>
          <div className={"previewPDiv"}>{previewProfilePic}</div>
          <p className={"pFormText"}>Your profile photo should fit within a 200px by 200px frame</p>
          <input type="file"
            onChange={(e) => this.handleFile(e, "profilePhoto")} className="profileEditInput"  />
            <br/>

          <p className={"pFormL"}>Upload Background Photo</p>
          <div className={"previewBgDiv"}>{previewProfileBg}</div>
          <p className={"pFormText"}>Your profile background should be at least 255px high and be a maximum of 1000px wide</p>
          <input type="file"
            onChange={(e) => this.handleFile(e, "backgroundPhoto")} className="profileEditInput"  />
          <br />
          <input type="submit" value="Update Profile photos" className="session-submit"/>
          </form>
      </div>
    )
  }


}