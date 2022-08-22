import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const SPAN_CLASS = 'ms-1 d-none d-md-inline';

const Nav = ({ handleLogOut, navActive, setNavActive }) => {
  return (
    <div class="bg-light col-12 col-md-2 sticky-top">
      {/* pay attention to line above */}
      <a
        href="/"
        class="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <span class="fs-5">
          <span
            class="d-none d-md-inline"
            style={{ fontWeight: 'bold', fontSize: '20px' }}
          >
            Untitled Magazine
          </span>
        </span>
      </a>
      <ul
        id="nav-ul"
        class="d-flex flex-md-column list-unstyled justify-content-evenly align-items-start"
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
            <span class={SPAN_CLASS}>Main</span>
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
            <span class={SPAN_CLASS}>Post</span>
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
            <span class={SPAN_CLASS}>Articles</span>
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
            <span class={SPAN_CLASS}>Contributers</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link className="nav-left-link" to="/">
            <i class="fs-5 bi-house"></i>
            <span class={SPAN_CLASS}>Magazine</span>
          </Link>
        </li>
        <li>
          <Link className="nav-left-link" to="/login" onClick={handleLogOut}>
            <i class="fs-5 bi-grid"></i>
            <span class={SPAN_CLASS}>Log Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
