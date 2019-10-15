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
    let el = document.getElementById(type.concat("Label"))
    
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
      let fname = file.name;
      el.innerHTML = fname.substring(fname.length - 20, fname.length);
    }
  }

 


  render() {
    let previewbackgroundPhoto;
    let previewProfilePic;
    if (this.state.profilePhotoUrl){
      previewProfilePic = {
        backgroundImage: `url('${this.state.profilePhotoUrl}')`
      }
    } else {
      previewProfilePic = {

      }
    }
    if (this.state.profileBackgroundUrl) {
      previewbackgroundPhoto = {
        backgroundImage: `url('${this.state.profileBackgroundUrl}')`
      }
    } else {
      previewbackgroundPhoto = {

      }
    }
    
   
    const previewProfileBg = this.state.profileBackgroundUrl ? <div><img src={this.state.profileBackgroundUrl} className={"profileBgPreview"} /> <br/> </div>: null;
    return (
      <div className={"profile_photo_form_div"}>
        <form onSubmit={this.handleSubmit} className={"profile_photo_form_form"}>
          <div className="profilePhoto" id="profilePhoto">
            <h3 className={"pFormL"}>Update Profile Photo</h3>

            <div className={"profilePhotoUploadDiv"}>
              <div className={"previewprofilePhotoDiv"} style={previewProfilePic}>
                <input type="file" accept="image/*" onChange={(e) => this.handleFile(e, "profilePhoto")} name="profilePhotoImg" id="profilePhotoImg" className={"profilePhotofile"} />
                <label htmlFor="profilePhotoImg" id={"profilePhotoLabel"}>📸 Upload Profile Photo!</label>
              </div>
            </div>
            <p className={"pFormText"}>Your profile photo should fit within a 200px by 200px frame</p>
            
          </div>
            <br/>
          <div className="backgroundPhoto" id="backgroundPhoto">
          <h3 className={"pFormL"}>Upload Background Photo</h3>
         

            <div className={"backgroundPhotoUploadDiv"}>
              <div className={"previewbackgroundPhotoDiv"} style={previewbackgroundPhoto}>
                <input type="file" accept="image/*" onChange={(e) => this.handleFile(e, "backgroundPhoto")} name="backgroundPhotoImg" id="backgroundPhotoImg" className={"backgroundPhotofile"} />
                <label htmlFor="backgroundPhotoImg" id={"backgroundPhotoLabel"}>🖼️ Upload Profile Background!</label>
              </div>
            </div>
            <p className={"pFormText"}>Your profile background should be at least 255px high and be a maximum of 1000px wide</p>
          <br />
          </div>
          <input type="submit" value="Update Profile photos" className="session-submit"/>
          </form>
      </div>
    )
  }


}