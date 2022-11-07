import React from 'react'
import "./Register.css"
import logo from '../images/logo-nav.svg'
import dashboard from '../images/dashboard.svg'
import user from '../images/user.svg'

function Navbar() {
    return (
        <nav className='nav'>
            <ul className='list'>
                <li className='list__item'>
                    <div className='div__button'>
                        <img src={dashboard} className='list__img'/>
                        <a href="#" className='nav__link'>Inicio</a>
                    </div>
                </li>

                <li className='list__item'>
                    <div className='list__button list__button--click'>
                        <img src={user} className='list__img'/>
                        <a href="#" className='nav__link'>Usuario</a>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar