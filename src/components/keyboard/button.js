import React from 'react'
import './button.css'

export const Button = (props) => {
  return (
    <div
      className={`button-wrapper nv-item`}
    >
      {props.letter}
    </div>
  )
}
