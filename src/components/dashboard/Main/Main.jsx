import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader.jsx';
import DashboardCardSm from '../DashboardCardSm/DashboardCardSm.jsx';
import TableMain from '../TableMain/TableMain.jsx';
import BreadCrumb from '../BreadCrumb/BreadCrumb.jsx';
import ArticleView from '../ArticleView/ArticleView';
import './Main.css';

const Main = ({ user, allArticles, articleViewActive, setarticleViewActive, articleViewData, setarticleViewData, userOwnedArticles, userOwnedContributors }) => {

  // const showArticle = articleViewActive

  // <ArticleView
  //   articleViewActive={articleViewActive}
  //   setarticleViewActive={setarticleViewActive}
  // />;

  let contrib = userOwnedContributors.length
  let articles = userOwnedArticles.length

  const colorRed = "#D62747"
  const colorGreen = "#1FA43D"
  const colorBlue = "#4285F4"

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
            <DashboardHeader user={user}/>
            <DashboardCardSm title={'Articles'} count={articles} word={'articles'} color={colorRed}/>
            <DashboardCardSm title={'Contributors'} count={contrib} word={'contributors'} color={colorBlue}/>
            <DashboardCardSm title={'Updates'} count={25} color={colorGreen}/>
            
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
