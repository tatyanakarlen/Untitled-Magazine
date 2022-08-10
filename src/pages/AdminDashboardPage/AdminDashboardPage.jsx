import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Main from '../../components/Main/Main.jsx'
import './AdminDashboardPage.css';

const AdminDashboardPage = ({ handleLogOut }) => {
  return (
    <div class="container-fluid overflow-hidden">
      <div class="row vh-100 overflow-auto">
        <Nav handleLogOut={handleLogOut}/>
        <Main />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
