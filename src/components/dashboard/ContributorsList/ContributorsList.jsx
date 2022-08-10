import React from 'react'
import './ContributorsList.css'
import * as Icon from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContributorsList = () => {
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
              <br/>
              <label for="comments" class="form-label"></label>
              <input class="form-control title-place" id="comments" rows="2" required placeholder="Contributor name here"></input>
              <label for="comments" class="form-label"></label>
              <input class="form-control body-place"  rows="10" cols="40" id="comments" required placeholder="City, Country"></input>
              <label for="comments" class="form-label"></label>
              <input class="form-control body-place"  rows="10" cols="40" id="comments" required placeholder="E-Mail"></input>
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
