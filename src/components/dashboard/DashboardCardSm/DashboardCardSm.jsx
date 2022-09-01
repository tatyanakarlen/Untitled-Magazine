import React from 'react';
import './DashboardCardSm.css'




const DashboardCardSm = ({ title, count, word, color }) => {
  return (
  
    <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div class="card">
              <h5 class="card-header" style={{ textAlign:"left"}}>{title}</h5>
              <div class="card-body">
                <h5 class="card-title" style={{ textAlign:"left"}}>{count}</h5>
                <p class="h6 text-left" style={{textAlign:'left', color: color}}>{word} </p>
              </div>
            </div>
          </div>
  );
};

export default DashboardCardSm;
