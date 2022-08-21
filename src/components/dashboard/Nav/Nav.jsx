import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Nav = ({ handleLogOut, navActive, setNavActive }) => {
  const isBreakpoint = useMediaQuery({
    query: '(max-width: 860px)',
  });

  /* 

  class="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-light d-flex sticky-top">

  class="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white"


  nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-0 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start
  
  */

  return (
    <div class={isBreakpoint ? 'bg-light col-12 sticky-top' : 'bg-light col-2'}>
      <a
        href="/"
        class="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <span class="fs-5">
          <span
            class={isBreakpoint ? 'd-none' : "d-none d-sm-inline"}
            style={{ fontWeight: 'bold', fontSize: '20px' }}
          >
            Untitled Magazine
          </span>
        </span>
      </a>
      <ul
        id="nav-ul"
        class={
          isBreakpoint
            ? 'd-flex list-unstyled justify-content-evenly'
            : 'list-unstyled d-flex flex-column align-items-start'
        }
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
            <span class={isBreakpoint ? 'd-none' : 'ms-1 d-sm-inline'}>
              Main
            </span>
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
            <span class={isBreakpoint ? 'd-none' : 'ms-1 d-sm-inline'}>
              Post
            </span>
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
            <span class={isBreakpoint ? 'd-none' : 'ms-1 d-sm-inline'}>
              Articles
            </span>
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
            <span class={isBreakpoint ? 'd-none' : 'ms-1 d-sm-inline'}>
              Contributers
            </span>
          </Link>
        </li>

        <li class="nav-item">
          <Link className="nav-left-link" to="/">
            <i class="fs-5 bi-house"></i>
            <span class={isBreakpoint ? 'd-none' : 'ms-1 d-sm-inline'}>
              Magazine
            </span>
          </Link>
        </li>
        <li>
          <Link className="nav-left-link" to="/login" onClick={handleLogOut}>
            <i class="fs-5 bi-grid"></i>
            <span class={isBreakpoint ? 'd-none' : 'ms-1 d-sm-inline'}>
              Log Out
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
