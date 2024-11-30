import React from 'react'
import style from './SucsessItem.module.css'

const SucsessItem = ({heading,p}) => {
  return (
    <div className={style.SucsessItem}>
        <h1 className={style.h1}>{heading} </h1>
        <p className={style.p}>{p} </p>
    </div>
  )
}

export default SucsessItem