import React from 'react'
import './LoginForm.css'

function LoginForm(props) {
  return (
    <form onSubmit={e => props.handleSubmit(e)} className='login-form'>
      {!props.isValid ? <h1 className='invalid-login-msg'>Invalid login!  Try again.</h1> : <h1>Enter login information</h1>}
      <label htmlFor='emailInput'>Email</label>
      <input 
        className='login-input'
        id='emailInput'
        value={props.email}
        type='text'
        name='email' 
        placeholder='Email'
        onChange={event => props.handleChange(event)}
      />
      <label htmlFor='passwordInput'>Password</label>
      <input 
        className='login-input'
        id='passwordInput'
        value={props.password}
        type='password'
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