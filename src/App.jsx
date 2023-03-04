import { useState } from 'react'
import './styles/App.css'
import Title from './components/Title.jsx'
import Button from './components/Button'
import Button2 from './components/Button2'
import Button3 from './components/Button3'

function App() {

  return (
    <div className="App">
      <Title></Title>
      <Button></Button>
      <Button2></Button2>
      <Button3></Button3>
    </div>
  )
}

export default App
