import React from 'react'
import './Login.css';

const Login = () => {
  return (
    <div>
        <form id="gform" method="POST" class="login-form">

        <label for="email">Email Address</label>
        <input id="email" name="email" type="email" required />

        <label for="password">Password </label>
        <input id="password" name="password" type="password" />

        <button class="button-success pure-button button-xlarge">
           Login 
        </button>

    </form>
    </div>
  )
}

export default Login;
