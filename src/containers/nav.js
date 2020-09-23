import React from 'react'

export default function Nav() {
  return (
    <div className="main-navigation">
      <nav>
        <ul>
          <li nv-item>
            <i className="fa fa-search fa-3x"></i>
              Busca
          </li>
          <li nv-item>
            <i class="fa fa-home fa-3x"></i>
            Início
          </li>
          <li nv-item>
            <i class="fa fa-signal fa-3x"></i>
            Agora na TV
          </li>
          <li nv-item>
            <i class="fa fa-folder fa-3x"></i>
            Categorias
          </li>
          <li nv-item>
            <i class="fa fa-user-circle fa-3x"></i>
            Minha Conta
          </li>
        </ul>

      </nav>
    </div>
  )
}
