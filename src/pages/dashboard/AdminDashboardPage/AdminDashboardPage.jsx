import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../../components/dashboard/Nav/Nav';
import Main from '../../../components/dashboard/Main/Main.jsx';
import ContributorsList from '../../../components/dashboard/ContributorsList/ContributorsList';
import ArticlesList from '../../../components/dashboard/ArticlesList/ArticlesList';
import PostArticle from '../../../components/dashboard/PostArticle/PostArticle';
import BreadCrumb from '../../../components/dashboard/BreadCrumb/BreadCrumb';
import './AdminDashboardPage.css';

const AdminDashboardPage = ({
  handleLogOut,
  user,
  allArticles, 
  allContributors,
  setContributors,
  getData,
  setArticles,
}) => {


 // this is only the user articles posts!!!!

  const userOwnedArticles = allArticles.filter(function (el) {
    return el.postedBy === user._id
  });

  const userOwnedContributors = allContributors.filter(function (el) {
    return el.postedBy === user._id
  });

  

  const [articleViewActive, setarticleViewActive] = useState(false);
  const [articleViewData, setarticleViewData] = useState({
    title: '',
    contributor: '',
    headline: '', 
    body: '',
    tags: '',
    image: '',
  });

  // this is the page state, it changes based on which nav item is clicked
  const [navActive, setNavActive] = useState({
    main: true,
    contributers: false,
    articles: false,
    post: false,
  });

  // below is the logic that determines which component to render onClick in nav

  const main = navActive.main;
  const contributers = navActive.contributers;
  const articles = navActive.articles;
  const post = navActive.post;

  let activeNav = '';

  if (contributers) {
    activeNav = (
      <ContributorsList
        userOwnedContributors={userOwnedContributors}
        user={user}
        allContributors={allContributors}
        setContributors={setContributors}
        getData={getData}
      />
    );
  } else if (articles) {
    activeNav = (
      <ArticlesList
        userOwnedArticles={userOwnedArticles}
        allArticles={allArticles}
        user={user}
        getData={getData}
        setArticles={setArticles}
        articleViewActive={articleViewActive}
        setarticleViewActive={setarticleViewActive}
        articleViewData={articleViewData}
        setarticleViewData={setarticleViewData}
      />
    );
  } else if (post) {
    activeNav = (
      <PostArticle
        userOwnedContributors={userOwnedContributors}
        user={user}
        allArticles={allArticles}
        setArticles={setArticles}
        getData={getData}
        allContributors={allContributors}
      />
    );
  } else {
    activeNav = (
      <Main
        user={user}
        userOwnedContributors={userOwnedContributors}
        userOwnedArticles={userOwnedArticles}
        allArticles={allArticles}
        articleViewActive={articleViewActive}
        setarticleViewActive={setarticleViewActive}
        articleViewData={articleViewData}
        setarticleViewData={setarticleViewData}
      />
    );
  }

  return (
    <div class="container-fluid overflow-hidden">
      <div class="row vh-100 overflow-auto">
        <Nav
          handleLogOut={handleLogOut}
          setNavActive={setNavActive}
          navActive={navActive}
        />
        {activeNav}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
