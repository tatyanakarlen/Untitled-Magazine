import React from 'react';
import './ContributorsList.css';
import * as Icon from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import AddContributorForm from '../AddContributorForm/AddContributorForm';
import UpdateContributorForm from '../UpdateContributorForm/UpdateContributorForm.jsx';
import { useNavigate } from 'react-router-dom';
import BreadCrumb from '../BreadCrumb/BreadCrumb';

const ContributorsList = ({
  user,
  allContributors,
  setContributors,
  getData,
}) => {
  const [contributor, setContributor] = useState({
    name: '',
    email: '',
    city: '',
    country: '',
    postedBy: user._id,
  });

  const [addContributorForm, setAddContributorForm] = useState(false);
  // const [deleteContributorForm, setDeleteContributorForm] = useState(false);

  // once an update button is clicked, this state should be changed to contributors profile. a form will toggle
  // with inputs of existing info with submit button that will do a fetch/update in the database

  const [updateContributorForm, setUpdateContributorForm] = useState(false);
  const [deleteSelectedContributor, setDeleteSelectedContributor] =
    useState('');
  const [deleteContributorAlert, setDeleteContributorAlert] = useState(false);

  const [selectedContributor, updateSelectedContributor] = useState({
    name: '',
    email: '',
    city: '',
    country: '',
    contributerId: '',
    postedBy: user._id,
  });

  const navigate = useNavigate();

  const postContributor = async (e) => {
    e.preventDefault();
    console.log(contributor);

    try {
      const res = await fetch('/api/contributorSubmissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contributor: contributor }),
      });
      console.log(res);
      if (res.statusText === 'OK') {
        console.log('SUCCESSLY ADDED TO DB =>', contributor);
        setContributor({
          name: '',
          email: '',
          city: '',
          country: '',
          postedBy: user._id,
        });

        // allContributors.push(contributor);
        // const newContribsList = [...allContributors, contributor];
        // setContributors(newContribsList);
        getData();
        setAddContributorForm(!addContributorForm);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // let [contributors, setContributors] = useState([])

  // UPDATE CONTRIBUTER

  const updateContributor = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `/api/contributorSubmissions/update/${selectedContributor.contributerId}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ selectedContributor: selectedContributor }),
        }
      );
      console.log('response', res);
      if (res.statusText === 'OK') {
        getData();
        //   const updatedContributor = await res.json()
        //   console.log('updateContrib', updatedContributor.data)

        //  allContributors.push(selectedContributor);
        //   deleteContrib(selectedContributor.contributerId)
        // const newContribsList = [...allContributors, updatedContributor.data ]
        // setContributors(newContribsList)

        updateSelectedContributor({
          name: '',
          email: '',
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
      const res = await fetch(
        `/api/contributorSubmissions/delete/${deleteSelectedContributor}`,
        {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
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
    />
  );

  let activeAddContribForm = '';
  if (addContributorForm) {
    activeAddContribForm = activeContribForm;
  }

  ////////////////////////////////////////////

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
      <div class="alert alert-success" role="alert">
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
      <BreadCrumb />
      {alert}
      <div class="row overflow-auto card-container">
        <div class="row text-center g-3" style={{ width: '90%' }}>
          
          {/* <h1>Contributors List {button}</h1> */}
          {activeAddContribForm}
          {activeUpdateContribForm}
          {/* table */}
          <div class="table-responsive-md">
            <p class="h3 text-left" style={{ textAlign: 'left' }}>
              All contributors{button}
            </p>
            <table class="table table-bordered table-hover table-striped">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">City</th>
                  <th scope="col">Country</th>
                  <th scope="col">E-Mail</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {allContributors.map((m) => (
                  <tr>
                    <th scope="row">{m.name}</th>
                    <td>{m.city}</td>
                    <td>{m.country}</td>
                    <td>{m.email}</td>
                    <td>
                      <a
                        onClick={() => {
                          setUpdateContributorForm(!updateContributorForm);
                          updateSelectedContributor({
                            ...selectedContributor,
                            name: m.name,
                            email: m.email,
                            city: m.city,
                            country: m.country,
                            contributerId: m._id,
                          });
                        }}
                        href="#"
                        class="btn btn-sm btn-primary"
                      >
                        Update
                      </a>
                    </td>
                    <td>
                      <a
                        onMouseEnter={() => setDeleteSelectedContributor(m._id)}
                        // onClick={deleteContributor}
                        onClick={() =>
                          setDeleteContributorAlert(!deleteContributorAlert)
                        }
                        href="#"
                        class="btn btn-sm btn-primary"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <a
              href="#"
              class="btn btn-block btn-light"
              style={{ width: '100%' }}
            >
              View all
            </a>
          </div>
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
