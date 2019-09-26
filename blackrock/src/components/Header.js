import React from 'react'
import Styles from './Styles/Styles'

  const Header = props => {
  return (
    <Styles style = {{height: "200px", width: "80%"}}>
    <div>
    <h1>Task Master Home</h1>
    <br/>
    <br/>
    <p>Create New Task</p>
    <p style={{lineHeight: ".1rem"}}>Monitor Tasks</p>
    </div>
    </Styles>
  )
}



export default Header