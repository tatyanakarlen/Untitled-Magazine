import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../../components/Dashboard/Nav/Nav';
import Main from '../../../components/Dashboard/Main/Main.jsx';
import ContributorsList from '../../../components/Dashboard/ContributorsList/ContributorsList';
import ArticlesList from '../../../components/Dashboard/ArticlesList/ArticlesList';
import PostArticle from '../../../components/Dashboard/PostArticle/PostArticle';
import BreadCrumb from '../../../components/Dashboard/BreadCrumb/BreadCrumb';
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
  const [articleViewActive, setarticleViewActive] = useState(false);
  const [articleViewData, setarticleViewData] = useState({
    title: '',
    contributor: '',
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
        user={user}
        allContributors={allContributors}
        setContributors={setContributors}
        getData={getData}
      />
    );
  } else if (articles) {
    activeNav = (
      <ArticlesList
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
        user={user}
        allArticles={allArticles}
        setArticles={setArticles}
        getData={getData}
      />
    );
  } else {
    activeNav = (
      <Main
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
