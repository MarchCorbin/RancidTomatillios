import React from 'react'
import './Login.css'

class Login extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  hideForm = () => {
    this.setState({ email: '', password: ''})
    this.props.toggleLoginDisplay()
  }

  loginCredentials(e) {
    e.preventDefault()
    const postInput = {"email": this.state.email, "password": this.state.password}
    console.log('I am working')
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postInput)
    })
    .then(response => response.json())
    .then(data => this.props.getCurrentUser(data))
    .then(this.hideForm)
  }

  render(){
    return (
      <form>
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
          onClick={e => this.loginCredentials(e)}>
          Login
        </button>
      </form>)
  }

}

export default Login