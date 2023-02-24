import PropTypes from "prop-types"
import React from 'react'
import { HiOutlineMail,HiOutlineMailOpen } from 'react-icons/hi';
import { NAO_LIDA, LIDA } from '../constants';

export default function List({email, setEmail, setStatusEmail}) {
  return (
  <main >
    <ul className='lista-email'>
      {email.map((e) => {
        const statusEmail = e.status === LIDA ? 'mensagem-lida' : 'mensagem-não-lida';
        return(
        <li key={e.id} className='botoes-02'>
          <p className={ statusEmail }>
            {e.title}
          </p>
          <div>
          <button
            type='button'
            title='Marcar como lida'
            className='botao-lido2'
            onClick={ () => setStatusEmail(e.id, LIDA) }
          >
            <HiOutlineMailOpen />
          </button>
          <button
            type='button'
            title='Marcar como não lida'
            className='botao-nao-lido2'
            onClick={ () => setStatusEmail(e.id, NAO_LIDA) }
            >
            <HiOutlineMail />
          </button>
          </div>
        </li>
        );
      })}
    </ul>
  </main>
  );
}

List.propTypes = {
  email: PropTypes.shape({
    map: PropTypes.func
  }),
  setEmail: PropTypes.any
}

