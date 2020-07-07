import React from 'react'
import PropTypes from 'prop-types'
import LoginForm from '../LoginForm/LoginForm'
import './Login.css'

class Login extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isValid: true,
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

  fetchUserData(postInput) {
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
          .then(data => {
            this.props.getCurrentUser(data)
            this.props.fetchUserRatings(data)
            console.log(data)
          })
          .then(this.hideForm)
      } else {
        this.handleInvalidLogin()
      }
    })    
  }

  loginCredentials = (e) => {
    e.preventDefault()
    let postInput;
    if (!this.state.email || !this.state.password) {
      this.handleInvalidLogin()
    } else {
      postInput = {"email": this.state.email, "password": this.state.password}
    }
    this.fetchUserData(postInput)
  }

  render() {
    return (
      <LoginForm 
        handleSubmit={this.loginCredentials}
        isValid={this.state.isValid}
        email={this.state.email}
        password={this.state.password}
        handleChange={this.handleChange}
      />
    )
  }
}

export default Login

Login.propTypes = {
  getCurrentUser: PropTypes.func.isRequired,
  toggleLoginDisplay: PropTypes.func.isRequired
}