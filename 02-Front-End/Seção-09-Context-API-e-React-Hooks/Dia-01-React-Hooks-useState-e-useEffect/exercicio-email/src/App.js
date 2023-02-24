import './App.css';
import Header from './components/Header';
import List from './components/List';
import listaEmails from './data/listaDeMensagens';
import { useState, useEffect } from 'react';
import { LIDA, NAO_LIDA } from './constants';

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

  const marcaLidas = () => {
    const todasLidas = email.map((e) => ({...e, status: LIDA}));
    setEmail(todasLidas);
  }

  const marcaNaoLidas = () => {
    const todasLidas = email.map((e) => ({...e, status: NAO_LIDA}));
    setEmail(todasLidas);
  }

  useEffect(() => {
    const todosEmails = email.every(({status}) => status === LIDA);
    if (todosEmails) {
      alert('PARABÉNS! VOCÊ LEU TODOS OS EMAILS')
    }
  },[email]);

  return (
    <div>
     <Header 
      marcaLidas={ marcaLidas }
      marcaNaoLidas={ marcaNaoLidas }
      />
     <List email={ email }
     setStatusEmail={ setStatusEmail }
     />
    </div>
  );
}

export default App;
