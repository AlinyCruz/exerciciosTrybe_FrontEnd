import './App.css';
import Header from './components/Header';
import List from './components/List';
import listaEmails from './data/listaDeMensagens';
import { useState } from 'react';
// import React, { useEffect } from 'react';

function App() {
  
  const [email, setEmail] = useState(listaEmails);

  const setStatusEmail = (mensagemId, novoStatus) => {
    const atualizaMensagens = email.map((e)=>{
      if(e.id === mensagemId) {
        return { ...e, status: novoStatus };
      }
      return e;
    });
    setEmail(atualizaMensagens);
  };

  return (
    <div>
     <Header />
     <List email={ email }
     setStatusEmail={ setStatusEmail }
     />

    </div>
  );
}

export default App;
