import React, {useState} from 'react'
import Logo from '../image/ClearEmerald.png'
import {Link} from 'react-router-dom'
import './Navbar.css'


function Navbar() {
    const[click,setClick]=useState(false)
    const handleClick= () => setClick(!click)
    return (
        <div>
            <nav className='Navbar'>
                <div className='navbar-container'>
                  <Link to='/' className='navbar-logo'>
                    <img src={Logo} className='nav-logo'/>
                  </Link>
                  <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />


                  </div>
                  <ul className={click? 'nav-menu active' :'nav-menu'}>
                      <li></li>

                  </ul>

                </div>

            </nav>
            
        </div>
    )
}

export default Navbar

