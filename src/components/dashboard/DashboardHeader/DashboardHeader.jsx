import React from 'react';
import './DashboardHeader.css'

const DashboardHeader = ({ user }) => {
  return (
    <div id="header-box" style={{ marginTop: "-0.25rem", marginBottom: '-1.251rem'}}>
     
      <div>
        <h3>Dashboard</h3>
        <p>Welcome to your content management dashboard,  <span style={{fontWeight:'bold'}}>{user && user.name}!</span> </p>
       
       
      </div>
    </div>
  );
};

export default DashboardHeader;
