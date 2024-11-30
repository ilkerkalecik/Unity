import React from 'react'
import style from './Button.module.css'

const Button = (props) => {
  return (
   <button className={style.Button}>{props.item} ↓</button>
  )
}

export default Button