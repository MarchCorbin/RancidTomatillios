import React from 'react'
import PropTypes from 'prop-types'
import LoginForm from '../LoginForm/LoginForm'
import './Login.css'
import { fetchSingleUserData } from '../fetchCalls/fetchCalls'
import { withRouter } from 'react-router-dom'

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

  resetForm = () => {
    this.setState({ email: '', password: ''})
  }

  handleInvalidLogin() {
    this.setState({ isValid: false })
  }

  fetchUserData(postInput) {
    fetchSingleUserData(postInput)
      .then(res => {
        if (res.ok) {
          return res.json()
            .then(data => {
              this.props.getCurrentUser(data)
              this.props.fetchUserRatings(data)
            })
            .then(this.props.history.goBack())
            .then(this.resetForm())
        } else {
          this.handleInvalidLogin()
          this.props.history.push('/login')
        }
      }
    )    
  }

  loginCredentials = (e) => {
    e.preventDefault()
    console.log(this.props.history)
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
        currentUser={this.props.currentUser}
        handleSubmit={this.loginCredentials}
        isValid={this.state.isValid}
        email={this.state.email}
        password={this.state.password}
        handleChange={this.handleChange}
      />
    )
  }
}

export default withRouter(Login)

Login.propTypes = {
  getCurrentUser: PropTypes.func.isRequired,
  toggleLoginDisplay: PropTypes.func.isRequired
}