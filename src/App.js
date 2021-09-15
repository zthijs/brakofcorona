import './App.css';
import { useState } from 'react';
import Background from './components/Background';

function App() {

  const [distance , setDistance] =  useState(0)
  const [index, setIndex] = useState(0)
  const [klaar, setKlaar] = useState("")

  const vragen = [
    {
      vraag : "Hoe voel je je?",
      antwoorden : ["Goed", "Slecht"]
    },
    {
      vraag : "Heb je gister gezopen?",
      antwoorden : ["Ja", "Nee"]
    }
  ]

  const gaatGoed = ()=>{
    setDistance(100)
    setKlaar("Gozer wat doe je hier.")
  }

  const brak = ()=>{
    setDistance(100)
    setKlaar("Gast, je bent gewoon brak.")
  }

  const corona = () => {
    setDistance(0)
    setKlaar("Je hebt Corona!")
  }
  


  return (<>
  <Background distance={distance}>
    {
      klaar ? (<header>
      <h1>{klaar}</h1>
      <div  style={{marginTop : 20}} className="container">
        <button onClick={()=>{
        setDistance(0)
        setIndex(0)
        setKlaar("")
        
      }} className="button">Opnieuw</button>

        </div>
    </header>)
    : (<><header>
        <h2>Vraag {index + 1}</h2>
        <h1>{vragen[index].vraag}</h1>
        
      </header>
      <div style={{marginTop : 20}} className="container">
      <button onClick={()=>{
        if(index === 0) gaatGoed()
        if(index === 1) brak()

      }} className="button">{vragen[index].antwoorden[0]}</button>
      <button onClick={()=>{
        if(index === 0)  { 
          setDistance(20)
          setIndex(1)
        }
        if(index === 1) corona()
      }} className="button" >{vragen[index].antwoorden[1]}</button>
      </div></>)
    }


 
  </Background>
  <div className="footer">
  <p>Deze zelftest wordt gratis aangeboden door <strong>zthijs.nl</strong></p>
</div></>
  );
}

export default App;
