import React from 'react'

const UpdateContributorForm = () => {
  return (
    <div>
      <form class="row g-3">
          <div id="form-box" class="col-md-12">
              {/* <br/> */}
             <label for="comments" class="form-label"></label>
               <input 
              class="form-control title-place reg_name" 
              type="text" 
              name= "name"
              rows="2" 
              required placeholder="Contributor name here"
              pattern="[A-Za-z]{2,}"
              value={contributor.name}
              onChange={(e) => 
                setContributor({
                    ...contributor, 
                    name: e.target.value
                })
              }

            
                 
              >
              </input>
              <label for="comments" class="form-label"></label>
              <input 
              class="form-control body-place reg_name"  
              rows="10" cols="40" 
              type="text" 
              name= "email"
              required placeholder="E-Mail"
              value={contributor.email}
              onChange={(e) => 
                setContributor({
                    ...contributor, 
                    email: e.target.value
                })
              }
              >
              </input>
              <label for="comments" class="form-label"></label>
              <input 
              class="form-control body-place reg_name"  
              rows="10" cols="40" 
              type="text" 
              name= "city"
              required placeholder="City"
              value={contributor.city}
              onChange={(e) => 
                setContributor({
                    ...contributor, 
                    city: e.target.value
                })
              }
              >
              </input>
              <label for="comments" class="form-label"></label>
              <input 
              class="form-control body-place reg_name"  
              rows="10" cols="40" 
              type="text" 
              name= "country"
              required placeholder="Country"
              value={contributor.country}
              onChange={(e) => 
                setContributor({
                    ...contributor, 
                    country: e.target.value
                })
              }
              >
              </input>
              <br/>
              <button onClick={postContributor} type="submit" className="btn btn-dark text-light col-2 mt-2">Submit</button>
          </div>
          </form>
    </div>
  )
}

export default UpdateContributorForm