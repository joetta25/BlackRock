import React, {Component} from 'react'
import Styles from './Styles/Styles'

export default class Hero extends Component {
 

  render() {
    return (
      <div className="IT">
        <Styles>
        <h2 style={{marginBottom: "30px"}}>Task Master Home</h2>
          <Styles style = {{height: "250px", width: "80%", fontWeight: "bold", backgroundColor: "lightgrey", Padding: "30px", Margin: "30px"}}>
            <div className="InputData">
              <h4>Following task been successfully created</h4>
              <label style={{position: "absolute"}}>Name</label> 
              <input 
              style={{marginLeft: "7em", width: "20vw"}}
              type = "text"
              onChange={this.handleChange}
              placeholder="Name"
              />
              <br/>
              <label style={{position: "absolute"}}>Description</label> 
              <input 
              style={{marginLeft: "7em", width: "20vw"}}
              type = "text"
              onChange={this.handleChange}
              placeholder="Description"
              />
              <br/>
              <label style={{position: "absolute"}}>Priority</label> 
              <input
              style={{marginLeft: "7em", width: "20vw"}} 
              type = "text"
              onChange={this.handleChange}
              placeholder="Priority"
              />
              <br/>
              <label style={{position: "absolute" }}>Allowed Time</label> 
             <input 
              type = "text"
              style={{marginLeft: "7em", width: "20vw"}}
              onChange={this.handleChange}
              placeholder="Allowed Time"
              />
              </div>
          </Styles>
          <p style={{lineHeight: ".1em", fontFamily: "italic"}}>Create New Task</p>
          <p style={{lineHeight: ".1em", fontFamily: "italic"}}>Monitor Tasks</p>
        </Styles>
      </div>
    )
  }
}

