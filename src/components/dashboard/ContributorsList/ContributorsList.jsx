import React from 'react'
import './ContributorsList.css'
import * as Icon from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';


// name
// email
// city
//country

const ContributorsList = () => {

    const[contributor, setContributor] = useState({
        name: '',
        email: '',
        city: '',
        country: '',
      });



  return (
    <div class="col d-flex flex-column h-sm-100">
        <div id="contributers-list-main-container" class="row overflow-auto">          
        <div id="contributers-list-container" class="row text-center g-3">
        <div class="col-md"> 
        <div class="card bg-light text-dark">
      <div class="card-body text-center">
        <div class="h1 mb-1">
        <Icon.ArrowRight />
        </div>
        <h5 class="card-title mb-1">Contributors<button>Add</button></h5>
        <form class="row g-3">
          <div class="col-md-12">
              {/* <br/> */}
             <label for="comments" class="form-label"></label>

             {/* value={submission.name}
            onChange={(e) =>
              setSubmission({
                ...submission,
                name: e.target.value,
              })
            } */}

              <input 
              class="form-control title-place" 
              type="text" 
              name= "name"
              rows="2" 
              required placeholder="Contributor name here"
              pattern="[A-Za-z]{2,}"
              value={contributor.name}
              onChange={(e) => 
                setContributor({
                    ...contributor, 
                    name: e.target.value
                })
              }

            
                 
              >
              </input>
              <label for="comments" class="form-label"></label>
              <input 
              class="form-control body-place"  
              rows="10" cols="40" 
              type="text" 
              name= "email"
              required placeholder="E-Mail"
              value={contributor.email}
              onChange={(e) => 
                setContributor({
                    ...contributor, 
                    email: e.target.value
                })
              }
              >
              </input>
              <label for="comments" class="form-label"></label>
              <input 
              class="form-control body-place"  
              rows="10" cols="40" 
              type="text" 
              name= "city"
              required placeholder="City"
              value={contributor.city}
              onChange={(e) => 
                setContributor({
                    ...contributor, 
                    city: e.target.value
                })
              }
              >
              </input>
              <label for="comments" class="form-label"></label>
              <input 
              class="form-control body-place"  
              rows="10" cols="40" 
              type="text" 
              name= "country"
              required placeholder="Country"
              value={contributor.country}
              onChange={(e) => 
                setContributor({
                    ...contributor, 
                    country: e.target.value
                })
              }
              >
              </input>
              <br/>
              <button type="submit" className="btn btn-dark text-light col-2 mt-2">Submit</button>
          </div>
          </form>
         
      
        <hr class="bg-danger border-2 border-top border-danger" />
        <div class="dashboard-cards-articles">
          <p class="card-text text-primary dashboard-text">
            Jonathan Grahm<span>Tuscon, Arizona</span>
          </p>
          <p class="card-text font-italic dashboard-text">
          Jonathangrahm@gmail.com
        
          </p>
        </div>
        <hr class="bg-danger border-2 border-top border-danger" />
        <div class="dashboard-cards-articles">
          <p class="card-text text-primary dashboard-text">
            Jonathan Grahm<span>Tuscon, Arizona</span>
          </p>
          <p class="card-text font-italic dashboard-text">
          Jonathangrahm@gmail.com
        
          </p>
        </div>
        <hr class="bg-danger border-2 border-top border-danger" />
        <div class="dashboard-cards-articles">
          <p class="card-text text-primary dashboard-text">
            Jonathan Grahm<span>Tuscon, Arizona</span>
          </p>
          <p class="card-text font-italic dashboard-text">
          Jonathangrahm@gmail.com
        
          </p>
        </div>
      </div>
    </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default ContributorsList
