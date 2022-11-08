import React from 'react'
import "./Navbar.css"
import logo from '../images/logo-nav.png'
import dashboard from '../images/dashboard.svg'
import user from '../images/user.svg'

function Navbar() {
    return (
       <header>
             <a href="#" className='logo'><img src={logo}/></a>

            <ul className='navbar'>
                <li><a href="#" className='active'>Usuario</a></li>
                <li><a href="#">Viajes</a></li>
                <li><a href="#">Mensualidad</a></li>
                <li><a href="#">Contactar</a></li>
                <li><a href="#">Ayuda</a></li>
                
                <div className='main'>
                    <a href="#" className='user'><img src={user}/>Sign In</a>
                    <a href="#">Register</a>

                    <div className='bx bx-menu' id='menu-icon'>
                        
                    </div>
                </div>
            </ul>
       </header>
    );
}

export default Navbar