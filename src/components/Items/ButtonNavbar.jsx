import React from 'react'
import style from './ButtonNavbar.module.css'

const ButtonNavbar = () => {
  const buttonItem = "plans and pricing"
  return (
   <button className={style.Button}>{buttonItem.toUpperCase()} </button>
  )
}

export default ButtonNavbar