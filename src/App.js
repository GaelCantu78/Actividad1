import { useState } from "react";
import logo  from "./assets/logo512.png"

function App() {
const estilo1={backgroundColor:"green",color:"white",fontSize:"2em"}
const estilo2={backgroundColor:"blue",color:"white",fontSize:"2.5em"}
const[contenido,setcontenido]=useState("");
const [colores,setColores]=useState(estilo1);
const escribir=()=>{
  setcontenido("Hola Me Llamo Gael")
}
const imagen=()=>{
setcontenido(<img src={logo} alt=""/>)
}
const cambioColor=()=>{
  setColores(estilo2)
}
  return (
    <>
      <button onClick={()=>escribir()}>Boton 1</button>
      <button onClick={()=>imagen()}>Boton 2</button>
      <button onClick={()=>cambioColor()}>Boton 3</button>
      <div className="caja" style={colores}>
        {contenido}
      </div>
    </>
  );
}

export default App;
