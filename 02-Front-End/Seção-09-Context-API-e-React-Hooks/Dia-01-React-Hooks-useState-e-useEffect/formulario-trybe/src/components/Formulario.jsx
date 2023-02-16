import React, { useState } from "react";


function Formulário() {
  const [nome , setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [module, setModule] = useState();

  return (
    <form>
      <fieldset>
        <legend>Formulário da Trybe</legend>
      <br />
      <label htmlFor="nome">
        Nome Completo :
      <input
      type="text"
      id="nome"
      value={nome}
      onChange={({ target }) => setNome(target.value)}
      />
      </label>

      <label htmlFor="idade">
        Idade :
      <input
      type="number"
      id="idade"
      value={idade}
      onChange={({ target }) => setIdade(target.value)}
      />
      </label>

      <label htmlFor="cidade">
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
        <legend>Módulo</legend>
      
        <label htmlFor="fundamentos">
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
        <label htmlFor="frontend">
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
        <label htmlFor="backend">
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
        <label htmlFor="cs">
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