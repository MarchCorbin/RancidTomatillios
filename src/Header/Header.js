import React from 'react'
import './Header.css'
import Icon from '../Assets/tomatillo.png'



function Header(props) {
  return (
    <header className='main-header'>
      <div className='icon-holder'>
        <img className='icon' src={Icon} alt='animated tomatillo' />
      <h1 className='main-header-title'>Rancid Tomatillos</h1> 
      </div>
        {props.currentUser !== null ? 
        <h2 className="greeting-login">Welcome, {props.currentUser.name}!</h2> : 
        <h2 className="greeting">Welcome!</h2>
      }
      <button className='login-button'onClick={props.loginLogout}>
        {props.currentUser ? 'LOGOUT': 'LOGIN'}
      </button>
    </header>
    )
}

export default Header