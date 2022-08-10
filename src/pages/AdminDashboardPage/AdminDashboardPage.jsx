import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import DashboardCardSm from '../../components/DashboardCardSm/DashboardCardSm.jsx';
import DashboardCardLg from '../../components/DashboardCardLg/DashboardCardLg.jsx';
import './AdminDashboardPage.css';

const AdminDashboardPage = ({ handleLogOut }) => {
  return (
    <div class="container-fluid overflow-hidden">
      <div class="row vh-100 overflow-auto">
        <Nav handleLogOut={handleLogOut}/>
        <div class="col d-flex flex-column h-sm-100">
          <div id="card-container" class="row overflow-auto">
            <div id="card-box" class="row text-center g-3">
              <DashboardHeader />
              <div class="col-md">
                <DashboardCardSm />
              </div>
              <div class="col-md">
                <DashboardCardSm />
              </div>
              </div>
              <div id="dashboard-footer">
                <div class="row py-4 mt-auto dashboard-footer">
                  <div class="col-md">
                    <DashboardCardLg />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
