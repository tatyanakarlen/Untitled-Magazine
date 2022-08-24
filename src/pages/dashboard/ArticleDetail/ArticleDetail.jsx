
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from "react-share";

const ArticleDetail = (props) => {

    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');

    return(
    <div>
        <div>
        <Link class="nav-item" style={{ fontSize: '21px'}} to="/">Home</Link>
        </div>
    
    <div class="container my-5">
          <div class="row my-5">
            <div class="card-group" style={{ flexFlow: "unset"}}> 
        {props.allArticles.map(a => {
        if(id === a._id) {
        return(   
              <div class="card"  >
                  <img
                    src={a.image}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">{a.title}</h5>
                    <p class="card-text">
                      {a.body}
                    </p>
                    <p class="card-text">
                      <small class="text-muted"> Last Updated on: { a.updatedAt
                      }</small>
                    </p>
                  </div>
                  <div>
                  <FacebookShareButton
                      url="www.google.com"
                      quote={a.body}
                      hashtag="#news">
                      <FacebookIcon logoFillColor="white" />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url="www.google.com"
                    title={a.title + ": " + a.body}
                    related={[a.contributor]}
                    hashtag= {["#news", "#interesting"]}>
                    <TwitterIcon logoFillColor="white"/>
                  </TwitterShareButton>
                  <WhatsappShareButton
                    url="www.google.com"
                    title={a.title}>
                    <WhatsappIcon logoFillColor="white"/>
                  </WhatsappShareButton>
                  </div>
                </div>
        )
      }
      })}
              </div>
            </div>
    </div>
    </div>
    );
    
};

export default ArticleDetail;
















// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// const ArticleDetail = (props) => {

//     const search = useLocation().search;
//     const id = new URLSearchParams(search).get('id');

//     return(
//     <div>
//         <div>
//         <Link class="nav-item" style={{ fontSize: '21px'}} to="/">Home</Link>
//         </div>
    
//     <div class="container my-5">
//           <div class="row my-5">
//             <div class="card-group" style={{ flexFlow: "unset"}}> 
//         {props.allArticles.map(a => {
//         if(id === a._id) {
//         return(   
//               <div class="card"  >
//                   <img
//                     src={a.image}
//                     class="card-img-top"
//                     alt="..."
//                   />
//                   <div class="card-body">
//                     <h5 class="card-title">{a.title}</h5>
//                     <p class="card-text">
//                       {a.body}
//                     </p>
//                     <p class="card-text">
//                       <small class="text-muted"> Last Updated on: { a.updatedAt
//                       }</small>
//                     </p>
//                   </div>
//                 </div>
//         )
//       }
//       })}
//               </div>
//             </div>
//     </div>
//     </div>
//     );
    
// };

// export default ArticleDetail;