import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../../components/dashboard/Nav/Nav';
import Main from '../../../components/dashboard/Main/Main.jsx'
import ContributorsList from '../../../components/dashboard/ContributorsList/ContributorsList';
import './AdminDashboardPage.css';

const AdminDashboardPage = ({ handleLogOut }) => {

  const [navActive, setNavActive] = useState({
        main: true, 
        authors: false, 
        articles: false, 
        post:false,
  })

  // const [navActive, setActive] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  return (
    <div class="container-fluid overflow-hidden">
      <div class="row vh-100 overflow-auto">
        <Nav handleLogOut={handleLogOut} setNavActive={setNavActive} navActive={navActive}/>
        <Main />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
