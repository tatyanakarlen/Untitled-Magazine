import React from 'react';
import { useRef, useEffect, useState } from 'react';
import './PostArticleForm.css';




const PostArticleForm = ({
  checkValid, 
  articleFormValidation,
  setArticleFormValidation, 
  formValid,
  setFormValid,
  errorMsg,
  setErrorMsg,
  user,
  allArticles,
  setArticles,
  postArticle,
  article,
  setArticle,
  img,
  setImg,
  imgLink,
  setImgLink,
  onImgChange,
  forwardedRef,
  allContributors,
  userOwnedContributors,
}) => {
  const ref = useRef(null);
  const formRef = React.createRef();
  const [formValidMsg, setFormValidMsg] = useState(false)


  
  return (
    <div class="col-md">
      <div class="card bg-light text-dark">
        <div class="card-body text-center">
          <div class="h1 mb-1"></div>
          <h4 class="card-title mb-1" style={{ textAlign: 'left' }}>
            Post Article
          </h4>
          {errorMsg}
          <hr />
          <form 
          class="row g-3">
            <div class="col-md-12">
              <label
                for="comments"
                class="form-label"
                style={{ float: 'left' }}
              >
                Title:
              </label>

              <input
                class="form-control title-place shadow"
                type="text"
                name="title"
                rows="2"
                required='true'
                placeholder="Title"
                pattern="[A-Za-z]{2,}"
                value={article.title}
                onChange={(e) => {
                  const isFieldValid = e.target.value.length
                  if (isFieldValid < 3) {
                  setErrorMsg(`${e.target.name} is not valid`)
                  } else {
                    setErrorMsg('')
                  }
                  setFormValidMsg(!formValidMsg)
                  setArticle({
                    ...article,
                    title: e.target.value,
                  })
                  setArticleFormValidation({
                     ...articleFormValidation, 
                     title: e.target.value,
                  })
                  checkValid()
                  console.log(articleFormValidation.title.length)
                }
              }
              
              ></input>

              <label
                class="form-label"
                for="exampleFormControlSelect1"
                style={{ float: 'left', marginTop: '20px' }}
              >
                Select contributor:
              </label>
              <select
                class="form-control shadow"
                name="contributor"
                required
                value={article.contributor}
                placeholder="Contributor"
                onChange={(e) =>
                  setArticle({
                    ...article,
                    contributor: e.target.value,
                  })
                }
              >
                {userOwnedContributors.map((m) => (
                  <option placeholder="Contributor">{m.name}</option>
                ))}
              </select>

              <label
                class="float-left"
                for="comments"
                class="form-label"
                style={{ marginTop: '20px' }}
              >
                Headline:
              </label>
              <input
                class="form-control body-place shadow"
                rows="10"
                cols="40"
                type="text"
                name="headline"
                required='true'
                placeholder="headline"
                value={article.headline}
                onChange={(e) => {
                  const isFieldValid = e.target.value.length
                  if (isFieldValid < 3) {
                  setErrorMsg(`${e.target.name} is not valid`)
                  } else {
                    setErrorMsg('')
                  }
                  setFormValidMsg(!formValidMsg)
                  setArticle({
                    ...article,
                    headline: e.target.value,
                  })
                  setArticleFormValidation({
                    ...articleFormValidation, 
                    headline: e.target.value,
                 })
                 checkValid()
                }
              }
              ></input>
              <label
                class="float-left"
                for="comments"
                class="form-label"
                style={{ marginTop: '20px' }}
              >
                Body:
              </label>
              <textarea
                class="form-control body-place shadow"
                rows="10"
                cols="40"
                type="text"
                name="body"
                required='true'
                placeholder="Article body here"
                value={article.body}
                onChange={(e) => {
                  const isFieldValid = e.target.value.length
                  if (isFieldValid < 3) {
                  setErrorMsg(`${e.target.name} is not valid`)
                  } else {
                    setErrorMsg('')
                  }
                  setFormValidMsg(!formValidMsg)
                  setArticle({
                    ...article,
                    body: e.target.value,
                  })
                  setArticleFormValidation({
                    ...articleFormValidation, 
                    body: e.target.value,
                 })
                 checkValid()
                }
              }
              ></textarea>
              <label
                class="float-left"
                for="comments"
                class="form-label"
                style={{ marginTop: '20px' }}
              >
                Tags:
              </label>
              <input
                class="form-control body-place shadow"
                rows="10"
                cols="40"
                type="text"
                name="tags"
                required='true'
                placeholder="Tags"
                value={article.tags}
                onChange={(e) => {
                  const isFieldValid = e.target.value.length
                  if (isFieldValid < 3) {
                  setErrorMsg(`${e.target.name} is not valid`)
                  } else {
                    setErrorMsg('')
                  }
                  setFormValidMsg(!formValidMsg)
                  setArticle({
                    ...article,
                    tags: e.target.value,
                  })
                  setArticleFormValidation({
                    ...articleFormValidation, 
                    tags: e.target.value,
                 })
                 checkValid()
                }
              }
              ></input>
              <br />

              <div class="row">
                <div class="col-5">
                  <input
                    id="fileInput"
                    class="d-flex flex-column"
                    name="fileInput"
                    type="file"
                    onChange={onImgChange}
                    ref={forwardedRef}
                  />
                  <img src={img} style={{ width: '100px' }} />
                </div>

                <div class="col-7">
                  <button
                    style={{ float: 'left' }}
                    onClick={postArticle} disabled={!formValid}
                    type="submit"
                    class="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostArticleForm;
