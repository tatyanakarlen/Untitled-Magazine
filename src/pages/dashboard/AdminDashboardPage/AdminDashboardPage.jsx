import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../../components/dashboard/Nav/Nav';
import Main from '../../../components/dashboard/Main/Main.jsx'
import ContributorsList from '../../../components/dashboard/ContributorsList/ContributorsList';
import ArticlesList from '../../../components/dashboard/ArticlesList/ArticlesList';
import PostArticle from '../../../components/dashboard/PostArticle/PostArticle';
import './AdminDashboardPage.css';

const AdminDashboardPage = ({ handleLogOut }) => {

  // this is the page state, it changes based on which nav item is clicked 
  const [navActive, setNavActive] = useState({
        main: true, 
        contributers: false, 
        articles: false, 
        post:false,
  })

  
// below is the logic that determines which component to render onClick in nav

  const main = navActive.main
  const contributers = navActive.contributers
  const articles = navActive.articles
  const post = navActive.post
  
  let activeNav =  ""
  
  if (contributers) {
    activeNav = <ContributorsList />
  } else if (articles) {
    activeNav = <ArticlesList />
  } else if (post) {
    activeNav = <PostArticle />
  } else {
    activeNav = <Main /> 
  }
  
 
  return (
    <div class="container-fluid overflow-hidden">
      <div class="row vh-100 overflow-auto">
        <Nav handleLogOut={handleLogOut} setNavActive={setNavActive} navActive={navActive}/>
        {activeNav}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
