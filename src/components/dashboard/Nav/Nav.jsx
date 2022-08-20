import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = ({ handleLogOut, navActive, setNavActive }) => {
  return (
    <div class="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-light d-flex sticky-top">
      <div class="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
        <a
          href="/"
          class="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span class="fs-5">
            <span
              class="d-none d-sm-inline"
              style={{ fontWeight: 'bold', fontSize: '20px' }}
            >
              Untitled Magazine
            </span>
          </span>
        </a>
        <ul
          id="nav-ul"
          class="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-0 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start"
          id="menu"
        >
          <li class="nav-item">
            <Link
              className="nav-left-link"
              to=""
              onClick={() =>
                setNavActive({
                  ...navActive,
                  main: true,
                  contributers: false,
                  articles: false,
                  post: false,
                })
              }
            >
              <i class="fs-5 bi-house"></i>
              <span class="ms-1 d-none d-sm-inline">Main</span>
            </Link>
          </li>
          <li>
            <Link
              className="nav-left-link"
              to=""
              onClick={() =>
                setNavActive({
                  ...navActive,
                  main: false,
                  contributers: false,
                  articles: false,
                  post: true,
                })
              }
            >
              <i class="fs-5 bi-people"></i>
              <span class="ms-1 d-none d-sm-inline">Post</span>
            </Link>
          </li>

          <li>
            <Link
              className="nav-left-link"
              to=""
              onClick={() =>
                setNavActive({
                  ...navActive,
                  main: false,
                  contributers: false,
                  articles: true,
                  post: false,
                })
              }
            >
              <i class="fs-5 bi-speedometer2"></i>
              <span class="ms-1 d-none d-sm-inline">Articles</span>
            </Link>
          </li>
          <li>
            <Link
              className="nav-left-link"
              to=""
              onClick={() =>
                setNavActive({
                  ...navActive,
                  main: false,
                  contributers: true,
                  articles: false,
                  post: false,
                })
              }
            >
              <i class="fs-5 bi-table"></i>
              <span class="ms-1 d-none d-sm-inline">Contributers</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link className="nav-left-link" to="/">
              <i class="fs-5 bi-house"></i>
              <span class="ms-1 d-none d-sm-inline">Magazine</span>
            </Link>
          </li>
          <li>
            <Link className="nav-left-link" to="/login" onClick={handleLogOut}>
              <i class="fs-5 bi-grid"></i>
              <span class="ms-1 d-none d-sm-inline">Log Out</span>
            </Link>
          </li>
        </ul>
        <div class="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
          <a
            href=""
            class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="d-none text-dark d-sm-inline mx-1">Jane</span>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <a class="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li></li>
            <li>
              <a class="dropdown-item" href="">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
