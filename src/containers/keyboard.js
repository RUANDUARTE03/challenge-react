import React from 'react'
import { Button } from '../components/keyboard/button'
import { ButtonLG } from '../components/keyboard/buttonLG'

export default function Keyboard({ textInput }) {
  return (
    <div className='container-keyboard'>
      <div className='body-keyboard'>
        <textarea
          placeholder='Buscar'
          value={textInput}
        />
        <div className='keyboard'>
          <div className='row-keyboard'>
            <Button letter={'a'} />
            <Button letter={'b'} />
            <Button letter={'c'} />
            <Button letter={'d'} />
            <Button letter={'e'} />
            <Button letter={'f'} />
          </div>
          <div className='row-keyboard'>
            <Button letter={'g'} />
            <Button letter={'h'} />
            <Button letter={'i'} />
            <Button letter={'j'} />
            <Button letter={'k'} />
            <Button letter={'l'} />
          </div>
          <div className='row-keyboard'>
            <Button letter={'m'} />
            <Button letter={'n'} />
            <Button letter={'o'} />
            <Button letter={'p'} />
            <Button letter={'q'} />
            <Button letter={'r'} />
          </div>
          <div className='row-keyboard'>
            <Button letter={'s'} />
            <Button letter={'t'} />
            <Button letter={'u'} />
            <Button letter={'v'} />
            <Button letter={'w'} />
            <Button letter={'x'} />
          </div>
          <div className='row-keyboard'>
            <Button letter={'y'} />
            <Button letter={'z'} />
            <Button letter={'0'} />
            <Button letter={'1'} />
            <Button letter={'2'} />
            <Button letter={'3'} />
          </div>
          <div className='row-keyboard'>
            <Button letter={'4'} />
            <Button letter={'5'} />
            <Button letter={'6'} />
            <Button letter={'7'} />
            <Button letter={'8'} />
            <Button letter={'9'} />
          </div>
          <div className='row-keyboard'>
            <ButtonLG eventKeyboard={'Espaço'} />
            <ButtonLG eventKeyboard={'Apagar'} />
          </div>
        </div>
      </div>
    </div>
  )
}
