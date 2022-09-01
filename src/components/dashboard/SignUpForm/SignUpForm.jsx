import React from 'react'
import { useState, useEffect } from 'react';

const SignUpForm = ({ setUserInState, user }) => {

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: '',
      });
    
  
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const fetchResponse = await fetch('/api/users/signup', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: userInfo.name, email: userInfo.email, password: userInfo.password,})
          })
          console.log('is this working?') 
          if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
          
          let token = await fetchResponse.json() 
          localStorage.setItem('token', token); 
          
          const userDoc = JSON.parse(atob(token.split('.')[1])).user; 
          setUserInState(userDoc)
        } catch (err) {
          console.log("SignupForm error", err)
          setUserInfo({
            ...userInfo,
            error: 'Sign Up Failed - Try Again',
          })
        }
      }
    
      const disable = userInfo.password !== userInfo.confirm

   return (

    <div>
       <div>
           <h3>I am sign up page</h3>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
            type="text" 
            name="name" 
            value={userInfo.name} 
            onChange={(e) =>
            setUserInfo({
            ...userInfo,
            name: e.target.value,
            })
            }
            required />
            <label>Email</label>
            <input 
            type="email" 
            name="email" 
            value={userInfo.email} 
            onChange={(e) =>
                setUserInfo({
                ...userInfo,
                email: e.target.value,
                })
            }
            required />
            <label>Password</label>
            <input 
            type="password" 
            name="password" 
            value={userInfo.password}  
            onChange={(e) =>
                setUserInfo({
                ...userInfo,
                password: e.target.value,
                })
            }
            required />
            <label>Confirm</label>
            <input 
            type="password" 
            name="confirm" 
            value={userInfo.confirm}  
            onChange={(e) =>
                setUserInfo({
                ...userInfo,
                confirm: e.target.value,
                })
            }
            required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{userInfo.error}</p>
        
      </div>
    </div>
  )
}

export default SignUpForm








