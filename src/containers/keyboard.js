import React from 'react'
import { Button } from '../components/keyboard/button'
import { ButtonLG } from '../components/keyboard/buttonLG'

export default function Keyboard() {
  return (
    <div className='container-keyboard'>
      <div className='body-keyboard'>
        <input type='text' placeholder='Busca' />
        <div className='keyboard'>
          <div className='row-keyboard'>
            <Button>a</Button>
            <Button>b</Button>
            <Button>c</Button>
            <Button>d</Button>
            <Button>e</Button>
            <Button>f</Button>
          </div>
          <div className='row-keyboard'>
            <Button>g</Button>
            <Button>h</Button>
            <Button>i</Button>
            <Button>j</Button>
            <Button>k</Button>
            <Button>l</Button>
          </div>
          <div className='row-keyboard'>
            <Button>m</Button>
            <Button>n</Button>
            <Button>o</Button>
            <Button>p</Button>
            <Button>q</Button>
            <Button>r</Button>
          </div>
          <div className='row-keyboard'>
            <Button>s</Button>
            <Button>t</Button>
            <Button>u</Button>
            <Button>v</Button>
            <Button>w</Button>
            <Button>x</Button>
          </div>
          <div className='row-keyboard'>
            <Button>y</Button>
            <Button>z</Button>
            <Button>0</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
          </div>
          <div className='row-keyboard'>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
          </div>
          <div className='row-keyboard'>
            <ButtonLG>Espaço</ButtonLG>
            <ButtonLG>Apagar</ButtonLG>
          </div>
        </div>
      </div>
    </div>
  )
}
