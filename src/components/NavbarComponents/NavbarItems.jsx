import React from 'react'
import styles from './NavbarItems.module.css'

const NavbarItems = ({items}) => {
 

  
  
  return (
    <div className={styles.NavbarItems}>
      <div>
      
      </div>

      {items.map(items => <a key={items} className={styles.link} href={items}>
        <p  className={styles.items}>
          {items}
        </p>
      </a>)}
    </div>
  )
}

export default NavbarItems