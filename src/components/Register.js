import React from 'react'
import "./Register.css"

function Register() {
  return (
    <body>
        <form>
            <div className='form'>
                <h1>Registrarse</h1>
                
                <div className='grupo'>
                    <input type="text" required/><span className='bar'></span>
                    <label>Nombre</label>
                </div>

                <div className='grupo'>
                    <input type="text" required/><span className='bar'></span>
                    <label>Codigo</label>
                </div>

                <div className='grupo'>
                    <input type="email" required/><span className='bar'></span>
                    <label>Correo</label>
                </div>

                <div className='grupo'>
                    <input type="password" required/><span className='bar'></span>
                    <label>Contraseña</label>
                </div>

                <button type="submit">Registrarse</button>
            </div>
        </form>
    </body>
  );
}

export default Register