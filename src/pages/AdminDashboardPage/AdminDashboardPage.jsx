import React from 'react'
import { Link } from 'react-router-dom';

const AdminDashboardPage = () => {
  return (
    <div>
      This is admin dashboard page
      <Link className="nav-left-link" to="/">
        MAGAZINE
      </Link>
    </div>
  )
}

export default AdminDashboardPage
