import React from 'react'
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from "react-icons/bs"
import { BsFillTrashFill } from "react-icons/bs"
import { BsEyeFill } from 'react-icons/bs'

const TableArticlesList = ({ userOwnedArticles, allArticles, setUpdateArticleForm, updateArticleForm, updateSelectedArticle,selectedArticle, setDeleteSelectedArticle,
    setDeleteArticleAlert, deleteArticleAlert, articleViewActive, setarticleViewActive, articleViewData, setarticleViewData
  }) => {

  return (
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
          <th scope="col"><BsEyeFill /></th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {userOwnedArticles.map((m) => (
          <tr>
            <th scope="row">{m.title}</th>
            <td>{m.contributor}</td>
            <td>{m.createdAt}</td>
            <td>
              <Link
                to=""
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
              </Link>
            </td>
            <td>
              <Link
                to=""
                onClick={() => {
                  setUpdateArticleForm(!updateArticleForm);
                  updateSelectedArticle({
                    ...selectedArticle,
                    title: m.title,
                    contributor: m.contributor,
                    headline: m.headline, 
                    body: m.body,
                    tags: m.tags,
                    articleId: m._id,
                    contributerId: m.contributorId,
                  });
                }}
                class="btn btn-sm btn-success"
              >
                <BsFillPencilFill />
              </Link>
            </td>
            <td>
              <Link
                to=""
                onMouseEnter={() => setDeleteSelectedArticle(m._id)}
                onClick={() =>
                  setDeleteArticleAlert(!deleteArticleAlert)
                }
                class="btn btn-sm btn-danger"
              >
                <BsFillTrashFill />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default TableArticlesList
