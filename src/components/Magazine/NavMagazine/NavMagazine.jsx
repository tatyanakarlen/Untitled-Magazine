import React from 'react';
import './NavMagazine.css';
import useIsBelow from '../../../hooks';
import { Link } from 'react-router-dom';

const NavMagazine = (props) => {
  const { isBelow } = useIsBelow();

  const handleChange = (e) => {
    console.log(e.target.value)
    e.preventDefault();
    props.setSearchInput(e.target.value);
  };

  const clickHandle = () => {
    props.setCheckArticle(!props.checkArticle);
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
            {/* {isBelow && (
              <h1 style={{ color: 'white' }}>
                UNTITLED
                <span class="text-warning">magazine</span>
              </h1>
            )} */}
            {/* <button
              class="btn btn-dark btn-lg"
              type="button"
              id="button-addon2"
            >
              {/* <i class="bi bi-search"></i> */}
            {/* </button>  */}

            <div className="radio">
          <label style={{color: "white", margin:"5px"}} >
            <input type="radio" value="Article" onClick={clickHandle} checked={!props.checkArticle} />
            Article
          </label>
        </div>
        <div className="radio">
          <label style={{color: "white", margin:"5px"}}>
            <input type="radio" value="Contributor" onClick={clickHandle} checked={props.checkArticle} />
            Contributor
          </label>
        </div>
        {isBelow && (
              <h1 style={{ color: 'white' }}>
                UNTITLED
                <span class="text-warning">magazine</span>
              </h1>
            )}


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
            <ul class="navbar-nav ms-auto" >
              <li class="nav-item" style={{ fontSize: '21px' }}>
              <Link class="nav-item" style={{ fontSize: '21px'}} to="/latest">Latest</Link>
              </li>
              <li class="nav-item" style={{ fontSize: '21px' }}>
                <a href="#questions" class="nav-link">
                  Subscribe
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavMagazine;
