import React, { useState } from "react";
import Error from "./Error";
import shortid from 'shortid';

const Formulario = ({ agregarNuevoGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);


  // Cuando el usuario agrega un gasto
  const agregarGasto = (e) => {
    e.preventDefault();

    // Validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    // Construir el gasto
    const gasto = {
        nombre,
        cantidad,
        id: shortid.generate(),
    }

    // Pasar el gasto al componente principal
    agregarNuevoGasto(gasto);

    // Resetear el form
    setNombre('');
    setCantidad(0);
    
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gatos aquí</h2>

      {error ? (
        <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" />
      ) : null}

      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 200"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

export default Formulario;
