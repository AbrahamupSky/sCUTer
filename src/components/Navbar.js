import React from 'react'
import "./Navbar.css"
import logo from '../images/logo-nav.png'
import user from '../images/user.svg'

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

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
                
            </ul>

            <div className='main'>
                    <a href="#" className='user'><img src={user}/>Sign In</a>
                    <a href="#">Register</a>

                    <div className='bx bx-menu' id='menu-icon'></div>
            </div>
            
       </header>
    );
}

export default Navbar