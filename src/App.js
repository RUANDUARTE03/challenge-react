import React, { useEffect, useState } from 'react';
import Nav from './containers/nav'
import Keyboard from './containers/keyboard'

function App() {
  const [text, setText] = useState('')

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, true)
    return () => {
      document.removeEventListener('keydown', onKeyDown, true)
    }
  }, [])

  const onKeyDown = (e) => {
    let init = 1
    let index = 1;
    let next = 1;
    let keyboard = 6


    let object = document.getElementsByClassName('nv-item')
    let array = Array.from(object)

    // console.log(array.length)

    array.map((i) => {
      if (i.classList.contains('nv-active')) {
        switch (e.keyCode) {
          case 37: // left
            if (index === keyboard) {
              next = init
            } else {
              next = index - 1
            }
            console.log('left => ' + index + ' ')
            break
          case 39: // right
            if (index < 5) {
              next = keyboard
            } else {
              next += index
            }
            console.log('right => ' + index + ' ')
            break
          case 40: // down
            if (index < 5) {
              next += index
            } else {
              next = index + 6
            }
            console.log('down => ' + index)
            break
          case 38: //up
          if( index <= 5) {
            next = index - 1
          } else {
            next = index - 6
          }
            console.log('up => ' + index)
            break
          case 13: //enter
            next = index
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
