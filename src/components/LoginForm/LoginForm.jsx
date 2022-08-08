import React from 'react'
import { useState, useEffect } from 'react';

const LoginForm = () => {

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

   return (
    <div>
       <div>
           <h3>I am Login page</h3>
        <div className="form-container">
          {/* <form autoComplete="off" onSubmit={this.handleSubmit}> */}
          <form autoComplete="off">
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