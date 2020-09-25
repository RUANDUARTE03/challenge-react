import React, { useState, useEffect } from 'react';
import Nav from './containers/nav'
import Keyboard from './containers/keyboard'
import Carousel from './containers/carousel'

import Animes from './json/animes.json'
import Herois from './json/herois.json'

function App() {
  const [arrayAnimes, setArrayAnimes] = useState([])
  const [ArrayHerois, setArrayHerois] = useState([])

  const [valueInput, setValueInput] = useState('')

  const [newArrayAnime, setNewArrayAnime] = useState([])
  const [newArrayHeroi, setNewArrayHeroi] = useState([])

  useEffect(() => {
    setArrayAnimes(Animes)
    setArrayHerois(Herois)

    const resultsAnime = arrayAnimes.filter((i) => {
      return i.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(valueInput.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    })
    setNewArrayAnime(resultsAnime)

    const resultsHeroi = ArrayHerois.filter((i) => {
      return i.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(valueInput.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    })
    setNewArrayHeroi(resultsHeroi)

    document.addEventListener('keydown', onKeyDown, true)
    return () => {
      document.removeEventListener('keydown', onKeyDown, true)
    }
  }, [ArrayHerois, ArrayHerois, valueInput])

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

    let keyboardRowOneLastElement = 11
    let keyboardRowTwoLastElement = 17
    let keyboardRowThreeLastElement = 23
    let keyboardRowFourLastElement = 29
    let keyboardRowFiveLastElement = 35
    let keyboardRowSixLastElement = 41

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

    let nav = document.getElementById('nav')

    let scrollAnimes = document.getElementById('scrollAnime')
    let lengthItemsAnimes = document.getElementsByClassName('item-anime').length
    let firstAnime = 44
    let lastAnimeInitial = 44 + lengthItemsAnimes
    let lastAnime = lastAnimeInitial - 1

    let scrollHerois = document.getElementById('scrollHeroi')
    let lengthItemsHerois = document.getElementsByClassName('item-heroi').length
    let firstHeroi = lastAnime + 1
    let lastHeroiInitial = firstHeroi + lengthItemsHerois
    let lastHeroi = lastHeroiInitial - 1

    array.map((i) => {

      if (i.classList.contains('nv-active')) {
        switch (e.keyCode) {

          case 37: //LEFT

            //PRIMEIRA COLUNA DO TECLADO
            if (
              index === keyboardRowOneFirstElement ||
              index === keyboardRowTwoFirstElement ||
              index === keyboardRowThreeFirstElement ||
              index === keyboardRowFourFirstElement ||
              index === keyboardRowFiveFirstElement ||
              index === keyboardRowSixFirstElement ||
              index === keyboardTab
            ) {
              next = init; nav.classList.add('main-navigation-active')
            }

            //PRIMEIRO ITEM DO TITULO
            else if (index === firstAnime) {
              next = firstRowItemSixF
            }

            //QUALQUER ITEM DO NAV
            else if (index < keyboardRowOneFirstElement) {
              next = index
            }

            //QUALQUER ITEM DO TITULO FAZER A ROLAGEM
            else if (index >= 45 && index < lastAnime) {
              scrollAnimes.scrollLeft -= 190; next = index - 1
            }

            //QUALQUER ITEM DO VIDEO FAZER A ROLAGEM
            else if (index > firstHeroi && index < lastHeroi) {
              scrollHerois.scrollLeft -= 190; next = index - 1
            } else if (index === firstHeroi) {
              next = firstRowItemSixF
            }

            //REGRA GERAL
            else {
              next = index - 1
            }

            break

          case 39: //RIGHT

            //QUALQUER ITEM DO NAV IR PARA A LETRA A
            if (index <= 5) {
              next = keyboardRowOneFirstElement; nav.classList.remove('main-navigation-active')
            }

            //ULTIMA COLUNA DO TECLADO 
            else if (
              index === keyboardRowOneLastElement ||
              index === keyboardRowTwoLastElement ||
              index === keyboardRowThreeLastElement ||
              index === keyboardRowFourLastElement ||
              index === keyboardRowFiveLastElement ||
              index === keyboardRowSixLastElement
            ) {
              next = firstAnime
            }

            //QUALQUER ITEM DO TITULO FAZER A ROLAGEM
            else if (index >= 45 && index < lastAnime) {
              scrollAnimes.scrollLeft += 190; next += index
            } else if (index === lastAnime) {
              next = index
            }

            //QUALQUER ITEM DO VIDEO FAZER A ROLAGEM
            else if (index > firstHeroi && index < lastHeroi) {
              scrollHerois.scrollLeft += 190; next += index
            } else if (index === lastHeroi) {
              next = index
            }

            //REGRA GERAL
            else {
              next += index
            }

            break

          case 40: //DOWN

            //ITENS DA NAV
            if (index < 5) {
              next += index
            } else if (index === lastItemNav)
              next = index

            //ULTIMA LINHA DO TECLADO
            else if (
              index === lastRowItemOne4 ||
              index === lastRowItemTwo5 ||
              index === lastRowItemThree6
            ) {
              next = keyboardTab
            } else if (
              index === lastRowItemFour7 ||
              index === lastRowItemFive8 ||
              index === lastRowItemSix9
            ) {
              next = keyboardDel
            }

            //ESPAÇO OU APAGAR NÂO IR PARA PRIMEIRO ITEM DO TITULO
            else if (index === keyboardTab || index === keyboardDel) {
              next = index
            }

            //QUALQUER ITEM DO TITULO IR PARA O PRIMEIRO VIDEO
            else if (index >= 44 && index <= lastAnime) {
              next = firstHeroi; scrollAnimes.scrollLeft -= 2000
            }

            //REGRA PARA O TECLADO
            else {
              next = index + numberColsKeyboard
            }

            break

          case 38: //UP

            //ITENS DO NAC
            if (index <= 5) {
              next = index - 1
            }

            //PRIMEIRA LINHA DO TECLADO
            else if (
              index === firstRowItemOneA ||
              index === firstRowItemTwoB ||
              index === firstRowItemThreeC ||
              index === firstRowItemFourD ||
              index === firstRowItemFiveE ||
              index === firstRowItemSixF
            ) {
              next = index
            }

            //ESPAÇO OU APAGAR O ITEM CENTRAL ACIMA
            else if (index === keyboardTab) {
              next = lastRowItemTwo5
            } else if (index === keyboardDel) {
              next = lastRowItemFive8
            }

            //ITENS DO VIDEO NAO TEREM FUNCAO PARA CIMA
            else if (index >= 44 && index <= lastAnime) {
              next = index
            }

            else if (index >= firstHeroi) {
              next = firstAnime; scrollHerois.scrollLeft -= 3000
            }

            //REGRA DO TECLADO
            else {
              next = index - numberColsKeyboard
            }

            break

          case 13: //ENTER
            const value = valueInput
            if (index >= keyboardRowOneFirstElement && index <= lastRowItemSix9) {
              next = index
              let letter = i.innerHTML
              setValueInput(value.concat(letter))
            } else if (index === keyboardTab) {
              next = index
              let space = ' '
              setValueInput(value.concat(space))
            } else if (index === keyboardDel) {
              next = index
              let del = value.substring(0, (value.length - 1))
              setValueInput(del)
            }

            else {
              next = index
            }

            break
          default:
            next = index
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
    <div className='container'>
      <Nav />
      <Keyboard textInput={valueInput} />
      <Carousel textInput={valueInput} animes={newArrayAnime} herois={newArrayHeroi} />
    </div>

  );
}

export default App;
