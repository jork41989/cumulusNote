import React from 'react';

export default class ProfilePhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      f_name: '',
      l_name: '',
      profile_photo: null
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    if (this.state.profile_photo) {

      formData.append('post[photo]', this.state.profile_photo);
    }
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {

      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


  render() {
    return (
    <div className="login-form-container">

      hello!
    </div>
    )
  }


}