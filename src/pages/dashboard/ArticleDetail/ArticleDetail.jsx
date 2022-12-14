import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './ArticleDetail.css'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

const ArticleDetail = (props) => {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get('id');

  return (
    <div class="col d-flex flex-column h-sm-100">
      <div
       id="detailContainer"
        class="row overflow-auto d-flex justify-content-center col-10 col-md-7 col-sm-11 col-lg-6"
        style={{ margin: '0 auto' }}
      >
        <div class="row text-center g-3">
          <h3 class="h3" style={{ textAlign: 'right' }}>
          <Link 
         
          class="nav-item text-dark" style={{ fontSize: '25px', textDecoration: 'none' }} to="/">
            UNTITLEDmagazine
          </Link>
          </h3>
          <hr style={{ height: '5px', marginTop: '0.3rem' }} />
        </div>

        {props.allArticles.map((a) => {
          if (id === a._id) {
            return (
              <div>
                <div class="jumbotron">
                  <p style={{ textAlign: 'left' }}>
                    By:
                    <span style={{ marginLeft: '0.25rem' }}>
                      {a.contributor}
                    </span>
                    <span
                      class="text-secondary"
                      style={{ paddingLeft: '1rem' }}
                    >
                      {a.createdAt.slice(0,16)}
                    </span>
                  </p>

                  <h3 class="display-7 text" style={{ textAlign: 'left' }}>
                    {a.title}
                  </h3>
                  <p class="" style={{ textAlign: 'left' }}>
                    {a.headline}
                  </p>
                </div>

                <div class="row text-center g-1 ">
                  <div class="card mb-3" style={{ border: 'none' }}>
                    <img id="img"
                      class="card-img-top"
                      src={a.image}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <p class="card-text">{a.body}</p>
                      <p class="card-text">
                        <small class="text-muted">Updated At:<span style={{marginLeft:"0.25rem"}}>{a.updatedAt.slice(0,16)}</span></small>
                      </p>
                      <FacebookShareButton
                    url={"https://untitled-magazine.herokuapp.com/detail?id=" + a._id}
                    quote={a.body}
                    hashtag="#news"
                  >
                    <FacebookIcon logoFillColor="white" />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={"https://untitled-magazine.herokuapp.com/detail?id=" + a._id}
                    title={a.title + ': ' + a.body}
                    related={[a.contributor]}
                    hashtag={['#news', '#interesting']}
                  >
                    <TwitterIcon logoFillColor="white" />
                  </TwitterShareButton>
                  <WhatsappShareButton url={"https://untitled-magazine.herokuapp.com/detail?id=" + a._id}  title={a.title}>
                    <WhatsappIcon logoFillColor="white" />
                  </WhatsappShareButton>
                    </div>
                  </div>
                </div>
                
                  
                
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ArticleDetail;


