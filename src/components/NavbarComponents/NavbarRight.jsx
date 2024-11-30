import React from 'react'
import { FaSearch } from "react-icons/fa";
import style from "./NavbarRight.module.css"
import { MdStorefront } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import NavbarToggler from './NavbarToggler';
import ButtonNavbar from '../Items/ButtonNavbar';




const NavbarRight = ({ toggleSidebar, isSidebarVisible }) => {
  
  return (
    <div className={style.NavbarRight}>
      <ButtonNavbar></ButtonNavbar>
      {/* <button className={style.button}>PLANS AND PRICING</button> */}
      <FaSearch />
      <MdStorefront />
      <FaRegUser />
      <NavbarToggler toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} ></NavbarToggler>

    </div>


  )
}

export default NavbarRight