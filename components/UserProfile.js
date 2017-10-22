import React, { Component } from 'react'
import "../css/App.css"

export default class UserProfile extends Component {
	render() {
		return(
			<div className="UserProfile">
        <div className="User">
          <div className="name">Jordi Gomper</div>
          <div className="image">
            <img src="https://pbs.twimg.com/profile_images/900363575767728130/f-ymAfOR_400x400.jpg" alt="profile"/>
          </div>
        </div>
      </div>
		)
	}
}