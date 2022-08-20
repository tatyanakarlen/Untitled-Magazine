import React from 'react';

const ArticleView = ({ articleViewActive, setarticleViewActive, articleViewData, setarticleViewData }) => {

   return (
    <div>
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
  );
};

export default ArticleView;
