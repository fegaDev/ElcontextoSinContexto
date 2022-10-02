import React,{useContext} from 'react'
import './colores.css'
import {Contexto} from '../context/Contexto'

const Colores = () => {
  const {setColor} = useContext(Contexto);

  const handlEvent = () =>{
    setColor('#0000ff')
  }
  const handlEvent2 = () => {
    setColor('#000000')
  }

  return (
    <div className="colorsContainer">
        <button onClick={handlEvent2}>Dark Theme</button>
        <button onClick={handlEvent}>Light Theme</button>
    </div>
  )
}

export default Colores