import React, { Fragment, useState } from "react";
import Error from './Error';

const Pregunta = () => {

    // Definit state
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false)


    // Funcion que lee el presupuesto
    const definitPresupuesto = e => {
        setCantidad( parseInt(e.target.value, 10))
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if(cantidad < 1 || isNaN( cantidad )){
            setError(true);
            return;
        }

        // Si pasa la validacion
        setError(false);
    }


  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      { error ? <Error mensaje="El presupuesto es Incorrecto" /> : null}

      <form
        onSubmit={agregarPresupuesto}
      >
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu Presupuesto."
          onChange={definitPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definis Presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
