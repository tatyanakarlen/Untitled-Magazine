import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader.jsx';
import DashboardCardSm from '../DashboardCardSm/DashboardCardSm.jsx';
import TableMain from '../TableMain/TableMain.jsx';
import BreadCrumb from '../BreadCrumb/BreadCrumb.jsx';
import ArticleView from '../ArticleView/ArticleView';
import './Main.css';

const Main = ({ allArticles, articleViewActive, setarticleViewActive, articleViewData, setarticleViewData, userOwnedArticles, userOwnedContributors }) => {

  // const showArticle = articleViewActive

  // <ArticleView
  //   articleViewActive={articleViewActive}
  //   setarticleViewActive={setarticleViewActive}
  // />;

  let contrib = userOwnedContributors.length

  return (
    <div class="col d-flex flex-column h-sm-100">
      <div class="row overflow-auto card-container d-flex justify-content-center">
        {articleViewActive ? (
          <ArticleView 
          articleViewActive={articleViewActive} 
          setarticleViewActive={setarticleViewActive}
          articleViewData={articleViewData}
          setarticleViewData={setarticleViewData}
          />
        ) : (
          <div class="row text-center g-3" style={{ width: '90%' }}>
            <BreadCrumb />
            <DashboardHeader />
            <DashboardCardSm title={'Posts'} count={25}/>
            <DashboardCardSm title={'Updates'} count={25} />
            <DashboardCardSm title={'Contributors'} count={contrib} />
            <TableMain
             userOwnedArticles={userOwnedArticles}
              articleViewActive={articleViewActive}
              setarticleViewActive={setarticleViewActive}
              allArticles={allArticles}
              articleViewData={articleViewData}
              setarticleViewData={setarticleViewData}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
