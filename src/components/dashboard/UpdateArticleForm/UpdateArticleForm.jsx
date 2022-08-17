import React from 'react'

const UpdateArticleForm = ({ selectedArticle, updateSelectedArticle, updateArticle }) => {

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
      <form class="row g-3">
          <div id="form-box" class="col-md-12">
              {/* <br/> */}
             <label for="comments" class="form-label"></label>
               <input 
              class="form-control title-place reg_name" 
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
              
              <label for="comments" class="form-label"></label>
              <textarea
              class="form-control body-place reg_name"  
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
              <label for="comments" class="form-label"></label>
              <input 
              class="form-control body-place reg_name"  
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
              <button onClick={updateArticle} type="submit" className="btn btn-dark text-light col-2 mt-2">Update</button>
          </div>
          </form>
    </div>
  )
}

export default UpdateArticleForm
