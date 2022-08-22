import React from 'react';
import './ContributorsList.css';
import * as Icon from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect, useCallback, useRef } from 'react';
import AddContributorForm from '../AddContributorForm/AddContributorForm';
import UpdateContributorForm from '../UpdateContributorForm/UpdateContributorForm.jsx';
import TableContributors from '../TableContributors/TableContributors';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BreadCrumb from '../BreadCrumb/BreadCrumb';

const ContributorsList = ({
  user,
  userOwnedContributors,
  allContributors,
  setContributors,
  getData,
}) => {
  const [contributor, setContributor] = useState({
    name: '',
    email: '',
    city: '',
    country: '',
    bio: '',
    image: '',
    postedBy: user._id,
  });

  // related to photo upload
  const ref = useRef();
  const [img, setImg] = useState();
  const [imgLink, setImgLink] = useState();

  const [formObj, setFormObj] = useState({});
  useEffect(() => {
    if (!(Object.keys(formObj).length === 0)) {
      console.log('post contrib', formObj);
      postContributor();
    }
  }, [formObj]);

  const onImgChange = useCallback((e) => {
    const [file] = e.target.files;
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      var base64data = reader.result;
      setImg(base64data);
    };
  }, []);

  let setImage = async (e) => {
    e.preventDefault();
    console.log('setImage is running');
    let responseOne = await fetch('/img', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        photo: img, // take this image, if all goes wel then ....
      }),
    });

    let responseTwo = await responseOne.json();

    console.log('cloudinary url :', responseTwo.imageurl);
    setFormObj({ ...contributor, image: responseTwo.imageurl });
  };

  const [addContributorForm, setAddContributorForm] = useState(false);
  const [updateContributorForm, setUpdateContributorForm] = useState(false);
  const [deleteSelectedContributor, setDeleteSelectedContributor] =
    useState('');
  const [deleteContributorAlert, setDeleteContributorAlert] = useState(false);

  const [selectedContributor, updateSelectedContributor] = useState({
    name: '',
    email: '',
    bio: '',
    city: '',
    country: '',
    contributerId: '',
    // bio: '',
    postedBy: user._id,
  });

  const navigate = useNavigate();


  const postContributor = async () => {
    console.log(contributor);

    try {
      let jwt = localStorage.getItem('token');
      const res = await fetch('/api/contributorSubmissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + jwt,
        },
        body: JSON.stringify({ contributor: formObj, img: formObj.image }),
      });
      console.log(res);
      if (res.statusText === 'OK') {
        console.log('SUCCESSLY ADDED TO DB =>', contributor);
        getData();

        const newContributor = await res.json();
        console.log('this is res.json', newContributor);

        setContributor({
          name: '',
          email: '',
          city: '',
          country: '',
          bio: '',
          image: '',
          postedBy: user._id,
        });

        // ref.current.value = '';
        setImg('');
        console.log('image link is about to happen');
        setImgLink('');
        console.log('setImgLink just happaned');
        setAddContributorForm(!addContributorForm);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // UPDATE CONTRIBUTER

  const updateContributor = async (e) => {
    e.preventDefault();

    try {
      let jwt = localStorage.getItem('token');
      const res = await fetch(
        `/api/contributorSubmissions/update/${selectedContributor.contributerId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + jwt,
          },
          body: JSON.stringify({ selectedContributor: selectedContributor }),
        }
      );
      console.log('response', res);
      if (res.statusText === 'OK') {
        getData();
        // const updatedContributor = await res.json();
        // console.log('this is res.json', updatedContributor);
        // const newContribsList = [...allContributors, updatedContributor]
        //  setContributors(newContribsList)

        updateSelectedContributor({
          name: '',
          email: '',
          bio: '',
          city: '',
          country: '',
          contributerId: '',
          postedBy: user._id,
        });
        setUpdateContributorForm(!updateContributorForm);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // DELETE

  const deleteContribFromFrontEnd = (id) => {
    setContributors(
      allContributors.filter((contributor) => contributor._id !== id)
    );
  };

  const deleteContributor = async (e) => {
    e.preventDefault();

    try {
      let jwt = localStorage.getItem('token');
      const res = await fetch(
        `/api/contributorSubmissions/delete/${deleteSelectedContributor}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + jwt,
          },
          // body: JSON.stringify({ deleteSelectedContributor: deleteSelectedContributor }),
        }
      );
      console.log('response', res);
      if (res.statusText === 'OK') {
        // getData();
        //   const updatedContributor = await res.json()
        //   console.log('updateContrib', updatedContributor.data)

        //  allContributors.push(selectedContributor);
        //   deleteContrib(selectedContributor.contributerId)
        // const newContribsList = [...allContributors, updatedContributor.data ]
        // setContributors(newContribsList)
        deleteContribFromFrontEnd(deleteSelectedContributor);
        setDeleteSelectedContributor('');
        setDeleteContributorAlert(!deleteContributorAlert);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const activeContribForm = (
    <AddContributorForm
      contributor={contributor}
      setContributor={setContributor}
      postContributor={postContributor}
      setAddContributorForm={setAddContributorForm}
      addContributorForm={addContributorForm}
      img={img}
      setImg={setImg}
      imgLink={imgLink}
      setImgLink={setImgLink}
      formObj={formObj}
      setFormObj={setFormObj}
      onImgChange={onImgChange}
      setImage={setImage}
    />
  );

  let activeAddContribForm = '';
  if (addContributorForm) {
    activeAddContribForm = activeContribForm;
  }

  const updateContribForm = (
    <UpdateContributorForm
      updateContributor={updateContributor}
      selectedContributor={selectedContributor}
      updateSelectedContributor={updateSelectedContributor}
      updateContributorForm={updateContributorForm}
      setUpdateContributorForm={setUpdateContributorForm}
    />
  );

  let activeUpdateContribForm = '';
  if (updateContributorForm) {
    activeUpdateContribForm = updateContribForm;
  }

  let button = '';
  if (!addContributorForm) {
    button = (
      <button onClick={() => setAddContributorForm(!addContributorForm)}>
        Add
      </button>
    );
  }

  // const [deleteAlert, setDeleteAlert] = useState(false)

  let alert = '';
  if (deleteContributorAlert) {
    alert = (
      <div
        class="alert alert-success"
        role="alert"
        style={{ width: '89%', margin: '0 auto' }}
      >
        <h4 class="alert-heading">
          Are you sure you want to delete this contributer?
        </h4>
        <button onClick={deleteContributor}>Yes</button>
        <button
          onClick={() => setDeleteContributorAlert(!deleteContributorAlert)}
        >
          No
        </button>
      </div>
    );
  }

  return (
    <div class="col d-flex flex-column h-sm-100">
      <nav
        aria-label="breadcrumb"
        style={{ width: '89%', margin: '0 auto', marginTop: '0.75rem' }}
      >
        <ol
          style={{ backgroundColor: '#ced4da', height: '2.5rem' }}
          class="breadcrumb"
        >
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Overview
          </li>
        </ol>
      </nav>

      {alert}
      <div class="row overflow-auto card-container d-flex justify-content-center">
        <div class="row text-center g-3" style={{ width: '90%' }}>
          {activeAddContribForm}
          {activeUpdateContribForm}
          {/* table goes here */}

          <TableContributors
            userOwnedContributors={userOwnedContributors}
            button={button}
            allContributors={allContributors}
            setUpdateContributorForm={setUpdateContributorForm}
            updateContributorForm={updateContributorForm}
            updateSelectedContributor={updateSelectedContributor}
            selectedContributor={selectedContributor}
            setDeleteSelectedContributor={setDeleteSelectedContributor}
            setDeleteContributorAlert={setDeleteContributorAlert}
            deleteContributorAlert={deleteContributorAlert}
          />
        </div>
      </div>
    </div>
  );
};

export default ContributorsList;

// props examples:
// in App.js, passing props and giving it a value to a profileCard
// <ProfileCard name={'Homer'} pic={homer} description={'Homer is fat and lazy'} email={'Homer@Simpsons.com'}/>

// export default function ProfileCard(props) {
//   return(
//       <div id="single-article-1" className="single-article">
//           <div id="card-front-1" className="front-card tb-card">
//               <img src={props.pic} className="profile-image" alt='' />
//               <div className="single-content">
//                   <div className="card-middle">
//                       <h1>{props.name}</h1>
//                       <p className="team-p1">
//                           {props.description}
//                       </p>
//                   </div>
//                   <div className="card-bottom">
//                       <div className="card-email">
//                           {props.email}
//                       </div>
//                       <div className="card-icon profile-trigger" data-id="single-article-1" >
//                           <i className="fa fa-chevron-right"></i>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </div>
//   )
// }
