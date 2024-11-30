

import NavbarRight from './NavbarRight'
import styles from './Navbar.module.css'
import NavbarLeft from './NavbarLeft'


const Navbar = ({ items, toggleSidebar, isSidebarVisible }) => {





  return (


    <div className={styles.Navbar}>
      <NavbarLeft items={items}></NavbarLeft>

      <NavbarRight toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} ></NavbarRight>

    </div>



  )
}

export default Navbar