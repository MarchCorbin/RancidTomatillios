import React from 'react'
import './Header.css'
import Icon from '../Assets/tomatillo.png'

function Header(props) {
  return (
    <header>
      <div className='icon-holder'>
        <img className='icon' src={Icon} alt='animated tomatillo' />
      <h1>Rancid Tomatillos</h1> 
      </div>
      {props.currentUser !== null ? <p>Welcome, {props.currentUser.name}</p> : <p>Welcome</p>}
      <button>LOGIN</button>
    </header>
    )
}

export default Header