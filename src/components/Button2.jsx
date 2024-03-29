import { useState } from 'react'
import '../styles/Button2.css'

function Button2({text,variant,callback}) {
  const [count, setCount] = useState(0)
  let clickHandler = function(e){
    if(callback!==undefined && variant!=="disabled"){
      callback();
    }
  }

  let classRenderer = function (){
    let classes = [
      'Button2', variant
    ]
    return classes.join(" ")
  }

  return (
    <div onClick={clickHandler} className={classRenderer()}>

     {text}
     </div>
  
  
  )
}

export default Button2
