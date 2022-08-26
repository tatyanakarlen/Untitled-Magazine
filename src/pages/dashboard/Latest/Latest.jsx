import React from 'react';
import { Link } from 'react-router-dom';

const Latest = (props) => {

  const articlesReversed = props.allArticles.reverse()
  // hello hello

    return(    
    <div class="container my-5">
        <Link class="nav-item" style={{ fontSize: '21px'}} to="/">Home</Link>
          <div class="row my-5">
        {articlesReversed.map(a => {
        return(   
            <div class="card-group" style={{ flexFlow: "unset"}}> 
              <div class="card" >
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
                      <small class="text-muted"> Last Updated on: { a.updatedAt }</small>
                    </p>
                  </div>
                </div>
            </div>
        )
      })}
        </div>
    </div>
    );
    
};

export default Latest;