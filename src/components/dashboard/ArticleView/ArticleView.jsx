import React from 'react';
import { BsXLg } from "react-icons/bs"
import './ArticleView.css'

const ArticleView = ({
  articleViewActive,
  setarticleViewActive,
  articleViewData,
  setarticleViewData,
}) => {
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
          
        {/* </button> */}
        </div>
        </div>
        <div class="row text-center" >
          <h3 class="h3" style={{ textAlign: 'right'}}>UNTITLEDmagazine 
            </h3>
            <hr style={{ height: '5px'}}/>
        </div>
        {/* <div class="row">
          <p style={{textAlign: 'left'}}>By Jane Smith <div class="vr" style={{ width: '2px' }}></div>published on this date</p>
        </div> */}
        <div class="jumbotron" >
          <p style={{ textAlign:"left"}}>hello hello hello</p>
  <h1 class="display-4" style={{ textAlign:"left"}}>{articleViewData.title}</h1>
  <p class="lead" style={{ textAlign:"left"}}>{articleViewData.headline}</p>
  
</div>
        
          <div class="row text-center g-3 " >
            
          {/* style={{ width: '60%', margin: '0 auto' }} */}
            {/* I am article view component!!!!! 
      <button 
      onClick={() => {
                     setarticleViewActive(!articleViewActive)
                      setarticleViewData({
                        ...articleViewData,
                        title: '',
                        contributor: '',
                        body: '',
                        tags: '',
                        image: '',
                      });
      }}>Close
      </button> */}
     <div class="card mb-3" style={{border: 'none'}}>
  <img class="card-img-top" style={{height: '25%'}}src={articleViewData.image} alt="Card image cap"/>
  <div class="card-body">
   
    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).</p>
    <p class="card-text"><small class="text-muted">Updated at:{articleViewData.updatedAt}</small></p>
  </div>
{/* </div> */}
           
            <p>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
