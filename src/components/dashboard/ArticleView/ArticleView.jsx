import React from 'react';
import { BsXLg } from "react-icons/bs"
import './ArticleView.css'

const ArticleView = ({
  articleViewActive,
  setarticleViewActive,
  articleViewData,
  setarticleViewData,
}) => {

  let slicedCreatedAt = articleViewData.createdAt.slice(0,16)
  let slicedUpdatedAt = articleViewData.updatedAt.slice(0,16)

  return (
    <div class="col d-flex flex-column h-sm-100">
      <div class="row overflow-auto d-flex justify-content-center" style={{ width: '65%', margin: '0 auto', padding: '10px'}}>
        <div class="row">
        {/* .button_example {
  position:absolute;
  top: 10px;
  right:0;
} */}
          <div style={{position: 'relative', width: '100%', float: 'right', textAlign: 'end'}}>
        {/* <button
        class="btn btn-sm btn-danger" */}
         <BsXLg
         id="Xicon"
         style={{color: 'red'}}
          onClick={() => {
            setarticleViewActive(!articleViewActive);
            setarticleViewData({
              ...articleViewData,
              title: '',
              headline: '', 
              contributor: '',
              body: '',
              tags: '',
              image: '',
              createdAt: '', 
              updatedAt: '',
            });
          }}
        />
          
       
        </div>
        </div>
        <div class="row text-center" >
          <h3 class="h3" style={{ textAlign: 'right'}}>UNTITLEDmagazine 
            </h3>
            <hr style={{ height: '5px'}}/>
        </div>
      
        <div class="jumbotron" >
          <p style={{ textAlign:"left"}}>By:<span style={{marginLeft: '0.25rem'}}>{articleViewData.contributor}</span><span class="text-secondary" style={{paddingLeft: '1rem'}}>{slicedCreatedAt}</span></p>
          
  <h3 class="display-7" style={{ textAlign:"left"}}>{articleViewData.title}</h3>
  <p class="" style={{ textAlign:"left"}}>{articleViewData.headline}</p>
  
</div>
        
          <div class="row text-center g-1 ">
            
        
     <div class="card mb-3" style={{border: 'none'}}>
  <img class="card-img-top" style={{height: '50%'}}src={articleViewData.image} alt="Card image cap"/>
  <div class="card-body">
   
    <p class="card-text">{articleViewData.body}</p>
    <p class="card-text"><small class="text-muted">Updated at:{slicedUpdatedAt}</small></p>
  </div>

           
            <p>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
