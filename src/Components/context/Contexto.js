import { createContext,useState} from "react";

export const Contexto = createContext()

export const Data = ({children}) =>{
    const [color, setColor] = useState('red');
    return(
    <Contexto.Provider value ={{color , setColor}}>
       {children}
    </Contexto.Provider>
    )
} 
