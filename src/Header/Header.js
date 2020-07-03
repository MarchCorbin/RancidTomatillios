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
      {props.currentUser !== null ? <h2 className="greeting-login">Welcome, {props.currentUser.name}!</h2> : <h2 className="greeting">Welcome!</h2>}
      <button onClick={props.openLogin}>LOGIN</button>
    </header>
    )
}

export default Header