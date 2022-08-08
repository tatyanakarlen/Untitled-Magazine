import React from 'react'
import { useState, useEffect } from 'react';

const LoginForm = ({ setUserInState }) => {

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: '',
        error: ''
      });
    
      console.log('userInfo', userLogin);

    //   const handleChange = (evt) => {
    //     setUserInfo({
    //       [evt.target.name]: evt.target.value,
    //       error: ''
    //     });
    //   };

      const logUserObj = (e) => {
          e.preventDefault();
          console.log(userLogin)
      }


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
        } catch (err) {
          console.log("SignupForm error", err)
          setUserLogin({
            ...userLogin,
            error: 'Sign Up Failed - Try Again',
          })
        }
      }

   return (
    <div>
       <div>
           <h3>I am Login page</h3>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>

            <label>Email</label>
            <input 
            type="text" 
            name="email" 
            value={userLogin.email} 
            onChange={(e) =>
              setUserLogin({
              ...userLogin,
              email: e.target.value,
            })
            }
            required />
            <label>Email</label>
            <input 
            type="text" 
            name="password" 
            value={userLogin.password} 
            onChange={(e) =>
              setUserLogin({
              ...userLogin,
              password: e.target.value,
                })
            }
            required />
            {/* <button type="submit" disabled={disable}>SIGN UP</button> */}
            <button onClick={logUserObj} type="submit">LOGIN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{userLogin.error}</p>
        
      </div>
    </div>
  )
}

export default LoginForm