import React from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';

const ArticleCardGroup = ({ allArticles }) => {
  return (

    // {allContributors.map((m, i) => (

    // function MenuList(props) {
    //   return (
    //       <div  className="MenuList">
    //         {props.menuItems.map(m =>
    //           <MenuListItem item={m} handleAddToCart={props.handleAddToCart} />)}
    //       </div>
    //   );
    // }
     
    <div class="container my-5">
    <div class="row my-5">
      <div class="card-group" >
      {/* style={{ flexFlow: "unset"}} */}
        
        {allArticles.map(m => 
          <ArticleCard title={m.title} contributor={m.contributor} body={m.body} image={m.image} createdAt={m.createdAt} /> )}
        
        </div>
      </div>
    </div>
    
  );
};

export default ArticleCardGroup;
