import React from 'react';
import { Link } from 'react-router-dom';

const FooterMagazine = ( {user} ) => {

  let link = ''
  
  const dashboardLink =  <p>
  <Link to="/dashboard ">
    DASHBOARD
  </Link>
  </p>

  if (user) {
     link = dashboardLink
  }

  return (
    <div>
      <footer class="p-5 bg-dark text-white text-center position-relative">
         <div class='container' style={{margin: '0 auto'}}>
         <div class="row g-4 d-flex justify-content-between">
         <div class="col-md-6 col-lg-6" style={{textAlign:'left'}}>
             <h2>UNTITLEDmagazine</h2>
             <p>The latest fashion news, celebrity style, fashion week updates, culture reviews, and videos on UntitledMagazine.com.</p>
             <i class="bi bi-twitter text-light mx-1 p-3"></i>
                <i class="bi bi-facebook text-light mx-1 p-3"></i>
                <i class="bi bi-linkedin text-light mx-1 p-3"></i>
                <i class="bi bi-instagram text-light mx-1 p-3"></i>
             </div>
             <div class="col-md-3 col-lg-3">
             <h4 class="h4">More from Untitled</h4>
             <p>Newsletter</p>
             <p>Contact Us</p>
             <p>About Untitled</p>
             
             </div>
             <div class="col-md-3 col-lg-3">
             <h4 class="h4">Admin</h4>
             <p><Link
            
            to="/login"
          >
            ADMIN LOGIN
          </Link></p>
          {link}
          {/* <p>
          <Link to="/dashboard ">
            DASHBOARD
          </Link>
          </p> */}
          <p>
          <Link to="">
            DEVELOPERS
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
