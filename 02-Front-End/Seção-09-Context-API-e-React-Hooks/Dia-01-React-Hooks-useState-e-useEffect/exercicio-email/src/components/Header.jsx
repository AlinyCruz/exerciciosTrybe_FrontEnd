import React from 'react';
import { useState } from 'react';
import { HiOutlineMail,HiOutlineMailOpen } from 'react-icons/hi';

export default function Header() {
  const [email, setEmail] = useState({
    id: 1,
    title: "Titulo do email",
    status: 0
  })

  return (
    <div className='header'>
    <header>
      <div className='titulo'>
        Caixa de Email
      </div>
      <br/>
      <div className='botoes-01'>
      <button className='botao-lido1'>
      <HiOutlineMailOpen /> Marcar todas como lida
      </button>
      <button className='botao-nao-lido1'>
      <HiOutlineMail /> Marcar todas como não lida
      </button>
      </div>
    </header>

    <main>
      <div className='lista-email'>
        <div>
        { email.title }
        </div>
        <div className='botoes-02'>
        <button className='botao-lido2'>
        <HiOutlineMailOpen />
        </button>
        <button className='botao-nao-lido2'>
        <HiOutlineMail />
        </button>
        </div>
      </div>
    </main>

    </div>
  )
}
