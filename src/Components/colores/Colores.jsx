import './colores.css'

const Colores = ({clickRed,clickGreen,clickYellow,clickBlack}) => {

  return (
    <div className="colorContainer">
        <h5>Elige tu color:</h5>
        <div className="colores" onClick={clickYellow}></div>
        <div className="colores" onClick={clickBlack}></div>
        <div className="colores" onClick={clickRed}></div>
        <div className="colores" onClick={clickGreen}></div>
    </div>
  )
}

export  default Colores