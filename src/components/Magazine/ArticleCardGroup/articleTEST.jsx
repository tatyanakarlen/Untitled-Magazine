import React from 'react';
import { useEffect } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import { useNavigate } from 'react-router-dom';

const ArticleCardGroup = (props) => {
  const navigate = useNavigate();

    return(
    <div class="container my-5">
          <div class="row my-5">
            <div class="card-group" style={{ flexFlow: "unset"}}> 
        {props.articles.allArticles.map(a => {
        if((props.searchInput === a.contributor && props.checkArticle) || (props.searchInput === a.title && !props.checkArticle) || props.searchInput.length === 0) {
        return(   
              <div class="card" onClick={()=> navigate("/detail?id=" + a._id)} >
                  <img
                    src={a.image}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">{a.title}</h5>
                    <p class="card-text">
                      {a.body}
                    </p>
                    <p class="card-text">
                      <small class="text-muted"> Last Updated on: { a.updatedAt
                      }</small>
                    </p>
                  </div>
                </div>
        )
      }
      })}
              </div>
            </div>
    </div>
    );
    
};

export default ArticleCardGroup;