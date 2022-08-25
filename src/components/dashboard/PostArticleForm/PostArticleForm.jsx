import React from 'react';
import { useRef } from 'react';
import './PostArticleForm.css';



const PostArticleForm = ({
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

  return (
    <div class="col-md">
      <div class="card bg-light text-dark">
        <div class="card-body text-center">
          <div class="h1 mb-1"></div>
          <h4 class="card-title mb-1" style={{ textAlign: 'left' }}>
            Post Article
          </h4>
          <hr />
          <form class="row g-3">
            <div class="col-md-12">
              {/* <br/> */}
              <label
                for="comments"
                class="form-label"
                style={{ float: 'left' }}
              >
                Title:
              </label>
              {/* style={{ float: 'left'}} */}
              {/* class="form-label"  */}

              <input
                class="form-control title-place shadow"
                type="text"
                name="title"
                rows="2"
                required
                placeholder="Title"
                pattern="[A-Za-z]{2,}"
                value={article.title}
                onChange={(e) =>
                  setArticle({
                    ...article,
                    title: e.target.value,
                  })
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
                required
                placeholder="headline"
                value={article.headline}
                onChange={(e) =>
                  setArticle({
                    ...article,
                    headline: e.target.value,
                  })
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
                required
                placeholder="Article body here"
                value={article.body}
                onChange={(e) =>
                  setArticle({
                    ...article,
                    body: e.target.value,
                  })
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
                required
                placeholder="Tags"
                value={article.tags}
                onChange={(e) =>
                  setArticle({
                    ...article,
                    tags: e.target.value,
                  })
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
                    onClick={postArticle}
                    type="submit"
                    class="btn btn-primary"
                    // col-2 mt-2
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
