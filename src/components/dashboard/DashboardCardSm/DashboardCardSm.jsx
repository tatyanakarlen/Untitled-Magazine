import React from 'react';
import './DashboardCardSm.css'
import * as Icon from 'react-bootstrap-icons';

{/* <Icon.ArrowRight /> */}

const DashboardCardSm = () => {
  return (
  
    <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div class="card">
              <h5 class="card-header" style={{ textAlign:"left"}}>Articles</h5>
              <div class="card-body">
                <h5 class="card-title" style={{ textAlign:"left"}}>57</h5>
              </div>
            </div>
          </div>
  );
};

export default DashboardCardSm;
