import React from 'react';
import './NavMagazine.css';
import useIsBelow from '../../../hooks';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const NavMagazine = (props, setHamburgerBtnActive, hamburgerBtnActive ) => {
  const { isBelow } = useIsBelow();

  const handleChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    props.setSearchInput(e.target.value);
  };


  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div class="container d-flex flex-row">
          <div class="d-flex flex-row">
            <input
              type="text"
              class="form-control news-input"
              placeholder="Search"
              style={{ height: '37px', width: '100x' }}
              onChange={handleChange}
            />
            <button class="btn btn-dark" style={{ marginBottom: '1rem' }}>
              <BsSearch style={{ fontSize: '23px' }} />
            </button>

            {isBelow && (
              <h2 style={{ color: 'white' }}>
                UNTITLED
                <span class="text-warning">magazine</span>
              </h2>
            )}
          </div>

          <button
            onClick={props.handleBtnActive}
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span 
            
            class="navbar-toggler-icon"></span>
          </button>

          <div 
          class="collapse navbar-collapse" id="navmenu"
          >
            <ul class="navbar-nav ms-auto nav-links">
              <li class="nav-item" style={{ fontSize: '21px' }}>
                <Link
                  class="nav-item text-light"
                  style={{ fontSize: '21px', textDecoration: 'none' }}
                  to="/latest"
                >
                  Latest
                </Link>
              </li>
              <li class="nav-item" style={{ fontSize: '21px' }}>
                <Link
                  class="nav-item text-light"
                  style={{ fontSize: '21px', textDecoration: 'none' }}
                  to="/latest"
                >
                  Subscribe
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavMagazine;
