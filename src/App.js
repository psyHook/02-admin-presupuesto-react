import React, { useState } from "react";
import Pregunta from "./componentes/Pregunta";
import Formulario from "./componentes/Formulario";
import Listado from './componentes/Listado';

function App() {
  // definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);

  //Cuando agregemos un nuevo gasto
  const agregarNuevoGasto = gasto => {
      setGastos([
        ...gastos,
        gasto
      ])
  }

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarPregunta={setMostrarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario agregarNuevoGasto={agregarNuevoGasto}/>
              </div>
              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
