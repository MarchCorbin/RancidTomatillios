import React from 'react'
import './LoginForm.css'
import { Link } from 'react-router-dom'

function LoginForm(props) {
  return (
    <form onSubmit={e => props.handleSubmit(e)} className='login-form'>
      {!props.isValid ? <h3 className='invalid-login-msg'>Invalid login!  Try again.</h3> : <h3>Enter login information</h3>}
      <label htmlFor='emailInput'>Email</label>
      <input 
        id='emailInput'
        value={props.email}
        type='text'
        name='email' 
        placeholder='Email'
        onChange={event => props.handleChange(event)}
      />
      <label htmlFor='passwordInput'>Password</label>
      <input 
        id='passwordInput'
        value={props.password}
        type='text'
        name='password' 
        placeholder='Password'
        onChange={event => props.handleChange(event)}
      />
      <input 
        data-testid='loginButton'
        type='submit'
        value='Login'
        className='submit-login-button' 
      />
    </form>
  )
}

export default LoginForm