import React from 'react'
import { BsXLg } from "react-icons/bs"

const UpdateArticleForm = ({ selectedArticle, updateSelectedArticle, updateArticle, updateArticleForm, setUpdateArticleForm }) => {


    // const [selectedArticle, updateSelectedArticle] = useState({
    //     title: '',
    //     contributor: '',
    //     body: '',
    //     tags: '',
    //     articleId: '',
    //     postedBy: user._id,
    //   });
    


  return (
    <div>
      <header class="d-flex justify-content-between"><span class="h4">Edit Article</span><button class='btn btn-danger btn-sm' onClick={() => setUpdateArticleForm(!updateArticleForm)}><BsXLg /></button>
      </header>
      <hr/>
      <form class="row g-3">
          <div id="form-box" class="col-md-12">
              {/* <br/> */}
             <label for="comments" class="form-label">Title:</label>
               <input 
              class="form-control title-place shadow" 
              type="text" 
              name= "title"
              rows="2" 
              required placeholder={selectedArticle.title}
              pattern="[A-Za-z]{2,}"
              value={selectedArticle.title}
              onChange={(e) => 
                updateSelectedArticle({
                    ...selectedArticle, 
                    title: e.target.value
                })
              }

            
                 
              >
              </input>
              
              <label style={{ marginTop: '20px'}} for="comments" class="form-label">Body:</label>
              <textarea
              class="form-control body-place shadow"  
              rows="10" cols="40" 
              type="text" 
              name= "body"
              required placeholder={selectedArticle.body}
              value={selectedArticle.body}
              onChange={(e) => 
                updateSelectedArticle({
                    ...selectedArticle, 
                    body: e.target.value
                })
              }
              >
              </textarea>
              <label style={{ marginTop: '20px'}} for="comments" class="form-label">Tags:</label>
              <input 
              class="form-control body-place shadow"  
              rows="10" cols="40" 
              type="text" 
              name= "tags"
              required placeholder={selectedArticle.tags}
              value={selectedArticle.tags}
              onChange={(e) => 
                updateSelectedArticle({
                    ...selectedArticle, 
                    tags: e.target.value
                })
              }
              >
              </input>
              <br/>
              <button onClick={updateArticle} type="submit" className="btn btn-primary">Update</button>
          </div>
          </form>
    </div>
  )
}

export default UpdateArticleForm
