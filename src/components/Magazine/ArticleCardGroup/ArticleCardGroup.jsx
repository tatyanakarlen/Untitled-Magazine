
import React from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import { useNavigate } from 'react-router-dom';

const ArticleCardGroup = (props) => {
  const navigate = useNavigate();

  function checkProps(tags){
    console.log(tags)
  }

  return (
    <div class="container my-5">
      <div class="row my-5">
        <div class="card-group">
         
          {props.articles.allArticles.map(a => {
            if (
              ( a.tags.includes(props.searchInput)) ||
              props.searchInput.length === 0
            ) {
              return (
              
                <ArticleCard
                  onClick={() => navigate('/detail?id=' + a._id)}
                  image={a.image}
                  title={a.title}
                  contributor={a.contributor}
                  createdAt={a.createdAt}
                  body={a.body}
                  id={a._id}
                  headline={a.headline}
                />
              
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticleCardGroup;
