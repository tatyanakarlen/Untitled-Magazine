import React, { useRef, useEffect } from 'react'
import './AddContrinbutorForm.css'
import { BsXLg } from "react-icons/bs"
import { BsFillFilePersonFill } from "react-icons/bs"

const AddContributorForm = ( {contributor, setContributor, postContributor, setAddContributorForm, addContributorForm, 
  img, setImg, imgLink, setImgLink, formObj, setFormObj, onImgChange, setImage,
 } ) => {


  
  
  const ref = useRef();
  
 
  return (
    <div>
       <header class="d-flex justify-content-between"><span class="h4">Add Contributor</span><button class='btn btn-danger btn-sm' onClick={() => setAddContributorForm(!addContributorForm)}><BsXLg/></button>
      </header>
      <hr/>
      <form class="row g-3">
          <div id="form-box" class="col-md-12">
              {/* <br/> */}
             <label for="comments" class="form-label">Name:</label>
               <input 
              class="form-control title-place shadow" 
              type="text" 
              name= "name"
              rows="2" 
              required 
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
              <label style={{ marginTop: '20px'}}for="comments" class="form-label">E-mail:</label>
              <input 
              class="form-control body-place shadow"  
              rows="10" cols="40" 
              type="text" 
              name= "email"
              required 
              value={contributor.email}
              onChange={(e) => 
                setContributor({
                    ...contributor, 
                    email: e.target.value
                })
              }
              >
              </input>
              
              <label style={{ marginTop: '20px'}} for="comments" class="form-label">Bio:</label>
              <input 
              class="form-control body-place shadow"  
              rows="10" cols="40" 
              type="text" 
              name= "bio"
              required 
              value={contributor.bio}
              onChange={(e) => 
                setContributor({
                    ...contributor, 
                    bio: e.target.value
                })
              }
              >
              </input>

              <label style={{ marginTop: '20px'}} for="comments" class="form-label">City:</label>
              <input 
              class="form-control body-place shadow"  
              rows="10" cols="40" 
              type="text" 
              name= "city"
              required 
              value={contributor.city}
              onChange={(e) => 
                setContributor({
                    ...contributor, 
                    city: e.target.value
                })
              }
              >
              </input>
              <label style={{ marginTop: '20px'}} for="comments" class="form-label">Country:</label>
              <input 
              class="form-control body-place shadow"  
              rows="10" cols="40" 
              type="text" 
              name= "country"
              required 
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

              <div class="row">
              <div class="col-5">
              
              <input style={{ float: 'left' }}type='file' onChange={onImgChange}  ref={ref} />
              <img src={img}  style={{width:"100px"}}/> 
              </div>
              
              <div class="col-7">
              <button 
              id="fileInputAddContrib"
              onClick={setImage} 
              style={{ float: 'left' }}
              type="submit" 
              class="btn btn-primary">
                Submit
                </button>
          </div>
          </div>
          </div>
          </form>
    </div>
  )
}

export default AddContributorForm
