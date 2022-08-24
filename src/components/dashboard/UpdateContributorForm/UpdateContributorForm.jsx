import React from 'react'

const UpdateContributorForm = ( {selectedContributor, updateSelectedContributor, updateContributor, updateContributorForm, setUpdateContributorForm} ) => {
  
  return (
    <div>
      <header class="d-flex justify-content-between"><span class="h4">Edit Contributor</span><button onClick={() => setUpdateContributorForm(!updateContributorForm)}>x</button>
      </header>
      <form class="row g-3">
          <div id="form-box" class="col-md-12">
              {/* <br/> */}
             <label class="float-left" for="comments" class="form-label">Name:</label>
               <input 
              class="form-control title-place" 
              type="text" 
              name= "name"
              rows="2" 
              required placeholder={selectedContributor.name}
              pattern="[A-Za-z]{2,}"
              value={selectedContributor.name}
              onChange={(e) => 
                updateSelectedContributor({
                    ...selectedContributor, 
                    name: e.target.value
                })
              }

            
                 
              >
              </input>
              <label for="comments" class="form-label">E-mail:</label>
              <input 
              class="form-control body-place"  
              rows="10" cols="40" 
              type="text" 
              name= "email"
              required placeholder={selectedContributor.email}
              value={selectedContributor.email}
              onChange={(e) => 
                updateSelectedContributor({
                    ...selectedContributor, 
                    email: e.target.value
                })
              }
              >
              </input>
              <label for="comments" class="form-label"></label>
              <input 
              class="form-control body-place"  
              rows="10" cols="40" 
              type="text" 
              name= "bio"
              required placeholder={selectedContributor.bio}
              value={selectedContributor.bio}
              onChange={(e) => 
                updateSelectedContributor({
                    ...selectedContributor, 
                    bio: e.target.value
                })
              }
              >
              </input>
              <label for="comments" class="form-label"></label>
              <input 
              class="form-control body-place"  
              rows="10" cols="40" 
              type="text" 
              name= "city"
              required placeholder={selectedContributor.city}
              value={selectedContributor.city}
              onChange={(e) => 
                updateSelectedContributor({
                    ...selectedContributor, 
                    city: e.target.value
                })
              }
              >
              </input>
              <label for="comments" class="form-label"></label>
              <input 
              class="form-control body-place"  
              rows="10" cols="40" 
              type="text" 
              name= "country"
              required placeholder={selectedContributor.country}
              value={selectedContributor.country}
              onChange={(e) => 
                updateSelectedContributor({
                    ...selectedContributor, 
                    country: e.target.value
                })
              }
              >
              </input>
              <br/>
              <button onClick={updateContributor} type="submit" className="btn btn-dark text-light col-2 mt-2">Update</button>
          </div>
          </form>
    </div>
  )
}

export default UpdateContributorForm
