import React, {useState} from 'react'
import './Header.css'
import { GiHamburgerMenu,GiCancel } from "react-icons/gi";
import {
   Link
} from 'react-router-dom';


const Header = () => {
  const [open,setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const closeMenu = () => setOpen(false);
  return (
    <>
       
       <header className='header'>
        <img src={require('./icons8-readict-100.png')} width = '25px' height= '25px' ></img>
        
            <div onClick={handleClick} className='nav-icons'>
           {!open ?<GiHamburgerMenu /> :<GiCancel />}
            </div>
        <nav className={open ? 'nav-links active':'nav-links'}>
            <ul>
               <li className='nav-items'><Link onClick={handleClick} to="/">Home</Link></li>
               <li className='nav-items'><Link onClick={handleClick} to="/blog">Blogs</Link></li>
               <li className='nav-items'><Link onClick={handleClick} to="/project">Projects</Link></li>
               <li className='nav-items'><Link onClick={handleClick} to='/about'>About</Link></li>
               <li className='nav-items'><Link onClick={handleClick} to='/contact'>Contact</Link></li>
            </ul>
        </nav>
        </header>
        <hr></hr>
    </>
  )
}



export default Header