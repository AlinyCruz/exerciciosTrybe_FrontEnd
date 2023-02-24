import PropTypes from "prop-types"
import { HiOutlineMail,HiOutlineMailOpen } from 'react-icons/hi';

export default function Header({marcaLidas, marcaNaoLidas}) {

  return (
    <div className='header'>
    <header>
      <div className='titulo'>
        Caixa de Email
      </div>
      <br/>
      <div className='botoes-01'>

      <button
        className='botao-lido1'
        type='button'
        onClick={ marcaLidas }
      >
      <HiOutlineMailOpen /> Marcar todas como lida
      </button>
      <button
        className='botao-nao-lido1'
        type='button'
        onClick={ marcaNaoLidas }
      >
      <HiOutlineMail /> Marcar todas como não lida
      </button>
      </div>
    </header>
    </div>
  )
}

Header.propTypes = {
  marcaLidas: PropTypes.func,
  marcaNaoLidas: PropTypes.func,
}.isRequired
