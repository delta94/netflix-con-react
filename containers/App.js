import React from 'react';
import { Component } from 'react'
import "../css/App.css"
import Navigation from "../components/Navigation.js"
import UserProfile from "../components/UserProfile.js"
import Hero from "../components/Hero.js"
import TitleList from "./TitleList.js"
import Logo from "../components/Logo.js"

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm:"",
      searchUrl:""
		}
		this.handleChange.bind(this)
    this.handleKeyUp.bind(this)
	}

	handleKeyUp = (event) => {
    if(event.key === 'Enter' && this.state.searchTerm !== ""){
      var searchUrl =  "search/multi?query=" + this.state.searchTerm + "&api_key=166624c030b91c943c397020f20525b4";
      this.setState({
        searchUrl: searchUrl
      })
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

	render() {
		return(
			<div>
        <header className="Header">
          <Logo />
          <Navigation />
          <div id="search" className="Search">
            <input onChange={this.handleChange} onKeyUp={this.handleKeyUp} value={this.state.searchTerm} placeholder="Search for a title..."/>
          </div>
          <UserProfile />
        </header>
        <Hero />
        <TitleList title="Search Results" url={this.state.searchUrl}/>
        <TitleList title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1'/>
        <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1'/>
        <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1'/>
        <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1'/>
        <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1'/>
      </div>
		)
	}
}