import React from 'react';
import { Link } from 'react-router-dom';


export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      f_name: '',
      l_name: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(feild) {
    return (e) => {
      this.setState({ [feild]: e.target.value })
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  emailSignup() {
    if (this.props.formType === "signup")
      return (
        <div className="sessionField">
          
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input" 
            placeholder="Email" /> 
          <br />
          <input type="text"
            value={this.state.f_name}
            onChange={this.update('f_name')}
            className="login-input"
            placeholder="First Name" />
          <br />
          <input type="text"
            value={this.state.l_name}
            onChange={this.update('l_name')}
            className="login-input"
            placeholder="Last Name" />
          <br />
        </div>
      );

  }




  

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
        
      </ul>
      
    );
  }

  

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <p className={"loginFormHeader"}>Welcome to </p> 
          <div className="formLogoDiv"><img src={window.logoURL} alt="" className={"formLogo"} /><p>cumulusNote</p></div>
          <div className="">Please {this.props.formType} or {this.props.otherForm}</div> 
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <div className="login-form">
            {this.emailSignup()}
            
            
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
            
            
            <br />
            
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }

}

