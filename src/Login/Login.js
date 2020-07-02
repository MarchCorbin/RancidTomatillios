import React from 'react'
import './Login.css'


class Login extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.loginCredentials = props.loginCredentials
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  render(){
    return (<form>
      <input 
        value={this.state.email}
        type='text'
        name='email' 
        placeholder='Email'
        onChange={event => this.handleChange(event)}
      />
     
      <input 
        value={this.state.password}
        type='text'
        name='password' 
        placeholder='Password'
        onChange={event => this.handleChange(event)}
      />
      <button 
        className='login-button' 
        onClick={event => this.loginCredentials(event, this.state)}>Login
      </button>
      </form>)
  }

}

export default Login