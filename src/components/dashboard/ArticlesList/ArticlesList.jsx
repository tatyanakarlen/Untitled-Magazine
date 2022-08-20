import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './ArticlesList.css';
import { useState, useEffect } from 'react';
import UpdateArticleForm from '../UpdateArticleForm/UpdateArticleForm.jsx';

const ArticlesList = ({ allArticles, setArticles, user, getData }) => {
  const [updateArticleForm, setUpdateArticleForm] = useState(false);
  const [deleteSelectedArticle, setDeleteSelectedArticle] = useState('');
  const [deleteArticleAlert, setDeleteArticleAlert] = useState(false);

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
      const res = await fetch(
        `/api/articleSubmissions/update/${selectedArticle.articleId}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ selectedArticle: selectedArticle }),
        }
      );
      console.log('response', res);
      if (res.statusText === 'OK') {
        getData();
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
        setUpdateArticleForm(!updateArticleForm);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // DELETE

  const deleteArticleFromFrontEnd = (id) => {
    setArticles(allArticles.filter((article) => article._id !== id));
  };

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
        deleteArticleFromFrontEnd(deleteSelectedArticle);
        setDeleteSelectedArticle('');
        setDeleteArticleAlert(!deleteArticleAlert);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const showUpdateArticleForm = (
    <UpdateArticleForm
      selectedArticle={selectedArticle}
      updateSelectedArticle={updateSelectedArticle}
      updateArticle={updateArticle}
      updateArticleForm={updateArticleForm}
      setUpdateArticleForm={setUpdateArticleForm}
    />
  );

  let activeUpdateArticleForm = '';
  if (updateArticleForm) {
    activeUpdateArticleForm = showUpdateArticleForm;
  }

  let alert = '';
  if (deleteArticleAlert) {
    alert = (
      <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">
          Are you sure you want to delete this article?
        </h4>
        <button onClick={deleteArticle}>Yes</button>
        <button onClick={() => setDeleteArticleAlert(!deleteArticleAlert)}>
          No
        </button>
      </div>
    );
  }

  return (
    <div class="col d-flex flex-column h-sm-100">
      <nav
        aria-label="breadcrumb"
        style={{ width: '89%', margin: '0 auto', marginTop: '0.75rem' }}
      >
        <ol
          style={{ backgroundColor: '#ced4da', height: '2.5rem' }}
          class="breadcrumb"
        >
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Overview
          </li>
        </ol>
      </nav>
      {alert}
      <div class="row overflow-auto card-container">
        <div class="row text-center g-3" style={{ width: '90%' }}>
          {activeUpdateArticleForm}
          <div class="table-responsive-md">
            <p class="h3 text-left" style={{ textAlign: 'left' }}>
              All Articles
            </p>
            <table class="table table-bordered table-hover table-striped">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Contributor</th>
                  <th scope="col">Posted</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {allArticles.map((m) => (
                  <tr>
                    <th scope="row">{m.title}</th>
                    <td>{m.contributor}</td>
                    <td>{m.createdAt}</td>
                    <td>
                      <a
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
                        href="#"
                        class="btn btn-sm btn-primary"
                      >
                        Update
                      </a>
                    </td>
                    <td>
                      <a
                        onMouseEnter={() => setDeleteSelectedArticle(m._id)}
                        // onClick={deleteContributor}
                        onClick={() =>
                          setDeleteArticleAlert(!deleteArticleAlert)
                        }
                        href="#"
                        class="btn btn-sm btn-primary"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
