import { useState } from 'react'
import './styles/App.css'
import title from './components/Title'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <title>THIAW</title>
    </div>
  )
}

export default App
