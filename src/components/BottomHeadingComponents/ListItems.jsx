import React from 'react'
import style from './ListItems.module.css'



const ListItems = ({ heading, p ,button}) => {
  return (
    <div className={style.ListItems}>

      <h1 className={style.h1}>{heading} </h1>
      <p className={style.p}>{p}</p>
     {button&&<button className={style.Button}>LEARN MORE ↓</button>} 
    </div>

  )
}

export default ListItems