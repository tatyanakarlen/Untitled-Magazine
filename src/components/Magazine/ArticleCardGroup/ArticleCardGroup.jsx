import React from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import { useNavigate } from 'react-router-dom';

const ArticleCardGroup = (props) => {
  const navigate = useNavigate();

  return (
    <div class="container my-5">
      <div class="row my-5">
        <div class="card-group">
          {/* style={{ flexFlow: "unset"}} */}
          {props.articles.allArticles.map(a => {
            if (
              (props.searchInput === a.contributor && props.checkArticle) ||
              (props.searchInput === a.title && !props.checkArticle) ||
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
                />

                /* {allArticles.map(m => 
          <ArticleCard title={m.title} contributor={m.contributor} body={m.body} image={m.image} createdAt={m.createdAt} /> )} */
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticleCardGroup;
