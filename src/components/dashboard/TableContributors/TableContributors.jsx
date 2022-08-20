import React from 'react'
import { Link } from 'react-router-dom';

const TableContributors = ({ button, allContributors,setUpdateContributorForm, updateContributorForm, updateSelectedContributor, selectedContributor,
    setDeleteSelectedContributor, setDeleteContributorAlert, deleteContributorAlert
 }) => {

    // button={button}
    // allContributors={allContributors}
    // setUpdateContributorForm={setUpdateContributorForm}
    // updateContributorForm={updateContributorForm}
    // updateSelectedContributor={updateSelectedContributor}
    // selectedContributor={selectedContributor}
    // setDeleteSelectedContributor={setDeleteSelectedContributor}
    // setDeleteContributorAlert={setDeleteContributorAlert}
    // deleteContributorAlert={deleteContributorAlert}

  return (
    <div class="table-responsive-md">
    <p class="h3 text-left" style={{ textAlign: 'left' }}>
      {/* this button must be passed down to form */}
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
        {/* pass down allContributers */}
        {allContributors.map((m) => (
          <tr>
            <th scope="row">{m.name}</th>
            <td>{m.city}</td>
            <td>{m.country}</td>
            <td>{m.email}</td>
            <td>
              <Link
                to=""
               
                // pass down setUpdateCOntribFOrm state
                onClick={() => {
                  setUpdateContributorForm(!updateContributorForm);
                  updateSelectedContributor({
                    ...selectedContributor,
                    name: m.name,
                    email: m.email,
                    bio: m.bio,
                    city: m.city,
                    country: m.country,
                    contributerId: m._id,
                  });
                }}
                
                class="btn btn-sm btn-primary"
              >
                Update
              </Link>
              
            </td>
            <td>
            <Link
                to=""
                // pass down setDeleteSelectedContrib
                onMouseEnter={() => setDeleteSelectedContributor(m._id)}
                // pass down setDeleteContributoralert
                onClick={() =>
                  setDeleteContributorAlert(!deleteContributorAlert)
                }
                
                class="btn btn-sm btn-primary"
              >
                Delete
             
              </Link>
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
  )
}

export default TableContributors
