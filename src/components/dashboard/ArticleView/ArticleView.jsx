import React from 'react';

const ArticleView = ({ articleViewActive, setarticleViewActive, articleViewData, setarticleViewData }) => {

   return (
    <div class="col d-flex flex-column h-sm-100">
      <div class="row overflow-auto d-flex justify-content-center">
      <div class="row text-center g-3" style={{ width: '90%' }}>
      I am article view component!!!!! 
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
      </button>
      <p>
          {articleViewData.title}
          {articleViewData.contributor}

     </p>
    </div>
    </div>
    </div>
  );
};

export default ArticleView;
