import React from 'react'
import { Link } from 'react-router-dom';
import { BsFillTrashFill } from "react-icons/bs"
import { BsFillPencilFill} from "react-icons/bs"
import { BsPlusLg} from "react-icons/bs"





const TableContributors = ({ userOwnedContributors, button, allContributors,setUpdateContributorForm, updateContributorForm, updateSelectedContributor, selectedContributor,
    setDeleteSelectedContributor, setDeleteContributorAlert, deleteContributorAlert
 }) => {



  return (
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
        {userOwnedContributors.map((m, i) => (
          <tr>
            <th key={i} scope="row">{m.name}</th>
            <td>{m.city}</td>
            <td>{m.country}</td>
            <td>{m.email}</td>
            <td>

  

              <Link
                to=""
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
                
                class="btn btn-sm btn-success"
              >
                <BsFillPencilFill />
              </Link>
              
            </td>
            <td>
            <Link
                to=""
                onMouseEnter={() => setDeleteSelectedContributor(m._id)}
                onClick={() =>
                  setDeleteContributorAlert(!deleteContributorAlert)
                }
                
                class="btn btn-sm btn-danger"
              >
                <BsFillTrashFill />
             
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
  </div>
  )
}

export default TableContributors
