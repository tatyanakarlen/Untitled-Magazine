import React from 'react'
import { FaBeer } from 'react-icons/fa'

const ContributorCard = (props) => {
  return (
    
      <div class="col-md-3 col-lg-3">
            <div class="card bg-light" style={{minHeight: '100%'}}>
              <div class="card-body text-center">
                <img
                  src={props.image}
                  class="rounded-circle mb-3"
                  alt=""
                />
                <h3 class="card-title mb-3">{props.name}</h3>
                <p class="card-text">
                  {props.bio}
                </p>
                <p class="card-text" style={{fontWeight: 'bold'}}>
                  {props.city},<span>{props.country}</span>
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
