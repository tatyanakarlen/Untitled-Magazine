import React from 'react'
import './Nav.css'

const Nav = ({ handleLogOut, navActive, setNavActive }) => {
  return (
    <div class="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
            <div class="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
                <a href="/" class="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5"><span class="d-none d-sm-inline">Dashboard</span></span>
                    
                </a>
                <ul id="nav-ul" class="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        {/* link to magazine goes here */}
                        <a href="#" class="nav-link px-sm-0 px-2"
                        onClick={() =>
                            setNavActive({
                            ...navActive,
                            main: true,
                            contributers: false, 
                            articles: false, 
                            post: false,
                            })
                        }>
                            <i class="fs-5 bi-house"></i><span class="ms-1 d-none d-sm-inline">Main</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-sm-0 px-2"
                        onClick={() =>
                            setNavActive({
                            ...navActive,
                            main: false,
                            contributers: false, 
                            articles: false, 
                            post: true,
                            })
                        }>
                            <i class="fs-5 bi-people"></i><span class="ms-1 d-none d-sm-inline">Post</span> </a>
                    </li>
                   
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-sm-0 px-2"
                         onClick={() =>
                            setNavActive({
                            ...navActive,
                            main: false,
                            contributers: false, 
                            articles: true, 
                            post: false,
                            })
                        }>
                            <i class="fs-5 bi-speedometer2"></i><span class="ms-1 d-none d-sm-inline">Articles</span> </a>
                    </li>
                    <li>

                   
                    {/* main: true, 
        authors: false, 
        articles: false, 
        post:false, */}

                        <a href="#" class="nav-link px-sm-0 px-2"   
                        onClick={() =>
                            setNavActive({
                            ...navActive,
                            main: false,
                            contributers: true, 
                            articles: false, 
                            post: false,
                            })
                        }>
                            <i class="fs-5 bi-table"></i><span class="ms-1 d-none d-sm-inline">Contributers</span></a>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="nav-link dropdown-toggle px-sm-0 px-1" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fs-5 bi-bootstrap"></i><span class="ms-1 d-none d-sm-inline">Add Task</span>
                        </a>
                       
                    </li>
                    <li class="nav-item">
                        {/* link to magazine goes here */}
                        <a href="#" class="nav-link px-sm-0 px-2">
                            <i class="fs-5 bi-house"></i><span class="ms-1 d-none d-sm-inline">Magazine</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-sm-0 px-2" onClick={handleLogOut}>
                            <i class="fs-5 bi-grid"></i><span class="ms-1 d-none d-sm-inline">Log Out</span></a>
                    </li>
                    
                </ul>
                <div class="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                       
                        <span class="d-none d-sm-inline mx-1">Jane</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                           
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Nav
