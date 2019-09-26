import React, { Component } from 'react'
import './Grid.css'


export class Grid extends Component {
  render() {
    return (
      <div class="grid-container">
      <label className="label2">Priority:</label>
        <div>HH</div>
        <div>MM</div>
        <div>SS</div>  
      </div>
    )
  }
}

export default Grid
