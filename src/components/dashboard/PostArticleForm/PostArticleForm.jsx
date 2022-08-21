import React from 'react';
import { useRef } from 'react';

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
}) => {
  const ref = useRef(null);
  
  return (
    <div class="col-md">
      <div class="card bg-light text-dark">
        <div class="card-body text-center">
          <div class="h1 mb-1"></div>
          <h5 class="card-title mb-1">Post Article</h5>
          <form class="row g-3">
            <div id="post-article-form-box" class="col-md-12">
              {/* <br/> */}
              <label for="comments" class="form-label"></label>

              <input
                class="form-control title-place"
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
              <label for="comments" class="form-label"></label>
              <input
                class="form-control body-place"
                rows="10"
                cols="40"
                type="text"
                name="contributor"
                required
                placeholder="Contributor"
                value={article.contributor}
                onChange={(e) =>
                  setArticle({
                    ...article,
                    contributor: e.target.value,
                  })
                }
              ></input>
              <label for="comments" class="form-label"></label>
              <textarea
                class="form-control body-place"
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
              <label for="comments" class="form-label"></label>
              <input
                class="form-control body-place"
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
              <input
                name="fileInput"
                type="file"
                onChange={onImgChange}
                ref={forwardedRef}
              />
              <img src={img} style={{ width: '200px' }} />
              <button
                onClick={postArticle}
                type="submit"
                className="btn btn-dark text-light col-2 mt-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostArticleForm;
