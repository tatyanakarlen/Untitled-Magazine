import React from 'react';
import './TableMain.css';

const TableMain = ({ allArticles }) => {
  let recentPosts = allArticles.slice(Math.max(allArticles.length - 5, 0));

  return (
    <div>
      <div class="table-responsive-md">
        <p class="h4 text-left" style={{ textAlign: 'left' }}>
          Latest Posts
        </p>
        <table class="table table-bordered table-hover table-striped tableTest">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Posted</th>
              {/* <th scope="col">ID</th> */}
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {recentPosts.map(
              (m) => (
                // )}
                <tr>
                  <th scope="row">{m.title}</th>
                  <td>{m.contributor}</td>
                  <td>{m.createdAt}</td>
                  {/* <td>{m._id.slice(0, 8)}</td> */}
                  <td>
                    <a href="#" class="btn btn-sm btn-primary">
                      View
                    </a>
                  </td>
                </tr>
              )
              /* <tr>
          <th scope="row">August 16 2002 5:55 pm</th>
          <td>What went wrong with everything?</td>
          <td>Mark Snith</td>
          <td>76736526754625465</td>
          <td><a href="#" class="btn btn-sm btn-primary">View</a></td>
        </tr> */
              /* <tr>
          <th scope="row">August 16 2002 5:55 pm</th>
          <td>What went wrong with everything?</td>
          <td>Mark Snith</td>
          <td>76736526754625465</td>
          <td><a href="#" class="btn btn-sm btn-primary">View</a></td>
        </tr> */
            )}
          </tbody>
        </table>
        <a href="#" class="btn btn-block btn-light" style={{ width: '100%' }}>
          View all
        </a>
      </div>
    </div>
  );
};

export default TableMain;
