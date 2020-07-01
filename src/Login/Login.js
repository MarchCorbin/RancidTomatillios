import React from 'react'
import './Login.css'


function Login() {
    return (<form>
    <input className='username' placeholder='Username'></input>
    <input className='password' placeholder='Password'></input>
    <button className='login-button'>Login</button>



</form>)

}

export default Login