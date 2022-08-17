import React from 'react';
import './ContributorsList.css';
import * as Icon from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import AddContributorForm from '../AddContributorForm/AddContributorForm';
import UpdateContributorForm from '../UpdateContributorForm/UpdateContributorForm.jsx';
import { useNavigate } from 'react-router-dom';

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

  // once an update button is clicked, this state should be changed to contributors profile. a form will toggle
  // with inputs of existing info with submit button that will do a fetch/update in the database

  const [updateContributorForm, setUpdateContributorForm] = useState(false);

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
        const newContribsList = [...allContributors, contributor];
        setContributors(newContribsList);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // let [contributors, setContributors] = useState([])

  // UPDATE CONTRIBUTER

  // const deleteContrib = (id) => {
  //   setContributors(allContributors.filter((contributor) => contributor._id !== id))
  // }

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
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // DELETE

  const activeContribForm = (
    <AddContributorForm
      contributor={contributor}
      setContributor={setContributor}
      postContributor={postContributor}
    />
  );

  let activeAddContribForm = '';
  if (addContributorForm) {
    activeAddContribForm = activeContribForm;
  }

  return (
    <div class="col d-flex flex-column h-sm-100">
      <div id="contributers-list-main-container" class="row overflow-auto">
        <div id="contributers-list-container" class="row text-center g-3">
          <div class="col-md">
            <div class="card bg-light text-dark">
              <div class="card-body text-center">
                <div class="h1 mb-1">
                  <Icon.ArrowRight />
                </div>

                <h5 class="card-title mb-1">
                  Contributors
                  <button
                    onClick={() => setAddContributorForm(!addContributorForm)}
                  >
                    Add
                  </button>
                </h5>
                {activeAddContribForm}
                <UpdateContributorForm
                  updateContributor={updateContributor}
                  selectedContributor={selectedContributor}
                  updateSelectedContributor={updateSelectedContributor}
                />

                {allContributors.map((m) => (
                  <div id="data-div">
                    <hr class="bg-danger border-2 border-top border-danger" />
                    <div class="dashboard-cards-articles">
                      <p class="card-text text-primary dashboard-text left-p">
                        {m.name}
                        <span>
                          {m.city}, {m.country}
                        </span>
                      </p>
                      <p class="card-text text-primary dashboard-text">
                        {/* first step is to toggle a form here */}
                        {m.email}
                        <button
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
                        >
                          update
                        </button>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
