import Pagina from './Components/Pagina'
import Pagina2 from './Components/Pagina2'
import Pagina3 from './Components/Pagina3'

import './App.css';
import Colores from './Components/Colores'
import {useState} from 'react'

function App() {
  const [colores, setColores] = useState()
  const [letra,setLetras] = useState();

  const eventoYellow = () => {
    setColores('#ffff00')
    setLetras('#000000')
  }
  const eventoBlack = () => {
    setColores('#000000')
    setLetras('#FFFFFF')
  }
  const eventoRed = () => {
    setColores('#FF0000')
    setLetras('#000000')
  }
  const eventoGreen = () => {
    setColores('#008000')
    setLetras('#000000')
  }
 
  return (
    <>
    <div className="App">
      <Pagina color={colores} letra={letra}/>
      <Pagina2 color={colores} letra={letra}/>
      <Pagina3 color={colores} letra={letra}/>
    </div>
    <Colores clickYellow={eventoYellow} clickBlack={eventoBlack} clickRed={eventoRed} clickGreen={eventoGreen}/>
    </>
  );
}

export default App;
