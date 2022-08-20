import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader.jsx';
import DashboardCardSm from '../DashboardCardSm/DashboardCardSm.jsx';
import TableMain from '../TableMain/TableMain.jsx'
import BreadCrumb from '../BreadCrumb/BreadCrumb.jsx';
import './Main.css';

const Main = ({ allArticles }) => {
  return (
    <div class="col d-flex flex-column h-sm-100">
      <div class="row overflow-auto card-container">
        <div class="row text-center g-3" style={{ width: '90%'}}>
       
        <BreadCrumb />
        <DashboardHeader />
          <DashboardCardSm title={"Posts"} count={25}/>
          <DashboardCardSm title={"Updates"} count={25}/>
          <DashboardCardSm title={"Contributors"} count={25}/>
          <TableMain allArticles={allArticles}/>
         
        </div>
      </div>
    </div>
  );
};

export default Main;
