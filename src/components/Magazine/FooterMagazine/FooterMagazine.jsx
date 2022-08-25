import React from 'react';
import { Link } from 'react-router-dom';
import './FooterMagazine.css'

const FooterMagazine = ({user}) => {

  let link = ''
  
  const dashboardLink =  <p>
  <Link class="text-light magNav-links" 
  to="/dashboard ">
    Dashboard
  </Link>
  </p>

  if (user != null) {
     link = dashboardLink
  }

  return (
    <div>
      <footer class="p-5 bg-dark text-white text-center position-relative">
         <div class='container' style={{margin: '0 auto'}}>
         <div class="row g-4 d-flex justify-content-between align-items-baseline">
         <div class="col-md-6 col-lg-6" style={{textAlign:'left'}}>
             <h2>UNTITLEDmagazine</h2>
             <p>The latest fashion news, celebrity style, fashion week updates, culture reviews, and videos on UntitledMagazine.com.</p>
             <i class="bi bi-twitter text-light mx-1 p-3"></i>
                <i class="bi bi-facebook text-light mx-1 p-3"></i>
                <i class="bi bi-linkedin text-light mx-1 p-3"></i>
                <i class="bi bi-instagram text-light mx-1 p-3"></i>
             </div>
             <div class="col-md-3 col-lg-3 small-div"
             style={{minHeight: '100%'}}>
             <h5 class="h5"><u>More</u></h5>
             <p>Newsletter</p>
             <p>Contact Us</p>
             <p>About Untitled</p>
             
             </div>
             <div class="col-md-3 col-lg-3 small-div">
             <h5 class="h5"><u>Admin</u></h5>
             <p>
               <Link to="/login"
               class="text-light  magNav-links"
               >
            Admin Login
          </Link></p>
          {link}
          {/* <p>
          <Link to="/dashboard ">
            DASHBOARD
          </Link>
          </p> */}
          <p>
          <Link to=""
          class="text-light  magNav-links"
          >
            Developers
          </Link>
          </p>
             </div>
             </div>





        {/* <div class="container">
          <p class="lead">Copyright &copy; 2021 Untitled Magazine</p>
        
            <div style={{margin: '0 auto'}}>
          <Link
            style={{paddingLeft: '10px'}}
            to="/login"
          >
            ADMIN LOGIN
          </Link>
          
          <Link to="/dashboard ">
            DASHBOARD
          </Link>
        </div>
        </div> */}
        
</div>
      </footer>
    </div>
  );
};

export default FooterMagazine;
