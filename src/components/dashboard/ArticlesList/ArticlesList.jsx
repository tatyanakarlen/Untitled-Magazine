import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import './ArticlesList.css'

const ArticlesList = ( {allArticles} ) => {
  return (
    <div class="col d-flex flex-column h-sm-100">
       <div id="articles-list-main-container" class="row overflow-auto">          
        <div id="articles-list-container" class="row text-center g-3">
        <div class="col-md"> 
        <div class="card bg-light text-dark">
      <div class="card-body text-center">
        <div class="h1 mb-1">
        <Icon.ArrowRight />
        </div>
        <h5 class="card-title mb-1">Articles<button>Add</button></h5>


        {allArticles.map((m) => (
          <div>
           <hr class="bg-danger border-2 border-top border-danger" />
           <div class="dashboard-cards-articles">
            <p class="left-p card-text text-primary dashboard-text">{m.title}<span>{m.createdAt}</span></p>
            <p class="card-text font-italic dashboard-text">
            {m.contributor}</p>
            </div>
        </div>
        ))}
       
  
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  )
}

export default ArticlesList
