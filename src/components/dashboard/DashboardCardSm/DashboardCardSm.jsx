import React from 'react';
import './DashboardCardSm.css'
import * as Icon from 'react-bootstrap-icons';

const DashboardCardSm = () => {
  return (
  
    <div class="card bg-light text-dark">
      <div class="card-body text-left">
        <div class="h1 mb-1">
        <Icon.ArrowRight />
          {/* <i class="bi bi-calendar3" style="font-size: 25px"></i> */}
        </div>

        <h5 class="card-title mb-1 dashboard-cards-title">Summary</h5>
        <hr class="bg-danger border-2 border-top border-danger" />

        <div class="dashboard-cards">
          <p class="card-text text-primary p-10 dashboard-text">28 posts</p>
          <p class="card-text text-primary dashboard-text">15 tasks</p>
      </div>
    </div>
    </div>
  );
};

export default DashboardCardSm;
