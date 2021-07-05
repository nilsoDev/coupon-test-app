import React from 'react';
import logo from '../Assets/Logo.svg'

const Header = ({isActive}) =>{

    return(
        <header className={  `headerBox`} >
            <img src={logo} alt="Logo Skimp" className="logo"/>
            <nav>
                <ul>
                    <li>About</li>
                    <li>Impressum</li>
                </ul>  
            </nav>
        </header>
    )
}

export default Header; //Export Component