import React from 'react'
import './Header.css'

function Header(props) {
  return (
    <header>
      <h1>Rancid Tomatillos</h1>
      {props.currentUser !== null && <p>Welcome, {props.currentUser.name}</p>}
      <button>LOGIN</button>
    </header>
    )
}

export default Header