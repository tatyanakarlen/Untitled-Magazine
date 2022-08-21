import React from 'react';
import { Link } from 'react-router-dom';

const FooterMagazine = () => {
  return (
    <div>
      <footer class="p-5 bg-dark text-white text-center position-relative">
         <div class='container' style={{margin: '0 auto'}}>
         <div class="row g-4 d-flex justify-content-between">
         <div class="col-md-6 col-lg-6" style={{textAlign:'left'}}>
             <h2>UNTITLEDmagazine</h2>
             <p>stuff stuff stuff stuff stuff stuff stuff</p>
             </div>
             <div class="col-md-3 col-lg-3">
             <h2>some content here</h2>
             <p>stuff stuff stuff stuff stuff stuff stuff</p>
             </div>
             <div class="col-md-3 col-lg-3">
             <h2>some content here</h2>
             <p>stuff stuff stuff stuff stuff stuff stuff</p>
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
