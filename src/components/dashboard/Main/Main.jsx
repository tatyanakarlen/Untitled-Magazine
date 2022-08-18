import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader.jsx';
import DashboardCardSm from '../DashboardCardSm/DashboardCardSm.jsx';
import DashboardCardLg from '../DashboardCardLg/DashboardCardLg.jsx';
import TableMain from '../TableMain/TableMain.jsx'
import BreadCrumb from '../BreadCrumb/BreadCrumb.jsx';
import './Main.css';

const Main = () => {
  return (
    <div class="col d-flex flex-column h-sm-100">
      <div id="card-container" class="row overflow-auto">
        <div id="card-box" class="row text-center g-3" style={{ width: '90%'}}>
        {/* <nav aria-label="breadcrumb">
                    <ol style={{ backgroundColor: "#ced4da", height: "2.5rem", paddingTop: '0.5rem', paddingLeft: '0.5rem' }}class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Overview</li>
                    </ol>
                </nav> */}
                <BreadCrumb />
        <DashboardHeader />
          <DashboardCardSm />
          <DashboardCardSm />
          <DashboardCardSm />
          <TableMain />
          {/* <div class="table-responsive-md">
          <p class="h4 text-left" style={{ textAlign: 'left'}}>Latest Posts</p>
    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      
      </tbody>
    </table>
  </div> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
