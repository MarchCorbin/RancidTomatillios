import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'
import Icon from '../Assets/tomatillo.png'
import { Link } from 'react-router-dom'

//make class component and add isLoginOpen to state
function Header({ currentUser, loginLogout }) {
  return (
    <header className='main-header' data-testid='header'>
      <section className='header-text'>
        <div className='icon-holder'>
          <img className='icon' src={Icon} alt='animated tomatillo' />
          <h1 className='main-header-title'>Rancid Tomatillos</h1> 
        </div>
        {currentUser !== null ? 
          <h2 className="greeting">Welcome, {currentUser.name}!</h2> : 
          <h2 className="greeting">Welcome!</h2>
        }
      </section>
      <Link to='/login'>
        <button className='login-button' onClick={loginLogout}>
          {currentUser ? 'LOGOUT': 'LOGIN'}
        </button>
      </Link>
    </header>
    )
}

export default Header

Header.propTypes = {
  currentUser: PropTypes.object.isRequired,
  loginLogout: PropTypes.func.isRequired
}