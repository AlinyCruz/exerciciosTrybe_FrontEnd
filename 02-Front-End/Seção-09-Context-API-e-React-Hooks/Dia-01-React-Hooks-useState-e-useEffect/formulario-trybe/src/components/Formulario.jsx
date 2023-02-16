import React, { useState } from "react";
import './Formulario.css';

function Formulário() {
  const [nome , setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [module, setModule] = useState();

  return (
    <form className="form">
      <fieldset>
        <legend className="legend">Formulário da Trybe</legend>
      <br />
      <label htmlFor="nome" className="legend">
        Nome Completo :
      <input
      type="text"
      id="nome"
      value={nome}
      onChange={({ target }) => setNome(target.value)}
      />
      </label>

      <label htmlFor="idade" className="legend">
        Idade :
      <input
      type="number"
      id="idade"
      value={idade}
      onChange={({ target }) => setIdade(target.value)}
      />
      </label>

      <label htmlFor="cidade" className="legend">
        Cidade :
      <input
      type="text"
      name="cidade"
      id="city"
      value={cidade}
      onChange={({ target }) => setCidade(target.value)}
      />
      </label>
      </fieldset>
      <br />
      <fieldset>
        <legend className="legend">Módulo</legend>
      
        <label htmlFor="fundamentos" className="legend">
          <input
          type="radio"
          id="fundamentos"
          name="curso"
          value="Fundamentos"
          checked={module === 'Fundamentos'}
          onChange={( { target }) => setModule(target.value)}
          />
          Fundamentos
        </label>
        <br />
        <label htmlFor="frontend" className="legend">
          <input
          type="radio"
          id="frontend"
          name="curso"
          value="front-end"
          checked={module === 'Front-end'}
          onChange={( { target }) => setModule(target.value)}
          />
          Front-end
        </label>
        <br />
        <label htmlFor="backend" className="legend">
          <input
          type="radio"
          id="backend"
          name="curso"
          value="back-end"
          checked={module === 'Back-end'}
          onChange={( { target }) => setModule(target.value)}
          />
          Back-end
        </label>
        <br />
        <label htmlFor="cs" className="legend">
          <input
          type="radio"
          id="cs"
          name="curso"
          value="Ciência da computação"
          checked={module === 'Ciência da computação'}
          onChange={( { target }) => setModule(target.value)}
          />
          Ciência da computação
        </label>
        <br /><br />
      <button
      type="submit"
      onClick={(event) => {
        event.preventDefault();
        console.log('Cliquei');
      }}
      >
        Enviar
      </button>
      </fieldset>

    </form>
  );
}

export default Formulário;