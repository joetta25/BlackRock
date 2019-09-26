import React from 'react';
import Styles from '../../components/Styles/Styles'
import './boxWrapper'
import Grid from './Grid'
import Button from '../Button/Button'


class SearchBar extends React.Component{
  constructor(props){
    super(props)
  
    this.state = { text: '' }

  this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();
  }
  render(){
    return(
      <div className="row">
      <Styles styles= {{width: "80%"}}>
      <div className="col-1">
        <form onSubmit={this.handleSubmit}>
        <label className="label">Name:</label>
        <input type="text"
        className="inputs"
        name="Name" 
        value={this.state.text}
        onChange={e => this.setState({ text: e.target.value })}/>
        <label className="label">Description:</label>
        <input type="text"
         className="inputs"
         name="Description"
         value={this.state.text} 
         onChange={e => this.setState({ text: e.target.value })}/>
         <label className="label">Priority:</label>
         <input type="text"
        className="inputs" 
        name="Priority" 
        value={this.state.text}
        onChange={e => this.setState({ text: e.target.value })}/>
        </form>
        </div>
        <br/>
        <Grid/>
        <Button onClick={this.state.text}>Confirm Task</Button>
        </Styles>
      </div>
      
     
      
    )
  }
}


export default SearchBar