import React from 'react'
import './Login.css'

class Login extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isValid: true
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value, isValid: true})
  }

  hideForm = () => {
    this.setState({ email: '', password: ''})
    this.props.toggleLoginDisplay()
  }

  handleInvalidLogin() {
    this.setState({ isValid: false })
  }

  loginCredentials(e) {
    e.preventDefault()
    let postInput;
    if (!this.state.email || !this.state.password) {
      this.handleInvalidLogin()
    } else {
      postInput = {"email": this.state.email, "password": this.state.password}
    }
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postInput)
    })
    .then(res => {
      if (res.ok) {
        return res.json()
          .then(data => this.props.getCurrentUser(data))
          .then(this.hideForm)
      } else {
        this.handleInvalidLogin()
      }
    })    
  }

  render(){
    return (
      <form>
        {!this.state.isValid ? <h3>Invalid login!  Try again.</h3> : <h3>Enter login information</h3>}
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
          className='submit-login-button' 
          onClick={e => this.loginCredentials(e)}>
          Login
        </button>
      </form>)
  }
}

export default Login