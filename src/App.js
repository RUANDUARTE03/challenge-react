import React, { useEffect } from 'react';
import Nav from './containers/nav'
import Keyboard from './containers/keyboard'

function App() {

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, true)
    return () => {
      document.removeEventListener('keydown', onKeyDown, true)
    }
  }, [])

  const onKeyDown = (e) => {
    let index = 1;
    let next = 1;

    let object = document.getElementsByClassName('nv-item')
    let array = Array.from(object)

    array.map((i) => {
      if (i.classList.contains('nv-active')) {
        switch (e.keyCode) {
          case 37: // left
            console.log('left')
            next = index - 1
            break
          case 39: // right
            console.log('right')
            next += index
            break
          case 40: // down
            console.log('down')
            break
          case 38: //up
            console.log('up')
            break
          default:
            break
        }
      }
      index++
    })

    index = 1

    // VERIFICA SE O RETORNO É MAIOR QUE O NUMERO TOTAL DE DIVS E RETORNA FALSO PARA A NAVEGACAO NÃO SAIR DE DAS DIVS
    if (next > object.length) {
      return false;
      // VERIFICA SE O RETORNO É MENOR QUE 1 E RETORNA FALSO PARA A NAVEGAÇÃO NÃO SAIR DAS DIVS
    } else if (next < 1) {
      return false;
    }

    // PERCORRE TODAS AS DIVS ITEMS PARA ATRIBUIR A CLASSE SELECTED NA DIV QUE O CURSOR DEVE IR SETADO NA VARIAVEL PROXIMO
    array.map((i) => {
      i.classList.remove('nv-active')
      if (index === next) {
        i.classList.add('nv-active')
      }
      index++
    })
  }

  return (
    <>
      <Nav />
      <Keyboard />
    </>

  );
}

export default App;
