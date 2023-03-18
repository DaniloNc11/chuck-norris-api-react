import { useState } from 'react'
import '../styles/Chuck.css'

function Chuck(props) {

  return (
    <div className="Chuck">
        <b><p id={props.id}>{props.children}</p></b>
    </div>
  )
}

export default Chuck