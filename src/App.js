import './App.css'
import { useState, useEffect } from 'react';
import AuthPage from './pages/AuthPage/AuthPage'
import MagazinePage from './pages/MagazinePage/MagazinePage'
import { Route, Routes, Navigate } from 'react-router-dom';

//testing 

function App() {

  const [user, setUser] = useState(null)

  const setUserInState = (incomingUserData) => {
    setUser(incomingUserData)
  }

  // let [posts, setPosts] = useState([])

  // async function getAllPosts() {
  //   try {
  //     let response1 = await fetch("/api/posts")
  //     let response2 = await response1.json()
  //     setPosts(response2)
  //   } catch(err) {
  //     console.log("couldn't fetch posts")
  //   }
  // }

  // useEffect(() => {
  //   getAllPosts()
  // }, []) // empty [] is componentDidMount

  

  return (
    <div className="App">
      <Routes>
      <Route path='/login' element={<AuthPage setUserInState={setUserInState}/>} />
      <Route path='/' element={<MagazinePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
     </Routes>
    </div>
  );
}

export default App;
