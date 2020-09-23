import React from 'react'
import './button.css'

export const ButtonLG = (props) => {
  return (
    <div
      className='button-wrapper-lg nv-item'
      onClick={() => props.handleClick(props.children)}
    >
      {props.eventKeyboard}
    </div>
  )
}
