import React from 'react'
import style from './Sidebar.module.css'


const Sidebar = ({ items, isSidebarVisible }) => {

  return (


    
    <div
      className={`${style.Sidebar} ${isSidebarVisible ? style.active : ''}`} >

      {items.map(items =>
        <a key={items}  className={style.link} href={items}>
          <p  className={style.item}>
            {items}
          </p>
        </a>
      )}
      <button className={style.button}>PLANS AND PRICING</button>
    </div>




  )
}

export default Sidebar