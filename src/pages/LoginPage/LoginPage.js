import React from 'react'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      I AM LOGIN PAGE
      <br/>
      <Link className="nav-left-link" to="/">
        MAGAZINE
      </Link>
    </div>
  )
}

export default LoginPage
