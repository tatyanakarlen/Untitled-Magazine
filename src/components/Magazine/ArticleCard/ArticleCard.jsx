import React from 'react'

const ArticleCard = (props) => {
  // {title, contributor, body, image, createdAt}
  
  return (


   
    <div class="col-md-4 col-lg-4">
      <div class="card">
          <img
            src={props.image}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">
              {/* This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer. */}
              {props.body.slice(0, 50)}
            </p>
            <p class="card-text">
              <small class="text-muted">{props.contributor}</small>
            </p>
          </div>
        </div>
    </div>
  )
}

export default ArticleCard
