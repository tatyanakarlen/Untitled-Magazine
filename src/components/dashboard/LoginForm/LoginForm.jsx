import React from 'react'
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const LoginForm = ({ setUserInState, user }) => {

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: '',
        error: ''
      });
    

   

      const logUserObj = (e) => {
          e.preventDefault();
          console.log(userLogin)
      }

      const navigate = useNavigate()


      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // 1. POST our new user info to the server
          const fetchResponse = await fetch('/api/users/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: userLogin.email, password: userLogin.password, })
          })
    
          // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
          if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
    
          let token = await fetchResponse.json() // 3. decode fetch response: get jwt token from srv
          localStorage.setItem('token', token);  // 4. Stick token into localStorage
    
          const userDoc = JSON.parse(atob(token.split('.')[1])).user; // 5. Decode the token + put user document into state
          setUserInState(userDoc)
          // navigate('../login')
        } catch (err) {
          console.log("SignupForm error", err)
          setUserLogin({
            ...userLogin,
            error: 'Sign Up Failed - Try Again',
          })
        }
      }

   return (
    <div >
      
      
          
       <form autoComplete="off" onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">E-mail:</label>
    <input 
    type="email" 
    name="email" 
    value={userLogin.email} 
    class="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp"
    onChange={(e) =>
        setUserLogin({
        ...userLogin,
        email: e.target.value,
      })
      }
      required />
    
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password:</label>
    <input 
    type="password" 
    name="password" 
    value={userLogin.password} 
    class="form-control" 
    id="exampleInputPassword1"
    onChange={(e) =>
        setUserLogin({
        ...userLogin,
        password: e.target.value,
          })
      }
      required 
    
    
    />
  </div>
  
  <button type="submit" class="btn btn-primary">Log In</button>
</form>
<p className="error-message h6 g-2">&nbsp;{userLogin.error}</p>
      </div>
  )
}

export default LoginForm