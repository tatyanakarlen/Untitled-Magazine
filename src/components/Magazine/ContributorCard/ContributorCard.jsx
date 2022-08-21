import React from 'react'
import { FaBeer } from 'react-icons/fa'

const ContributorCard = () => {
  return (
    
      <div class="col-md-3 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  class="rounded-circle mb-3"
                  alt=""
                />
                <h3 class="card-title mb-3">John Doe</h3>
                <p class="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Delectus, soluta! Officiis beatae deserunt sed asperiores.
                </p>
                <i class="bi bi-twitter text-dark mx-1"></i>
                <i class="bi bi-facebook text-dark mx-1"></i>
                <i class="bi bi-linkedin text-dark mx-1"></i>
                <i class="bi bi-instagram text-dark mx-1"></i>
               
               
              </div>
            </div>
         
    </div>
  )
}

export default ContributorCard
