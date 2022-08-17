import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './ArticlesList.css';
import { useState, useEffect } from 'react';
import UpdateArticleForm from '../UpdateArticleForm/UpdateArticleForm.jsx'

const ArticlesList = ({ allArticles, setArticles, user, getData }) => {
  
  const [updateArticleForm, setUpdateArticleForm] = useState(false);
  const [deleteSelectedArticle, setDeleteSelectedArticle] = useState('')
  const [deleteArticleAlert, setDeleteArticleAlert] = useState(false)

  const [selectedArticle, updateSelectedArticle] = useState({
    title: '',
    contributor: '',
    body: '',
    tags: '',
    articleId: '',
    postedBy: user._id,
  });


  const updateArticle = async (e) => {
    e.preventDefault();

       try {
      const res = await fetch(`/api/articleSubmissions/update/${selectedArticle.articleId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ selectedArticle: selectedArticle }),
      });
      console.log('response', res);
      if (res.statusText === 'OK') {
        getData()
      //   const updatedArticle = await res.json()
      //   console.log('updateContrib', updatedArticle.data)
        
        
      //  allContributors.push(selectedContributor);
      //   deleteContrib(selectedContributor.contributerId)
        // const newContribsList = [...allContributors, updatedContributor.data ]
        // setContributors(newContribsList)

        updateSelectedArticle({
          title: '',
          contributor: '',
          body: '',
          tags: '',
          articleId: '',
          postedBy: user._id,
        });
        setUpdateArticleForm(!updateArticleForm)


      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // DELETE

  const deleteArticleFromFrontEnd = (id) => {
    setArticles(allArticles.filter((article) => article._id !== id))
  }

  const deleteArticle = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `/api/articleSubmissions/delete/${deleteSelectedArticle}`,
        {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          // body: JSON.stringify({ deleteSelectedArticle: deleteSelectedArticle }),
        }
      );
      console.log('response', res);
      if (res.statusText === 'OK') {
        // getData();
        //   const updatedContributor = await res.json()
        //   console.log('updateContrib', updatedContributor.data)

        //  allContributors.push(selectedContributor);
        //   deleteContrib(selectedContributor.contributerId)
        // const newContribsList = [...allContributors, updatedContributor.data ]
        // setContributors(newContribsList)
        deleteArticleFromFrontEnd(deleteSelectedArticle)
        setDeleteSelectedArticle('')
        setDeleteArticleAlert(!deleteArticleAlert)

      }
    } catch (err) {
      console.log(err.message);
    }
  };


  const showUpdateArticleForm = 
  <UpdateArticleForm 
    selectedArticle={selectedArticle} 
    updateSelectedArticle={updateSelectedArticle} 
    updateArticle={updateArticle}
    updateArticleForm={updateArticleForm}
    setUpdateArticleForm={setUpdateArticleForm}
  />

  
  


  let activeUpdateArticleForm = ''
  if (updateArticleForm) {
    activeUpdateArticleForm = showUpdateArticleForm 
  }

  let alert = ''
  if (deleteArticleAlert) {
    alert =  <div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Are you sure you want to delete this article?</h4>
    <button onClick={deleteArticle}
     
      >Yes</button>
    <button onClick={() => setDeleteArticleAlert(!deleteArticleAlert)}>No</button>
  </div>
  }

  return (
    <div class="col d-flex flex-column h-sm-100">
      <div id="articles-list-main-container" class="row overflow-auto">
        <div id="articles-list-container" class="row text-center g-3">
          <div class="col-md">
          {alert}
            <div class="card bg-light text-dark">
              <div class="card-body text-center">
                <div class="h1 mb-1">
                  <Icon.ArrowRight />
                </div>
                <h5 class="card-title mb-1">
                  Articles
                </h5>
                {activeUpdateArticleForm}
                {/* <UpdateArticleForm selectedArticle={selectedArticle} updateSelectedArticle={updateSelectedArticle} updateArticle={updateArticle}/> */}

                {allArticles.map((m) => (
                  <div>
                    <hr class="bg-danger border-2 border-top border-danger" />
                    <div class="dashboard-cards-articles">
                      <p class="left-p card-text text-primary dashboard-text">
                        {m.title}
                        <span>{m.createdAt}</span>
                      </p>
                      <p class="card-text font-italic dashboard-text">
                        {m.contributor}
                        <button
                          onClick={() => {
                            setUpdateArticleForm(!updateArticleForm);
                            updateSelectedArticle({
                              ...selectedArticle,
                              title: m.title,
                              contributor: m.contributor,
                              body: m.body,
                              tags: m.tags, 
                              articleId: m._id,
                              contributerId: m.contributorId,
                            });
                          }}
                        >
                          update
                        </button>
                        <button
                         
                          onMouseEnter={() =>
                            setDeleteSelectedArticle(m._id)
                          }
                          onClick={() => 
                            setDeleteArticleAlert(!deleteArticleAlert)
                          }
                        >
                          Delete
                        </button>
                       
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
