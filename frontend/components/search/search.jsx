import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom';

export default class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
      autoCompleteResults: [],
      itemSelected: {},
      showItemSelected: false
    };
    

    this.clearSearch = this.clearSearch.bind(this);

    $.getJSON('/search?q=' + this.state.term)
      .then(response => this.setState({ autoCompleteResults: response.songs }))
  }

  
  getAutoCompleteResults(e) {
    
    this.setState({
      term: e.target.value
    }, () => {
      if(this.state.term != ''){
        $.getJSON('api/search.json?q=' + this.state.term)
        .then(response => this.setState({ autoCompleteResults: response.songs }))
      } else{
        this.setState({ autoCompleteResults: []})
      }
    });
  
  }

  clearSearch(){
    this.setState({ term: '', autoCompleteResults: []})

  }

  results(){
    let autoCompleteList
    if (this.state.autoCompleteResults){
    
        autoCompleteList =  this.state.autoCompleteResults.map((response, index) => {
          return ( <div key={index} onClick={this.clearSearch}>
            <NavLink to={`/songs/${response.song_id}`} className={'noLineLinkSearch'}><h2 className={'noLineLinkSearch'}>{response.name}</h2></NavLink>
          </div>)
    
    }) 
    } 
    return autoCompleteList
  }
  

  render() {

    return (
      <div>
        <input ref={(input) => { this.searchBar = input }} value={this.state.term} onChange={this.getAutoCompleteResults.bind(this)} type='text' placeholder='Search...' className={'searchBar'} />
        <div className={"autoComplete"}>
        {this.results()}
        </div>
      </div>
    )
  }
}
