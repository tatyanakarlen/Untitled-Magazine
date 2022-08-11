import './App.css'
import { useState, useEffect } from 'react';
import AuthPage from './pages/dashboard/AuthPage/AuthPage'
import AdminDashboardPage from './pages/dashboard/AdminDashboardPage/AdminDashboardPage'
import MagazinePage from './pages/dashboard/MagazinePage/MagazinePage'
import { Route, Routes, Navigate, Switch, Redirect } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

function App() {

  const [user, setUser] = useState(null)

  const setUserInState = (incomingUserData) => {
    setUser(incomingUserData)
  }

  const navigate = useNavigate()

  const handleLogOut = () =>{
    localStorage.removeItem("token");
    setUser(null)
    navigate('../login')
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

  
//   <Route
//   path="/checkout"
//   element={ cartItems.length < 1 ? <Navigate to="/products" /> : <Checkout /> }
// />;

  return (
    <div className="App">
      <Routes>
      <Route path='/login' element={ user !== null ? <Navigate to='/dashboard' /> : <AuthPage setUserInState={setUserInState}/>} />
      <Route path='/' element={<MagazinePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path='/dashboard' element={<AdminDashboardPage handleLogOut={handleLogOut}/>} />
    </Routes>
    </div>
  );
}

export default App;


// const ProtectedComponent = () => {
//   if (authFails)
//     return <Redirect to='/login'  />
//   }
//   return <div> My Protected Component </div>
// }

// AdminDashboardPage


// { this.state.user ? 
//   <Switch>
//     <Route path='/orders/new' render={(props) => (
//       <NewOrderPage {...props} handleLogOut={this.handleLogOut}/>
//     )}/>
//     <Route path='/orders' render={(props) => (
//       <OrderHistoryPage {...props} handleLogOut={this.handleLogOut}/>
//     )}/>
//     <Redirect to="/orders" />
//   </Switch>
//   :
//   <AuthPage setUserInState={this.setUserInState}/>
// }
