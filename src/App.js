import './App.css';
import Welcome from './Components/Paginas/Welcome'
import Info from './Components/Paginas/Info'
import Footer from './Components/Paginas/Footer'
import Colores from './Components/colores/Colores'
import {Data} from './Components/context/Contexto'

function App() {
  return (
    <>
    <div className="App">
    <Data>
      <Welcome/>
      <Info/>
      <Footer/>
      <Colores/>
    </Data>
    </div>
    </>
  );
}

export default App;
