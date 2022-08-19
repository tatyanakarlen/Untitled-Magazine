import React from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';

const ArticleCardGroup = () => {
  return (
     
    <div class="container my-5">
    <div class="row my-5">
      <div class="card-group" style={{ flexFlow: "unset"}}>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </div>
    
  );
};

export default ArticleCardGroup;
