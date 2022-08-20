import React from 'react';
import './TableMain.css';

const TableMain = ({ allArticles, articleViewActive, setarticleViewActive, articleViewData, setarticleViewData }) => {
  
 
  if (!allArticles || !allArticles.length) {
    return (<div> No articles to display </div>)
 }
  let recentPosts = allArticles.slice(Math.max(allArticles.length - 5, 0));

  return (
    <div>
      <div class="table-responsive-md">
        <p class="h4 text-left" style={{ textAlign: 'left' }}>
          Latest Posts
        </p>
        <table class="table table-bordered table-hover table-striped tableTest">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Posted</th>
              
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {recentPosts.map(
              (m) => (
               
                <tr>
                  <th scope="row">{m.title}</th>
                  <td>{m.contributor}</td>
                  <td>{m.createdAt}</td>
                 
                  <td>

                  

                    <button
                    onClick={() => {
                      setarticleViewActive(!articleViewActive);
                      setarticleViewData({
                        ...articleViewData,
                        title: m.title,
                        contributor: m.contributor,
                        body: m.body,
                        tags: m.tags,
                        image: m.image,
                      });
                    }}
                    class="btn btn-sm btn-primary"
                    
                    >
                      View
                    </button>
                  </td>
                </tr>
              )
        
            )}
          </tbody>
        </table>
        <button class="btn btn-block btn-light" style={{ width: '100%' }}>
          View all
        </button>
      </div>
    </div>
  );
};

export default TableMain;
