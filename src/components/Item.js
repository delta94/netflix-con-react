import React, { Component } from 'react'

import "../containers/App.css"

import ListToggle from "../containers/ListToggle.js"

const Item = ({title, score, overview, backdrop}) => (
  <div className="Item" style={{backgroundImage: `url(${backdrop})`}}>
    <div className="overlay">
      <div className="title">{title}</div>
      <div className="rating">{score} / 10</div>
      <div className="plot">{overview}</div>
      <ListToggle />
    </div>
  </div>
)

export default Item;