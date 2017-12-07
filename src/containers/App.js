import React, { Component } from 'react';

import "./App.css"

import Navigation from "../components/Navigation.js"
import UserProfile from "../components/UserProfile.js"
import Hero from "../components/Hero.js"
import ListCategory from "../components/ListCategory.js"
import Logo from "../components/Logo.js"
import SearchBar from "../components/SearchBar.js"

export default class App extends Component {
		state = {
			searchTerm:"",
      searchUrl:""
		}

	handleKeyUp = ({key}) => {
    if(key === 'Enter' && this.state.searchTerm !== ""){
      var searchUrl =  `search/multi?query=${this.state.searchTerm}&api_key=166624c030b91c943c397020f20525b4`;
      this.setState({
        searchUrl
      })
    }
  }

  handleChange = (event) => {
    const searchTerm = event.target.value
    this.setState({
      searchTerm
    })
  }

	render() {
		return(
			<div>
        <header className="Header">
          <Logo />
          <Navigation />
          <div id="search" className="Search">
            <SearchBar 
              onChange={this.handleChange} 
              onKeyUp={this.handleKeyUp} 
              value={this.state.searchTerm}
            />
          </div>
          <UserProfile />
        </header>
        <Hero />
        <ListCategory searchUrl={this.state.searchUrl}/>
      </div>
		)
	}
}