import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader.jsx';
import DashboardCardSm from '../DashboardCardSm/DashboardCardSm.jsx';
import TableMain from '../TableMain/TableMain.jsx'
import BreadCrumb from '../BreadCrumb/BreadCrumb.jsx';
import './Main.css';

const Main = () => {
  return (
    <div class="col d-flex flex-column h-sm-100">
      <div class="row overflow-auto card-container">
        <div class="row text-center g-3" style={{ width: '90%'}}>
       
        <BreadCrumb />
        <DashboardHeader />
          <DashboardCardSm />
          <DashboardCardSm />
          <DashboardCardSm />
          <TableMain />
         
        </div>
      </div>
    </div>
  );
};

export default Main;
