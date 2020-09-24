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

    let keyboardRowOneFirstElement = 6
    let keyboardRowTwoFirstElement = 12
    let keyboardRowThreeFirstElement = 18
    let keyboardRowFourFirstElement = 24
    let keyboardRowFiveFirstElement = 30
    let keyboardRowSixFirstElement = 36
    let keyboardTab = 42
    let keyboardDel = 43

    let lastItemNav = 5

    let numberColsKeyboard = 6

    let firstRowItemOneA = 6
    let firstRowItemTwoB = 7
    let firstRowItemThreeC = 8
    let firstRowItemFourD = 9
    let firstRowItemFiveE = 10
    let firstRowItemSixF = 11

    let lastRowItemOne4 = 36
    let lastRowItemTwo5 = 37
    let lastRowItemThree6 = 38
    let lastRowItemFour7 = 39
    let lastRowItemFive8 = 40
    let lastRowItemSix9 = 41

    let object = document.getElementsByClassName('nv-item')
    let array = Array.from(object)

    array.map((i) => {
      var x = i.innerHTML
      if (i.classList.contains('nv-active')) {
        switch (e.keyCode) {

          case 37: // left
            //PRIMEIRA COLUNA DO TECLADO
            if (index === keyboardRowOneFirstElement) {
              next = init
            } else if (index === keyboardRowTwoFirstElement) {
              next = init
            } else if (index === keyboardRowThreeFirstElement) {
              next = init
            } else if (index === keyboardRowFourFirstElement) {
              next = init
            } else if (index === keyboardRowFiveFirstElement) {
              next = init
            } else if (index === keyboardRowSixFirstElement) {
              next = init
            } else if (index === keyboardTab) {
              next = init
            }

            else if (index < keyboardRowOneFirstElement) {
              next = index
            }
            else {
              next = index - 1
            }
            console.log('left => ' + index)
            break

          case 39: // right
            if (index < 5) {
              next = keyboardRowOneFirstElement
            }

            else {
              next += index
            }
            console.log('right => ' + index)
            break

          case 40: // down
            if (index < 5) {
              next += index
            } else if (index === lastItemNav)
              next = index

            else if (index === lastRowItemOne4) {
              next = keyboardTab
            } else if (index === lastRowItemTwo5) {
              next = keyboardTab
            } else if (index === lastRowItemThree6) {
              next = keyboardTab
            } else if (index === lastRowItemFour7) {
              next = keyboardDel
            } else if (index === lastRowItemFive8) {
              next = keyboardDel
            } else if (index === lastRowItemSix9) {
              next = keyboardDel
            }

            else {
              next = index + numberColsKeyboard
            }
            console.log('down => ' + index)
            break

          case 38: //up
            if (index <= 5) {
              next = index - 1
            } else if (index === firstRowItemOneA) {
              next = index
            } else if (index === firstRowItemTwoB) {
              next = index
            } else if (index === firstRowItemThreeC) {
              next = index
            } else if (index === firstRowItemFourD) {
              next = index
            } else if (index === firstRowItemFiveE) {
              next = index
            } else if (index === firstRowItemSixF) {
              next = index
            }

            else if (index === keyboardTab) {
              next = lastRowItemTwo5
            } else if (index === keyboardDel) {
              next = lastRowItemFive8
            }

            else {
              next = index - numberColsKeyboard
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
