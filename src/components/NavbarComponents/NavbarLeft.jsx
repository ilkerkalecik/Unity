import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarItems from './NavbarItems'
import style from './NavbarLeft.module.css'

const NavbarLeft = ({items}) => {
  return (
    <div className={style.NavbarLeft}>
        <NavbarLogo></NavbarLogo>
        <NavbarItems items={items}></NavbarItems>
    </div>
    
  )
}

export default NavbarLeft