import { HiOutlineMail,HiOutlineMailOpen } from 'react-icons/hi';

export default function Header() {

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
    </div>
  )
}
