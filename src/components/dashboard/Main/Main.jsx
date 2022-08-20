import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader.jsx';
import DashboardCardSm from '../DashboardCardSm/DashboardCardSm.jsx';
import TableMain from '../TableMain/TableMain.jsx';
import BreadCrumb from '../BreadCrumb/BreadCrumb.jsx';
import ArticleView from '../ArticleView/ArticleView';
import './Main.css';

const Main = ({ allArticles, articleViewActive, setarticleViewActive }) => {
  // const showArticle = articleViewActive

  <ArticleView
    articleViewActive={articleViewActive}
    setarticleViewActive={setarticleViewActive}
  />;

  return (
    <div class="col d-flex flex-column h-sm-100">
      <div class="row overflow-auto card-container">
        {articleViewActive ? (
          <ArticleView />
        ) : (
          <div class="row text-center g-3" style={{ width: '90%' }}>
            <BreadCrumb />
            <DashboardHeader />
            <DashboardCardSm title={'Posts'} count={25} />
            <DashboardCardSm title={'Updates'} count={25} />
            <DashboardCardSm title={'Contributors'} count={25} />
            <TableMain
              articleViewActive={articleViewActive}
              setarticleViewActive={setarticleViewActive}
              allArticles={allArticles}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
