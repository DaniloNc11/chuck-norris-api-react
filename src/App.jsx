import { useState } from 'react'
import './styles/App.css'
import Title from './components/Title.jsx'
import Button from './components/Button'
import Button2 from './components/Button2'
import Select from './components/Select'
import Chuck from './components/Chuck'
import Subtitle from './components/Subtitle'


function App() 
{
  const [Jokes, setJokes] = useState("");
  const [Categorie, setCategorie] = useState([]);
  let url = "https://api.chucknorris.io/jokes/categories";
  fetch(url).then((resp)=>{
    return resp.json();
  }).then(data=>{
    data.unshift("random");
    setCategorie(data);
  }).catch((e)=>{
    console.log(e)
  })

  let loadJokeCallback = function ()
  {
    let Categoria = document.getElementById("Select").value
    let url = "https://api.chucknorris.io/jokes/" + (Categoria==="random"?"random":("random?category=") + Categoria);
    fetch(url).then((resp)=>{
      return resp.json();
    }).then(data=>{
      setJokes(data.value);
    }).catch((e)=>{
      console.log(e)
    })
  }

  let copyTextCallback = function ()
  {
    let Joke = document.getElementById("Joke");
    navigator.clipboard.writeText(Joke.innerText);
  }

  return (
    <div className="App">
      <Title></Title>
      <Subtitle></Subtitle>
      <Button text='Carica il joke' callback={loadJokeCallback}/>
      <Button2 id="Clipboard" text='Copia' callback={copyTextCallback}/>
      <Select id='Select' values={Categorie}></Select>
      <Chuck id="Joke">{Jokes}</Chuck>
    </div>
  )
}

export default App
