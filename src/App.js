import './App.css';
import { useState, useEffect } from 'react';
import AuthPage from './pages/dashboard/AuthPage/AuthPage';
import AdminDashboardPage from './pages/dashboard/AdminDashboardPage/AdminDashboardPage';
import MagazinePage from './pages/dashboard/MagazinePage/MagazinePage';
import { Route, Routes, Navigate, Switch, Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Latest from './pages/dashboard/Latest/Latest';
import ArticleDetail from './pages/dashboard/ArticleDetail/ArticleDetail';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

function App() {
  const [user, setUser] = useState(null);
  let [contributors, setContributors] = useState([]);
  let [articles, setArticles] = useState([]);

  const setUserInState = (incomingUserData) => {
    setUser(incomingUserData);
  };

  console.log(user);

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('../login');
  };

  // let jwt = localStorage.getItem('token')
  // let fetchOrdersResponse = await fetch('/api/orders', {headers: {'Authorization': 'Bearer ' + jwt}})

  async function getData() {
    try {
      let jwt = localStorage.getItem('token');
      let response1 = await fetch(
        '/api/contributorSubmissions/allContributors',
        { headers: { Authorization: 'Bearer ' + jwt } }
      );
      let contributors = await response1.json();
      setContributors(contributors);
      let response2 = await fetch('/api/articleSubmissions/allArticles', {
        headers: { Authorization: 'Bearer ' + jwt },
      });
      let articles = await response2.json();
      setArticles(articles);
    } catch (err) {
      console.log("couldn't fetch posts");
    }
  }

  const verifyUserToken = () => {
    let token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1])); // decode token
      if (payload.exp < Date.now() / 1000) {
        // Check if our token is expired, and remove if it is (standard/boilerplate)
        localStorage.removeItem('token');
        token = null;
      } else {
        // token not expired! our user is still 'logged in'. Put them into state.
        let userDoc = payload.user; // grab user details from token
        setUser(userDoc);
      }
    }
  };

  useEffect(() => {
    verifyUserToken();
    getData();
  }, []);

  return (
    <ThemeProvider
      breakpoints={['1500', '1400', '1200', '1000', '900', '600', '550', '480']}
      // breakpoints={['xxxl,   'xxl',  'xl',  'lg',   'md',  'sm',  'xs',  'xxs']}
    >
      <div className="App">
        <Routes>
          <Route path="/login" element={user !== null ? (<Navigate to="/dashboard" />
              ) : (
              <AuthPage user={user} setUserInState={setUserInState} />
              )
            }
          />
          <Route path="/" element={
              <MagazinePage allArticles={articles} allContributors={contributors}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/latest" element={<Latest allArticles={articles} />} />
          <Route path="/detail"
            element={<ArticleDetail allArticles={articles} />}
          />
          <Route path="/dashboard" element={
              <AdminDashboardPage
                user={user}
                handleLogOut={handleLogOut}
                allArticles={articles}
                setArticles={setArticles}
                allContributors={contributors}
                setContributors={setContributors}
                getData={getData}
              />
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
