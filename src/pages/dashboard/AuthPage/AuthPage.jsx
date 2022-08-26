import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SignUpForm from '../../../components/dashboard/SignUpForm/SignUpForm';
import LoginForm from '../../../components/dashboard/LoginForm/LoginForm';



const AuthPage = ({setUserInState, user}) => {

  let [showLogin, setShowLogin] = useState(true)
  return (
    <div>
      I AM AUTH PAGE
      <br/>
      <Link className="nav-left-link" to="/">
        MAGAZINE
      </Link>
      <h3 onClick={() => setShowLogin(!showLogin)}>
      {showLogin ? 'SIGN UP' : 'LOG IN'}
      </h3>
      {showLogin ? 
      <LoginForm user={user} setUserInState={setUserInState}/>:
      <SignUpForm user={user} setUserInState={setUserInState}/>
      }
    </div>
  )
}

export default AuthPage


// {/* <h3 onClick={() => this.setState({ showLogin: !this.state.showLogin })}>
// {this.state.showLogin ? 'SIGN UP' : 'LOG IN'}
// </h3>
// </div>
// {/* Another ternary operator! */}
// {/* If showLogin is true, show the login form. If false, show the signup form */}
// {this.state.showLogin ? 
// <LoginForm setUserInState={this.props.setUserInState}/> : 
// <SignUpForm setUserInState={this.props.setUserInState} />} */}
