import React from 'react';
import './TableMain.css';
import { BsEyeFill } from 'react-icons/bs'

const TableMain = ({ allArticles, articleViewActive, setarticleViewActive, articleViewData, setarticleViewData, userOwnedArticles }) => {
  
 
  if (!allArticles || !allArticles.length) {
    return (<div> No articles to display </div>)
 }

  const recentPosts = userOwnedArticles.slice(0, 5)


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
              
              <th scope="col">< BsEyeFill /></th>
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
                        headline: m.headline,
                        contributor: m.contributor,
                        body: m.body,
                        tags: m.tags,
                        image: m.image,
                        createdAt: m.createdAt, 
                        updatedAt: m.updatedAt, 

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
        
      </div>
    </div>
  );
};

export default TableMain;
