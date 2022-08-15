import './App.css'
import { useState, useEffect } from 'react';
import AuthPage from './pages/dashboard/AuthPage/AuthPage'
import AdminDashboardPage from './pages/dashboard/AdminDashboardPage/AdminDashboardPage'
import MagazinePage from './pages/dashboard/MagazinePage/MagazinePage'
import { Route, Routes, Navigate, Switch, Redirect } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

function App() {

  const [user, setUser] = useState(null)
  let [contributors, setContributors] = useState([])
  let [articles, setArticles] = useState([])

  const setUserInState = (incomingUserData) => {
    setUser(incomingUserData)
  }

  // const pushContributor = (obj) => {
      
  // }

  // const skills = [...this.state.skills, newObj];

  // this.setState({
  //   skills
  // });

  console.log(user)


  const navigate = useNavigate()

  const handleLogOut = () =>{
    localStorage.removeItem("token");
    setUser(null)
    navigate('../login')
  }


  async function getData() {
    try {
      let response1 = await fetch('/api/contributorSubmissions/allContributors')
      let contributors = await response1.json()
      setContributors(contributors)
      let response2 = await fetch('/api/articleSubmissions/allArticles')
      let articles = await response2.json()
      setArticles(articles)
    } catch(err) {
      console.log("couldn't fetch posts")
    }
  }

  useEffect(() => {
    getData()
  }, []) // empty [] is componentDidMount
  

 



  

  return (
    <div className="App">
      <Routes>
      <Route path='/login' element={ user !== null ? <Navigate to='/dashboard' /> : <AuthPage user={user} setUserInState={setUserInState}/>} />
      <Route path='/' element={<MagazinePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path='/dashboard' element={<AdminDashboardPage user={user} handleLogOut={handleLogOut} allArticles={articles} allContributors={contributors} setContributors={setContributors} getData={getData}/>} />
    </Routes>
    </div>
  );
}

export default App;



