import React from 'react'

export default function Nav() {
  return (
    <div className='main-navigation' id='nav'>
      <nav>
        <ul>
          <li className='nv-item'>
            <i className="fa fa-search fa-3x"></i>
            Busca
          </li>
          <li className='nv-item'>
            <i className="fa fa-home fa-3x"></i>
            Início
          </li>
          <li className='nv-item'>
            <i className="fa fa-signal fa-3x"></i>
            Agora na TV
          </li>
          <li className='nv-item'>
            <i className="fa fa-folder fa-3x"></i>
            Categorias
          </li>
          <li className='nv-item'>
            <i className="fa fa-user-circle fa-3x"></i>
            Minha Conta
          </li>
        </ul>

      </nav>
    </div>
  )
}
