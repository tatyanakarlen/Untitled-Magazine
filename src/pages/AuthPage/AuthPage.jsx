import React from 'react'
import { Link } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm/SignUpForm'
// import LoginForm from '../../components/LoginForm/LoginForm';



const AuthPage = ({setUserInState}) => {
  return (
    <div>
      I AM AUTH PAGE
      <br/>
      <Link className="nav-left-link" to="/">
        MAGAZINE
      </Link>
      <SignUpForm />
    </div>
  )
}

export default AuthPage
