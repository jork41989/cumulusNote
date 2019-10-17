import React from 'react';


export default class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      user_id: '',
      song_id: ''
      
    };
  
    this.handleSubmit = this.handleSubmit.bind(this);
    this.refresh = this.refresh.bind(this)

  }
  refresh() {
    this.setState({
      body: '',
      user_id: '',
      song_id: ''})
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('comment[body]', this.state.body);
    formData.append('comment[user_id]', this.props.currentUser.id);
    formData.append('comment[song_id]', this.props.songId)
    this.props.processForm(formData).then(this.refresh);
  }
  update(feild) {
    return (e) => {
      this.setState({ [feild]: e.target.value })
    }
  }

  render (){
    console.log(this.props)
    return (<div>
      <form onSubmit={this.handleSubmit} className={"commentForm"}>
        <textarea type="text"
          value={this.state.body}
          onChange={this.update('body')}
          className="login-input"
          placeholder="Place your comment here"
        ></textarea>
        <input className="commentFormSubmit" type="submit" value={"Comment Away!"} />
        </form>
    </div>)
  }
}