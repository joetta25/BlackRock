import React from 'react'
import styled from 'styled-components'


export const Styles = (props) => {
  return <div>{props.children}</div>
}
export default styled.div`
background-color: ${props => (props.primary ? "lightgrey" : "white")}
  width: 300px;
  border: 1px solid;
  padding: 20px;
  margin: 20px;
  text-align: center;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  height: 400px;
}
`
