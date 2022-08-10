import React from 'react'
import DashboardHeader from '../DashboardHeader/DashboardHeader.jsx'
import DashboardCardSm from '../DashboardCardSm/DashboardCardSm.jsx';
import DashboardCardLg from '../DashboardCardLg/DashboardCardLg.jsx';
import './Main.css'

const Main = () => {
  return (
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
  )
}

export default Main
