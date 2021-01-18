import React, { Fragment, useState } from "react";

const Pregunta = () => {

    // Definit state
    const [cantidad, setCantidad] = useState(0);


    // Funcion que lee el presupuesto
    const definitPresupuesto = e => {
        setCantidad( parseInt(e.target.value, 10))
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar


        // Si pasa la validacion.
    }


  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

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
