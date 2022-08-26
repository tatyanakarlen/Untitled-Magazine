import React from 'react';
import './PostArticle.css';
import * as Icon from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PostArticleForm from '../PostArticleForm/PostArticleForm';
import { useState, useEffect, useCallback, useRef } from 'react';
import BreadCrumb from '../BreadCrumb/BreadCrumb'

const PostArticle = ({ user, allArticles, setArticles, getData, allContributors, userOwnedContributors }) => {
  
  // const formRef = React.createRef();
  const [formValid, setFormValid] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const ref = useRef();
  const fileInputRef = useRef(null);
  const [img, setImg] = useState();
  const [imgLink, setImgLink] = useState();

  const [article, setArticle] = useState({
    title: '',
    contributor: userOwnedContributors[0].name,
    headline: '',
    body: '',
    tags: '',
    image: '',
    postedBy: user._id,
  });

  const onImgChange = useCallback((e) => {
    const [file] = e.target.files;
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      var base64data = reader.result;
      setImg(base64data);
    };
  }, []);

  const postArticle = async (e) => {
    console.log(e);
    e.preventDefault();

    console.log(article);
    //Image sending starts here
    // telling the server - take this photo - send it to cloudinary - and give us the link of where it is stored
    //
    try {
      let jwt = localStorage.getItem('token');
      let responseOne = await fetch('/img', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + jwt,
        },
        body: JSON.stringify({
          photo: img, // take this image, if all goes wel then ....
        }),
      });

      let responseTwo = await responseOne.json();

      console.log('cloudinary url :', responseTwo.imageurl);
      setArticle({
        // hook  - ? why is this not updating in time for the next api cal ??
        ...article,
        image: responseTwo.imageurl, // this is the image url where it is stored and should be sent to the db, but it is
        // being stored as an empty string.... why?
      });

      //Image sending ends here
      article.image = responseTwo.imageurl;
      const res = await fetch('/api/articleSubmissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ article: article, userId: user._id }),
      });
      console.log(res);
      if (res.statusText === 'OK') {
        console.log('SUCCESSLY ADDED TO DB =>', article);

        setArticle({
          title: '',
          contributor: '',
          headline: '',
          body: '',
          tags: '',
          image: '',
          postedBy: user._id,
        });
        // getData();

        setImg('');
        // setImgLink("")
        // console.log(fileInputRef.current);
        fileInputRef.current.value = '';
      }
      getData();
    } catch (err) {
      console.log(err.message);
    }
  };

  // const postArticle = async (e) => {
  //   e.preventDefault();
  //   console.log(article);

  //   try {
  //       const res = await fetch('/api/articleSubmissions', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ article: article }),
  //       });
  //       console.log(res);
  //       if (res.statusText === 'OK') {
  //         console.log('SUCCESSLY ADDED TO DB =>', article);
  //         setArticle({
  //           title: '',
  //           contributor: '',
  //           body: '',
  //           tags: '',
  //           postedBy: user._id,
  //         });

  //         const newArticlesList = [...allArticles, article]
  //         setArticles(newArticlesList)
  //       }
  //     } catch (err) {
  //       console.log(err.message);
  //     }

  // }

  return (
    <div class="col d-flex flex-column h-sm-100">
      <div  class="row overflow-auto">
        <div id="articlesPost-container" class="row text-center g-3">


        
  
          <PostArticleForm
         
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
            
            formValid={formValid}
            setFormValid={setFormValid}
            userOwnedContributors={userOwnedContributors}
            allContributors={allContributors}
            forwardedRef={fileInputRef}
            user={user}
            allArticles={allArticles}
            setArticles={setArticles}
            postArticle={postArticle}
            article={article}
            setArticle={setArticle}
            img={img}
            setImg={setImg}
            imgLink={imgLink}
            setImgLink={setImgLink}
            onImgChange={onImgChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PostArticle;
