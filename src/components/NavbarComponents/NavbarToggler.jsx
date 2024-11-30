
import style from './NavbarToggler.module.css'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";


const NavbarToggler = ({ toggleSidebar, isSidebarVisible }) => {


  

  
  return (
    <div className={`${style.NavbarToggler} ${ isSidebarVisible ? style.active : '' }`}>
      {!isSidebarVisible&&<IoMdMenu className={style.icon} onClick={toggleSidebar} />}
      {isSidebarVisible&&<IoClose  onClick={toggleSidebar} />}
     
    </div>
  )
}

export default NavbarToggler