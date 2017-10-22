import React, { Component } from 'react'
import "../css/App.css"

export default class HeroButton extends Component {
	render() {
		return(
			<a a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
		)
	}
}