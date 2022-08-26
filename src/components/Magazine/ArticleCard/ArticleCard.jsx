import React from 'react'
import { useNavigate } from 'react-router-dom';

const ArticleCard = (props) => {
  // {title, contributor, body, image, createdAt}
  const navigate = useNavigate();
  
  return (


   
    <div class="col-md-4 col-lg-4">
      
      <div class="card" style={{minHeight: '100%'}} onClick={()=> navigate(`/detail?id=${props.id}`)}>
    
          <img
            src={props.image}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h4 class="card-title">{props.title}</h4>
            <p class="card-text text-secondary h6">
              {props.headline}
            </p>
            <p class="card-text" style={{fontWeight: 'bold'}}>
              <small style={{fontSize: '12px'}}class="text-dark">{props.contributor.toUpperCase()}</small>
            </p>
          </div>
        </div>
    </div>
    
  )
}

export default ArticleCard
