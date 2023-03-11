import { useState } from 'react'
import './styles/App.css'
import Title from './components/Title.jsx'
import Button from './components/Button'
import Button2 from './components/Button2'
import Button3 from './components/Button3'
import Subtitle from './components/Subtitle'


function App() {
  const [joke, setJoke] = useState(0)

  let loadJokeCallback = function (){
    console.log ("ciao")
    setJoke("testo joke")
  }
  
  let copyTextCallback = function (){
    console.log ("bye")
  }

  return (
    <div className="App">
      <Title></Title>
      <Subtitle></Subtitle>
      <Button2></Button2>
      <Button3></Button3>
      <Button text='Carica il joke' callback={loadJokeCallback}/>
      <Button text='Copia' variant={ joke == "" ? "disabled" : undefined}callback={copyTextCallback}/>
    </div>
  )
}

export default App
