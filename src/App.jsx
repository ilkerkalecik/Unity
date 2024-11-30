import { useState } from 'react'
import './App.css'
import Navbar from './components/NavbarComponents/Navbar'
import Sidebar from './components/NavbarComponents/Sidebar'
import Heading from './components/HeadingComponents/Heading'
import BottomHeading from './components/BottomHeadingComponents/BottomHeading'
import Sucsess from './components/SuccessComponents/Sucsess'
import BringGame from './components/BringGameComponents/BringGame'
import Download from './components/DownloadComponents/Download'
import Footer from './components/FooterComponents/Footer'

function App() {
  const items = ["Products", "Solutions", "Resources", "Community", "Learn", "Support"]
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  function toggleSidebar() {
    setSidebarVisible(!isSidebarVisible);
  }

  return (
    <div className='App'>
      <Navbar items={items} toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible}></Navbar>
      <Sidebar items={items} isSidebarVisible={isSidebarVisible}></Sidebar>
      <Heading></Heading>
      <BottomHeading></BottomHeading>
      <Sucsess></Sucsess>
      <BringGame></BringGame>
      <Download></Download>
      
      <Footer></Footer>




    </div>

  )
}

export default App
