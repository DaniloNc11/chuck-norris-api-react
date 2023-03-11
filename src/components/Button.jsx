
import { useState } from 'react'
import '../styles/Button.css'
import  './Title'

function Button({text,variant,callback}) {
  const [count, setCount] = useState(0)
  let clickHandler = function(e){
    console.log(e)
    console.log(typeof undefined)
  }

  let classRenderer = function (){
    let classes = [
      'Button', variant
    ]
    return classes.join(" ")
  }

  return (
    <div onClick={clickHandler} className={classRenderer()}>

     {text}
     </div>
  
  
  )
}

export default Button
