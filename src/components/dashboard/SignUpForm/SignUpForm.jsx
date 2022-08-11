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
    
    //   console.log('userInfo', userInfo);

    //   const handleChange = (evt) => {
    //     setUserInfo({
    //       [evt.target.name]: evt.target.value,
    //       error: ''
    //     });
    //   };

      
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           // 1. POST our new user info to the server
          const fetchResponse = await fetch('/api/users/signup', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: userInfo.name, email: userInfo.email, password: userInfo.password,})
          })
          console.log('is this working?')
          // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
          if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
          
          let token = await fetchResponse.json() // 3. decode fetch response to get jwt from srv
          localStorage.setItem('token', token);  // 4. Stick token into localStorage (users browser)
          
          const userDoc = JSON.parse(atob(token.split('.')[1])).user; // 5. Decode the token + put user document into state
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
            {/* <button onClick={logUserObj} type="submit">SIGN UP</button> */}
          </form>
        </div>
        <p className="error-message">&nbsp;{userInfo.error}</p>
        
      </div>
    </div>
  )
}

export default SignUpForm








// export default function SignUpForm(props) {
//     let [content, setContent] = useState("")

//     let handleChange = (e) => {
//         setContent(e.target.value)
//     } // just for form data goes in state

//     async function handleSubmit() {
//         let response1 = await fetch("/api/posts", {
//             method:"POST",
//             headers: {"Content-Type": "application/json"},
//             body:JSON.stringify({content:content})
//         })
//         let allPosts = await response1.json()
//         // todo: PUT the entirety of msgs INTO STATE
//         props.setPosts(allPosts)
//         setContent("")
//     }

//     return(
//       <div>
//         <textarea onChange={handleChange}
//           name="content" value={content}>
//           </textarea>
//         <br/>
//         <button onClick={()=>{handleSubmit()}}>Submit!</button>
//       </div>
//     )
// }