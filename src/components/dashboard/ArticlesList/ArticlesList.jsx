import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './ArticlesList.css';
import { useState, useEffect } from 'react';
import Table from '../TableArticlesList/TableArticlesList'
import { Link } from 'react-router-dom';
import UpdateArticleForm from '../UpdateArticleForm/UpdateArticleForm.jsx';
import TableArticlesList from '../TableArticlesList/TableArticlesList';

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
          {/* table goes here */}

          <TableArticlesList 
          allArticles={allArticles}
          setUpdateArticleForm={setUpdateArticleForm}
          updateArticleForm={updateArticleForm}
          updateSelectedArticle={updateSelectedArticle}
          selectedArticle={selectedArticle}
          setDeleteSelectedArticle={setDeleteSelectedArticle}
          setDeleteArticleAlert={setDeleteArticleAlert}
          deleteArticleAlert={deleteArticleAlert}
          />
          
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
