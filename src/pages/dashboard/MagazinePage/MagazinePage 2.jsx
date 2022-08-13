import React from 'react'
import { Link } from 'react-router-dom';

const MagazinePage = () => {
  return (
    <div>
      I AM MAGAZINE PAGE
      <br/>
      <Link className="nav-left-link" to="/login">
        ADMIN LOGIN
      </Link>
    </div>
  )
}

export default MagazinePage
