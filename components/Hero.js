import React, { Component } from 'react'
import "../css/App.css"
import HeroButton from "./HeroButton.js"

export default class Hero extends Component {
	render() {
		return(
			<div id="hero"  className="Hero" style={{backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)'}}>
        <div className="content">
          <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background"/>
          <h2>Season 2 now available</h2>
          <p>The second season of Narcos, an American crime thriller drama web television 
          series produced and created by Chris Brancato, Carlo Bernard, 
          and Doug Miro, follows the story of notorious drug kingpin Pablo 
          Escobar, who became a billionaire through the production and distribution 
          of cocaine, while also focusing on Escobar's interactions with drug lords, DEA 
          agents, and various opposition entities.</p>
          <div className="button-wrapper">
            <HeroButton primary={true} text="Watch now"/>
            <HeroButton primary={false} text="+ My list"/>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
		)
	}
}