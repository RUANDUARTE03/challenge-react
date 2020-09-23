import React from 'react'
import './button.css'

export const ButtonLG = (props) => {
  return (
    <div
      className='button-wrapper-lg'
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  )
}
