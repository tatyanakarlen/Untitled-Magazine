import React from 'react'
import './NavMagazine.css'

const NavMagazine = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
      <div class="container d-flex flex-row">
        <div class="d-flex flex-row">
        <input type="text" class="form-control news-input" placeholder="Search" style={{height: "37px", width: "100x"}} />
          <button
            class="btn btn-dark btn-lg"
            type="button"
            id="button-addon2"
          >
          {/* <i class="bi bi-search"></i> */}
            
          </button>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a href="#learn" class="nav-link">Latest</a>
            </li>
            <li class="nav-item">
              <a href="#questions" class="nav-link">Subscribe</a>
            </li>
            <li class="nav-item">
              <a href="#instructors" class="nav-link">Something</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    
  )
}

export default NavMagazine
