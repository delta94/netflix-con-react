import React, { Component } from 'react'
import "../css/App.css"

export default class Navigation extends Component {
	render() {
		return(
			<div id="navigator" className="Navigation" >
        <nav>
          <ul>
            <li>Browse</li>
            <li>My List</li>
            <li>Top picks</li>
            <li>Recent</li>
          </ul>
        </nav>
      </div>
		)
	}
}