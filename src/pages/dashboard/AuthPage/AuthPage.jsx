import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SignUpForm from '../../../components/dashboard/SignUpForm/SignUpForm';
import LoginForm from '../../../components/dashboard/LoginForm/LoginForm';



const AuthPage = ({setUserInState, user}) => {

  let [showLogin, setShowLogin] = useState(true)
  return (
    <div class="row col-lg-4 col-md-6 col-sm-10 d-flex justify-content-center;" style={{margin: '0 auto', marginTop: '2rem', display: 'flex', alignItems: 'center'}}>
      <div>
    
    
      <h3 onClick={() => setShowLogin(!showLogin)}>
      {/* {showLogin ? 'SIGN UP' : 'LOG IN'} */}
      UNTITLEDmagazine
      </h3>
      <hr/>
      <p class="h5">Content Manager Login</p>
      {showLogin ? 
      <LoginForm user={user} setUserInState={setUserInState}/>:
      <SignUpForm user={user} setUserInState={setUserInState}/>
      }
    </div>
    </div>
  )
}

export default AuthPage

