import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'
import Icon from '../Assets/tomatillo.png'
import { Link, withRouter } from 'react-router-dom'

function Header({ currentUser, logout, history }) {
  let previousRoute = history.location.pathname
  return (
    <header className='main-header' data-testid='header'>
      <section className='header-text'>
        
        <Link to='/' className='icon-holder'>
          <img className='icon' src={Icon} alt='animated tomatillo' />
          <h1 className='main-header-title'>Rancid Tomatillos</h1> 
        </Link>

        {currentUser !== null ? 
          <h2 className="greeting">Welcome, {currentUser.name}!</h2> : 
          <h2 className="greeting">Welcome!</h2>
        }
      </section>
      {currentUser ? 
        <Link to={previousRoute} className='login-button' onClick={logout}>LOGOUT</Link> : 
        <Link to='/login' className='login-button' onClick={logout}>LOGIN</Link>
      }
    </header>
  )
}

export default withRouter(Header)

Header.propTypes = {
  currentUser: PropTypes.object.isRequired,
  loginLogout: PropTypes.func.isRequired
}